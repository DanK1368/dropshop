from django.urls import path
from django.urls import path

from review.views import ReviewCreateView, RetrieveUpdateDestroyAPIViewReview, GetReviewsFromSpecificUser, \
    UpdateSpecificReview
urlpatterns = [
    # create a review
    path('', ReviewCreateView.as_view()),


]