from django.shortcuts import render
from rest_framework import generics

from book.models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer
from .pagination import LargeResultsSetPagination


# Create your views here.

class CategoryListView(generics.ListAPIView):
    serializer_class = CategorySerializer
    pagination_class = LargeResultsSetPagination

    def get_queryset(self):
        return Category.objects.all()


class RecipesListView(generics.ListAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        queryset = Recipe.objects.all().order_by('-time_add')
        category = self.request.query_params.get("category")
        if category is not None:
            return queryset.filter(category__name=category)
        return queryset
