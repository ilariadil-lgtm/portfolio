from django.db import models
from django.core.exceptions import ValidationError

class About(models.Model):
    name = models.CharField(max_length=100, default="Ilaria Diliberto", verbose_name="Nome Completo")
    title = models.CharField(max_length=100, default="UX Engineer & Cloud Specialist", verbose_name="Titolo Professionale")
    bio = models.TextField(verbose_name="Biografia")
    profile_image = models.ImageField(upload_to='about/', verbose_name="Foto Profilo", blank=True, null=True)
    cv_file = models.FileField(upload_to='cv/', verbose_name="Curriculum Vitae (PDF)", blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, verbose_name="Località")
    email = models.EmailField(default="hello@ilariadiliberto.com", verbose_name="Email di Contatto")
    linkedin_url = models.URLField(blank=True, verbose_name="LinkedIn URL")
    github_url = models.URLField(blank=True, verbose_name="GitHub URL")
    
    class Meta:
        verbose_name = "Informazioni Personali"
        verbose_name_plural = "Informazioni Personali"

    def clean(self):
        if About.objects.exists() and not self.pk:
            raise ValidationError("Puoi creare solo un record per le informazioni personali.")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Profilo di {self.name}"
