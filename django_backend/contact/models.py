from django.db import models


class Contatto(models.Model):
    """
    Un messaggio ricevuto dal modulo di contatto.

    Voce 6.6 del piano. Prima il messaggio esisteva solo dentro l'email: se
    l'SMTP falliva, il visitatore vedeva un errore e il contenuto era perso per
    sempre. Ora si scrive prima e si notifica dopo — l'email diventa una
    comodita, non l'unico esemplare.
    """

    nome = models.CharField(max_length=200)
    email = models.EmailField()
    oggetto = models.CharField(max_length=300)
    messaggio = models.TextField()

    ricevuto_il = models.DateTimeField(auto_now_add=True, db_index=True)
    indirizzo_ip = models.GenericIPAddressField(null=True, blank=True)
    notificato = models.BooleanField(
        default=False,
        help_text="L'email di notifica e partita davvero.",
    )
    errore_notifica = models.TextField(blank=True)

    class Meta:
        ordering = ["-ricevuto_il"]
        verbose_name = "contatto"
        verbose_name_plural = "contatti"

    def __str__(self):
        return f"{self.nome} — {self.ricevuto_il:%d/%m/%Y %H:%M}"
