from django.db import models

class FAQ(models.Model):
    question = models.CharField(max_length=255, verbose_name="Domanda")
    answer = models.TextField(verbose_name="Risposta")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordine Visualizzazione")

    class Meta:
        ordering = ['order']
        verbose_name = "FAQ"
        verbose_name_plural = "FAQ"

    def __str__(self):
        return self.question
