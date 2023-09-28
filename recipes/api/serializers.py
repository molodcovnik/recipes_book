from rest_framework import serializers
from book.models import Category, Recipe


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', )


class RecipeSerializer(serializers.ModelSerializer):

    # category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), many=True)
    
    category = CategorySerializer(many=True, read_only=True)
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'ingredients', 'text', 'cooking_time',
                  'category', 'preview_img', 'main_img', 'time_add', )
        depth = 1



class RecipeCreateSerializer(serializers.ModelSerializer):

    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), many=True)
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'ingredients', 'text', 'cooking_time',
                  'category', 'preview_img', 'main_img', 'time_add', )
        depth = 1
