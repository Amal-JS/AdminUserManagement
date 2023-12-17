from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=10)
    image = models.ImageField(upload_to='profile_pictures/',default='',null=True,blank=True)

    def save(self, *args, **kwargs):
        # Hash the password before saving the user
        self.password = make_password(self.password)
        super().save(*args, **kwargs)

  
    def __str__(self) -> str:
        return f"{self.username} {self.phone}"
    


    