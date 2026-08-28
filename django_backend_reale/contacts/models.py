from django.db import models

class ContactMessage(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nome Mittente")
    email = models.EmailField(verbose_name="E-mail")
    subject = models.CharField(max_length=200, verbose_name="Oggetto", blank=True, null=True)
    message = models.TextField(verbose_name="Messaggio", blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Inviato il")

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Messaggio di Contatto"
        verbose_name_plural = "Messaggi di Contatto"

    def __str__(self):
        return f"Messaggio da {self.name} ({self.email})"

    def __repr__(self):
        return f"<ContactMessage {self.name}>"
