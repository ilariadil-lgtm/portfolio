from rest_framework import viewsets, permissions
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    """
    ViewSet per gestire i progetti del portfolio.
    Le operazioni di lettura (GET) sono permesse a tutti.
    Le operazioni di scrittura (POST, PUT, DELETE) richiedono autenticazione (admin).
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
        
    def get_queryset(self):
        return Project.objects.all().order_by('order', '-created_at')
