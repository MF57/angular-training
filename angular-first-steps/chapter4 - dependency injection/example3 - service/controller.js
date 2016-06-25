var app = angular.module('app', []);

app.value('stringValue', 'AngularJS');

app.service('OneService', function() {
    this.printLog = function() {
        console.log("Logging from OneService");
    };
    
    this.newValue = function() {
        return "New value from OneService"
    }
});

//Service is just a factory which calls new on the passed object
//app.factory('TwoService', function() { return new TwoService(); }); is equivalent
app.service('TwoService', TwoService);
TwoService.$inject = ['stringValue'];

function TwoService(stringValue) {
    this.printLog = function() {
        console.log("Logging from TwoService");
    };
    
    this.newValue = function() {
        return stringValue;
    }
}

app.controller('DefaultCtrl', DefaultCtrl);
DefaultCtrl.$inject = ['$scope', 'OneService', 'TwoService'];

function DefaultCtrl($scope, OneService, TwoService) {
    OneService.printLog();
    TwoService.printLog();
    $scope.oneMessage = OneService.newValue();
    $scope.twoMessage = TwoService.newValue();
}

