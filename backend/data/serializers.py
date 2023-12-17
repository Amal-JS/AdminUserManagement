from rest_framework import serializers
from data.models import CustomUser
#to get back the username along with the jwt token
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username','phone','email','password']

class CustomTokenObtainPairSerilizer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # Include the username in the response data
        data['username'] = self.user.username
        data['isSuperUser'] = self.user.is_superuser
        print(f'data form the serilizer : ',data)

        return data