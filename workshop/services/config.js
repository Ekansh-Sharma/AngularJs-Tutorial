var app = angular.module("myapp", []);


app.controller('BindingController', ['$scope', 'calculateFactory',function($scope, calculateFactory){
	$scope.first = 1;
	$scope.second = 4;
	$scope.sum = 5;

	$scope.calculate = function(){
		$scope.sum = calculateFactory.getSum($scope.first, $scope.second);
	}
}]);

app.factory('calculateFactory', ['$log', function($log){
	$log.log("Instansiating factory.");
	var calService = {};
	calService.getSum = function(a, b){
		return parseInt(a) + parseInt(b);
	}
	return calService;
}]);

// app.service('calculateService', ['$log', function($log){
// 	$log.log("Instansiating factory.");
// 	this.getSum = function(a, b){
// 		return parseInt(a) + parseInt(b);
// 	}
// }]);


// app.provider('calculateServiceNew', function(){
// 	this.config = function(){
// 		// write any code
// 	}

// 	this.$get = ['$log', function($log){
// 		var calService = {};
// 		calService.getSum = function(a, b){
// 			return parseInt(a) + parseInt(b);
// 		}
// 		return calService;
// 	}]
// });

// app.config(['calculateServiceNew', function(calculateServiceNew){
// 	calculateServiceNew.config();
// }]);