from django.shortcuts import render
from .models import Project

# Create your views here.
def servicios(request):
    projects = Project.objects.all()
    return render(request, "servicios/servicios.html", {'projects':projects})

    