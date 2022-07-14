from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404

from rest_framework.generics import GenericAPIView,ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from project.permissions import IsStaffOrReadOnly
from review.models import Review
from django.contrib.auth import get_user_model
from rest_framework import filters
from review.serializers import ReviewSerializer, ReviewCreateSerializer
from review.permission import IsUser, IsNotUser


User = get_user_model()


class ReviewCreateView(ListCreateAPIView):
    queryset = Review.objects.all()
    permission_classes = []
    # filter_backends = [filters.SearchFilter]
    # search_fields = ['content']

    def get_serializer_class(self):
        if self.request.method == "POST":
            return ReviewCreateSerializer
        return ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(buyer_profile=self.request.user)


class RetrieveUpdateDestroyAPIViewReview(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "review_id"
    permission_classes = [IsStaffOrReadOnly, IsUser]

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(id=self.kwargs.get("review_id"))
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class RetrieveUpdateDestroyReviewView(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'


class GetAllReviews(GenericAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    #permission_classes = [IsStaffOrReadOnly]

    def get(self, request, *args, **kwargs):

        #current_restaurant = self.request.user
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


