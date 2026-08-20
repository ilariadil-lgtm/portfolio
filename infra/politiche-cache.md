# Politiche di cache

Il principio: **un file il cui nome cambia quando cambia il contenuto può
restare in cache per sempre; un file dal nome stabile no.**

Vite mette un hash nel nome dei file compilati — `index-CX_e3Ahg.css` — quindi
quel file non cambierà mai: se il CSS cambia, cambia il nome. Le immagini e i
font hanno invece nomi stabili, e vanno trattati diversamente.

| Percorso | Cache-Control | Perché |
|---|---|---|
| `/assets/*.js`, `*.css` | `public, max-age=31536000, immutable` | Nome con hash: contenuto immutabile per definizione |
| `/fonts/*` | `public, max-age=31536000, immutable` | Nome stabile ma contenuto che non cambia mai. Se un font va sostituito, si cambia il nome del file |
| `/assets/**` immagini | `public, max-age=2592000` | Nome stabile, contenuto che può cambiare: trenta giorni |
| `*.html` | `public, max-age=0, must-revalidate` | È il file che indica quali asset caricare. Se resta in cache, il sito resta vecchio |
| `sitemap.xml`, `robots.txt`, `llms.txt` | `public, max-age=3600` | Cambiano a ogni pubblicazione, ma nessuno li legge di continuo |
| `site.webmanifest`, favicon | `public, max-age=604800` | Una settimana |
| `/api/*` | nessuna cache | Dati che cambiano a ogni richiesta |

## Cosa invalidare a ogni pubblicazione

Solo gli HTML e i file di indicizzazione. Gli asset con hash non vanno mai
invalidati: hanno un nome nuovo, quindi CloudFront li considera già nuovi.
Invalidare `/*` a ogni deploy è lo sbaglio classico — costa e azzera una cache
che stava lavorando bene.

    /index.html  /*/index.html  /sitemap.xml  /robots.txt  /llms.txt

## Intestazioni di sicurezza

Da configurare come *response headers policy* su CloudFront, così valgono per
entrambe le origini senza doverle scrivere due volte.

| Intestazione | Valore |
|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` |
| `Content-Security-Policy` | vedi sotto |

La CSP va costruita sul comportamento reale del sito, non copiata:

    default-src 'self';
    img-src 'self' data:;
    font-src 'self';
    style-src 'self' 'unsafe-inline';
    script-src 'self';
    connect-src 'self';
    frame-ancestors 'self';
    base-uri 'self';
    form-action 'self'

`style-src 'unsafe-inline'` è necessario perché il CSS critico viene messo in
linea nel `<head>` dal prerender, e perché Framer Motion scrive stili in linea
sugli elementi animati. `font-src 'self'` è possibile solo perché i font sono
self-hostati: prima, con Google Fonts, sarebbe servito aprire a due domini
esterni.
