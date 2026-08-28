import logging

from rest_framework import viewsets, permissions, mixins
from rest_framework.throttling import AnonRateThrottle
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer

log = logging.getLogger(__name__)


class ContactCreateThrottle(AnonRateThrottle):
    # Voce 6.4: l'endpoint è pubblico e senza freni. Cinque invii all'ora
    # per IP bastano per un modulo che riceve pochi messaggi al giorno,
    # e fermano lo spam automatico senza servire Redis.
    scope = 'contact_create'
    rate = '5/hour'


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

    def get_throttles(self):
        if self.action == 'create':
            return [ContactCreateThrottle()]
        return []

    def perform_create(self, serializer):
        """Salva il messaggio e invia una notifica email all'admin."""
        instance = serializer.save()

        # Voce 6.6: il messaggio è già salvato sopra, quindi un fallimento
        # dell'SMTP non lo perde — resta visibile in admin.
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
                    fail_silently=False,
                )
            except Exception as errore:
                log.error("Notifica non inviata per il contatto %s: %s", instance.pk, errore)
