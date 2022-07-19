from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

from buyer_profile.models import BuyerProfileModel
from item.models import ItemModel


User = get_user_model()


class WishListModel(models.Model):
    #user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='wishlist')
    item = models.ManyToManyField(ItemModel, related_name='wish_list')
    buyer_profile = models.OneToOneField(BuyerProfileModel, on_delete=models.CASCADE, blank=True, null=True, related_name='wish_list')



@receiver(post_save, sender=BuyerProfileModel)
def create_wish_list(sender, instance, *args, **kwargs):
    user_instance = instance
    wish_list, wishlist_created = WishListModel.objects.get_or_create(buyer_profile=instance)
    if wishlist_created:
        wish_list.save()
