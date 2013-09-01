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

app.controller('LoginController',function($scope, $location,$rootScope){
    $scope.login = function(){
        if($scope.username=="mike")
        {
            $rootScope.username = $scope.username;
            $location.path('/home');
        }
        else
        {
            $scope.errorMessage ={msg:'Could not find user'};
        }
    }
});


app.controller('MoreDetailController',function($scope, $routeParams){
   var landmarkName = $routeParams.landmarkName;
   if(landmarkName=="BigBen")
    {
        $scope.detail = {img:'',text:'Lots of info on big ben'};
    }
    else if(landmarkName=="Sydney")
    {
        $scope.detail = {img:'',text:'Lots of info on the Sydney opera house'};
    }
    else if(landmarkName=="Eiffle")
    {
        $scope.detail = {img:'',text:'Lots of info on the Eiffle tower'};
    }
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

