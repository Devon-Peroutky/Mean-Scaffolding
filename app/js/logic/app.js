'use strict'

/* Modules */

var theApp = angular.module('theApp', [
	'ngRoute'
]);

theApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'tempCtrl'
		}).
      	otherwise({
        	redirectTo: '/'
		});
});

// ------------------------------
// ----- Temp Controller --------
// ------------------------------
theApp.controller('tempCtrl', ['$scope', function($scope) {
    console.log("Temp Controller!");
}]);