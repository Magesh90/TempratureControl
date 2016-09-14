myApp.factory('firstPageService',function(){
	return {
		stringFromService : function(input){
			
			return "Hello "+input;
		}
	}
})