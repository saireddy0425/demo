app.controller('vlocityController', ['$scope', 'people', function ($scope, people) {
	people.then(function (data) {
		console.log(data.data.People[0].Likes);
		$scope.person = data.data.People[0];
		$scope.likes = $scope.person.Likes;
		$scope.dislikes = $scope.person.Dislikes;
		console.log($scope.dislikes[6])
		$scope.rows = (function () {
			var rowArray = [];
			if ($scope.likes.length >= $scope.dislikes.length) {
				for (var i = 0; i < $scope.likes.length; i++) {
					var dislike = $scope.dislikes[i];
					if ($scope.dislikes[i] === undefined) {
						dislike = "";
					}
					rowArray.push({ like: $scope.likes[i], dislike: dislike })
				}
			}
			else {
				for (var i = 0; i < $scope.dislikes.length; i++) {
					var like = $scope.likes[i];
					if ($scope.likes[i] === undefined) {
						like = "";
					}
					rowArray.push({ like: like, dislike: $scope.dislikes[i] })
				}
			}
			return rowArray;
		})();
		console.log($scope.rows)

		$scope.hearts = $scope.person.rating;
		$(document).ready(function () {
			for (var i = 0; i < 5; i++) {
				var $heart = $('<span>');
				if (i + 1 <= $scope.hearts) {
					$heart.addClass('glyphicon glyphicon-heart')
				}
				else {
					$heart.addClass('glyphicon glyphicon-heart-empty')
				}
				$('#hearts').append($heart)
			}
		})
	}).catch(function (error) {
		// pass the error the the error service
		console.log(error);
	});
}]);