from django.contrib.auth import get_user_model
from django.db import models

from users.models import BuyerProfileModel

from item.models import ItemModel

RATE_CHOICES = (
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5)
)


def get_sentinel_user():
    return get_user_model().objects.get_or_create(username='deleted')[0]


class ReviewModel(models.Model):
    content = models.TextField()
    rating = models.IntegerField(choices=RATE_CHOICES)
    buyer_profile = models.ForeignKey(to=BuyerProfileModel, on_delete=models.SET(get_sentinel_user),
                                      related_name="reviews", blank=True)
    item = models.ForeignKey(to=ItemModel, on_delete=models.CASCADE, related_name="reviews", blank=True)

    def __str__(self):
        return f"ID{self.id}:{self.buyer_profile} rating: {self.rating}"
