from django.urls import path
from .views import CategoryListView, RecipesListView


urlpatterns = [
    path('categories/', CategoryListView.as_view()),
    path('recipes/', RecipesListView.as_view()),
]
