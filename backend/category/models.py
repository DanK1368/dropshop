from django.db import models


class CategoryModel(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"Id: {self.id} | Name: {self.name}"
