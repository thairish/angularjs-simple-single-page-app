//Module which depends on ngRoute for the single page app
var angularApp = angular.module('angularApp', ['ngRoute']);

//Config the router to load three page's content for the single page app
angularApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'firstPage.html',
        controller: 'firstController'
    })
    
    .when('/second', {
        templateUrl: 'secondPage.html',
        controller: 'secondController'
    })
    
    //Example to handle a value passed through the URL.
    .when('/second/:param', {
        templateUrl: 'secondPage.html',
        controller: 'secondController'
    })
    
    .when('/third', {
        templateUrl: 'thirdPage.html',
        controller: 'thirdController'
    });
    
});

//Controllers. The second parameter set in an array for when minimizing the js file.
angularApp.controller('firstController', ['$scope', function ($scope) {
    
    $scope.pageText = 'Text for the first page.';
    
}]);

angularApp.controller('secondController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    
    $scope.pageText = 'Text for the second page.';
    
    //Gets the value passed in the URL, or sets a default value if one wasn't set.
    $scope.urlParam = $routeParams.param || "No value passed in the URL.";
    
}]);

angularApp.controller('thirdController', ['$scope', function ($scope) {
    
    $scope.pageText = 'Text for the third page.';
    
}]);

