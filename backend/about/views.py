from rest_framework import viewsets, permissions, response
from .models import About
from .serializers import AboutSerializer

class AboutViewSet(viewsets.ModelViewSet):
    """
    ViewSet per gestire le informazioni personali.
    Poiché dovrebbe esserci solo un profilo, l'azione 'list'
    restituisce il primo oggetto disponibile.
    """
    queryset = About.objects.all()
    serializer_class = AboutSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def list(self, request, *args, **kwargs):
        about = About.objects.first()
        if about:
            serializer = self.get_serializer(about)
            return response.Response(serializer.data)
        return response.Response({"detail": "Informazioni non disponibili"}, status=404)
