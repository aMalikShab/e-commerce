from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product

# Create your views here.
class ProductView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
