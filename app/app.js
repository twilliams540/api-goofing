'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
	'myApp.controllers'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
	
	$routeProvider.when('/users/:id', 
			{
				templateUrl: 'user.html',
				controller: 'routeController'
			});

$routeProvider.when('/', 
			{
				templateUrl: 'root/main.html',
				controller: 'apiController'
			});	
	
	
  $routeProvider.otherwise({redirectTo: '/'});
}]);