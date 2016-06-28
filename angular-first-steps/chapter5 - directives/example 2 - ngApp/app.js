var firstApp = angular.module('firstApp', []);

firstApp.controller('FirstCtrl', FirstCtrl);
FirstCtrl.$inject = ['$scope'];

function FirstCtrl($scope) {
    $scope.message = "Hello from app 1"
}

var secondApp = angular.module('secondApp', []);

secondApp.controller('SecondCtrl', SecondCtrl);
SecondCtrl.$inject = ['$scope'];

function SecondCtrl($scope) {
    $scope.message = "Hello from app 2"
}


//Angular applications can be automatically bootstrapped only once per page
//Bootstraping more has to be done manually
angular.bootstrap(document.getElementById("secondApp"), ['secondApp']);



