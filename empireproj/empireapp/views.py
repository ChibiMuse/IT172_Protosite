from django.shortcuts import path, render
from . import views
	

# Create your views here.
urlpatterns = [
    path('', views.index, name='index'),
]

def index(request):
    return render(request, 'empire/index.html')