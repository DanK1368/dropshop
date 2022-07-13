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


class GetReviewsFromSpecificUser(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "user_id"

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(user=self.kwargs.get("user_id"))
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class UpdateSpecificReview(GenericAPIView):
    def get_object(self, pk):
        return Review.objcets.get(pk=pk)

    def patch(self, request, pk, *args, **kwargs):
        review_objects = self.get_object(pk)
        serializer = ReviewSerializer(review_objects, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(code=201, data=serializer.data)
        return JsonResponse(code=400, data="wrong parameters")
