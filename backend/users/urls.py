from django.urls import path

from users.views import RetrieveUpdateDestroyMeView, RetrieveUpdateBuyerProfileView

urlpatterns = [
    path('me/', RetrieveUpdateDestroyMeView.as_view()),
    path('me/buyer/', RetrieveUpdateBuyerProfileView.as_view())

]
