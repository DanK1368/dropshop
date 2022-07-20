from django.http import HttpResponse, JsonResponse
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, get_object_or_404, \
    GenericAPIView
from rest_framework.views import APIView
from rest_framework.response import Response


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

class GetAllItemsInWishlistView(GenericAPIView):
    serializer_class = WishlistSerializer
    queryset = WishListModel.objects.all()

    def get(self, request, *args, **kwargs):
        # current_user = self.request.user
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)



# class RetrieveUpdateDestroyItemView(RetrieveUpdateDestroyAPIView):
#             queryset = ItemModel.objects.all()
#             serializer_class = ItemSerializer
#             lookup_url_kwarg = 'item_id'

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

