from django.urls import path, include
from rest_framework.routers import DefaultRouter
from xrp_ledger import views

app_name = "api"

router = DefaultRouter()

urlpatterns = [
    path("", include(router.urls)),
    path("generate-account/", views.GenerateAccountView.as_view(), name="generate-account"),
    path("transfer-xrp/<str:wallet_1>/<str:wallet_2>", views.TransferXRPView.as_view(), name="transfer-xrp"),
]
