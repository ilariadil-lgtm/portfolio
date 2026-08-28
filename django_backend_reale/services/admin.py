from django.contrib import admin
from .models import Service

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon_name', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description')
    ordering = ('order',)
