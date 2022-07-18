# Generated by Django 4.0.5 on 2022-07-15 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0001_initial'),
        ('wishlist', '0007_remove_wishlistmodel_user_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wishlistmodel',
            name='item',
        ),
        migrations.AddField(
            model_name='wishlistmodel',
            name='item',
            field=models.ManyToManyField(related_name='wish_list', to='item.itemmodel'),
        ),
    ]
