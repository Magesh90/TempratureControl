var BNAccessAccessPointController = function($scope, $log, accessPointService) {
	$scope.title = "BNAccess Access Points Page";
	$scope.homeScreeMessage = "AccessPoints are a holding container for WaSP Devices in the system. "
			+ "WaSP are used to transmit wireless sensor data over the internet to Bluenica servers. "
			+ "All data from a WasP Device is assigned to the AccessPoint containing it.";
	var imageUrl = "/img/Early_icon_Sensor_Upgrade.png";
	$scope.accessPointService = accessPointService;
	$scope.accessPoints = [ {
		name : "TCS Access Point I",
		overAllStatus : "Green",
		accessPointimage : imageUrl
	}, {
		name : "TCS Access Point II",
		overAllStatus : "Green",
		accessPointimage : imageUrl
	}, {
		name : "TCS Access Point III",
		overAllStatus : "Green",
		accessPointimage : imageUrl
	}, {
		name : "TCS Access Point IV",
		overAllStatus : "Green",
		accessPointimage : imageUrl
	}, {
		name : "TCS Access Point V",
		overAllStatus : "Green",
		accessPointimage : imageUrl
	} ];

	$scope.setAccessPoint = function(accessPointName) {
		$scope.accessPointService.accessPointName = accessPointName;
		$log.info($scope.accessPointService.accessPointName);
	}
}

BNAccessHome.controller("BNAccessAccessPointController",
		BNAccessAccessPointController);