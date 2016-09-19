var BNAccessSelectedAPointController=function($scope,accessPointService,$log){
	$scope.accessPointService=accessPointService;
	$log.info(accessPointService.accessPointName);
}

BNAccessHome.controller("BNAccessSelectedAPointController",BNAccessSelectedAPointController);