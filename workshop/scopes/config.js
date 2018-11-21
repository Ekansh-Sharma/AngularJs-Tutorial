var app = angular.module("myapp", []);

app.controller('OuterController', ['$scope', function($scope){
	$scope.name = "Outer Controller Ekansh Sharma";
	$scope.value = "Outer controller value";
}]);


app.controller('InnerController', ['$scope', function($scope){
	$scope.name = "Inner Controller Ekansh Sharme";
});







// var app = angular.module("myapp", []).run(['$rootScope', function($rootscope){
// 	$rootscope.global = "Global"
// }]);

// app.controller('OuterController', ['$scope', function($scope){
// 	$scope.name = "Outer Controller Ekansh Sharma";
// 	$scope.value = "Outer controller value";
// }]);


// app.controller('InnerController', ['$scope', function($scope){
// 	$scope.name = "Inner Controller Ekansh Sharme";
// });