from django.urls import path

from .views import RegisterUserView, ValidateUserView

urlpatterns = [
    path('', RegisterUserView.as_view()),
    path('validation/', ValidateUserView.as_view()),
]
