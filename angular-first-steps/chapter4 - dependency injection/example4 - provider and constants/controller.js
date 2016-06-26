var app = angular.module('app', []);

app.config(function (oneProvProvider) {
    oneProvProvider.addConfig(" new config")
});

app.value("stringValue", "AngularJS");


app.provider('oneProv', OneProvider);
function OneProvider() {

    var provider = {};

    var config = {paramOne: " is amazing"};
    provider.addConfig = function(paramOne) {
        config.paramOne = paramOne;
    };

    provider.$get = getService;

    getService.$inject = ['stringValue'];
    function getService(stringValue) {
        var service = {};
        service.printLog = function() {
            console.log("Logging from provider: " + stringValue + config.paramOne)
        };

        service.viewTest = function() {
            return "Logging from provider: " + stringValue + config.paramOne;
        };

        return service;
    }

    return provider;
}


app.controller('DefaultCtrl', DefaultCtrl);
DefaultCtrl.$inject = ['$scope', 'oneProv'];

function DefaultCtrl($scope, oneProv) {
    $scope.viewTest = oneProv.viewTest();
    oneProv.printLog();
}

