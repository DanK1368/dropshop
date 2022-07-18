from rest_framework import status
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.response import Response

from .models import BuyerProfileModel

from .serializers import BuyerProfileSerializer


class RetrieveUpdateBuyerProfileView(RetrieveUpdateAPIView):
    queryset = BuyerProfileModel.objects.all()
    serializer_class = BuyerProfileSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.request.user.buyer_profile
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.request.user.buyer_profile
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED, data="Use 'PATCH' to update Buyer Profile")
