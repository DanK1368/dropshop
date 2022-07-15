from django.contrib import admin

# Register your models here.
from review.models import Review
from users.serializers import UserSerializer


class ReviewAdmin(admin.ModelAdmin):
    list_display = ['id', 'item', 'content', 'rating']

    # def like_count(self, instance):
    #     return f'{instance.liked_by.count()}'

admin.site.register(Review, ReviewAdmin)
