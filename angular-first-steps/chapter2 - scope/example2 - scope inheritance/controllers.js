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

    //new scope from inherited from $rootScope
    var inheritedObject = rootObject.$new();

    //new isolated scope from $rootScope (it is a scope, but it isn't inheriting from parents)
    //Isolated scope is being used in directives which we want to reuse more than one time
    var isolatedObject = rootObject.$new(true);

    rootObject.teacherName = 'Ian';
    inheritedObject.teacherSurname = 'McCooper';
    isolatedObject.teacherSurname = 'McCooper';

    //will print Ian McCooper
    console.log(inheritedObject.teacherName + ' ' + inheritedObject.teacherSurname);
    //will print Ian undefined
    console.log(rootObject.teacherName + ' ' + rootObject.teacherSurname);
    //will print undefined McCooper
    console.log(isolatedObject.teacherName + ' ' + isolatedObject.teacherSurname);
});

app.controller('InheritanceCtrl', function ($scope) {
    $scope.checkTest = function () {
        $scope.student.passed = !$scope.student.passed;
    }
});