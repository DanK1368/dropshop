from django.db import models
from django.contrib.auth import get_user_model

from item.models import ItemModel

User = get_user_model()

class WishListModel(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='wishlist')
    item = models.ManyToManyField
    buyer_profile = models.OneToOneField()
