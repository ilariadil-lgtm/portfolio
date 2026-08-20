# Contesto del lavoro in corso

Documento di passaggio di consegne. Se stai leggendo questo file all'inizio di
una sessione nuova, qui c'è tutto quello che serve per riprendere il filo.

## Regole che valgono sempre

1. **Si lavora solo in locale.** Nulla viene pubblicato finché il sito non è
   collaudato per intero. Il sito attualmente online è fermo al 27 giugno e
   deve restare intatto.
2. **Il ramo di lavoro è `lavori/piano-intervento`.** `main` resta allineato a
   `origin/main`, cioè a ciò che è online. Il merge su `main` sarà il gesto
   deliberato del go-live, non un incidente.
3. **I due temi — Editorial e Nebula — si mantengono entrambi.**
4. **Le credenziali non passano mai dalla conversazione.** Chiavi AWS, password
   SMTP e `SECRET_KEY` le gestisce Ilaria, direttamente.
5. **Le azioni visibili al pubblico si confermano prima.** Il cambio di DNS, il
   push su GitHub e la pubblicazione non si fanno di iniziativa.

## Dove trovare le cose

| File | Cosa contiene |
|---|---|
| `infra/runbook-aws.md` | La sequenza AWS con i comandi e i punti delicati |
| `infra/politiche-cache.md` | Come vanno serviti i file, e perché |
| `infra/deploy.sh` | Pubblicazione su S3 + invalidazione mirata. Ha `--prova` |
| `infra/cloudfront-indice.js` | Riscrive `/en/services` in `/en/services/index.html` |
| `infra/distribuzione.modello.json` | Configurazione CloudFront con segnaposto |
| `infra/prepara-distribuzione.sh` | Riempie il modello con i valori raccolti |
| `django_backend/RECUPERO.md` | Come recuperare il backend che vive solo su EC2 |
| `django_backend/contact/` | Le correzioni di sicurezza, **da riconciliare** |
| `scripts/prerender.mjs` | Prerendering delle 42 rotte + sitemap |

Il piano completo, con lo stato di ogni voce, sta nel progetto Claude di Ilaria
come `claude/10-piano-intervento-sito.md`. La guida operativa passo per passo
per AWS è un artefatto sul suo desktop, `guida-aws-backend`.

## Com'è fatto il sito

Vite + React 18 + TypeScript. Due temi che servono lo stesso contenuto: la
scelta è estetica, i dati sono gli stessi. Italiano alla radice, inglese sotto
`/en` con gli slug tradotti — `/servizi` → `/en/services`. Il testo vive nei
dizionari `src/locales`, i percorsi in `src/routes.ts`, la corrispondenza fra
lingue in `src/lib/rotte-lingua.json`.

Il build è `npm run build` (solo Vite, veloce). Quello che va pubblicato è
`npm run build:prod`, che aggiunge il prerendering: apre il sito compilato in
Chromium headless, aspetta React, fotografa il DOM di ogni rotta e mette in
linea il CSS critico. Deve produrre **42 pagine**; se ne produce meno, si ferma.

## A che punto siamo

Chiuse le fasi 0-4, 7 e 8: messa in sicurezza, igiene del repository, asset
(da 462 MB a 13,5), percorso critico di rendering, prerendering, consolidamento
delle pagine progetto (da 4.328 righe a 452), SEO e accessibilità.

**Restano tre cose.**

- **Fase 5 — infrastruttura AWS.** Oggi esiste solo un'istanza EC2 a Milano
  (`15.161.54.252`, Ubuntu, nginx 1.28.3) che serve tutto da sola, in HTTP/1.1,
  senza CDN e senza politiche di cache. Va costruito il resto: bucket S3
  privato, certificato in `us-east-1`, distribuzione CloudFront con due origini
  — statico da S3 e `/api/*` dall'EC2. Il DNS sta su Serveplan
  (`ns1/ns2.dnshigh.com`) e la posta su `mail.ilariadiliberto.com`: quei record
  non si toccano.
- **Fase 6 — backend.** Il Django in produzione **non è versionato da nessuna
  parte**. Il frammento in `django_backend/` non corrisponde: espone
  `contact/` mentre il server risponde su `/api/contacts/`. Prima si recupera,
  poi si corregge.
- **Fase 9 — misurazione.** Rimisurare con PageSpeed e confrontare con la
  baseline del 14 agosto: mobile 65, FCP 5,3 s, LCP 5,9 s, accessibilità 96.

## Cose da sapere che non sono ovvie

- Il ponte verso il Mac **non può cancellare file**: `rm` fallisce. Per
  rimuovere qualcosa lo si sposta in `_to_delete/`, e la cancellazione vera la
  fa Ilaria.
- Il `.zshrc` non risulta letto dalla shell: il Node giusto è
  `/opt/homebrew/bin/node` (arm64), quello in `/usr/local` è x64 e rallenta
  tutto. Se `node -p "process.arch"` risponde `x64`, il PATH è sbagliato.
- `npm` blocca i `postinstall` non approvati. Quello di puppeteer è già
  approvato; `@swc/core`, `esbuild` e `fsevents` no, e funzionano lo stesso.
- `/privacy` e `/cookies` sono redirect lato client verso Iubenda: sono esclusi
  dal prerendering, altrimenti si fotograferebbe la pagina di Iubenda.
- Le 141 traduzioni inglesi sono una prima stesura in attesa di revisione:
  `_revisione-traduzioni.md`, escluso da git.
