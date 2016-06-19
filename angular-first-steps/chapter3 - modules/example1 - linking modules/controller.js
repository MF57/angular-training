var myApp = angular.module('myApp', ['myApp2']);
var myApp2 = angular.module('myApp2', []);

myApp.controller('DefaultCtrl', function ($scope) {
    $scope.message = "Hello Darek";
});

myApp2.controller('OtherCtrl', function ($scope) {
    $scope.otherMessage = "Hello Ian";
});