<<<<<<< HEAD

from rest_framework.generics import GenericAPIView,ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from project.permissions import IsStaffOrReadOnly
from review.models import Review
=======
from rest_framework.generics import RetrieveUpdateAPIView, CreateAPIView, ListAPIView

>>>>>>> 4458a1837ce5291ba674935910d4a690e4b4d2dc
from django.contrib.auth import get_user_model

from review.serializers import ReviewSerializer, ListRetrieveReviewSerializer

from review.models import ReviewModel
from item.models import ItemModel
User = get_user_model()


class CreateReviewView(CreateAPIView):
    queryset = ReviewModel.objects.all()
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        item_id = self.kwargs['item_id']
        item_instance = ItemModel.objects.get(pk=item_id)
        serializer.save(buyer_profile=self.request.user.buyer_profile, item=item_instance)


class ListReviewView(ListAPIView):
    queryset = ReviewModel.objects.all()
    serializer_class = ListRetrieveReviewSerializer


class RetrieveUpdateReviewView(RetrieveUpdateAPIView):
    queryset = ReviewModel.objects.all()
    lookup_url_kwarg = 'review_id'

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ListRetrieveReviewSerializer
        else:
            return ReviewSerializer
