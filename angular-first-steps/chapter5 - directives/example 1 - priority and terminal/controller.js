var app = angular.module('app', []);

app.directive('myDirective1', function() {
    return {
        priority: 1,
        terminal: false,
        link: function() {
            console.log("Logging from directive 1")
        }
        
    
    }
});

app.directive('myDirective2', function() {
    return {
        priority: 2,
        terminal: true,
        link: function() {
            console.log("Logging from directive 2")
        }


    }
});


app.directive('myDirective3', function() {
    return {
        priority: 3,
        terminal: false,
        link: function() {
            console.log("Logging from directive 3")
        }


    }
});


app.directive('myDirective4', function() {
    return {
        priority: 4,
        terminal: false,
        link: function() {
            console.log("Logging from directive 4")
        }


    }
});



app.controller('DefaultCtrl', DefaultCtrl);
DefaultCtrl.$inject = ['$scope'];

function DefaultCtrl($scope) {
    
}

