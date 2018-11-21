var app = angular.module("myapp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/first/:a/:b', {
		templateUrl: "first.html",
		controller: "FirstController"
	})
	.when('/second/:a/:b/:c?', {
		templateUrl: "second.html",
		controller: "SecondController"
	})
	.when('/third', {
		redirectTo: '/first/7/8'

		// redirectTo: function(params, path, search){
		// 	return '/first'
		// }
	})
	.otherwise({
		template: "There is no page."
	})
}]);

app.controller('FirstController', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.a = $routeParams.a;
	$scope.b = $routeParams.b;
}]);

app.controller('SecondController', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.a = $routeParams.a;
	$scope.b = $routeParams.b;
	$scope.c = $routeParams.c;
}]);