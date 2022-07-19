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

    def perform_create(self, serializer):
        serializer.save(seller_profile=self.request.user.seller_profile)


class RetrieveUpdateDestroyItemView(RetrieveUpdateDestroyAPIView):
    queryset = ItemModel.objects.all()
    serializer_class = ItemSerializer
    lookup_url_kwarg = 'item_id'
