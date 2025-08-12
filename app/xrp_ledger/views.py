from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, views, filters
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


class GenerateAccountView(views.APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):


        return Response({"message": "generate account"}, status=status.HTTP_200_OK)