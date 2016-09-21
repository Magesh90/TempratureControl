var BNAccessSensorPointController = function($scope, BNAccessJSONService, $log,$routeParams) {
	console.log($routeParams.sensorPoint);
	$scope.sensorName=$routeParams.sensorPoint;
	$scope.title = "BNAccess Sensor Points Page";
	$scope.homeScreeMessage = "SensorPoints are a holding container for sensor Devices in the system. "
			+ "All data from a sensor Device is assigned to the SensorPoint containing it.";
	$scope.sensors = [ "Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4",
			"Sensor 5" ];
	$scope.sensorSelected = $scope.sensorName;
	$log.info($scope.sensorSelected);
	$scope.temperatureJSON = BNAccessJSONService.getJson();
	// console.log($scope.temperatureJSON);
	//$log.info($scope.temperatureJSON);
	$scope.dataSource = {
		chart : {
			caption : "Temperature Time Graph",
			subCaption : $scope.sensorSelected,
			xAxisName : "Time",
			yAxisName : "Temperature",
			numberSuffix : "F",
			showValues : "0",
			theme : "fint"
		},
		data : [ {
			label : "1:00 PM",
			value : "30"
		}, {
			label : "2:00 PM",
			value : "50"
		}, {
			label : "3:00 PM",
			value : "25"
		}, {
			label : "4:00 PM",
			value : "37"
		}, {
			label : "5:00 PM",
			value : "35"
		}, {
			label : "6:00 PM",
			value : "38"
		}, {
			label : "7:00 PM",
			value : "42"
		}, {
			label : "8:00 PM",
			value : "44"
		}, {
			label : "9:00 PM",
			value : "40"
		}, {
			label : "10:00 PM",
			value : "38"
		}, {
			label : "7:00 PM",
			value : "20"
		} ]
	};
	
	$scope.setAccessPoint = function(accessPointName) {
		$scope.accessPointService.accessPointName = accessPointName;
		$log.info($scope.accessPointService.accessPointName);
	}
}

BNAccessHome.controller("BNAccessSensorPointController",BNAccessSensorPointController);