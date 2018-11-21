var app = angular.module("myapp", []);


app.controller('AnyController', ['$scope', function($scope){
	$scope.ifValue = true;
	$scope.show = true;
	$scope.countries = [
	{name: 'First country', locals: "First local"},
	{name: 'Second country', locals: "Second local"}
	]
}]);