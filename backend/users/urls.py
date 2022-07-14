from django.urls import path

from users.views import RetrieveUpdateDestroyMeView, RetrieveUpdateDestroyUserView, ListUsersView

urlpatterns = [
    path('', ListUsersView.as_view()),
    path('me/', RetrieveUpdateDestroyMeView.as_view()),
    path('<int:user_id>/', RetrieveUpdateDestroyUserView.as_view()),

]
