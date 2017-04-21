showLogout: function () {
	if (this.isLoggedIn === true) {
		return true
	}
	return false
},
showLogin: function () {
	if (this.isLoggedIn === true) {
		return false
	}
	return true
},