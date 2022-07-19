from django.urls import path

from .views import CreateAuthenticatedOrderView, CreateGuestOrderView, ListOrdersView, RetrieveOrderView

urlpatterns = [
    path('', CreateAuthenticatedOrderView.as_view()),
    path('guest/', CreateGuestOrderView.as_view()),
    path('list/', ListOrdersView.as_view()),
    path('<int:order_id>/', RetrieveOrderView.as_view()),

]
