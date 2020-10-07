from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("id", "item_title", "item_desc", "item_price", "item_image_url")

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name']

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "password",
            "first_name",
            "last_name",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    # def create(self, validated_data):
    #     username = validated_data["username"]
    #     email = validated_data["email"]
    #     password = validated_data["password"]
    #     first_name = validated_data["first_name"]
    #     last_name = validated_data["last_name"]
    #     userObj = User(username=username, email=email, password=password, first_name=first_name, last_name=last_name)
    #     userObj.save()
    #     return validated_data
    def create(self, validated_data):
        password = validated_data.pop("password", None)
        userObj = self.Meta.model(**validated_data)
        if password is not None:
            userObj.set_password(password)
        userObj.save()
        return userObj
