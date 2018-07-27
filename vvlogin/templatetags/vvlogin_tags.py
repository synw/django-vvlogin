# -*- coding: utf-8 -*-

from django import template
from vvlogin.conf import REGISTRATION_URL, LOGIN_REDIRECT_URL, LOGOUT_REDIRECT_URL


register = template.Library()


@register.simple_tag
def registration_url():
    return REGISTRATION_URL


@register.simple_tag
def login_redirect_url():
    return LOGIN_REDIRECT_URL


@register.simple_tag
def logout_redirect_url():
    return LOGOUT_REDIRECT_URL
