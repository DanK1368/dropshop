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
