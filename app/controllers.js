angular.module('myApp.controllers', []).controller('apiController', function($scope, $http) {
	 $scope.apiSubmit = function() {
		$http.get('https://api.github.com/search/users?q='+$scope.query).then(function(response) {
			$scope.responseData = response.data;
		})
	 };
}).controller('routeController', function($scope, $routeParams) {
		$scope.user = $routeParams.id;
});