from django.http import HttpResponse
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, get_object_or_404, \
    GenericAPIView
from rest_framework.views import APIView

from item.models import ItemModel
from wishlist.models import WishListModel
from wishlist.serializers import WishlistSerializer
from wishlist.permission import IsUser, IsNotUser


class AddToWishListView(APIView):

    #permission_classes = [IsUser]
    # serializer_class = WishlistSerializer

    def post(self, request, *args, **kwargs):
        buyer_profile = self.request.user.buyer_profile
        wishlist = WishListModel.objects.get(buyer_profile=buyer_profile.id)
        item_id = self.kwargs["item_id"]
        item = get_object_or_404(ItemModel, pk=item_id)  # getting post id by int in endpoint

        if item not in list(wishlist.item.all()):
            wishlist.item.add(item)
        else:
            wishlist.item.remove(item)

        return HttpResponse(status=201)





        # if Response(status=204):
        #     post.liked_by.remove(user.id)
        #     return Response(status=203)
        # if not item:
        #     review.liked_by.add(user.id)  # adding to list of "liked_by" the current user
        #     review.is_liked = True
        #     review.save()
        #     return Response(status=204)
        # else:
        #     review.liked_by.remove(user.id)
        #     review.is_liked = False
        #     review.save()
        #     return Response(status=204)

