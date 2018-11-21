var app = angular.module("myapp", []);


app.controller('BindingController', ['$scope', function($scope){
	$scope.twoWay = "Two Way";
	$scope.oneWay = "One Way";
	$scope.hash = {
		a: 1,
		b: 2
	}

	$scope.array = [
		{a: 1, b: 2},
		{c: 4, d: 5}
	]

	$scope.$watch('twoWay', function(newValue, oldValue){
		console.log("twoWay changed")
	});

	$scope.$watch('hash', function(newValue, oldValue){
		console.log("hash changed")
	}, true);

	$scope.$watchGroup(['twoWay', 'oneWay'], function(newValue, oldValue){
		console.log("watchGroup changed")
	});


	$scope.$watchCollection('array', function(newValue, oldValue){
		console.log("watchCollection changed")
	});
}]);