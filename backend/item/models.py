from django.db import models

from category.models import CategoryModel
from seller_profile.models import SellerProfileModel


class ItemModel(models.Model):
    # TODO figure out how ImageFields and FileFields work
    name = models.CharField(max_length=50)
    description = models.TextField()
    features = models.TextField()
    box_items = models.TextField()
    stock = models.PositiveIntegerField()
    price = models.FloatField()
    image = models.ImageField(blank=True, null=True)
    video = models.FileField(blank=True, null=True)
    category = models.ForeignKey(to=CategoryModel, on_delete=models.PROTECT)
    seller_profile = models.ForeignKey(to=SellerProfileModel, on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return f"{self.name}"
