from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return f'{self.name}'


class Recipe(models.Model):
    title = models.CharField(max_length=256, default='')
    ingredients = models.TextField(max_length=1024)
    text = models.TextField()
    cooking_time = models.CharField(max_length=128, blank=True)
    category = models.ManyToManyField(Category)
    preview_img = models.ImageField(upload_to='images/recipes/%Y/%m/%d/', blank=True)
    main_img = models.ImageField(upload_to='images/recipes/%Y/%m/%d/')
    time_add = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.ingredients}, {self.text}, {self.cooking_time}, {self.category}, {self.time_add}'
