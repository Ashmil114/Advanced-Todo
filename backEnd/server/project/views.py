from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status

from .models import Project
from .serializers import ProjectsSerializer

class ProjectsView(APIView):
    def get(self,request):
        projects_data_obj = Project.objects.all()
        serializer_data = ProjectsSerializer(projects_data_obj,many=True)
        return Response(serializer_data.data)
    
    def post(self,request):
        _data = request.data
        title = _data.get('title')
        owner = User.objects.get(pk=_data.get('user_id'))
        
        Already_Added = Project.objects.filter(title=title,owner=owner)
        
        if not Already_Added:
            project = Project.objects.create(title=title,owner=owner)
            return Response('Project Created')
        else:
            return Response('Project Already Existed as this name')
        
class ProjectView(APIView):
    def get(self, request, pk, format=None):
        try:
            _data = Project.objects.get(pk=pk)
            serializer = ProjectsSerializer(_data)
            return Response(serializer.data)
        except Project.DoesNotExist:
            return Response('Project Not Found this Name')
    
    def put(self, request, pk, format=None):
        project = Project.objects.get(pk=pk)
        serializer = ProjectsSerializer(project, data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request, pk, format=None):
        try:
            project = Project.objects.get(pk=pk)
            project.delete()
            return Response("Project Deleted")
        except Project.DoesNotExist:
            return Response('Project Not Found this Name')