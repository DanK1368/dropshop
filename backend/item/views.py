from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import ItemModel

from .serializers import ItemSerializer, CreateItemSerializer


class ListCreateItemView(ListCreateAPIView):
    queryset = ItemModel.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateItemSerializer
        else:
            return ItemSerializer


class RetrieveUpdateDestroyItemView(RetrieveUpdateDestroyAPIView):
    queryset = ItemModel.objects.all()
    serializer_class = ItemSerializer
    lookup_url_kwarg = 'item_id'
