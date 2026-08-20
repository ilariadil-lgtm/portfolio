# contact/urls.py
#
# Il frontend chiama POST /api/contacts/ — al plurale. La versione precedente
# di questo file esponeva "contact/" al singolare: non corrispondeva a cio che
# gira in produzione, ed e stato il primo indizio che il frammento in questo
# repository non fosse il codice reale.
from django.urls import path

from .views import contact_view

urlpatterns = [
    path("contacts/", contact_view, name="contatti"),
]
