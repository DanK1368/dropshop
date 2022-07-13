from rest_framework.serializers import ModelSerializer

from .models import ItemModel
from category.serializers import CategorySerializer


class ItemSerializer(ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = ItemModel
        fields = '__all__'
