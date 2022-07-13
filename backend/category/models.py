from django.db import models

from item.models import ItemModel


class CategoryModel(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"id: {self.name} | name: {self.id}"
