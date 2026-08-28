from rest_framework import viewsets, permissions
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    """
    ViewSet per gestire gli articoli del blog.
    Solo articoli pubblicati sono visibili al pubblico.
    """
    serializer_class = PostSerializer
    lookup_field = 'slug'
    
    def get_queryset(self):
        if self.request.user.is_staff:
            return Post.objects.all()
        return Post.objects.filter(is_published=True)

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
