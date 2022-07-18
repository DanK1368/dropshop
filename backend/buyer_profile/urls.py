from django.urls import path

from .views import RetrieveUpdateBuyerProfileView

urlpatterns = [
    path('', RetrieveUpdateBuyerProfileView.as_view()),

]