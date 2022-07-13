from django.urls import path

from .views import ListCreateCategoriesView, RetrieveUpdateDestroyCategoryView

urlpatterns = [
    path('', ListCreateCategoriesView.as_view()),
    path('<int:category_id>/', RetrieveUpdateDestroyCategoryView.as_view()),
]
