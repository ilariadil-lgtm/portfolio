# Configurazione recuperata dall'istanza EC2

Voce 5.2 del piano. Copia locale di ciò che oggi esiste solo su
`15.161.54.252` — se l'istanza si perde, questi file bastano a ricostruirla.

| File | Cosa contiene |
|---|---|
| `nginx.conf` | Configurazione nginx principale |
| `nginx-iltuosito.conf` | Server block del sito: rotte `/`, `/assets/`, `/static/`, `/api`, `/admin`, certificati Certbot |
| `gunicorn.service` | Unit systemd di gunicorn — SECRET_KEY non più in chiaro, letta da `/etc/gunicorn.env` (non copiato qui: resta solo sul server, permessi 600 root-only) |
| `certbot-renewal.conf` | Configurazione di rinnovo automatico del certificato Let's Encrypt |
| `requirements-produzione.txt` | Python 3.14.4 + pacchetti esatti installati nel venv di produzione (nessun driver Postgres/MySQL: il backend usa SQLite) |

**Snapshot EBS**: `snap-01d1316e5ef334cf5` del volume `vol-03a50f451e45e96bc`,
creato il 2026-08-20, tag `portfolio-pre-cloudfront`.

**Non ancora recuperato qui**: il codice sorgente del backend Django
(`/home/ubuntu/portfolio/backend/`) — è la voce 5.3, va versionato a parte
perché è codice applicativo, non configurazione di sistema.
