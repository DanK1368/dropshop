# Generated by Django 4.0.6 on 2022-07-22 14:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('item', '0001_initial'),
        ('buyer_profile', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='WishListModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('buyer_profile', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='wish_list', to='buyer_profile.buyerprofilemodel')),
                ('item', models.ManyToManyField(related_name='wish_list', to='item.itemmodel')),
            ],
        ),
    ]
