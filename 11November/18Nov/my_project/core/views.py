from django.shortcuts import render 

def index01(req):
    return render(req,'core/01.html')

def index02(req):
    return render(req,'core/02.html')
