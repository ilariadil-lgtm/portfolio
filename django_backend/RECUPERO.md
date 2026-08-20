# Fase 6 — Recuperare il backend prima di toccarlo

Il `django_backend/` di questo repository **non è ciò che gira in produzione**.
Lo sappiamo con certezza: qui c'è una sola rotta, `contact/`, mentre il server
risponde su `/api/contacts/`, e il `settings.py` presente dichiara sei
applicazioni — `projects`, `contacts`, `services`, `blog`, `faq`, `about` — di
cui nel repository non c'è traccia.

Significa che **il codice che gestisce i contatti esiste in una sola copia,
senza storia e senza backup.** Prima di correggerlo va portato qui: correggere
un file che nessuno esegue non serve a niente.

## 1 — Trovarlo

Sul server, via SSH:

```bash
find / -name "manage.py" -not -path "*/site-packages/*" 2>/dev/null
cd <cartella_trovata>
ls -la
git log --oneline -3 2>/dev/null || echo "non e un repository git"
```

## 2 — Portarlo qui

```bash
# dalla macchina locale
rsync -av --exclude '__pycache__' --exclude 'venv' --exclude '.venv' \
      --exclude '*.pyc' --exclude 'db.sqlite3' --exclude 'media' \
      <utente>@<ip>:<cartella>/ ./django_backend_reale/
```

**Prima di committare**, controllare che non entrino segreti:

```bash
grep -rn "SECRET_KEY\|PASSWORD\|API_KEY\|TOKEN" django_backend_reale/ \
  --include="*.py" --include="*.env" | grep -v "os.environ\|os.getenv"
```

Le credenziali devono stare in variabili d'ambiente sul server, non nel
codice. Se ne trovi di scritte a mano, vanno spostate **prima** del commit:
una volta entrate nella storia di git, toglierle richiede di riscriverla.

## 3 — Confrontare

A quel punto si vede cosa manca al frammento presente e si decide: sostituire
`django_backend/` con quello reale, oppure tenere entrambi finché non è chiaro
quale sia la versione buona.

## 4 — Solo dopo, le correzioni

I file in `django_backend/contact/` sono le correzioni delle voci 6.2, 6.3, 6.4
e 6.6, scritte sulla forma nota del frammento. **Vanno riconciliate** con il
codice reale, non copiate sopra: se il server ha una struttura diversa, va
adattato l'intervento, non il server.
