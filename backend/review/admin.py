from django.contrib import admin

from review.models import ReviewModel


class ReviewAdmin(admin.ModelAdmin):
    list_display = ['id', 'item', 'content', 'rating']


admin.site.register(ReviewModel, ReviewAdmin)
