var BNAccessRestServices=angular.module('BNAccessRestServices',['ngResource']);

BNAccessRestServices.factory('RestService1',['$resource',function($resource){
	return $resource("https://jsonplaceholder.typicode.com/posts/1",{},{
		get:{method:'GET',cache:false,isArray:false},
		save:{method:'POST',cache:false,isArray:false},
		update:{method:'PUT',cache:false,isArray:false},
		delete:{method:'DELETE',cache:false,isArray:false}
	})
}]);