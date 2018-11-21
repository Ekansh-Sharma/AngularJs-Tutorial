var app = angular.module("myapp", []);


app.controller('AnyController', ['$scope', function($scope){
	$scope.ifValue = true;
	$scope.show = true;
	$scope.countries = [
	{name: 'First country', locals: "First local", sal: 1200},
	{name: 'Second country', locals: "Second local", sal: 4000}
	]
}]);



// app.controller('AnyController', ['$scope', '$filter', function($scope, $filter){
// 	$scope.ifValue = true;
// 	$scope.show = true;
// 	$scope.countries = [
// 	{name: 'First country', locals: "First local", NAME: $filter("uppercase")('First country')},
// 	{name: 'Second country', locals: "Second local", NAME: $filter("uppercase")('Second country')}
// 	]
// }]);