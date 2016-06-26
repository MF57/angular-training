var app = angular.module('app', []);

// There are two phases of the compilation: pre-link and post-link
// In pre-link directive with highest priority will be executed first
// In post-link directive with lowest priority will be executed first
// Default compilation phase is post-link
// Terminal flag set to true means that directives with lower/higher (depends on compilation phase) priority wont be executed
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

