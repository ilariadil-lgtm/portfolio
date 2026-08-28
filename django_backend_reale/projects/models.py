from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name="Titolo Progetto")
    description = models.TextField(verbose_name="Descrizione")
    image = models.ImageField(upload_to='projects/', verbose_name="Immagine di Copertina", blank=True, null=True)
    technologies = models.CharField(max_length=255, verbose_name="Tecnologie (separate da virgola)")
    project_url = models.URLField(max_length=500, blank=True, null=True, verbose_name="Link Progetto Live")
    github_url = models.URLField(max_length=500, blank=True, null=True, verbose_name="Link Repository GitHub")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordine Visualizzazione")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Data Creazione")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Ultima Modifica")

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = "Progetto"
        verbose_name_plural = "Progetti"

    def __str__(self):
        return self.title
