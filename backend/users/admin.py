from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model

# from .models import BuyerProfileModel, SellerProfileModel
from users.models import BuyerProfileModel

User = get_user_model()


class MyUserAdmin(UserAdmin):   # using the built-in class 'UserAdmin' from django authentication
    readonly_fields = ('date_joined',)  # show in the admin when the user was created
    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2')}
            # show email, username and twice the password when editing the profile
         ),
    )
    # fields when reading / updating an instance
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        # different sections when editing the profile
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
        # permissions supplied when creating the user
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        # different sections when editing the profile
        ('Groups', {'fields': ('groups',)}),
    )
    # fields which are shown when looking at a list of instances
    list_display = ('id', 'username', 'email')
    # display when going to the user section of admin
    ordering = ('email',) # order users by email in alphabetic order


# TODO Write custom implementation admin implementation where necessary
admin.site.register(User, MyUserAdmin)  # applying the configuration
admin.site.register(BuyerProfileModel)
# admin.site.register(SellerProfileModel)
