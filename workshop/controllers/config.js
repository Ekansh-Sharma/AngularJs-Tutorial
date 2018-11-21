var app = angular.module("myapp", []);


app.controller('FirstController', ['$scope', function($scope){
	$scope.name = "First Controller Ekansh Sharma";
}]);


app.controller('SecondController', function(){
	this.name = "Second Controller Ekansh Sharme";
});