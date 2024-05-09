from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from rest_framework import generics
from .models import User
from .serializer import UserSerializer

# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def helloWorld(HttpRequest):
    return HttpResponse("Hello World")