from django.urls import path
from django.urls import path

from review.views import ReviewCreateView, RetrieveUpdateDestroyReviewView, GetAllReviews

urlpatterns = [
    # create a review
    path('', ReviewCreateView.as_view()),
    path('<int:review_id>/', RetrieveUpdateDestroyReviewView.as_view()),
    path('', GetAllReviews.as_view()),
]