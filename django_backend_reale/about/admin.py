from django.contrib import admin
from .models import About

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'location', 'email')
    
    def has_add_permission(self, request):
        # Impedisce l'aggiunta di nuovi record se ne esiste già uno
        if self.model.objects.exists():
            return False
        return super().has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        # Impedisce la cancellazione dell'unico record (facoltativo)
        return False
