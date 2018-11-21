var app = angular.module("myapp", []);


app.controller('AnyController', ['$scope', '$http', function($scope, $http){
	$scope.fetchData = function(){
		$http({
			url: "https://reqres.in/api/users",
			method: 'GET'
		}).then(function(response){
			$scope.data = response.data
		}, function(error){
			$scope.data = "Some Error occured"
		})
	}
}]);