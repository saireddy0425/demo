app.controller('leftNavController', ['$scope', 'people', function($scope, people) {
	people.then(function(data) {
		// console.log(data.People[0].name);
		$scope.people = data.data.People;
	}).catch(function (error) {
		// pass the error the the error service
		console.log(error);
	});
}]);