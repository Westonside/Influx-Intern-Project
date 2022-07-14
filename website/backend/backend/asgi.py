import os
from channels.routing import ProtocolTypeRouter,URLRouter
from channels.auth import AuthMiddlewareStack
from stocks import consumers

from django.urls import re_path,path
from django.core.asgi import get_asgi_application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mirror_project.settings')
import stories.routing
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket":AuthMiddlewareStack(
URLRouter(
[path('stories/notification_testing/',consumers.NotificationConsumer.as_asgi())]
))
    
    
    
})