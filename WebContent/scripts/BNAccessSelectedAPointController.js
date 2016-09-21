var BNAccessSelectedAPointController = function($scope, accessPointService,
		$log) {
	$scope.accessPointService = accessPointService;
	$log.info($scope.accessPointService.accessPointName);
	// initialize the call to rest API through the access point name
	$scope.accessPointimage="/img/Early_icon_Sensor_Upgrade.png";
	$scope.sensorPointimage="/img/sensor_icon.png";
	$scope.sensorPoints = [ {
		name : "Sensor I",
		overAllStatus : "Green"
	}, {
		name : "Sensor II",
		overAllStatus : "Green"
	}, {
		name : "Sensor III",
		overAllStatus : "Green"
	}, {
		name : "Sensor IV",
		overAllStatus : "Green"
	}, {
		name : "Sensor V",
		overAllStatus : "Green"
	} ];
	
	
	$scope.setSensorPoint = function(sensorPointName) {
		
		$scope.accessPointService.sensorPointName = sensorPointName;
		$log.info($scope.sensorPointService.sensorPointName);
	}
}

BNAccessHome.controller("BNAccessSelectedAPointController",
		BNAccessSelectedAPointController);