from django.contrib.auth import get_user_model
from django.core.mail import send_mail

from rest_framework.generics import CreateAPIView, GenericAPIView, get_object_or_404
from rest_framework.mixins import UpdateModelMixin
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .serializers import RegisterUserSerializer, ValidateUserSerializer

UserModel = get_user_model()


class RegisterUserView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = UserModel.objects.all()
    serializer_class = RegisterUserSerializer

    def perform_create(self, serializer):
        serializer.save(is_active=False)


# TODO Add a is_validated boolean field to the User model
class ValidateUserView(GenericAPIView, UpdateModelMixin):
    permission_classes = [AllowAny]
    queryset = UserModel.objects.all()
    serializer_class = ValidateUserSerializer

    def post(self, request, *args, **kwargs):
        user_instance = get_object_or_404(UserModel, email=request.data['email'])
        validation_code = user_instance.registration_profile.code

        if request.data["validation_code"] == validation_code:
            return self.update(request, *args, **kwargs)
        else:
            return Response(data="Wrong validation code", status=400)

    def perform_update(self, serializer):
        serializer.save(is_active=True)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = get_object_or_404(UserModel, email=request.data['email'])
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        send_mail(
            'Welcome to DropShop!',
            f'Felicitations! You are now ready to shop!',
            'alphadelta566@gmail.com',
            [f'{self.request.data["email"]}'],
            fail_silently=False,
        )

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(data="Validation successful", status=200)
