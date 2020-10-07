from rest_framework import viewsets, status, generics
from rest_framework.generics import CreateAPIView
from .serializers import ProductSerializer, UserCreateSerializer, UserSerializer
from .models import Product
from rest_framework.permissions import AllowAny

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from rest_framework.decorators import api_view

# Create your views here.
class ProductView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    queryset = Product.objects.all()


class SignupView(CreateAPIView):
    permission_classes = [AllowAny]
    def post(self, request, format=None):
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SigninView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "first_name": user.first_name,
            "token": token.key
        })

@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

# class ProductDetailView(viewsets.ViewSet):
#     permission_classes = [AllowAny]
#     def retrieve(self, request, pk=None):
#         queryset = Product.objects.all()
#         product = get_object_or _404(queryset, pk=pk)
#         serializer = ProductSerializer(product)
#         return Response(serializer.data)