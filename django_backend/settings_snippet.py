# ─────────────────────────────────────────────────────────────────────────────
# Aggiungi / sostituisci questi blocchi nel tuo settings.py Django su EC2
# ─────────────────────────────────────────────────────────────────────────────

# ── CORS (installa: pip install django-cors-headers) ─────────────────────────
INSTALLED_APPS = [
    # ... le tue app esistenti ...
    "corsheaders",
    "contact",   # <— la nuova app
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",  # <— deve essere PRIMA di CommonMiddleware
    # ... il resto del tuo middleware ...
    "django.middleware.common.CommonMiddleware",
]

CORS_ALLOWED_ORIGINS = [
    "https://www.ilariadiliberto.com",
    "https://ilariadiliberto.com",
]

# ── Email SMTP (provider hosting cPanel/Plesk) ────────────────────────────────
# Recupera i valori dalla variabile d'ambiente o da un file .env sul server
import os

EMAIL_BACKEND   = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST      = os.environ.get("EMAIL_HOST", "mail.ilariadiliberto.com")  # modifica se diverso
EMAIL_PORT      = int(os.environ.get("EMAIL_PORT", 587))
EMAIL_USE_TLS   = True
EMAIL_USE_SSL   = False
EMAIL_HOST_USER     = os.environ.get("EMAIL_HOST_USER", "info@ilariadiliberto.com")
EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD", "")   # <— non scrivere qui la password!

# Indirizzo a cui arrivano le notifiche dal form
CONTACT_RECIPIENT = "info@ilariadiliberto.com"

# ── URL routing — nel tuo urls.py principale ─────────────────────────────────
# from django.urls import path, include
#
# urlpatterns = [
#     ...
#     path("api/", include("contact.urls")),
# ]
