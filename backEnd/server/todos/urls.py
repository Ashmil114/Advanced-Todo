from django.urls import path
from .views import TodosView,TodoView


urlpatterns = [
    path('',TodosView.as_view()),
    path('todo-detail/<slug:pk>',TodoView.as_view()),
    
    
    
]