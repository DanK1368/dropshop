from rest_framework import serializers

from wishlist.models import WishListModel


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        # unique_together = (
        #     ('item', 'buyer_profile'),
        # )

        model = WishListModel
        fields = '__all__'


# class WishlistCreateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = WishListModel
#         fields = '__all__'