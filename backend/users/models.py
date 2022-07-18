from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver

from item.models import ItemModel


class User(AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField("password", max_length=128)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username


class BuyerProfileModel(models.Model):
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    street = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    zip = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=100, blank=True)
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, null=True, blank=True, related_name='buyer_profile')
    favourite_items = models.ManyToManyField(to=ItemModel)
    # TODO Relations: wish_list

    def __str__(self):
        return f"BuyerProfile | Username: {self.user.username} | Email: {self.user.email}"


class SellerProfileModel(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, null=True, blank=True, related_name='seller_profile')


# Create seller profile or buyer profile when UserModel is created
@receiver(post_save, sender=User)
def create_buyer_seller_profile(sender, instance, *args, **kwargs):
    user_instance = instance
    if user_instance.is_superuser:
        seller_profile, seller_created = SellerProfileModel.objects.get_or_create(user=instance)
        if seller_created:
            seller_profile.save()

    elif not user_instance.is_superuser:
        buyer_profile, buyer_created = BuyerProfileModel.objects.get_or_create(user=instance)
        if buyer_created:
            buyer_profile.save()
