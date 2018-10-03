var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'vlocityController',
			templateUrl: 'details.html'
		})
		.when('/person/:id', {
			controller: 'detailsController',
			templateUrl: 'details.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});