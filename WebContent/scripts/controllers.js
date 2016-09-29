var BNAccessHomeController = function($scope, $location, $templateCache) {
	$templateCache.removeAll();
	$scope.title = "BNAccess Home Page";
	$scope.homeScreeMessage = "The BNAccess API is designed to deliver system and sensor data to Bluenica customers and partners.";
	$scope.userlogin = function() {
		if ($scope.userName != null && $scope.password != null)
			$location.path("/AccessPoints");
		else
			$location.path("/home");
	}
}

var BNAccessAccessPointController = function($scope, $log, accessPointService,
		$templateCache, $http) {

	// to consume the web service for getting all the access points
	$http.get('http://rest-service.guides.spring.io/greeting').then(
			function(response) {
				$scope.accesspoints = response.data;
			})

	$templateCache.removeAll();
	$scope.title = "BNAccess Access Points Page";
	$scope.homeScreeMessage = "AccessPoints are a holding container for WaSP Devices in the system. "
			+ "WaSP are used to transmit wireless sensor data over the internet to Bluenica servers. "
			+ "All data from a WasP Device is assigned to the AccessPoint containing it.";
	var imageUrl = "/img/Early_icon_Sensor_Upgrade.png";
	$scope.accessPointService = accessPointService;
	$scope.accessPoints = [ {
		name : "Access Point I",
		overAllStatus : "Green",
		accessPointimage : imageUrl
	}, {
		name : "Access Point II",
		overAllStatus : "Green",
		accessPointimage : imageUrl
	}, {
		name : "Access Point III",
		overAllStatus : "Green",
		accessPointimage : imageUrl
	}, {
		name : "Access Point IV",
		overAllStatus : "Green",
		accessPointimage : imageUrl
	}, {
		name : "Access Point V",
		overAllStatus : "Green",
		accessPointimage : imageUrl
	} ];

	$scope.setAccessPoint = function(accessPointName) {
		$scope.accessPointService.accessPointName = accessPointName;
		$log.info($scope.accessPointService.accessPointName);
	}
}

var BNAccessSelectedAPointController = function($scope, accessPointService,
		sensorPointService, $log, $templateCache) {
	$templateCache.removeAll();
	$scope.accessPointService = accessPointService;
	$scope.sensorPointService = sensorPointService;
	$log.info($scope.sensorPointService.sensorPointName);
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

		$scope.sensorPointService.sensorPointName = sensorPointName;
		$log.info($scope.sensorPointService.sensorPointName);
	}

	var dataArray = [];
	for (var i = 0; i < $scope.sensorPoints.length; i++) {
		dataArray.push({
			"label" : $scope.sensorPoints[i].name,
			"value" : $scope.sensorPoints[i].LastTempValueC,
			dataFormat : 'json',
			"tooltext" : "Sensor: " + $scope.sensorPoints[i].name
					+ "{br} Last Time Recorded "
					+ $scope.sensorPoints[i].LastTempUTC
		});
	}

	$scope.dataSourceForSensors = {
		chart : {
			caption : $scope.accessPointService.accessPointName,
			subCaption : 'Last Temprature recorded for Sensors ',
			xAxisName : "Sensors in "
					+ $scope.accessPointService.accessPointName,
			yAxisName : "Temperature",
			numberSuffix : "F",
			showValues : "0",
			theme : "fint"
		},
		data : dataArray
	};
}

var BNAccessSelectedSPointController = function($scope, accessPointService,sensorPointService,
		$log,$templateCache) {
	$templateCache.removeAll();
	$scope.accessPointService = accessPointService;
	$scope.sensorPointService = sensorPointService;
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
		
	}
	
	$scope.setAccessPoint = function(accessPointName) {
		$scope.accessPointService.accessPointName = accessPointName;
		$log.info($scope.accessPointService.accessPointName);
	}
}

var BNAccessSensorPointController = function($scope, BNAccessJSONService, $log,$routeParams,$templateCache) {
	$templateCache.removeAll();
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


BNAccessHome.controller("BNAccessHomeController", BNAccessHomeController);
BNAccessHome.controller("BNAccessAccessPointController",
		BNAccessAccessPointController);
BNAccessHome.controller("BNAccessSelectedAPointController",
		BNAccessSelectedAPointController);
BNAccessHome.controller("BNAccessSelectedSPointController",
		BNAccessSelectedSPointController);
BNAccessHome.controller("BNAccessSensorPointController",BNAccessSensorPointController);