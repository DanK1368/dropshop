from django.db import models

from seller_profile.models import SellerProfileModel
from item.models import ItemModel

class ColumnModel(models.Model):
    title = models.CharField(max_length=200)
    seller_profile = models.ForeignKey(to=SellerProfileModel, on_delete=models.CASCADE, blank=True,
                                       related_name='columns')
    items = models.ManyToManyField(to=ItemModel, blank=True)
