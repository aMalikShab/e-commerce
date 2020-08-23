from django.db import models

# Create your models here.

class Product(models.Model):
    item_title= models.CharField(max_length=50)
    item_desc=models.TextField()
    item_price=models.IntegerField()
    item_image=models.ImageField(upload_to='post_images',default='default.png')