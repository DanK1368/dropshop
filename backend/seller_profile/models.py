from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

UserModel = get_user_model()


class SellerProfileModel(models.Model):
    user = models.OneToOneField(to=UserModel, on_delete=models.CASCADE, null=True, blank=True,
                                related_name='seller_profile')


@receiver(post_save, sender=UserModel)
def create_seller_profile(sender, instance, *args, **kwargs):
    user_instance = instance
    if user_instance.is_superuser:
        seller_profile, seller_created = SellerProfileModel.objects.get_or_create(user=instance)
        if seller_created:
            seller_profile.save()
