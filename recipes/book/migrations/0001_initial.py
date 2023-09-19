# Generated by Django 4.2.5 on 2023-09-18 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ingredients', models.CharField(max_length=1024)),
                ('text', models.CharField(max_length=2048)),
                ('cooking_time', models.CharField(blank=True, max_length=128)),
                ('preview_img', models.ImageField(blank=True, upload_to='images/recipes/%Y/%m/%d/')),
                ('main_img', models.ImageField(upload_to='images/recipes/%Y/%m/%d/')),
                ('time_add', models.DateTimeField(auto_now_add=True)),
                ('category', models.ManyToManyField(to='book.category')),
            ],
        ),
    ]
