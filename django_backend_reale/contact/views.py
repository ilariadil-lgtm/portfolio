# contact/views.py
import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST


def send_email(name: str, email: str, subject: str, message: str) -> None:
    """Invia email tramite SMTP del provider hosting."""
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Portfolio] {subject}"
    msg["From"] = settings.EMAIL_HOST_USER
    msg["To"] = settings.CONTACT_RECIPIENT
    msg["Reply-To"] = email

    # Corpo plain text
    text_body = f"""\
Nuovo messaggio dal form di contatto di ilariadiliberto.com

Nome: {name}
Email: {email}
Oggetto: {subject}

Messaggio:
{message}
"""

    # Corpo HTML
    html_body = f"""\
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {{ font-family: Georgia, serif; color: #3d0f1a; background: #f5f2ed; margin: 0; padding: 0; }}
    .wrapper {{ max-width: 600px; margin: 40px auto; background: #fff; border: 1px solid #3d0f1a20; }}
    .header {{ background: #3d0f1a; color: #d4af37; padding: 32px 40px; }}
    .header h1 {{ margin: 0; font-size: 22px; letter-spacing: 0.05em; }}
    .header p {{ margin: 6px 0 0; font-family: monospace; font-size: 11px; opacity: 0.6; letter-spacing: 0.2em; text-transform: uppercase; }}
    .body {{ padding: 40px; }}
    .field {{ margin-bottom: 24px; }}
    .label {{ font-family: monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; color: #3d0f1a80; display: block; margin-bottom: 6px; }}
    .value {{ font-size: 16px; color: #3d0f1a; line-height: 1.6; }}
    .message-box {{ background: #f5f2ed; border-left: 3px solid #c0392b; padding: 16px 20px; margin-top: 8px; }}
    .footer {{ border-top: 1px solid #3d0f1a10; padding: 20px 40px; text-align: center; font-family: monospace; font-size: 10px; color: #3d0f1a40; letter-spacing: 0.2em; text-transform: uppercase; }}
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Nuovo Messaggio</h1>
      <p>ilariadiliberto.com — form di contatto</p>
    </div>
    <div class="body">
      <div class="field">
        <span class="label">Nome</span>
        <span class="value">{name}</span>
      </div>
      <div class="field">
        <span class="label">Email</span>
        <span class="value"><a href="mailto:{email}" style="color:#c0392b;">{email}</a></span>
      </div>
      <div class="field">
        <span class="label">Oggetto</span>
        <span class="value">{subject}</span>
      </div>
      <div class="field">
        <span class="label">Messaggio</span>
        <div class="message-box">
          <span class="value">{message.replace(chr(10), '<br>')}</span>
        </div>
      </div>
    </div>
    <div class="footer">Ilaria Diliberto © 2026 · info@ilariadiliberto.com</div>
  </div>
</body>
</html>
"""

    msg.attach(MIMEText(text_body, "plain", "utf-8"))
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    with smtplib.SMTP(settings.EMAIL_HOST, settings.EMAIL_PORT) as server:
        server.ehlo()
        server.starttls()
        server.login(settings.EMAIL_HOST_USER, settings.EMAIL_HOST_PASSWORD)
        server.sendmail(
            settings.EMAIL_HOST_USER,
            settings.CONTACT_RECIPIENT,
            msg.as_string(),
        )


@csrf_exempt
@require_POST
def contact_view(request):
    """
    POST /api/contact/
    Body JSON: { name, email, subject, message, website? }
    """
    try:
        data = json.loads(request.body)
    except (json.JSONDecodeError, ValueError):
        return JsonResponse({"error": "Invalid JSON"}, status=400)

    # Honeypot check
    if data.get("website"):
        return JsonResponse({"ok": True}, status=200)

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    subject = data.get("subject", "").strip()
    message = data.get("message", "").strip()

    if not all([name, email, subject, message]):
        return JsonResponse({"error": "Tutti i campi sono obbligatori."}, status=400)

    try:
        send_email(name, email, subject, message)
        return JsonResponse({"ok": True}, status=200)
    except smtplib.SMTPException as exc:
        # Log dell'errore senza esporre dettagli al client
        import logging
        logging.getLogger(__name__).error("SMTP error: %s", exc)
        return JsonResponse({"error": "Errore nell'invio. Riprova più tardi."}, status=500)
