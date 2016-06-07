var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider)
{
	$routeProvider.
		when('/home', 
		{
			templateUrl : 'templates/home.html',
			controller : 'homeController'
		})
		.when('/about',
		{
			templateUrl : 'templates/about.html',
			controller : 'aboutController'
		})
		.when('/home/:empCode', 
		{
			templateUrl : 'templates/home.html',
			controller : 'homeController'
		})
		.when('/about/:userCode',
		{
			templateUrl : 'templates/about.html',
			controller : 'aboutController'
		})
		.otherwise({redirectTo : '/home'});
		// To remove # from the URL's 
		//$locationProvider.html5Mode(true);
});

myApp.controller("homeController", function($scope, $routeParams, $location, $route)
{
	$scope.empCode = $routeParams.empCode;
	$scope.message = "Home Page";
	
	//console.log($location.path());
	//console.log($route.current.templateUrl);
	//console.log($route.current.params);
	//console.log($routeParams);
});

myApp.controller("aboutController", function($scope, $routeParams)
{
	$scope.userCode = $routeParams.userCode;
	$scope.message = "AboutUs Page";
});
myApp.controller("newController", function($scope, $routeParams)
{
	$scope.userCode = $routeParams.userCode;
	$scope.message = "New Page";
});
