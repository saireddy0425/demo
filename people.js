app.factory('people', ['$http', function($http) {
	return $http.get('./people.json').then(function(data){
		return data;
	}, function(err){
		return err;
	});
}]);