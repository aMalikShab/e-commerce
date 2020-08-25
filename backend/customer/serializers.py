from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields= ('id','item_title', 'item_desc', 'item_price', 'item_image_url')