from django.urls import path

from wishlist.views import AddToWishListView

urlpatterns = [
    path('<int:item_id>/', AddToWishListView.as_view()),

]


