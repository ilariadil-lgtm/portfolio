/**
 * Smoke test — voce 9.4 del piano di intervento.
 *
 * Verifica che ogni rotta prerenderizzata esista davvero in dist/ come file,
 * non tramite un server con ripiego su index.html (che nasconderebbe una
 * rotta mancante servendo comunque 200). Stessa fonte delle rotte usata da
 * scripts/prerender.mjs: src/routes.ts.
 */
import { readFile, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const RADICE = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(RADICE, "dist");

async function rotte() {
  const sorgente = await readFile(join(RADICE, "src/routes.ts"), "utf8");
  const trovate = [...sorgente.matchAll(/^\s*\{\s*path:\s*"([^"]+)"/gm)].map((m) => m[1]);
  const ESCLUSE = new Set(["/privacy", "/cookies"]);
  const italiane = [...new Set(trovate)]
    .filter((p) => !p.includes(":") && !ESCLUSE.has(p))
    .sort();
  if (italiane.length < 20) {
    throw new Error(`Solo ${italiane.length} rotte estratte da src/routes.ts.`);
  }
  const tabella = JSON.parse(
    await readFile(join(RADICE, "src/lib/rotte-lingua.json"), "utf8"),
  ).rotte;
  const inglese = (p) => (tabella[p] === "/" ? "/en" : `/en${tabella[p]}`);
  const inglesi = italiane.map(inglese);
  return [...italiane, ...inglesi];
}

function fileDellaRotta(percorso) {
  return percorso === "/" ? join(DIST, "index.html") : join(DIST, percorso, "index.html");
}

const tutte = await rotte();
const problemi = [];

for (const percorso of tutte) {
  const file = fileDellaRotta(percorso);
  try {
    const info = await stat(file);
    if (!info.isFile() || info.size < 500) {
      problemi.push(`${percorso} — file troppo piccolo (${info.size} byte)`);
      continue;
    }
    const html = await readFile(file, "utf8");
    if (!html.includes("<title>") || !html.includes('id="root"')) {
      problemi.push(`${percorso} — manca <title> o il contenitore React`);
    }
  } catch {
    problemi.push(`${percorso} — file assente: ${file.replace(RADICE + "/", "")}`);
  }
}

if (problemi.length) {
  console.error(`\n  ${problemi.length}/${tutte.length} rotte con problemi:\n`);
  problemi.forEach((p) => console.error(`    ${p}`));
  console.error("");
  process.exit(1);
}

console.log(`  ${tutte.length}/${tutte.length} rotte prerenderizzate verificate.`);
