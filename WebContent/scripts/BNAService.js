BNAccessHome.service('accessPointService', function() {
	this.accessPointName = "";
})

BNAccessHome.service('sensorPointService', function() {
	this.sensorPointName = "";
})

var bnaBusinessServices = angular
		.module('bnaBusinessServices', [ 'ngCookies' ]);

// business service to check whether the token is set in cookies
bnaBusinessServices.facory('checkToken', [ '$cookies', function($cookies) {
	return function() {
		var validToken = false;
		var userToken = $cookies.userToken;
		if (userToken !== undefined && userToken !== "")
			userToken = true;
		return validToken;
	};
} ]);

// business service to get the token set in cookies
bnaBusinessServices.facory('getToken', [ '$cookies', function($cookies) {
	return function() {
		var userToken = $cookies.userToken;
		return userToken;
	};
} ]);

// business service to set the token in cookies
bnaBusinessServices.facory('setToken', [ '$cookies', function($cookies) {
	return function(token) {
		$cookies.userToken = token;
	};
} ]);

// business service to delete the token in cookies
bnaBusinessServices.facory('deleteToken', [ '$cookies', function($cookies) {
	return function() {
		$cookies.userToken = "";
	};
} ]);