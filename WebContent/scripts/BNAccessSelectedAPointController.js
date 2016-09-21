var BNAccessSelectedAPointController = function($scope, accessPointService,
		$log) {
	$scope.accessPointService = accessPointService;
	$log.info($scope.accessPointService.accessPointName);
	// initialize the call to rest API through the access point name
	$scope.accessPointimage = "/img/Early_icon_Sensor_Upgrade.png";
	$scope.sensorPointimage = "/img/sensor_icon.png";
	$scope.sensorPoints = [ {
		name : "Sensor I",
		overAllStatus : "Green",
		LastTempUTC : "04:00",
		LastTempValueC : 32
	}, {
		name : "Sensor II",
		overAllStatus : "Green",
		LastTempUTC : "02:00",
		LastTempValueC : 30
	}, {
		name : "Sensor III",
		overAllStatus : "Green",
		LastTempUTC : "03:00",
		LastTempValueC : 31.3
	}, {
		name : "Sensor IV",
		overAllStatus : "Green",
		LastTempUTC : "04:08",
		LastTempValueC : 32
	}, {
		name : "Sensor V",
		overAllStatus : "Green",
		LastTempUTC : "04:03",
		LastTempValueC : 32
	} ];
	
	
	$scope.setSensorPoint = function(sensorPointName) {
		
		$scope.accessPointService.sensorPointName = sensorPointName;
		$log.info($scope.sensorPointService.sensorPointName);
	}

	var dataArray = [];
	for (var i = 0; i < $scope.sensorPoints.length; i++) {
		dataArray.push({
			"label" : $scope.sensorPoints[i].name,
			"value" : $scope.sensorPoints[i].LastTempValueC,
			dataFormat: 'json',
			"tooltext" : "Sensor: "+$scope.sensorPoints[i].name+ "{br} Last Time Recorded "+$scope.sensorPoints[i].LastTempUTC
		});
	}

	$scope.dataSourceForSensors = {
		chart : {
			caption : $scope.accessPointService.accessPointName,
			subCaption : 'Last Temprature recorded for Sensors ',
			xAxisName : "Sensors in "+$scope.accessPointService.accessPointName,
			yAxisName : "Temperature",
			numberSuffix : "F",
			showValues : "0",
			theme : "fint"
		},
		data : dataArray
	};
}

BNAccessHome.controller("BNAccessSelectedAPointController",
		BNAccessSelectedAPointController);