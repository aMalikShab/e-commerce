from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from customer.views import SignupView, ProductView, SigninView, current_user
from rest_framework.authtoken.views import obtain_auth_token 

urlpatterns = [
    path("products/", ProductView.as_view({"get": "list"}), name="products"),
    path("signup/", SignupView.as_view(), name="signup"),
    # path("signin/", obtain_auth_token, name="signin"),
    path("signin/", SigninView.as_view()),
    path("current_user/", current_user),

    # path('product/<int:id>/', ProductDetailView.as_view(), name='product-detail')
]

