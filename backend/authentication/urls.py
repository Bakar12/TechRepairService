from django.urls import path
from .views import MyTokenObtainPairView, RegisterView, LogoutView, UserListView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/', UserListView.as_view(), name='user_list'),
]

