# -*- coding: utf-8 -*-

from django.conf.urls import url
from vvlogin.views import LoginformView, LogoutView


urlpatterns = [
    url(r'^x/login/$', LoginformView.as_view(), name="login-form"),
    url(r'^x/logout/$', LogoutView.as_view(), name="logout"),
]
