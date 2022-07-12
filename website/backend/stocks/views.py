from json import JSONDecodeError
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
# from .models import Todo
# Create your views here.



def index(request):
    return JsonResponse({"success": True})