var app = angular.module('prasad',[])

var onMainCtrl = function ($scope) {    
    $scope.name="Text will appear here..."; 
}

app.controller("MainCtrl",onMainCtrl)