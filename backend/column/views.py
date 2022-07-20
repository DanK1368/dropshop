from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveDestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ColumnModel
from item.models import ItemModel

from .serializers import ColumnSerializer


class ListCreateColumnView(ListCreateAPIView):
    queryset = ColumnModel.objects.all()
    serializer_class = ColumnSerializer

    def perform_create(self, serializer):
        seller_profile = self.request.user.seller_profile
        serializer.save(seller_profile=seller_profile)


class RetrieveDestroyColumnView(RetrieveDestroyAPIView):
    queryset = ColumnModel.objects.all()
    serializer_class = ColumnSerializer
    lookup_url_kwarg = 'column_id'


class ToggleItemColumnView(APIView):

    def post(self, request, *args, **kwargs):
        item_id = kwargs['item_id']
        item = ItemModel.objects.get(pk=item_id)

        column_id = request.data['column_id']
        column = ColumnModel.objects.get(pk=column_id)

        if item not in column.items.all():
            column.items.add(item)

            return Response(status=status.HTTP_200_OK, data="Item added to column")
        else:
            column.items.remove(item)

            return Response(status=status.HTTP_200_OK, data="Item removed from column")