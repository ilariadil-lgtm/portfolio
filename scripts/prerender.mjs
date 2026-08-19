/**
 * Prerendering statico — fase 4 del piano di intervento.
 *
 * Perche un browser vero e non il rendering lato server: l'applicazione usa
 * three.js, Lenis e un cursore personalizzato, tutti dipendenti da `window`.
 * Con react-dom/server si romperebbe all'import. Qui il sito viene aperto in
 * Chromium headless, si aspetta che React abbia finito, e si fotografa il DOM.
 *
 * Risultato: ogni rotta ha il suo index.html con contenuto, titolo, meta
 * description, canonical, Open Graph e JSON-LD gia dentro il sorgente.
 * Chi apre la pagina vede il testo prima che il JavaScript venga eseguito;
 * i crawler, che JavaScript non lo eseguono affatto, lo vedono e basta.
 */
import { createServer } from "node:http";
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { platform, arch } from "node:process";
import puppeteer from "puppeteer";

const RADICE = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(RADICE, "dist");
const PORTA = 4179;
const DOMINIO = "https://ilariadiliberto.com";

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".webp": "image/webp",
  ".png": "image/png", ".jpg": "image/jpeg", ".ico": "image/x-icon",
  ".woff2": "font/woff2", ".woff": "font/woff", ".xml": "application/xml",
  ".txt": "text/plain", ".webmanifest": "application/manifest+json",
};

// ── Le rotte vengono lette da src/routes.ts: sorgente unica ──────────────────
async function rotte() {
  const sorgente = await readFile(join(RADICE, "src/routes.ts"), "utf8");
  const trovate = [...sorgente.matchAll(/^\s*\{\s*path:\s*"([^"]+)"/gm)].map((m) => m[1]);
  // /privacy e /cookies sono redirect lato client verso Iubenda: aprirli con
  // un browser vero significherebbe fotografare la pagina di Iubenda. Restano
  // rotte funzionanti, ma fuori dal prerendering e fuori dalla sitemap.
  const ESCLUSE = new Set(["/privacy", "/cookies"]);
  const uniche = [...new Set(trovate)].filter((p) => !p.includes(":") && !ESCLUSE.has(p));
  if (uniche.length < 20) {
    throw new Error(`Solo ${uniche.length} rotte estratte da src/routes.ts: il formato del file e cambiato, controlla l'espressione regolare.`);
  }
  return uniche.sort();
}

// ── Server statico con ripiego su index.html, come nginx in produzione ───────
function avviaServer() {
  const server = createServer(async (req, res) => {
    const percorso = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = join(DIST, percorso);
    if (!extname(file) || !existsSync(file)) file = join(DIST, "index.html");
    try {
      const corpo = await readFile(file);
      res.writeHead(200, { "Content-Type": MIME[extname(file)] ?? "application/octet-stream" });
      res.end(corpo);
    } catch {
      res.writeHead(404).end("non trovato");
    }
  });
  return new Promise((ok) => server.listen(PORTA, "127.0.0.1", () => ok(server)));
}

const scriviSitemap = async (percorsi) => {
  const priorita = (p) => (p === "/" ? "1.0" : p.split("/").length > 2 ? "0.7" : "0.9");
  const frequenza = (p) => (p === "/blog" ? "weekly" : p.split("/").length > 2 ? "yearly" : "monthly");
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...percorsi.map((p) =>
      `  <url>\n    <loc>${DOMINIO}${p === "/" ? "/" : p}</loc>\n` +
      `    <changefreq>${frequenza(p)}</changefreq>\n    <priority>${priorita(p)}</priority>\n  </url>`),
    "</urlset>", "",
  ].join("\n");
  await writeFile(join(DIST, "sitemap.xml"), xml);
  return percorsi.length;
};

// ── Avvio del browser ────────────────────────────────────────────────────────
// Su Mac Apple Silicon con un Node compilato x64, Puppeteer scarica un Chrome
// x64 che gira tradotto da Rosetta e spesso non risponde entro il timeout.
// Si prova prima il Chrome scaricato da Puppeteer; se non parte, si ripiega su
// un browser gia installato nel sistema, che di norma e nativo arm64.
const CANDIDATI = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
].filter(Boolean);

const OPZIONI = {
  headless: true,
  timeout: 45000,
  protocolTimeout: 180000,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
};

// Su macOS con Node x64 il Chrome di Puppeteer e x64 e viene tradotto da
// Rosetta: spesso non risponde entro il timeout, e aspettarlo e tempo perso.
// In quella combinazione si parte direttamente dai browser di sistema.
const AMBIENTE_DEGRADATO = platform === "darwin" && arch === "x64";

async function apriBrowser() {
  const installati = CANDIDATI.filter((p) => existsSync(p));
  if (installati.length) {
    console.log(`  Browser di sistema trovati: ${installati.length}`);
  }

  const tentativi = AMBIENTE_DEGRADATO
    ? [...installati.map((executablePath) => ({ executablePath })), {}]
    : [{}, ...installati.map((executablePath) => ({ executablePath }))];

  if (AMBIENTE_DEGRADATO) {
    console.log("  Node x64 su macOS: parto dai browser di sistema, non da quello di Puppeteer.");
  }

  const errori = [];
  for (const extra of tentativi) {
    const quale = extra.executablePath ?? "Chrome scaricato da Puppeteer";
    try {
      const b = await puppeteer.launch({ ...OPZIONI, ...extra });
      console.log(`  Browser in uso: ${quale}`);
      return b;
    } catch (e) {
      errori.push(`    ${quale}: ${e.message.split("\n")[0]}`);
    }
  }
  throw new Error(
    "Nessun browser avviabile.\n" + errori.join("\n") +
    "\n  Causa probabile: Node compilato per x64 su Mac Apple Silicon (Rosetta).\n" +
    "  Verifica con:  node -p \"process.arch\"\n" +
    "  Oppure indica un browser esplicitamente:\n" +
    "  PUPPETEER_EXECUTABLE_PATH='/percorso/al/browser' npm run prerender",
  );
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    throw new Error("dist/index.html non esiste: esegui prima `vite build`.");
  }
  const percorsi = await rotte();
  console.log(`\n  Prerendering di ${percorsi.length} rotte\n`);

  const server = await avviaServer();
  const browser = await apriBrowser();

  const risultati = [];
  let problemi = 0;

  for (const percorso of percorsi) {
    const pagina = await browser.newPage();
    await pagina.setViewport({ width: 1440, height: 900 });
    // Il preloader dura 5,6 s ed e un elemento di marca, non contenuto:
    // lo saltiamo, cosi la fotografia contiene la pagina vera.
    await pagina.evaluateOnNewDocument(() => {
      try { sessionStorage.setItem("preloader-visto", "1"); } catch { /* ignora */ }
    });
    try {
      await pagina.goto(`http://127.0.0.1:${PORTA}${percorso}`, {
        waitUntil: "networkidle0", timeout: 45000,
      });
      await pagina.waitForFunction(
        () => (document.getElementById("root")?.innerText ?? "").trim().length > 200,
        { timeout: 20000 },
      );
      const html = "<!doctype html>\n" + (await pagina.evaluate(() => document.documentElement.outerHTML));
      const titolo = await pagina.title();
      const testo = await pagina.evaluate(() => document.getElementById("root").innerText.trim().length);
      risultati.push({ percorso, html, titolo, testo });
    } catch (errore) {
      problemi++;
      console.log(`  ✗ ${percorso.padEnd(24)} ${errore.message.split("\n")[0]}`);
    }
    await pagina.close();
  }

  for (const { percorso, html, titolo, testo } of risultati) {
    const cartella = percorso === "/" ? DIST : join(DIST, percorso);
    await mkdir(cartella, { recursive: true });
    await writeFile(join(cartella, "index.html"), html);
    console.log(`  ✓ ${percorso.padEnd(24)} ${String(Math.round(html.length / 1024)).padStart(4)} KB  ${String(testo).padStart(5)} caratteri  ${titolo.slice(0, 44)}`);
  }

  const n = await scriviSitemap(risultati.map((r) => r.percorso));
  console.log(`\n  sitemap.xml rigenerata: ${n} URL`);

  await browser.close();
  server.close();

  if (problemi) {
    console.error(`\n  ${problemi} rotte non prerenderizzate. Il build si ferma qui.\n`);
    process.exit(1);
  }
  console.log(`\n  ${risultati.length} rotte prerenderizzate.\n`);
}

main().catch((e) => { console.error("\n  prerender fallito:", e.message, "\n"); process.exit(1); });
