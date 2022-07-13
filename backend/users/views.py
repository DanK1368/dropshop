from django.shortcuts import render

# Create your views here.
from django.test import TestCase

# Create your tests here.
from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView, GenericAPIView, get_object_or_404
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from users.serializers import UserSerializer, UserProfileSerializer
from project.permissions import IsStaffOrReadOnly
from users.permission import IsUser, IsNotUser


User = get_user_model()


class CurrentUserProfile(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        current_user = self.request.user.id
        queryset = User.objects.filter(id=current_user)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def get_object(self):
        return self.request.user


class ListCreateUser(ListCreateAPIView):
    queryset = User.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer


class RetrieveUpdateDestroyAPIViewUser(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = "user_id"
    permission_classes = [IsUser]


class ListOfAllUsers(GenericAPIView):
    serializer_class = UserProfileSerializer
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]

    def get(self, request, *args, **kwargs):
        # current_restaurant = self.request.user
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


# class DeleteUserUserProfile(GenericAPIView):
#     queryset = User.objects.all()
#     permission_classes = [IsStaffOrReadOnly]
#     serializer_class = UserSerializer
#     lookup_url_kwarg = "user_id"
#
#     def delete(self, request, *args, **kwargs):
#         user = self.request.user
#         user_tode = get_object_or_404(User, pk=kwargs.get("user_id"))  # getting post id by int in endpoint
#         if Response(status=204):
#             user_tode.remove(user.id)
#             return Response(status=203)

