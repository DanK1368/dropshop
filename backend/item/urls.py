from django.urls import path

from .views import ListCreateItemView, RetrieveUpdateDestroyItemView, ToggleFavouriteView, SearchItemView

urlpatterns = [
    path('', ListCreateItemView.as_view()),
    path('<int:item_id>/', RetrieveUpdateDestroyItemView.as_view()),
    path('favourite/<int:item_id>/', ToggleFavouriteView.as_view()),
    path('search/', SearchItemView.as_view()),

]
