var app = angular.module("myapp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/first', {
		template: "<h1>This is first page</h1>"
	})
	.when('/second', {
		templateUrl: "second.html",
		controller: "BindingController"
	})
	.when('/third', {
		redirectTo: '/first'

		// redirectTo: function(){
		// 	return '/first'
		// }
	})
	.otherwise({
		template: "There is no page."
	})
}]);

app.controller('BindingController', ['$scope', function($scope){
	$scope.first = "Two Way";
	$scope.second = "One Way";
}]);