
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from data import views
from rest_framework import routers
from rest_framework_simplejwt.views import (
    
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register('user',views.UserViewSets,basename="user")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls)),
    path('api/token/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]


#serve media files 
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)