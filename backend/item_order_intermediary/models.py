from django.db import models

from item.models import ItemModel
from order.models import OrderModel


class ItemOrderIntermediaryModel(models.Model):
    item = models.ForeignKey(to=ItemModel, on_delete=models.DO_NOTHING)
    order = models.ForeignKey(to=OrderModel, on_delete=models.DO_NOTHING, related_name='item_order_intermediaries')
