from django.contrib import admin

from .models import Contatto


@admin.register(Contatto)
class ContattoAdmin(admin.ModelAdmin):
    list_display = ("nome", "email", "oggetto", "ricevuto_il", "notificato")
    list_filter = ("notificato", "ricevuto_il")
    search_fields = ("nome", "email", "oggetto", "messaggio")
    readonly_fields = (
        "nome", "email", "oggetto", "messaggio",
        "ricevuto_il", "indirizzo_ip", "notificato", "errore_notifica",
    )
    date_hierarchy = "ricevuto_il"

    def has_add_permission(self, request):
        # I contatti arrivano dal modulo, non si scrivono a mano.
        return False
