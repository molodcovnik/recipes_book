# Generated by Django 4.2.5 on 2023-09-19 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0002_recipe_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='text',
            field=models.TextField(),
        ),
    ]
