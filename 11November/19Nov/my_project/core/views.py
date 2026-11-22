# from django.http import HttpResponse
from django.shortcuts import render

def home(r):
    return render(r,"core/home.html")
    