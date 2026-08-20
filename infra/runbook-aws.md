# Fase 5 — Sequenza operativa AWS

Da eseguire **solo dopo** che il sito è collaudato in locale e la fase 9 ha
confermato i numeri. Fino ad allora il sito attuale resta online e intatto:
tutto ciò che segue costruisce l'infrastruttura *accanto* a quella esistente,
e il cambio di DNS — l'unico passaggio irreversibile — è l'ultimo.

I valori fra `<parentesi>` vengono dal censimento (voce 5.1).

---

## 0 — Prima di cominciare

```bash
aws sts get-caller-identity          # chi sono e su quale account
aws configure get region             # deve essere eu-south-1 (Milano)
```

Snapshot dell'istanza attuale, prima di qualsiasi altra cosa:

```bash
aws ec2 create-snapshot \
  --volume-id <VOLUME_ID> \
  --description "prima del passaggio a CloudFront $(date +%F)"
```

---

## 1 — Bucket privato per il sito

Nessun accesso pubblico: il contenuto sarà raggiungibile **solo** attraverso
CloudFront. Un bucket pubblico è la scorciatoia che poi non si chiude più.

```bash
aws s3api create-bucket --bucket <BUCKET> \
  --region eu-south-1 \
  --create-bucket-configuration LocationConstraint=eu-south-1

aws s3api put-public-access-block --bucket <BUCKET> \
  --public-access-block-configuration \
  "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

aws s3api put-bucket-versioning --bucket <BUCKET> \
  --versioning-configuration Status=Enabled
```

Il versioning costa pochissimo e trasforma una pubblicazione sbagliata in un
inconveniente da cinque minuti invece che in una serata.

---

## 2 — Certificato

**Deve stare in `us-east-1`**, non a Milano: CloudFront accetta certificati
solo da lì, indipendentemente da dove sta il resto.

```bash
aws acm request-certificate --region us-east-1 \
  --domain-name ilariadiliberto.com \
  --subject-alternative-names www.ilariadiliberto.com \
  --validation-method DNS
```

La validazione richiede un record CNAME da creare su Serveplan. Il certificato
resta *Pending validation* finché quel record non è propagato — normale.

---

## 3 — Funzione di riscrittura degli indirizzi

Il prerender genera `/en/services/index.html`, il visitatore chiede
`/en/services`. S3 non è un server web e non conosce gli indici di cartella.

```bash
aws cloudfront create-function --name indice-cartelle \
  --function-config Comment="aggiunge index.html",Runtime=cloudfront-js-2.0 \
  --function-code fileb://infra/cloudfront-indice.js

aws cloudfront publish-function --name indice-cartelle --if-match <ETAG>
```

---

## 4 — Politiche di cache e intestazioni

I valori esatti sono in `infra/politiche-cache.md`. In console si creano come
*cache policy* e *response headers policy*, e si associano ai behavior.

Il punto da non sbagliare: **`.html` non deve mai restare in cache**. È il file
che dice quali asset caricare — se resta vecchio, il sito resta vecchio anche
con tutti gli asset nuovi già caricati.

---

## 5 — Distribuzione

Due origini:

| Origine | Cosa serve | Cache |
|---|---|---|
| S3 `<BUCKET>` via OAC | tutto il sito statico | secondo le politiche |
| EC2 `<IP>` su HTTPS | `/api/*` | disattivata |

Il behavior `/api/*` va messo **prima** di quello predefinito, altrimenti non
viene mai raggiunto. Deve inoltrare gli header e i cookie necessari, `csrftoken`
compreso, altrimenti il modulo contatti smette di funzionare.

Attivare: HTTP/3, compressione automatica, redirect da HTTP a HTTPS.

Dopo la creazione, la policy del bucket va aggiornata perché accetti solo quella
distribuzione:

```bash
aws s3api put-bucket-policy --bucket <BUCKET> --policy '{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {"Service": "cloudfront.amazonaws.com"},
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::<BUCKET>/*",
    "Condition": {"StringEquals": {
      "AWS:SourceArn": "arn:aws:cloudfront::<ACCOUNT>:distribution/<DISTRIBUZIONE>"
    }}
  }]
}'
```

---

## 6 — Chiudere l'istanza

Oggi l'EC2 risponde a chiunque sulla porta 443. Dopo il passaggio deve
rispondere **solo a CloudFront**:

```bash
aws ec2 authorize-security-group-ingress --group-id <SG> \
  --ip-permissions 'IpProtocol=tcp,FromPort=443,ToPort=443,PrefixListIds=[{PrefixListId=pl-cloudfront}]'
```

La prefix list gestita da AWS si chiama `com.amazonaws.global.cloudfront.origin-facing`.
SSH va limitato al tuo indirizzo, non lasciato aperto.

**Non revocare le regole vecchie finché il DNS non è passato**, altrimenti il
sito attuale diventa irraggiungibile mentre stai ancora lavorando.

---

## 7 — DNS su Serveplan

L'unico passaggio irreversibile, e il primo visibile ai visitatori.

`www` è semplice: un CNAME verso la distribuzione. L'apice del dominio no —
richiede un record ALIAS, che i DNS tradizionali non supportano. Due strade:

**a) Redirect apex → www.** Serveplan reindirizza `ilariadiliberto.com` a
`www.ilariadiliberto.com`, e solo `www` punta a CloudFront. Più semplice, e non
tocca la zona DNS.

**b) Delegare la zona a Route 53**, lasciando il dominio registrato su
Serveplan. Più pulito, ma comporta un passaggio delicato.

### Se si sceglie (b): prima la posta, poi il sito

Un errore qui non rompe il sito — **interrompe la posta**, e te ne accorgi
giorni dopo dai messaggi che non arrivano.

```bash
dig MX ilariadiliberto.com +short
dig TXT ilariadiliberto.com +short
dig TXT _dmarc.ilariadiliberto.com +short
dig TXT default._domainkey.ilariadiliberto.com +short
dig A mail.ilariadiliberto.com +short
```

Ricreare **tutti** questi record nella nuova zona, verificarli interrogando
direttamente i nameserver di Route 53, e solo allora cambiare i nameserver
presso Serveplan.

---

## 8 — Verifica

```bash
curl -sI https://ilariadiliberto.com | grep -iE "^HTTP|cache-control|via|x-cache"
curl -sI -H "Accept-Encoding: br" https://ilariadiliberto.com | grep -i content-encoding
curl -s https://ilariadiliberto.com/en/services | grep -o "<title>[^<]*</title>"
curl -s -o /dev/null -w "%{http_code}\n" -X POST https://ilariadiliberto.com/api/contacts/ \
  -H "Content-Type: application/json" -d '{}'
```

Attesi: `HTTP/2` o `HTTP/3`, `x-cache: Hit from cloudfront`, `content-encoding: br`,
il titolo inglese della pagina Services, e `400` dal modulo contatti — che
significa "endpoint vivo, corpo vuoto rifiutato".

---

## 9 — Se qualcosa va storto

Il ritorno indietro è il DNS: si rimette il record com'era e in pochi minuti il
traffico torna sull'EC2, che nel frattempo è rimasto acceso e funzionante.

È il motivo per cui il security group va chiuso **dopo** e non prima, e per cui
l'istanza non va spenta il giorno del passaggio.
