var app = angular.module('app', []);


//Simple Values to be injected
app.value('stringValue', "I'm injected string value");
app.value('integerValue', 42);
app.value('objectValue', {name: "Ian", surname: "Cooper"});

app.value('clientId', "a12345654321x");


//Factory which can be injected with different dependencies and it uses them to create result object
app.factory('authTokenFactory', ['clientId', function(clientId) {
    var encrypt = function(data1, data2) {
        // NSA-proof encryption algorithm:
        return (data1 + ':' + data2).toUpperCase();
    };

    var secret = "very secret";
    return encrypt(clientId, secret);
}]);



app.controller('DefaultCtrl', DefaultCtrl);
DefaultCtrl.$inject = ['$scope', 'stringValue', 'integerValue', 'objectValue', 'authTokenFactory'];

function DefaultCtrl($scope, stringValue, integerValue, objectValue, authTokenFactory) {
    
    console.log(stringValue);
    console.log(integerValue);
    console.log(objectValue);
    console.log(authTokenFactory);
    
    //needs to be assigned to scope to be used in the view
    $scope.stringValue = stringValue;
    $scope.integerValue = integerValue;
    $scope.objectValue = objectValue;
    $scope.token = authTokenFactory;
}