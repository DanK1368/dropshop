from django.db import models

from buyer_profile.models import BuyerProfileModel


class OrderModel(models.Model):
    buyer_profile = models.ForeignKey(to=BuyerProfileModel, on_delete=models.CASCADE, related_name='orders')
    payment_status = models.BooleanField(default=False)
