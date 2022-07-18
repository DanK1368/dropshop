from django.urls import path

from users.views import RetrieveUpdateDestroyMeView

urlpatterns = [
    path('', RetrieveUpdateDestroyMeView.as_view()),

]
