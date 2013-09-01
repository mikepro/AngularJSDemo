var app = angular.module("myapp",[]);

app.config(function($routeProvider){
    $routeProvider.when('/login', {
        templateUrl: 'login.html',
        controller: 'LoginController'
    })
    .when('/home',{
        templateUrl:'home.html',
        controller:'HomeController'
    })
    .otherwise({redirectTo:'/login'});
});

app.controller('HomeController',function($scope){});
app.controller('LoginController',function($scope, $location){
    $scope.login = function(){
        if($scope.username=="mike")
        {
            $location.path('/home');
        }
        else
        {
            $scope.errorMessage ={msg:'Could not find user'};
        }
    }
});

