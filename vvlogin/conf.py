from django.core.urlresolvers import reverse
from django.conf import settings


REGISTRATION_URL = getattr(settings, 'REGISTRATION_URL', "/register/")

if "allauth" in settings.INSTALLED_APPS:
    REGISTRATION_URL = reverse("account_signup")

LOGIN_REDIRECT_URL = getattr(settings, "VVLOGIN_REDIRECT_URL", "/")
LOGOUT_REDIRECT_URL = getattr(settings, "VVLOGOUT_REDIRECT_URL", "/")
