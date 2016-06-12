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

app.controller("userData", function($scope){        
    $scope.items = [{}];
            $scope.editing = false;    
                        
            $scope.addItem = function(item) {
                $scope.items.push(item);
                $scope.item = {};
             }
            
            $scope.removeItem = function(index){
                $scope.items.splice(index,1);
            }
            
            $scope.editItem = function(index){
                 $scope.editing = $scope.items.indexOf(index);               
            }
            
            $scope.saveField = function(index) {
                if ($scope.editing !== false) {
                    $scope.editing = false;
                }       
            };
            
             $scope.loadAddresses = function(){
                if(localStorage.getItem('item') != 'undefined' && localStorage.getItem('item') != null)
                    $scope.items = JSON.parse(localStorage.getItem('item'));
                else
                    $scope.items = [];
                    console.log($scope.items);
            }
            
            $scope.saveItems = function(){
                localStorage.setItem('item', JSON.stringify($scope.items));
            }
            
            $scope.setWatches = function(){
                $scope.$watch('items', function(){
                    $scope.saveItems();
                }, true);
            }
            
            $scope.init = function(){
                $scope.loadAddresses();
                $scope.setWatches();
            }
            
            $scope.init();
            
            $scope.orderByMe = function(item){
                $scope.myOrderBy = item;
                }
    })