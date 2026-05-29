from rest_framework import viewsets, permissions, mixins
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer


class ContactMessageViewSet(mixins.CreateModelMixin,
                             mixins.ListModelMixin,
                             mixins.RetrieveModelMixin,
                             viewsets.GenericViewSet):
    """
    ViewSet per gestire i messaggi di contatto.
    - POST /api/contacts/ → chiunque può inviare un messaggio
    - GET  /api/contacts/ → solo admin può leggere la lista
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def perform_create(self, serializer):
        """Salva il messaggio e invia una notifica email all'admin."""
        instance = serializer.save()

        # ─────────────────────────────────────────────────────────────
        # NOTIFICA EMAIL — attiva quando EMAIL_HOST sarà configurato
        # (vedi settings.py: EMAIL_HOST, EMAIL_HOST_USER, etc.)
        # ─────────────────────────────────────────────────────────────
        if getattr(settings, 'EMAIL_NOTIFICATIONS_ENABLED', False):
            try:
                send_mail(
                    subject=f"[Portfolio] Nuovo messaggio da {instance.name}",
                    message=(
                        f"Da: {instance.name} <{instance.email}>\n"
                        f"Oggetto: {instance.subject}\n\n"
                        f"{instance.message}"
                    ),
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.ADMIN_EMAIL],
                    fail_silently=True,  # Non blocca la response se l'email fallisce
                )
            except Exception:
                pass  # Logga in produzione con Sentry o simile
