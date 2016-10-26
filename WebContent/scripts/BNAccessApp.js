var routeConfiguration = function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		redirectTo : '/home'
	}).when("/home", {
		templateUrl : "partialTemplates/home.html",
		controller : "BNAccessHomeController"
	})

	.when("/AccessPoints", {
		templateUrl : "partialTemplates/AccessPoints.html",
		controller : "BNAccessAccessPointController"
	})

	.when("/accessPoint/:selectedAccessPoint", {
		templateUrl : "partialTemplates/SelectedAccessPoint.html",
		controller : "BNAccessSelectedAPointController"
	})

	.when("/sensorpoints", {
		templateUrl : "partialTemplates/SensorPoints.html",
		controller : "BNAccessSensorPointController"
	})

	/*
	 * .when("/sensorName/:sensorPoint", { templateUrl :
	 * "partialTemplates/SensorPoints.html", controller :
	 * "BNAccessSensorPointController" })
	 */

	.when("/sensor/:selectedSensor", {
		templateUrl : "partialTemplates/SelectedSensorPoint.html",
		controller : "BNAccessSelectedSPointController"

	})

	.otherwise({
		redirectTo : "/home"
	});

	$locationProvider.html5Mode({
		enabled : true,
		requireBase : true
	})
}

var BNAccessHome = angular.module("BNAccessHome", [ "ngRoute",
		"ng-fusioncharts", "BNAccessControllers", "BNAccessRestServices",
		"bnaBusinessServices" ]);

BNAccessHome.config(routeConfiguration);