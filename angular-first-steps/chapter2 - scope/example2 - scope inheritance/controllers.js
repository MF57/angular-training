/**
 * Created by mf57 on 18.06.2016.
 */

var app = angular.module('app', []);


app.controller('ParentCtrl', function ($scope) {
    $scope.student = {passed: false };
});

app.controller('InheritanceCtrl', function ($scope) {
    $scope.checkTest = function() {
        $scope.student.passed = !$scope.student.passed;
    }
});