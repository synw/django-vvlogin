{% load i18n %}
loadLoginForm: function() {
	app.activate(["login", "loginForm", "loginFormMsg"]);
	document.title = "{% trans 'Login' %}";
},
loadLogout: function() {
	app.deactivate(["loginForm", "msgForm"]);
	app.activate(["login", "logout"]);
	document.title = "{% trans 'Logout' %}";
},
cancelLogout: function() {
	console.log("CANCEL LOGOUT");
	app.deactivate(["login", "logout"]);
},
logoutUser: function() {
	function error(err) {
		console.log(err)
	}
	function action(data) {
		if (data.error === 0) {
			app.isLoggedIn = false;
			app.deactivate(["logout"]);
			app.msgForm = "{% trans 'Successfuly logged out' %}";
			app.activate(["msgForm"]);
			setTimeout(function(){ app.deactivate(["login", "msgForm", "logout"]) }, 1500);
		}
	}
	this.loadData("{% url 'logout' %}", action, error);
},
postLoginForm: function() {
	var url = "{% url 'login-form' %}";
	var form = document.getElementById("login_form");
	var frm = this.serializeForm(form);
	var is_valid = true;
	if (!frm.username) {
		this.msgForm = "{% trans 'Please provide a username' %}";
		is_valid = false;
	}
	if (!frm.password) {
		if (is_valid === false) {
			this.msgForm = this.msgForm+"<br />{% trans 'Please provide a password' %}";
		} else {
			this.msgForm = "{% trans 'Please provide a password' %}";
		}
		is_valid = false;
	}
	function error(err) {
		console.log(err)
	}
	function action(response) {
		console.log(response.data);
		if (response.data.error === 0) {
			app.msgForm = "{% trans 'Login successfull' %}";
			app.isLoggedIn = true;
			app.activate(["msgForm"]);
			app.deactivate(["loginForm"]);
			setTimeout(function(){ app.deactivate(["login", "msgForm"]) }, 1500);
		} else {
			app.msgForm = "{% trans 'Can not login' %}";
		}
	}
	if (is_valid === true) {
		this.postForm(url, frm, action, error, frm.csrfmiddlewaretoken)
	}
},