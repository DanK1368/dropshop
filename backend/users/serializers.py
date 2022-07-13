from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    #user = serializers.SerializerMethodField()
    class Meta:
        model = User
        #fields = '__all__'
        fields = ['id', 'email', 'username', 'is_active', 'first_name', 'last_name','email', 'street', 'city', 'zip', 'country', 'phone_number']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'first_name', 'last_name']