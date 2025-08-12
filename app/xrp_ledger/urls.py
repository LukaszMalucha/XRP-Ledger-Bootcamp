from django.urls import path, include
from rest_framework.routers import DefaultRouter
from xrp_ledger import views

app_name = "api"

router = DefaultRouter()

urlpatterns = [
    path("", include(router.urls)),
    path("generate-account/", views.GenerateAccountView.as_view(), name="generate-account"),
]
