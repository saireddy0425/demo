app.directive('leftNav', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'leftNav.html'
	}
});