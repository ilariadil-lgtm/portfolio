from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'created_at', 'updated_at')
    list_editable = ('order',)
    search_fields = ('title', 'description', 'technologies')
    list_filter = ('created_at',)
    ordering = ('order', '-created_at')
    readonly_fields = ('created_at', 'updated_at')
