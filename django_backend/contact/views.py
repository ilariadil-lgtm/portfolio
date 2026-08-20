"""
Modulo di contatto — versione corretta.

Interventi rispetto alla versione precedente, voci 6.2, 6.3, 6.4 e 6.6:

- l'HTML dell'email non viene piu costruito con una f-string: un messaggio che
  conteneva tag HTML finiva renderizzato nella casella di posta. Ora passa da
  un template Django, che fa l'escape di ogni variabile;
- l'indirizzo del mittente viene validato prima di finire nell'header
  Reply-To, che e la porta d'ingresso classica per l'header injection;
- l'endpoint e limitato nella frequenza: era pubblico, senza CSRF e senza
  alcun freno. L'honeypot ferma i robot pigri, non chi prende di mira il
  modulo;
- il messaggio viene scritto su database prima di essere notificato. Se
  l'SMTP cade, il contenuto non e piu perso: il visitatore vede comunque una
  conferma e il messaggio resta recuperabile.

Da riconciliare con il codice realmente in produzione: vedi RECUPERO.md.
"""

import json
import logging
import smtplib
from email.headerregistry import Address  # noqa: F401  (documenta l'intento)

from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.mail import EmailMultiAlternatives
from django.core.validators import validate_email
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from .models import Contatto

log = logging.getLogger(__name__)

LIMITE_PER_ORA = 5          # invii accettati dallo stesso indirizzo IP
LUNGHEZZA_MASSIMA = 5000    # caratteri del messaggio


def _indirizzo_ip(request):
    """L'IP reale dietro CloudFront, che aggiunge X-Forwarded-For."""
    inoltrato = request.META.get("HTTP_X_FORWARDED_FOR", "")
    if inoltrato:
        return inoltrato.split(",")[0].strip()
    return request.META.get("REMOTE_ADDR")


def _troppi_invii(ip):
    """
    Voce 6.4. Conteggio sulle ultime ventiquattro ore, letto dal database:
    non serve Redis per un modulo che riceve qualche messaggio al giorno, e
    una dipendenza in meno e una cosa in meno che si puo rompere.
    """
    if not ip:
        return False
    da = timezone.now() - timezone.timedelta(hours=1)
    return Contatto.objects.filter(indirizzo_ip=ip, ricevuto_il__gte=da).count() >= LIMITE_PER_ORA


def _notifica(contatto):
    """Invia la notifica. Solleva l'eccezione al chiamante, che decide."""
    contesto = {
        "nome": contatto.nome,
        "email": contatto.email,
        "oggetto": contatto.oggetto,
        "messaggio": contatto.messaggio,
        "ricevuto_il": contatto.ricevuto_il,
    }
    testo = (
        f"Nuovo messaggio dal modulo di contatto di ilariadiliberto.com\n\n"
        f"Nome: {contatto.nome}\n"
        f"Email: {contatto.email}\n"
        f"Oggetto: {contatto.oggetto}\n\n"
        f"{contatto.messaggio}\n"
    )
    messaggio = EmailMultiAlternatives(
        subject=f"[Portfolio] {contatto.oggetto}"[:200],
        body=testo,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[settings.CONTACT_RECIPIENT],
        # Reply-To solo con un indirizzo gia validato: e un header, e gli
        # header non vanno mai composti con input non controllato.
        reply_to=[contatto.email],
    )
    messaggio.attach_alternative(
        render_to_string("contact/notifica.html", contesto), "text/html"
    )
    messaggio.send(fail_silently=False)


@csrf_exempt
@require_POST
def contact_view(request):
    """
    POST /api/contacts/
    Corpo JSON: { name, email, subject, message, website? }
    """
    try:
        dati = json.loads(request.body)
    except (json.JSONDecodeError, ValueError):
        return JsonResponse({"error": "Corpo della richiesta non valido."}, status=400)

    # Honeypot: campo invisibile che un essere umano non compila mai.
    # Si risponde comunque 200, cosi chi lo compila non impara nulla.
    if dati.get("website"):
        return JsonResponse({"ok": True}, status=200)

    nome = str(dati.get("name", "")).strip()[:200]
    email = str(dati.get("email", "")).strip()[:254]
    oggetto = str(dati.get("subject", "")).strip()[:300]
    messaggio = str(dati.get("message", "")).strip()[:LUNGHEZZA_MASSIMA]

    if not all([nome, email, oggetto, messaggio]):
        return JsonResponse({"error": "Tutti i campi sono obbligatori."}, status=400)

    # Voce 6.3 — l'indirizzo finisce in un header: va validato, non sperato.
    try:
        validate_email(email)
    except ValidationError:
        return JsonResponse({"error": "Indirizzo email non valido."}, status=400)

    ip = _indirizzo_ip(request)
    if _troppi_invii(ip):
        return JsonResponse(
            {"error": "Troppi invii ravvicinati. Riprova fra un'ora."}, status=429
        )

    # Voce 6.6 — prima si scrive, poi si notifica.
    contatto = Contatto.objects.create(
        nome=nome, email=email, oggetto=oggetto, messaggio=messaggio, indirizzo_ip=ip
    )

    try:
        _notifica(contatto)
        contatto.notificato = True
        contatto.save(update_fields=["notificato"])
    except (smtplib.SMTPException, OSError) as errore:
        # Il messaggio e salvo: l'invio fallito e un problema nostro, non del
        # visitatore, e non ha senso fargli riscrivere tutto.
        contatto.errore_notifica = str(errore)[:1000]
        contatto.save(update_fields=["errore_notifica"])
        log.error("Notifica non inviata per il contatto %s: %s", contatto.pk, errore)

    return JsonResponse({"ok": True}, status=200)
