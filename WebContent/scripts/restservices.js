var BNAccessRestServices=angular.module('BNAccessRestServices',['ngResource','ngCookies']);

BNAccessRestServices.factory('RestService1',['$resource',function($resource){
	return $resource("https://jsonplaceholder.typicode.com/posts/1",{},{
		get:{method:'GET',cache:false,isArray:false},
		save:{method:'POST',cache:false,isArray:false},
		update:{method:'PUT',cache:false,isArray:false},
		delete:{method:'DELETE',cache:false,isArray:false}
	})
}]);

BNAccessRestServices.factory('AuthenticationService',['$http','$cookieStore','$rootScope',function($http,$cookieStore,
		$rootScope){
	var service={};
	service.Login=function(userName,userPassword,callback){
		$http.post('/api/Login/create/',{UserName:userName,Password:userPassword})
		.success(function(response){
			callback(response);
		});
	};
	service.setCredentials=function(userName,userPassword,SessionToken,UserAccountID){
		$rootScope.globals={currentSession:{sessionToken:SessionToken}};
		$http.defaults.headers.common['Authorization']='Basic '+SessionToken;
		$cookieStore.put('globals',$rootScope.globals);
	};
	service.clearCredentials=function(){
		$rootScope.globals={};
		$cookieStore.remove('globals');
		$http.defaults.headers.common.Authorization= 'Basic ';
	};
	return service;
}]);

// Login service from the Learning AngularJS book
BNAccessRestServices.factory('loginService',['$resource',function($resource){
	return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/login",{},
			{
		login:{method:'POST',cache:false,isArray:false}
			});
}]);
