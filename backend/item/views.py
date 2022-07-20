from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ItemModel

from .serializers import ItemSerializer, CreateItemSerializer

# TODO Implement permissions
# TODO Implement throttling
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


class ToggleFavouriteView(APIView):

    def post(self, request, *args, **kwargs):
        item_id = self.kwargs['item_id']
        item = get_object_or_404(ItemModel, pk=item_id)
        favourite_items = self.request.user.buyer_profile.favourite_items

        if item not in favourite_items.all():
            favourite_items.add(item_id)

            return Response(status=status.HTTP_200_OK, data="Item added to favourites")
        else:
            favourite_items.remove(item_id)

            return Response(status=status.HTTP_200_OK, data="Item removed from favourites")
