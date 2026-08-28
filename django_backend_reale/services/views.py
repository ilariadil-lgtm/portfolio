from rest_framework import viewsets, permissions
from .models import Service
from .serializers import ServiceSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    """
    ViewSet per gestire i servizi offerti.
    Lettura libera, scrittura admin.
    """
    queryset = Service.objects.all().order_by('order')
    serializer_class = ServiceSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
