var app = angular.module('app', []);

app.value("stringValue", "AngularJS");
app.constant("stringConstant", "constant config value");


app.config(applicationConfig);
// If we want to use our provider in module.config we have to inject with 'provider' suffix
// This injection is done by a provider injector which is different from the regular instance injector,
// in that it instantiates and wires (injects) all provider instances only.

// During application bootstrap, before Angular goes off creating all services,
// it configures and instantiates all providers. We call this the configuration phase of the application life-cycle.
// During this phase, services aren't accessible because they haven't been created yet.

// Once the configuration phase is over, interaction with providers is disallowed and the process of creating services
// starts. We call this part of the application life-cycle the run phase.

// Because of that, we can't use any values in the module.config because they don't exist in that phase.
// However if we want an primitive object to be injectable into both config and run phases
// (for example some API URL needed for bootstaping an app) -  we have to use constants
applicationConfig.$inject = ['oneProvProvider', 'stringConstant'];
function applicationConfig(oneProvProvider, stringConstant) {
    //Here we can use function of which we have extended our provider
    oneProvProvider.addConfig(" new config - " + stringConstant)
}

//provider is a custom type with $get method which is factory for what we want
app.provider('oneProv', OneProvider);
function OneProvider() {

    var provider = {};

    //we can extend provider with our own methods/field so we can use them to configure our provider
    var config = {paramOne: " is amazing"};
    provider.addConfig = function(paramOne) {
        config.paramOne = paramOne;
    };


    //$get is our factory method which can be injected with another services. It configures and returns requested object
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

    //REMEMBER that provider function HAS to return provider object, so either do it that way, or use 'this' everywhere
    console.log(provider);
    return provider;
}


app.controller('DefaultCtrl', DefaultCtrl);
DefaultCtrl.$inject = ['$scope', 'oneProv'];

function DefaultCtrl($scope, oneProv) {
    $scope.viewTest = oneProv.viewTest();
    oneProv.printLog();
}

