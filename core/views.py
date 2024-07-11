from django.shortcuts import render, HttpResponse


# Create your views here.

def index(request):
    return render(request, "core/index.html")

def preguntasfrecuentes(request):
    return render(request, "core/preguntasfrecuentes.html")

def contacto(request):
    return render(request, "core/contacto.html")
