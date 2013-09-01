var app = angular.module("myapp",[]);

app.config(function($routeProvider){
    $routeProvider.when('userUrl', {
        templateUrl: 'pathOnDisk',
        controller: 'controllerName'
    })
    .when('/home',{
        templateUrl:'home.html',
        controller:'homeController'
    })
    .otherwise({redirectTo:'defaultUrl'});
});

