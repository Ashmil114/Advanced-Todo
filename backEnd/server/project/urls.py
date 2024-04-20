from django.urls import path
from .views import ProjectsView,ProjectView


urlpatterns = [
    path('',ProjectsView.as_view()),
    path('project-detail/<slug:pk>',ProjectView.as_view()),
    
]
