from django.urls import path
from rest_framework import routers
from . import views
urlpatterns = [
    path("", views.index, name="Index"),
    path("register/", views.register, name ="Register"),
    path("logged_in/",views.is_logged_in, name="isLoggedIn"),
    path("login/",views.login, name="Login"),
    path("logout_user/", views.logout_user,name="Logout" ),
]