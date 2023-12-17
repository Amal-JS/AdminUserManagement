from django.shortcuts import render
from rest_framework import viewsets
from . models import CustomUser
from . serializers import UserSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from . serializers import CustomTokenObtainPairSerilizer


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
    
    def destroy(self, request, *args, **kwargs):
         username = request.GET.get('username',None)

         if username is not None:
            try:
                   user = CustomUser.objects.get(username=username)
                   user.delete()
                   return Response({'userDeleted':True})
            except CustomUser.DoesNotExist:
                 return Response({'userDeleted':False})
         return Response({'userDeleted':False})
    
    def partial_update(self,request):

        #want to get the image like this
        image_file = request.FILES.get('image',None)
        
        # Extract other fields from request.data
        user = request.data.get('user')
        username = request.data.get('username',user.username)
        password = request.data.get('password',user.password)
        email = request.data.get('email',user.email)
        phone = request.data.get('phone',user.phone)
        

        try:
             user = CustomUser.objects.get(username=user)
        except:
             
                pass
        # Create a dictionary with the extracted data

        if image_file is not None:
            data = {
                'username':username,
                'phone':phone,
                'email':email,
                'password':password,
                
            }
        else:
             data ={
                  'image':image_file
             }

        # Pass the data to the serializer
        serializer = UserSerializer(instance=user,data=data,partial=True)
        if serializer.is_valid():
            serializer.save()
       
            
            return Response({'userUpdated':True})
        else:
             print(serializer.errors)
        return Response(serializer.errors,status=400)
    



class  CustomTokenObtainPairView(TokenObtainPairView):
     serializer_class = CustomTokenObtainPairSerilizer