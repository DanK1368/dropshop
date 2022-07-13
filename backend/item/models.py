from django.db import models


class ItemModel(models.Model):
    # TODO figure out how ImageFields and FileFields work
    name = models.CharField(max_length=50)
    description = models.TextField()
    features = models.TextField()
    box_items = models.TextField()
    stock = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    image = models.ImageField()
    video = models.FileField()
    # TODO Relations: SellerProfile, Category, Wishlist
