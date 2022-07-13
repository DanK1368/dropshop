from django.urls import path

from .views import ListCreateItemView, RetrieveUpdateDestroyItemView

urlpatterns = [
    path('', ListCreateItemView.as_view()),
    path('<int:item_id>/', RetrieveUpdateDestroyItemView.as_view()),

]
