/**
 * Created by mf57 on 18.06.2016.
 */
angular.module('app', [])
    .controller('FirstCtrl', ['$scope', function ($scope) {
        $scope.message = {sentence: "world"};

        $scope.people = [
            {name: 'Ian', age: 32},
            {name: 'Amy', age: 22}
        ];
        
        $scope.testFunction = function (message) {
            console.log(message);
        }
    }]);

