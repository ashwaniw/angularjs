// JavaScript Document
var app = angular.module('mainApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/login', {
            templateUrl: 'login.html',
            controller: 'loginCtrl'
        })
    .when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutCtrl'        
        })
    .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactCtrl'
        })
    .otherwise({
            redirectTo: '/'
        })
    });    
app.controller('loginCtrl', function($scope, $location){
    $scope.message = 'Login Page';
    $scope.submit = function(){
        var uname = $scope.username;
        var password = $scope.password;
        if($scope.username == 'admin'  && $scope.password == 'admin'){
            $location.path('/about');
            }else{
                alert('Wrong Stuff');
                }
        };
    })
app.controller('aboutCtrl', function($scope){
    $scope.message = 'About Us';
    })    
app.controller('contactCtrl', function($scope){
    $scope.message = 'Contact Us';
    })    
    
app.controller("simpleController", function($scope){    
    //$scope.collection = [{firstName: 'Ashwani', lastName: 'Sharma', country: 'India', state: 'UP', phoneNo: '9971452603', email: 'test@gmail.com'}];
    $scope.addEntty = function(){
        $scope.collection.push($scope.formData);        
        $scope.formData = '';
        }
    }) 
app.controller("formController", function($scope){  
    $scope.userData =[{}];     
    //var userDetail = this;

    $scope.submitForm = function() {
        $scope.firstNameVal =  $scope.firstName;
        $scope.lastNameVal =  $scope.lastName;
        $scope.countryVal =  $scope.country;
        $scope.stateVal =  $scope.state;
        $scope.phoneNoVal =  $scope.phoneNo;
        $scope.emailVal =  $scope.email;        
        //alert("Hello" + " " + $scope.firstName);
        $scope.clearInputFields();
    }
    //$userDetail.submitForm = function(){

    }
    localStorage.setItem("username","Ashwani");
    //$scope.clearInputFields = function(){
       // $scope.firstName = $scope.lastName = $scope.country = $scope.phoneNo = $scope.state = $scope.email = '';
    //}

   
})