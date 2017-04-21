{% load i18n vvlogin_tags %}
msgForm: '{% blocktrans %}No account? Please <a href="{% endblocktrans %}{% registration_url %}{% blocktrans %}" onclick="app.flush()">register</a>{% endblocktrans %}',
isLoggedIn: {% if user.is_authenticated %}true{% else %}false{% endif %},