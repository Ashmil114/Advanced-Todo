from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from .serializers import SignUpSerializer

# Create your views here.


class SignUpView(APIView):
    
    def post(self,request):
        _data = request.data
        serializer=SignUpSerializer(data = _data)
        if not serializer.is_valid():
            return Response(serializer.errors)
        serializer.save()
        return Response({'message':'User Created'})


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'username':user.username
        })