from django.urls import path

from review.views import CreateReviewView, ListReviewView, RetrieveUpdateReviewView

urlpatterns = [
    path('', ListReviewView.as_view()),
    path('new/<int:item_id>/', CreateReviewView.as_view()),
    path('<int:review_id>/', RetrieveUpdateReviewView.as_view()),

]
