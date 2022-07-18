from django.db import models
from django.contrib.auth import get_user_model

from item.models import ItemModel
from users.models import BuyerProfileModel

User = get_user_model()


class WishListModel(models.Model):
    #user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='wishlist')
    item = models.ManyToManyField(ItemModel, related_name='wish_list')
    buyer_profile = models.ForeignKey(BuyerProfileModel, on_delete=models.CASCADE, null=True, related_name='wish_list')
