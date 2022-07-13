from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import CategoryModel

from .serializers import CategorySerializer


class ListCreateCategoriesView(ListCreateAPIView):
    queryset = CategoryModel
    serializer_class = CategorySerializer


class RetrieveUpdateDestroyCategoryView(RetrieveUpdateDestroyAPIView):
    queryset = CategoryModel
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'
