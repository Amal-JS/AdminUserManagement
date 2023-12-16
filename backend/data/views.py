from django.shortcuts import render
from rest_framework import viewsets
from . models import CustomUser
from . serializers import UserSerializer
from rest_framework.response import Response


class UserViewSets(viewsets.ModelViewSet):
    # when getting all data this query set is returned 
    queryset = CustomUser.objects.all()  
    serializer_class = UserSerializer


    def create(self,request):

        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
       
            return Response({'userCreation':True})
        else:
             print(serializer.errors)
        return Response(serializer.errors,status=200)
    
    def retrieve(self,request,pk=None):
           
            username=request.GET.get('username','') 
            password= request.GET.get('password','') 
            try:
                user = CustomUser.objects.get(username=username)
    
                if user.password == password:
                    return Response({'validUser':True,'username':username})
            except CustomUser.DoesNotExist:
                return Response({'validUser':False})
            
            return Response({'validUser':False})
    

