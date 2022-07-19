from django.db.models import QuerySet
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import OrderModel
from item.models import ItemModel
from item_order_intermediary.models import ItemOrderIntermediaryModel
from buyer_profile.models import BuyerProfileModel

from .serializers import OrderSerializer


class CreateAuthenticatedOrderView(APIView):

    def post(self, request, *args, **kwargs):
        buyer_profile = self.request.user.buyer_profile
        order = OrderModel.objects.create(buyer_profile=buyer_profile)
        item_id_list = request.data

        for item_id in item_id_list:
            item = get_object_or_404(ItemModel, pk=item_id)
            ItemOrderIntermediaryModel(item=item, order=order).save()

        return Response(status=status.HTTP_202_ACCEPTED)


class CreateGuestOrderView(APIView):

    def post(self, request, *args, **kwargs):
        first_name = request.data["first_name"]
        last_name = request.data["last_name"]
        street = request.data["street"]
        city = request.data["city"]
        zip = request.data["zip"]
        country = request.data["country"]
        phone_number = request.data["phone_number"]
        item_id_list = request.data["item_id_list"]

        buyer_profile = BuyerProfileModel.objects.create(first_name=first_name, last_name=last_name, street=street,
                                                         city=city, zip=zip, country=country, phone_number=phone_number)
        order = OrderModel.objects.create(buyer_profile=buyer_profile)

        for item_id in item_id_list:
            item = get_object_or_404(ItemModel, pk=item_id)
            ItemOrderIntermediaryModel(item=item, order=order).save()

        return Response(status=status.HTTP_202_ACCEPTED)


class ListOrdersView(ListAPIView):
    queryset = OrderModel.objects.all()
    serializer_class = OrderSerializer

    def get_queryset(self):
        assert self.queryset is not None, (
            "'%s' should either include a `queryset` attribute, "
            "or override the `get_queryset()` method."
            % self.__class__.__name__
        )

        queryset = self.queryset.filter(buyer_profile=self.request.user.buyer_profile)
        if isinstance(queryset, QuerySet):
            # Ensure queryset is re-evaluated on each request.
            queryset = queryset.all()
        return queryset


class RetrieveOrderView(RetrieveAPIView):
    queryset = OrderModel.objects.all()
    serializer_class = OrderSerializer
    lookup_url_kwarg = 'order_id'
