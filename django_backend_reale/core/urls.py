from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API endpoints for each application
    path('api/projects/', include('projects.urls')),
    path('api/contacts/', include('contacts.urls')),
    path('api/services/', include('services.urls')),
    path('api/blog/', include('blog.urls')),
    path('api/faq/', include('faq.urls')),
    path('api/about/', include('about.urls')),
]

# Serve static and media files in development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
