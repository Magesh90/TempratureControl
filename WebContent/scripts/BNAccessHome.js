var routeConfiguration = function($routeProvider) {
	$routeProvider.when("/home", {
		templateUrl : "partialTemplates/home.html",
		controller : "BNAccessHomeController"
	}).when("/sensorpoints", {
		templateUrl : "partialTemplates/SensorPoints.html",
		controller : "BNAccessSensorPointController"
	}).when("/sensorpoints/:sensorName", {
		templateUrl : "partialTemplates/AccessPoints.html",
		controller : "BNAccessAccessPointController"
	}).when("/AccessPoints", {
		templateUrl : "partialTemplates/AccessPoints.html",
		controller : "BNAccessAccessPointController"
	})
}

var BNAccessHome = angular.module("BNAccessHome", [ "ngRoute","ng-fusioncharts" ]);
BNAccessHome.config(routeConfiguration);

/*BNAccessHome.config(routeConfiguration).controller("BNAccessHomeController",
		BNAccessHomeController).controller("BNAccessSensorPointController",
		BNAccessSensorPointController).controller(
		"BNAccessAccessPointController", BNAccessAccessPointController);*/