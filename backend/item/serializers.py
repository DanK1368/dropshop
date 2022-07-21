from rest_framework.serializers import ModelSerializer, SlugRelatedField

from .models import ItemModel
from category.models import CategoryModel

class ItemSerializer(ModelSerializer):
    category = SlugRelatedField(slug_field='name', queryset=CategoryModel.objects.all())

    class Meta:
        model = ItemModel
        fields = '__all__'


class CreateItemSerializer(ModelSerializer):
    class Meta:
        model = ItemModel
        fields = '__all__'
