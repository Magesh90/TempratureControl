var BNAccessHomeController = function($scope,$templateCache) {
	$templateCache.removeAll();
	$scope.title = "BNAccess Home Page";
	$scope.homeScreeMessage = "The BNAccess API is designed to deliver system and sensor data to Bluenica customers and partners.";
}
BNAccessHome.controller("BNAccessHomeController", BNAccessHomeController)