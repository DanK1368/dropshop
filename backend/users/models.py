from django.core.validators import MaxValueValidator, RegexValidator
from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField("password", max_length=128)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=200, blank=True, null=True)
    last_name = models.CharField(max_length=200, blank=True, null=True)
    street = models.CharField(max_length=200,blank=True, null=True)
    city = models.CharField(max_length=200,blank=True, null=True)
    zip = models.PositiveIntegerField(validators=[
        MaxValueValidator(99950,
                          'The entered zip code is invalid.')
    ], blank=True, null=True)

    country = models.CharField(max_length=150, blank=True, null=True)
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.",
    )
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)

    #buyer_profile = models.ForeignKey(Registrationprofile, on_delete=models.SET_NULL, null=True)
    #seller_profile = models.ForeignKey(Sellerprofile, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.username


