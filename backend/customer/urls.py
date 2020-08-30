from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from customer.views import SignupView, ProductView

urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("products/", ProductView.as_view({"get": "list"}), name="products"),
]

