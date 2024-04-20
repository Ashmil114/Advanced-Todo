from django.urls import path,include
from .views import SignUpView,CustomAuthToken


urlpatterns = [
    path('signup',SignUpView.as_view()),
    path('login',CustomAuthToken.as_view(),name='login'),
    
]