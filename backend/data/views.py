from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from . models import CustomUser
from django.contrib.auth.hashers import make_password
from . serializers import UserSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from . serializers import CustomTokenObtainPairSerilizer


class UserViewSets(viewsets.ModelViewSet):
    # when getting all data this query set is returned 
    queryset = CustomUser.objects.all()  
    serializer_class = UserSerializer


    def create(self,request):
        
        data = {
             'username' : request.data['username'],
             'email': request.data['email'],
             'password':make_password(request.data['password']),
             'phone':request.data['phone']
        }
        serializer = UserSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
       
            return Response({'userCreation':True})
        else:
             print(serializer.errors)
        return Response(serializer.errors,status=200)
    
    def retrieve(self,request,pk=None):
           
            username=request.GET.get('username','') 
            
            try:
                user = CustomUser.objects.get(username=username)
                
                userData={
                     'username':user.username,
                     'email':user.email,
                     'phone':user.phone,
                     'image':user.image.url if user.image else '',

                }
                print(userData['image'])
                return Response({'userData':userData})
            
            except CustomUser.DoesNotExist:
                return Response({'validUser':False})
            
           
    
    def destroy(self, request,pk=None, *args, **kwargs):
         username = request.GET.get('username',None)

         if username is not None:
            try:
                   user = CustomUser.objects.get(username=username)
                   user.delete()
                   return Response({'userDeleted':True})
            except CustomUser.DoesNotExist:
                 return Response({'userDeleted':False})
         return Response({'userDeleted':False})
    
    def update(self,request,pk=None, *args, **kwargs):
        
        print('partial method call')
        #want to get the image like this
        image_file = request.FILES.get('image',None)
  
        user = request.data.get('user')

        try:
             user = CustomUser.objects.get(username=user)
             print(f"user before update : {user}")
             # Extract other fields from request.data
             username = request.data.get('username',user.username)
             password = request.data.get('password',None)
             email = request.data.get('email',user.email)
             phone = request.data.get('phone',user.phone)
        except:
             
                pass
        # Create a dictionary with the extracted data
        
        data = {
                'username':username,
                'phone':phone,
                'email':email,
                'password':make_password(password) if password is not None else user.password,
                'image':image_file if image_file is not None else ''
          }
        print(data)
        # Pass the data to the serializer
        serializer = UserSerializer(instance=user,data=data)

        if serializer.is_valid():
            serializer.save()
            print(f"user after update : {user}")
            
            return Response({'userUpdated':True})
        else:
             print(serializer.errors)
        return Response(serializer.errors,status=400)
    



class  CustomTokenObtainPairView(TokenObtainPairView):
     serializer_class = CustomTokenObtainPairSerilizer