# Django vvlogin

Inline login form for Vite Vue

## Install

Clone and add `"vvlogin",` to installed apps

Add `url('^auth/', include('vvlogin.urls')),` to urls

Add `VV_APPS = ["login"]` in settings

In a template:

   ```django
   {% include "vvlogin/login_link.html" %}
   {% include "vvlogin/login.html" %}
   ```
   
## Settings

   ```python
	LOGIN_REDIRECT_URL = '/your-path'
	LOGOUT_REDIRECT_URL = '/your-path'
	```
	
If not set it will redirect to `"/"`

## Todo

- [ ] Manage error messages 
- [ ] Pip release
