from rest_framework.serializers import ModelSerializer

from .models import BuyerProfileModel


class BuyerProfileSerializer(ModelSerializer):
    class Meta:
        model = BuyerProfileModel
        fields = '__all__'
