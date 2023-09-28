from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import generics, mixins, status
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from book.models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer, RecipeCreateSerializer
from .pagination import LargeResultsSetPagination


class CategoryListView(generics.ListAPIView):
    serializer_class = CategorySerializer
    pagination_class = LargeResultsSetPagination

    def get_queryset(self):
        return Category.objects.all()


class RecipesListView(generics.ListCreateAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        queryset = Recipe.objects.all().order_by('-time_add')
        category = self.request.query_params.get("category")
        id = self.request.query_params.get("id")

        if category is not None:
            return queryset.filter(category__name=category)
        
        elif id is not None:
            return queryset.filter(id=id)
        return queryset

class RecipeCreateDestroyView(generics.CreateAPIView, mixins.DestroyModelMixin): # оставить потом просто CreateAPIView
    serializer_class = RecipeCreateSerializer

    def get_queryset(self):
        return Recipe.objects.filter(pk=self.kwargs['pk'])

    def delete(self, request, *args, **kwargs):
        if self.get_queryset().exists():
           self.get_queryset().delete()
           return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            raise ValidationError('Not delete')
