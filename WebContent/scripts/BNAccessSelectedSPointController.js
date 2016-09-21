var BNAccessSelectedSPointController = function($scope, accessPointService,sensorPointService,
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
		
	
	$scope.setSensorPoint = function(sensorPointName) {
		$scope.sensorPointService.sensorPointName = sensorPointName;
		$scope.accessPointService.sensorPointName = sensorPointName;
		$log.info($scope.sensorPointService.sensorPointName);
		$log.info($scope.accessPointService.sensorPointName);
	}
}

BNAccessHome.controller("BNAccessSelectedSPointController",
		BNAccessSelectedSPointController);