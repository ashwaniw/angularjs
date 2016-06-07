var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        template: 'templates/home.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'aboutController'
    })
    .otherwise({
        redirectTo: '/home'
    })
})
.controller('homeController', function($scope){

})
.controller('aboutController', function($scope){
    
})