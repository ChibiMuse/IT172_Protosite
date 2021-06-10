from django.shortcuts import path, render
from . import views
	

# Create your views here.
urlpatterns = [
    path('', views.index, name='index'),
]