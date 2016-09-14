/**
 * 
 */
var myApp = angular.module("myApplication", []);

var myController = function($scope,firstPageService,$log) {
	
	$scope.userName="Default User"
	$scope.processedInput=function(user){
		$scope.processedInputValue=firstPageService.stringFromService(user);}
	$scope.message = "AngularJS Framework";
	var resources = [ {
		Name : "Resource 1",
		Role : "HR"
	}, {
		Name : "Resource 2",
		Role : "Developer"
	}, {
		Name : "Resource 3",
		Role : "Project Manager"
	}, {
		Name : "Resource 4",
		Role : "Project Leader"
	}, {
		Name : "Resource 5",
		Role : "Tester"
	} ];
	$scope.resources = resources;
	$scope.showRecords = resources.length;
	$scope.sortBy = "-Role";
	// $scope.login="AngularJS Framework Duplicate";
	$scope.sortcolumn = "Name";
	$scope.reverseSort = false;
	$scope.sortData = function(column) {
		$scope.reverseSort = ($scope.sortcolumn == column) ? !$scope.reverseSort
				: $scope.reverseSort;
		$scope.sortcolumn = column;
	};

	$scope.getSortClass = function(column) {
		if ($scope.sortcolumn == column) {
			return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
		}
		return '';
	}
}
myApp.controller("myController", myController);