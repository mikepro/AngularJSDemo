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
    .when('/moreDetail/:landmarkName', {
        templateUrl: 'moredetail.html',
        controller: 'MoreDetailController'
    })
    .otherwise({redirectTo:'/login'});
});

app.controller('HomeController',function($scope, $location){
    $scope.jumboMessage = "Please select one of the images below to find out what the name of the landmark is.";
});

app.controller('LoginController',function($scope,loginFactory, $location,$rootScope){
    $scope.login = function(){
        loginFactory.login($scope.username);
    }
});


app.controller('MoreDetailController',function($scope, $routeParams,LandmarkDatabase){
   var landmarkName = $routeParams.landmarkName;
   $scope.detail= LandmarkDatabase.getLandmarkData(landmarkName);
});

app.directive('displayLandmarkName', function(){
    return {
        restrict: "A",
        link: function(scope, element, attributes){
            var orgMessage = scope.jumboMessage;
            element.bind("mouseover",function(){
                scope.jumboMessage = attributes.landmark;
                scope.$apply();
            });
            element.bind("mouseout",function(){
                scope.jumboMessage = orgMessage;
                scope.$apply();
            });
        }
    };
});

app.factory('LandmarkDatabase', function(){
    return {
        getLandmarkData: function(landmarkName){
           var data = {};
           if(landmarkName=="BigBen")
            {
                data = {img:'',text:'Lots of info on big ben'};
            }
            else if(landmarkName=="Sydney")
            {
                data = {img:'',text:'Lots of info on the Sydney opera house'};
            }
            else if(landmarkName=="Eiffle")
            {
                data = {img:'',text:'Lots of info on the Eiffle tower'};
            }
            return data;
        }
    };
});

app.factory('loginFactory',function($location,$rootScope){
    return {
        login: function(username)
        {
            if(username=="mike")
            {
                $rootScope.username = username;
                $location.path('/home');
            }
            else
            {
                $rootScope.errorMessage ={msg:'Could not find user'};
            }
        }
    }
});
