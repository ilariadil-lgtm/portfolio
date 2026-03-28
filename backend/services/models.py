from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=100, verbose_name="Titolo Servizio")
    description = models.TextField(verbose_name="Descrizione")
    icon_name = models.CharField(max_length=50, verbose_name="Nome Icona (es. code, layout)", help_text="Usa il nome dell'icona da Lucide React")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordine Visualizzazione")

    class Meta:
        ordering = ['order']
        verbose_name = "Servizio"
        verbose_name_plural = "Servizi"

    def __str__(self):
        return self.title
