from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    phone = models.CharField(max_length=10)
  
    def __str__(self) -> str:
        return f"{self.username} {self.phone}"
    


    