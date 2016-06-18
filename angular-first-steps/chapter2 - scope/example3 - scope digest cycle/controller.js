var app = angular.module('app', []);

app.controller('DefaultCtrl', function ($scope) {
    
    $scope.number = 1;
    
    //Explicit watcher object to $scope.number  (implicit watchers are created via interpolation)
    //Uses angular.copy and angular.equals for comparing and copying value of watched object
    $scope.$watch('number', function () {
       console.log("Number changed to: " + $scope.number);
    });
    
    $scope.add = function () {
        $scope.number++;
    };

    $scope.subtract = function () {
        $scope.number--;
    };

    $scope.tryToAddWithDelay = function () {
        //changing scope object from outside angular doesn't trigger digest cycle which won't change anything in view
        //however the change in the scope object took place so when the digest cycle will be called
        // the change will be taken into the account
        setTimeout(function() {
            $scope.number++;
            console.log('Adding with delay but it doesnt trigger digest cycle');
        }, 2000)
    };

    $scope.tryToSubtractWithDelay = function () {
        setTimeout(function() {
            $scope.number--;
            console.log('Subtracting with delay but it doesnt trigger digest cycle');
        }, 2000)
    };

    $scope.addWithDelay = function () {
        setTimeout(function() {
            $scope.number++;
            console.log('Adding with delay');
            //manually triggering digest cycle
            //NEVER call $digest, but apply

        }, 2000)
    };

    $scope.subtractWithDelay = function () {
        setTimeout(function() {
            //it is better to wrap code which modifies scope objects outside of angular in $scope.$apply
            //instead of just $scope.$scope.apply() because then this code is wrapped with exception handling
            $scope.$apply(function() {
                $scope.number--;
            });
            console.log('Subtracting with delay');
        }, 2000)
    };
});