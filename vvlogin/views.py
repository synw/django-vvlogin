import json
from django.http import JsonResponse
from django.middleware.csrf import CsrfViewMiddleware
from django.utils.html import escape
from django.views import View
from django.contrib.auth import authenticate, login, logout


def check_csrf(request):
    reason = CsrfViewMiddleware().process_view(request, None, (), {})
    if reason:
        return False
    return True

class LoginformView(View):
    
    def post(self, request, *args, **kwargs):
        if check_csrf(request) == False:
            return JsonResponse({"error":1})
        data = json.loads(self.request.body.decode('utf-8'))
        username = escape(data['username'])
        password = escape(data['password'])
        user = authenticate(username=username, password=password)
        if user is None:
            return JsonResponse({"error":2})
        else:
            login(request, user)
        return JsonResponse({"error":0})
    
    
class LogoutView(View):
    
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            logout(request)
            return JsonResponse({"error":0})
        return JsonResponse({"error":1})
