from rest_framework import serializers

from review.models import ReviewModel


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewModel
        fields = '__all__'


class ListRetrieveReviewSerializer(serializers.ModelSerializer):
    item = serializers.StringRelatedField()

    class Meta:
        model = ReviewModel
        fields = '__all__'
