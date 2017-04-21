# -*- coding: utf-8 -*-

from django import template
from vvlogin.conf import REGISTRATION_URL


register = template.Library()
    
@register.simple_tag
def registration_url():
    return REGISTRATION_URL
