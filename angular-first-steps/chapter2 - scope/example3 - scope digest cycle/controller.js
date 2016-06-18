var app = angular.module('app', []);

app.controller('DefaultCtrl', function ($scope) {
    $scope.number = 1;


    $scope.$watch('number', function () {
       console.log("Number changed to: " + $scope.number);
    });
    
    $scope.add = function () {
        $scope.number++;
    };

    $scope.subtract = function () {
        $scope.number--;
    }
});