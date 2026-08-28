from django.db import models
from django.utils.text import slugify

class Post(models.Model):
    title = models.CharField(max_length=200, verbose_name="Titolo Post")
    slug = models.SlugField(unique=True, blank=True, verbose_name="Slug URL")
    content = models.TextField(verbose_name="Contenuto (Markdown)")
    image = models.ImageField(upload_to='blog/', verbose_name="Immagine di Copertina", blank=True, null=True)
    tags = models.CharField(max_length=255, blank=True, verbose_name="Tag (separati da virgola)")
    is_published = models.BooleanField(default=False, verbose_name="Pubblicato")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Data Creazione")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Ultima Modifica")

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Articolo"
        verbose_name_plural = "Articoli"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
