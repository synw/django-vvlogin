{% load i18n %}
page('/login/', function(ctx, next) { app.loadLoginForm() } );
page('/logout/', function(ctx, next) { app.loadLogout() } );