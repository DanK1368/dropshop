from django.urls import path

from wishlist.views import AddToWishListView, GetAllItemsInWishlistView

urlpatterns = [
    path('<int:item_id>/', AddToWishListView.as_view()),
    path('me/', GetAllItemsInWishlistView.as_view()),

]


