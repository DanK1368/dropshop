from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer

UserModel = get_user_model()


class RegisterUserSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['email', 'username', 'password']


class ValidateUserSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['email']
