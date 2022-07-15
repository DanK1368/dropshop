from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, get_object_or_404

from item.models import ItemModel
from wishlist.models import WishListModel
from wishlist.serializers import WishlistSerializer
from wishlist.permission import IsUser, IsNotUser


class AddToWishListView(ListCreateAPIView):
    queryset = WishListModel.objects.all()
    #permission_classes = []
    serializer_class = WishlistSerializer

    def post(self, request, *args, **kwargs):
        #user = self.request.user
        item_id = self.kwargs["item_id"]

        item = get_object_or_404(ItemModel, pk=item_id)  # getting post id by int in endpoint
        if item.WishList.filter(id=request.user.id).exists():
            item.WishList.remove(request.user)
        else:
            item.WishList.add(request.user)





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

