#!/usr/bin/env bash
#
# Riempie il modello della distribuzione con i tuoi valori.
# Non crea niente: produce solo il file da passare ad AWS.
#
#   ./infra/prepara-distribuzione.sh
#
set -euo pipefail
cd "$(dirname "$0")/.."

leggi() {
  local etichetta="$1" variabile="$2" valore=""
  while [[ -z "$valore" ]]; do
    read -rp "  $etichetta: " valore
  done
  printf -v "$variabile" '%s' "$valore"
}

echo
echo "  Quattro valori, presi dai passi precedenti della guida."
echo
leggi "Nome del bucket S3 (passo C1)" BUCKET
leggi "ID del controllo di accesso OAC (passo C2)" OAC
leggi "ARN del certificato, quello che comincia con arn:aws:acm:us-east-1 (passo C3)" CERT
leggi "ARN della funzione CloudFront (passo C4)" FUNZIONE
leggi "Indirizzo dell'origine API — il DNS o l'IP dell'EC2 (censimento)" ORIGINE

RIF="ilariadiliberto-$(date +%Y%m%d%H%M%S)"

sed -e "s|SEGNAPOSTO_RIFERIMENTO|$RIF|g" \
    -e "s|SEGNAPOSTO_BUCKET|$BUCKET|g" \
    -e "s|SEGNAPOSTO_OAC|$OAC|g" \
    -e "s|SEGNAPOSTO_CERTIFICATO|$CERT|g" \
    -e "s|SEGNAPOSTO_FUNZIONE|$FUNZIONE|g" \
    -e "s|SEGNAPOSTO_ORIGINE_API|$ORIGINE|g" \
    infra/distribuzione.modello.json > infra/distribuzione.json

if grep -q SEGNAPOSTO infra/distribuzione.json; then
  echo "  Qualche segnaposto non e stato sostituito. Controlla i valori." >&2
  grep -n SEGNAPOSTO infra/distribuzione.json >&2
  exit 1
fi
python3 -c "import json;json.load(open('infra/distribuzione.json'))" \
  && echo "  infra/distribuzione.json pronto e valido."
echo
echo "  Ora il comando che la crea davvero:"
echo "    aws cloudfront create-distribution --distribution-config file://infra/distribuzione.json"
