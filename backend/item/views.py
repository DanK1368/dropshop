from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import ItemModel

from .serializers import ItemSerializer


class ListCreateItemView(ListCreateAPIView):
    queryset = ItemModel.objects.all()
    serializer_class = ItemSerializer


class RetrieveUpdateDestroyItemView(RetrieveUpdateDestroyAPIView):
    queryset = ItemModel.objects.all()
    serializer_class = ItemSerializer
    lookup_url_kwarg = 'item_id'
