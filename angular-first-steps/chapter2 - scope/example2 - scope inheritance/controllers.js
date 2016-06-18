/**
 * Created by mf57 on 18.06.2016.
 */

var app = angular.module('app', []);

app.run(function ($rootScope) {
    $rootScope.studenClass = "III C";
});


app.controller('ParentCtrl', function ($scope, $rootScope) {
    $scope.student = {passed: false};
    $scope.grades = [
        {subject: "Math", mark: 5.0},
        {subject: "Science", mark: 4.0},
        {subject: "Arts", mark: 3.5}
    ];

    //Angular inheritance example
    var rootObject = $rootScope;
    var inheritedObject = rootObject.$new();
    rootObject.teacherName = 'Ian';
    inheritedObject.teacherSurname = 'McCooper';

    //will print Ian undefined
    console.log(inheritedObject.teacherName + ' ' + inheritedObject.teacherSurname);
    //will print Ian McCooper
    console.log(rootObject.teacherName + ' ' + rootObject.teacherSurname);
});

app.controller('InheritanceCtrl', function ($scope) {
    $scope.checkTest = function () {
        $scope.student.passed = !$scope.student.passed;
    }
});