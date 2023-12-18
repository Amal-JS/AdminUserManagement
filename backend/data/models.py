from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    phone = models.CharField(max_length=10)
    image = models.ImageField(upload_to='profile_pictures/',null=True,blank=True)

 
  
    def __str__(self) -> str:
        return f"{self.username} {self.phone}"
    


    