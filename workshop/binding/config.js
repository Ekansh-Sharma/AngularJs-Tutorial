var app = angular.module("myapp", []);


app.controller('BindingController', ['$scope', function($scope){
	$scope.twoWay = "Two Way";
	$scope.oneWay = "One Way";
}]);