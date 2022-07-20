from django.urls import path

from .views import ListCreateColumnView, RetrieveDestroyColumnView, ToggleItemColumnView

urlpatterns = [
    path('', ListCreateColumnView.as_view()),
    path('<int:column_id>/', RetrieveDestroyColumnView.as_view()),
    path('item/<int:item_id>/', ToggleItemColumnView.as_view()),

]
