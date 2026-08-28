# Valori raccolti durante la Fase 5

Aggiornato mano a mano. Servono a `infra/prepara-distribuzione.sh` e a
riprendere il lavoro senza dover rifare il censimento.

## Istanza EC2

| Voce | Valore |
|---|---|
| Instance ID | `i-03cf44f5d14d82ae9` (nome tag: Portfolio) |
| Tipo | `t3.micro` |
| IP pubblico | `15.161.54.252` |
| Volume EBS | `vol-03a50f451e45e96bc` (8 GB gp3) |
| Security group | `sg-0d459737c914bd0e2` (launch-wizard-2) |
| Chiave SSH | `portfolio-backend-2026` — locale in `~/Desktop/Portfolio/portfolio-backend-2026.pem` |
| Snapshot pre-CloudFront | `snap-01d1316e5ef334cf5` |

## AWS — account

| Voce | Valore |
|---|---|
| Account ID | `733652933160` |
| Region | `eu-south-1` (Milano) |

## Fase 5.4 — Bucket S3

| Voce | Valore |
|---|---|
| Nome bucket | `ilariadiliberto-sito` |
| Stato | creato, pubblico bloccato, versioning attivo |
| OAC | **da creare** (passo 5.6/C2) |

## Fase 5.5 — Certificato ACM (us-east-1)

| Voce | Valore |
|---|---|
| ARN | `arn:aws:acm:us-east-1:733652933160:certificate/8326095d-1cff-48ab-aa1b-c32b6889f93a` |
| Stato | **`ISSUED`** — validato il 2026-08-21 |

## Fase 5.6/5.7 — Distribuzione CloudFront

| Voce | Valore |
|---|---|
| Distribution ID | `E2N1GJOUEQCV3F` |
| Dominio CloudFront | `d1fk1izulca7vw.cloudfront.net` |
| ARN | `arn:aws:cloudfront::733652933160:distribution/E2N1GJOUEQCV3F` |
| OAC | `ESQELVV0HW2VO` (portfolio-oac) |
| Origine API | `origin.ilariadiliberto.com` → `15.161.54.252` (record A su Serveplan). Prima tentativo con il DNS auto-assegnato dell'istanza (`ec2-...amazonaws.com`): falliva con 502 perché il certificato Let's Encrypt copre solo `ilariadiliberto.com`/`www`. Il certificato è stato esteso (`certbot --expand`) per includere anche `origin.ilariadiliberto.com`. |
| Bucket policy | aggiornata, accetta solo questa distribuzione |
| Behavior aggiuntivi | `/admin*` e `/static/*` → EC2, non previsti dal modello originale ma necessari: nginx instrada anche questi verso gunicorn, non solo `/api/*` |
| Test end-to-end (tramite `d1fk1izulca7vw.cloudfront.net`, con `Host: ilariadiliberto.com` per superare `ALLOWED_HOSTS`) | Home 200, riscrittura `/en/services` OK, `/api/contacts/` 400 (atteso), `/admin/` 302 (atteso), `/static/` 200 — **tutta la pipeline verificata, senza toccare il dominio vero** |

**Nota IP SSH**: il tuo IP pubblico cambia (probabile VPN). Se SSH smette di rispondere, il security group `sg-0d459737c914bd0e2` va aggiornato con il nuovo IP — regola aggiunta il 2026-08-21 per `79.30.151.122/32`, quella precedente (`158.47.201.162/32`) è rimasta.

Record di validazione DNS da creare su Serveplan:

```
_dadd9df2ef15e9881bb2bda6f7620988.ilariadiliberto.com.  CNAME  _47233a9d5a561297e85409110eeb7972.jkddzztszm.acm-validations.aws.
_689691b6a3df038c337fb15e85b6b7c2.www.ilariadiliberto.com.  CNAME  _3ac405e92f3e577bc6f4e4179d1a8607.jkddzztszm.acm-validations.aws.
```

Verifica dopo averli creati:

```bash
aws acm describe-certificate --region us-east-1 \
  --certificate-arn arn:aws:acm:us-east-1:733652933160:certificate/8326095d-1cff-48ab-aa1b-c32b6889f93a \
  --query "Certificate.Status" --output text
```

Deve rispondere `ISSUED` (non più `PENDING_VALIDATION`).

## Fatto senza bisogno del tuo intervento

| Voce | Cosa | Valore |
|---|---|---|
| 3 (runbook) | Funzione CloudFront `indice-cartelle`, pubblicata | `arn:aws:cloudfront::733652933160:function/indice-cartelle` |
| 5.8/5.9 | Policy di cache e header — verificate, sono AWS-managed, nessuna creazione serve | `658327ea...` CachingOptimized, `4135ea2d...` CachingDisabled, `67f7725c...` SecurityHeadersPolicy, `216adef6...` **Managed-AllViewer** (non `AllViewerExceptHostHeader` come suggeriva il nome nel modello — funziona comunque con questo nginx) |
| 5.10 (parte) | Regola SG aggiunta per HTTPS da CloudFront — **additiva**, le regole vecchie restano finché non passa il DNS | `sgr-095e05287b494f259` su `sg-0d459737c914bd0e2`, prefix list `pl-1bbc5972` |
| 5.14 (parte) | Allarme CloudWatch su status check EC2 fallito | `portfolio-ec2-status-check-failed` — **senza notifica**: manca l'email a cui mandarla |
| 5.14 (parte) | Budget mensile $15 | `portfolio-mensile` — **senza notifica**: manca l'email a cui mandarla |
| 5.13 | Workflow GitHub Actions per il deploy, si attiva solo su push a `main` | `.github/workflows/deploy.yml` — non pushato |

## Bloccato, serve il tuo intervento

| Voce | Cosa serve | Perché |
|---|---|---|
| 5.5 | Creare i due CNAME di validazione su Serveplan | Accesso al pannello Serveplan, che non ho |
| 5.6, 5.7 | Creare la distribuzione CloudFront | Serve il certificato `ISSUED`, bloccato dal punto sopra |
| 5.10 (chiusura) | Revocare le regole 0.0.0.0/0 | Deliberatamente rimandato al cutover DNS, non prima |
| 5.11, 5.12 | DNS finale + record email | Accesso a Serveplan |
| 5.13 | Aggiungere i secrets su GitHub (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`) e pushare il workflow | Le chiavi AWS non passano da questa conversazione; serve un utente IAM con permessi limitati a S3+CloudFront, da creare tu o con mia assistenza esplicita |
## Fase 9.3 — Analitica: log di accesso CloudFront su S3

Scelta: nessun servizio nuovo da gestire (Umami self-hosted scartato per vincoli di RAM
sul t3.micro — 908 MB totali, 134 MB liberi al momento del controllo).

| Voce | Valore |
|---|---|
| Bucket log | `ilariadiliberto-logs` (privato, accesso pubblico bloccato) |
| Scadenza automatica | 90 giorni |
| Delivery source | `arn:aws:logs:us-east-1:733652933160:delivery-source:portfolio-cloudfront-logs` |
| Delivery destination | `arn:aws:logs:us-east-1:733652933160:delivery-destination:portfolio-logs-s3` |
| Delivery (collegamento) | `arn:aws:logs:us-east-1:733652933160:delivery:nRKSHAmbLlau0a2W` |
| Percorso log | `s3://ilariadiliberto-logs/AWSLogs/733652933160/CloudFront/...` |
| Nota tecnica | Il campo "Logging" classico di `update-distribution` è deprecato per bucket nuovi (richiede ACL non più concesse da AWS). Usata la API unificata `aws logs put-delivery-source/put-delivery-destination/create-delivery`. |
| **Da fare** | I log includono `c-ip` (IP del visitatore) — dato personale. La privacy policy va aggiornata per dichiararlo (proposta di testo sotto). |

**Proposta testo privacy policy** (da rivedere e approvare tu prima di pubblicarla):
> Il servizio di distribuzione dei contenuti (CloudFront) registra automaticamente
> log di accesso tecnici — indirizzo IP, pagina richiesta, data e ora — per finalità
> di sicurezza e diagnostica. Questi log sono conservati per 90 giorni e non sono
> condivisi con terze parti né utilizzati per profilazione.

| 5.14 (notifiche) | Un indirizzo email per gli alert | Non uso il tuo senza chiedertelo esplicitamente |
| ~~5.15~~ | ~~Snapshot automatici~~ | **Fatto** (2026-08-21, con tuo via libera esplicito) — ruolo `AWSDataLifecycleManagerDefaultRole`, policy `policy-021abe8927a46877a`, snapshot giornaliero alle 03:00 UTC, 7 giorni di retention, volume taggato `Name=Portfolio` |
