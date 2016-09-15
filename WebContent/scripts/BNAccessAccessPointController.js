var BNAccessAccessPointController = function($scope) {
	$scope.title = "BNAccess Access Points Page";
	$scope.homeScreeMessage = "AccessPoints are a holding container for WaSP Devices in the system. "
			+ "WaSP are used to transmit wireless sensor data over the internet to Bluenica servers. "
			+ "All data from a WasP Device is assigned to the AccessPoint containing it.";
	$scope.sensorList = [
			{
				accesspoint : "TCS Access Point",
				overAllStatus : "Green",
				sensors : [ "Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4",
							"Sensor 5" ]
			},
			{
				accesspoint : "TCS Access Point II",
				overAllStatus : "Green",
				sensors : [ "Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4",
							"Sensor 5" ]
			} ];

}

BNAccessHome.controller("BNAccessAccessPointController",
		BNAccessAccessPointController);