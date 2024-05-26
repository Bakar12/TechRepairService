from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('authentication.urls')),
    path('api/', include('about.urls')),
    path('api/', include('blog.urls')),
    path('api/', include('service.urls')),
    path('api/', include('testimonials.urls')),
]
