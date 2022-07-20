from django.db import models

from category.models import CategoryModel
from seller_profile.models import SellerProfileModel


def files_path(instance, filename):
    return f'{instance.id}/{filename}'


class ItemModel(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    features = models.TextField()
    box_items = models.TextField()
    stock = models.PositiveIntegerField()
    price = models.FloatField()
    image = models.ImageField(blank=True, null=True, upload_to=files_path)
    video = models.FileField(blank=True, null=True, upload_to=files_path)
    category = models.ForeignKey(to=CategoryModel, on_delete=models.PROTECT)
    seller_profile = models.ForeignKey(to=SellerProfileModel, on_delete=models.CASCADE, related_name='items',
                                       blank=True, null=True)

    def __str__(self):
        return f"{self.name}"
