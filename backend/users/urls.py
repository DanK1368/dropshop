from django.urls import path

from users.views import CurrentUserProfile, ListCreateUser, RetrieveUpdateDestroyAPIViewUser, ListOfAllUsers

urlpatterns = [
    path('me/', CurrentUserProfile.as_view()),
    path('<int:user_id>/', RetrieveUpdateDestroyAPIViewUser.as_view()),
    path('', ListOfAllUsers.as_view()),

]


