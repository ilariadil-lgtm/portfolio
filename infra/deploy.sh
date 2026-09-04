#!/usr/bin/env bash
#
# Pubblicazione del sito su S3 + CloudFront.
#
# Non fa nulla di magico: costruisce, carica con le intestazioni di cache
# giuste per ogni tipo di file, e invalida solo cio che serve davvero.
#
#   ./infra/deploy.sh --prova    mostra cosa farebbe, senza toccare nulla
#   ./infra/deploy.sh            pubblica
#
# Prerequisiti: aws cli configurata, e le due variabili qui sotto compilate
# con i valori raccolti nel censimento (voce 5.1).

set -euo pipefail

BUCKET="${BUCKET:-}"            # es. ilariadiliberto-sito
DISTRIBUZIONE="${DISTRIBUZIONE:-}"  # es. E1A2B3C4D5E6F7
REGIONE="${REGIONE:-eu-south-1}"

PROVA=""
[[ "${1:-}" == "--prova" ]] && PROVA="--dryrun"

# ── Controlli prima di toccare qualsiasi cosa ───────────────────────────────
if [[ -z "$BUCKET" || -z "$DISTRIBUZIONE" ]]; then
  echo "  BUCKET e DISTRIBUZIONE non sono impostati. Vedi il censimento (5.1)." >&2
  exit 1
fi
command -v aws >/dev/null || { echo "  aws cli non installata." >&2; exit 1; }

echo "── Costruzione ─────────────────────────────────────────────"
npm run build:prod

PAGINE=$(find dist -name "index.html" | wc -l | tr -d ' ')
if (( PAGINE < 40 )); then
  echo "  Solo $PAGINE pagine in dist: il prerender non ha finito. Mi fermo." >&2
  exit 1
fi
echo "  $PAGINE pagine prerenderizzate"

echo
echo "── Caricamento ─────────────────────────────────────────────"

# 1. File compilati con hash nel nome: immutabili, un anno.
aws s3 sync dist/assets "s3://$BUCKET/assets" $PROVA \
  --region "$REGIONE" --delete \
  --exclude "*" --include "*.js" --include "*.css" \
  --cache-control "public, max-age=31536000, immutable"

# 2. Font: nome stabile, contenuto che non cambia mai.
aws s3 sync dist/fonts "s3://$BUCKET/fonts" $PROVA \
  --region "$REGIONE" --delete \
  --cache-control "public, max-age=31536000, immutable"

# 3. Immagini: nome stabile, contenuto che puo cambiare. Trenta giorni.
aws s3 sync dist/assets "s3://$BUCKET/assets" $PROVA \
  --region "$REGIONE" \
  --exclude "*.js" --exclude "*.css" \
  --cache-control "public, max-age=2592000"

# 4. Favicon e manifest: una settimana.
for cartella in favicon-editorial favicon-nebula; do
  aws s3 sync "dist/$cartella" "s3://$BUCKET/$cartella" $PROVA \
    --region "$REGIONE" --delete \
    --cache-control "public, max-age=604800"
done

# 5. HTML: mai in cache. E il file che dice quali asset caricare.
aws s3 sync dist "s3://$BUCKET" $PROVA \
  --region "$REGIONE" --delete \
  --exclude "*" --include "*.html" \
  --content-type "text/html; charset=utf-8" \
  --cache-control "public, max-age=0, must-revalidate"

# 6. File di indicizzazione: un'ora.
aws s3 sync dist "s3://$BUCKET" $PROVA \
  --region "$REGIONE" \
  --exclude "*" --include "sitemap.xml" --include "robots.txt" \
  --include "llms.txt" --include "site.webmanifest" \
  --cache-control "public, max-age=3600"

# 7. Altri file statici nella radice (loghi, immagine social, ecc.): una settimana.
# "*/*" esclude tutto cio che sta in una sottocartella (assets, fonts,
# favicon-*), che sono gia gestiti sopra con la loro cache dedicata.
aws s3 sync dist "s3://$BUCKET" $PROVA \
  --region "$REGIONE" \
  --exclude "*/*" \
  --exclude "*.html" --exclude "sitemap.xml" --exclude "robots.txt" \
  --exclude "llms.txt" --exclude "site.webmanifest" \
  --cache-control "public, max-age=604800"

echo
echo "── Invalidazione ───────────────────────────────────────────"
# Solo HTML e file di indicizzazione. Gli asset con hash hanno un nome nuovo
# a ogni cambiamento, quindi CloudFront li considera gia nuovi: invalidare /*
# a ogni pubblicazione costa e azzera una cache che stava lavorando bene.
if [[ -n "$PROVA" ]]; then
  echo "  (prova) invaliderei: /index.html /*/index.html /sitemap.xml /robots.txt /llms.txt"
else
  ID=$(aws cloudfront create-invalidation \
        --distribution-id "$DISTRIBUZIONE" \
        --paths "/index.html" "/*/index.html" "/sitemap.xml" "/robots.txt" "/llms.txt" \
        --query "Invalidation.Id" --output text)
  echo "  invalidazione $ID avviata"
fi

echo
echo "── Fatto ───────────────────────────────────────────────────"
echo "  Verifica prima di considerare chiusa la pubblicazione:"
echo "    curl -sI https://ilariadiliberto.com | grep -i 'cache-control\\|content-encoding'"
echo "    curl -s https://ilariadiliberto.com/en/services | grep -o '<title>[^<]*</title>'"
