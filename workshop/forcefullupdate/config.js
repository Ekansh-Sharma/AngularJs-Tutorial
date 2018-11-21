var app = angular.module("myapp", []);


app.controller('BindingController', ['$scope', function($scope){
	$scope.first = 10;
	$scope.second = 20;
	$scope.res = 40;

	$scope.sum = function(){
		$scope.res = $scope.first + $scope.second;
	}

	$scope.forceFully = function(){
		var $scope = angular.element($("#sum")).scope();
		$scope.res =  30;
		$scope.$digest();
	}

}]);