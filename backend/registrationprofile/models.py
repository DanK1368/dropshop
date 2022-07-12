import random

from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

UserModel = get_user_model()


def code_generator(length=6):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class RegistrationProfileModel(models.Model):
    user = models.OneToOneField(to=UserModel, on_delete=models.CASCADE, primary_key=True,
                                related_name="registration_profile")
    code = models.CharField(max_length=6, default=code_generator)

    def __str__(self):
        return f"Registration Profile for: {self.user}"


@receiver(post_save, sender=UserModel)
def create_registration_profile(sender, instance, *args, **kwargs):
    profile, created = RegistrationProfileModel.objects.get_or_create(user=instance)
    if created:
        profile.save()

        user_email = profile.user.email
        validation_code = profile.code

        send_mail(
            'Registration Code for DropShop',
            f'Validation Code: {validation_code}',
            'alphadelta566@gmail.com',
            [f'{user_email}'],
            fail_silently=False,
        )
