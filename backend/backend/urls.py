from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('about.urls')),
    path('api/', include('blog.urls')),
    path('api/', include('service.urls')),
    path('api/', include('testimonials.urls')),
    path('', RedirectView.as_view(url='/api/')),  # Redirect root URL to /api/
]