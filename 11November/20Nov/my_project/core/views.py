from django.shortcuts import render

def home1(req):
    return render(req,'core/01.html')

def home2(req):
    return render(req,'core/02.html')