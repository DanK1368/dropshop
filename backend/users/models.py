from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField("password", max_length=128)
    email = models.EmailField(unique=True)
    #buyer_profile = models.ForeignKey(Registrationprofile, on_delete=models.SET_NULL, null=True)
    #seller_profile = models.ForeignKey(Sellerprofile, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.username


