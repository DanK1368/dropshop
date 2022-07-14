from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import BuyerProfileModel
UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['email', 'username']


class BuyerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuyerProfileModel
        fields = '__all__'
