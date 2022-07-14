from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass


class Stock(models.Model):
    ticker = models.CharField(max_length=50, null = False, blank = False)
    followingUser = models.ForeignKey("User", on_delete= models.CASCADE)


# class BuySellNotification(models.Model):
#     user_revoker=models.ForeignKey(User,null=True,blank=True,related_name='user_revoker',on_delete=models.CASCADE)
#     status=models.CharField(max_length=264,null=True,blank=True,default="unread")
#     message=models.CharField(max_length=264, null=True,blank=True)
