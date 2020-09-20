from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView
from rest_framework import generics
from .serializers import ProductSerializer, UserCreateSerializer
from .models import Product
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

# Create your views here.
class ProductView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    queryset = Product.objects.all()


class SignupView(CreateAPIView):
    serializer_class = UserCreateSerializer
    # queryset = User.objects.all()

# class SigninView(generics.GenericAPIView):
#     serializer_class = UserLoginSerializer
#     def post(self, request, *args, **kwargs):
#         print("post method found")
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data
#         print("view.user=",user)
#         token, created = Token.objects.get_or_create(user=user)
#         print("token=",token.key)
#         return Response({
#             "email": user.email,
#             "token": token.key
#         })
