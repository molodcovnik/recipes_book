from django.urls import path
from .views import CategoryListView, RecipesListView, RecipeCreateDestroyView

urlpatterns = [
    path('categories/', CategoryListView.as_view()),
    path('recipes/', RecipesListView.as_view()),
    path('recipes/<int:pk>/delete/', RecipeCreateDestroyView.as_view()),
    path('recipes/create/', RecipeCreateDestroyView.as_view()),
]
