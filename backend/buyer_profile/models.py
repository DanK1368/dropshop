from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from item.models import ItemModel

UserModel = get_user_model()


class BuyerProfileModel(models.Model):
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    street = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    zip = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=100, blank=True)
    user = models.OneToOneField(to=UserModel, on_delete=models.CASCADE, null=True, blank=True,
                                related_name='buyer_profile')
    favourite_items = models.ManyToManyField(to=ItemModel)
    # TODO Relations: wish_list

    # def __str__(self):
    #     return f"BuyerProfile | Username: {self.user.username} | Email: {self.user.email}"


@receiver(post_save, sender=UserModel)
def create_buyer_profile(sender, instance, *args, **kwargs):
    user_instance = instance
    if not user_instance.is_superuser:
        buyer_profile, buyer_created = BuyerProfileModel.objects.get_or_create(user=instance)
        if buyer_created:
            buyer_profile.save()


