var app = angular.module('app', []);

app.run(function($rootScope) {
    $rootScope.counter = 1;
});


//Implicit Dependency Injection
app.controller('DangerousCtrl', function ($scope, $rootScope) {
    $scope.message = "Easiest but most dangerous dependency injection, won't work after minifying process.";
    $scope.counter = $rootScope.counter++;
});


//Explicit Dependency Injection
app.controller('SafeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.message = "Order of the elements in the array must match order of the parameters. Will work after minification.";
    $scope.counter = $rootScope.counter++;
}]);


//Using $inject
app.controller('FancyCtrl', FancyCtrl);
FancyCtrl.$inject = ['$scope', '$rootScope'];

function FancyCtrl($scope, $rootScope) {
    $scope.message = "Order of the elements in the $inject array must match order of the parameters." +
        " Will work after minification.";
    $scope.counter = $rootScope.counter++;
}