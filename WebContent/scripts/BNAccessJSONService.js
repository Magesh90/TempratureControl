BNAccessHome.service('BNAccessJSONService', function($http) {
	this.getJson = function() {
		var jsonObj;
		$http.get('json/TempHistory.json').then(function(resposne) {
			jsonObj = resposne.data.records;
		});
		return jsonObj;
	};
})