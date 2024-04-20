from django.shortcuts import render
from .models import Todos
from .serializers import TodosSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from project.models import Project


class TodosView(APIView):
    def get(self,request):
        Todos_data_obj = Todos.objects.all()
        serializer_data = TodosSerializer(Todos_data_obj,many=True)
        return Response(serializer_data.data)

    def post(self,request):
        _data = request.data
        heading = _data.get('heading')
        description = _data.get('description')
        project = Project.objects.get(pk=_data.get('project_id'))
        try:
            todo = Todos.objects.create(heading=heading,description=description,project=project)
            return Response('Todo Added')
        except e:
            return Response('Somethings wants wrongs')


class TodoView(APIView):
    def get(self, request, pk, format=None):
        try:
            _data = Todos.objects.get(pk=pk)
            serializer = TodosSerializer(_data)
            return Response(serializer.data)
        except Todos.DoesNotExist:
            return Response('Project Not Found this Name')
    
    def put(self, request, pk, format=None):
        todo = Todos.objects.get(pk=pk)
        serializer = TodosSerializer(todo, data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request, pk, format=None):
        try:
            Todo = Todos.objects.get(pk=pk)
            Todo.delete()
            return Response("Todo Deleted")
        except Todo.DoesNotExist:
            return Response('Todo Not Found this Name')