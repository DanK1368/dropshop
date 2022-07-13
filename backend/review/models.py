from django.db import models
from django.contrib.auth import get_user_model

from buyerprofile.models import BuyerProfile
from item.models import ItemModel

# Create your models here.

User = get_user_model()

class Review(models.Model):
        content = models.CharField(max_length=200)
        rate_choices = (
                (1, 1),
                (2, 2),
                (3, 3),
                (4, 4),
                (5, 5)
            )
        rating = models.IntegerField(choices=rate_choices, blank=True, null=True)

        buyer_profile = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name="user_reviews")
        item = models.ForeignKey(ItemModel, on_delete=models.SET_NULL, null=True, related_name="item_reviews")

        # def __str__(self):
        #         return f"ID{self.id}:{self.user} rating{self.rating}"
