from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView
from .serializers import ProductSerializer, UserCreateSerializer
from .models import Product, User
from rest_framework.serializers import ModelSerializer

# Create your views here.
class ProductView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class SignupView(CreateAPIView):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()
