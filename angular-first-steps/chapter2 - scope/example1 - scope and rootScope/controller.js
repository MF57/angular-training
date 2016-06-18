/**
 * Created by mf57 on 18.06.2016.
 */

//Angular module is a collection of configuration and run blocks which get applied to the application during the bootstrap process
var app = angular.module('app', []);


//Run blocks are the closest thing in Angular to the main method.
// A run block is the code which needs to run to kickstart the application.
// It is executed after all of the services have been configured and the injector has been created.
// Run blocks typically contain code which is hard to unit-test, and for this reason should be declared
// in isolated modules, so that they can be ignored in the unit-tests.
app.run(function ($rootScope) {
   $rootScope.dateOriginal = new Date(); 
});


//why not ['$scope', '$rootScope', function ($scope, $rootScope) { ... }]) ?
app.controller('DateCtrl', function ($scope, $rootScope) {
    $scope.original = function () {
        return $rootScope.dateOriginal;
    }
});