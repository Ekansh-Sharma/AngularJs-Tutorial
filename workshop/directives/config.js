var app = angular.module("myapp", []);

app.directive('customDirective', function(){
	return {
		// template: "<strong>This is directive{{name}}</strong>" 
		// templateUrl: "info-msg.html"
		templateUrl: "directive-file.html" 
	}
});

//=	
app.directive('isolatedScopeTwoWayDirective', function(){
	return {
		// template: "<strong>This is directive{{name}}</strong>" 
		// templateUrl: "info-msg.html"
		templateUrl: "directive-file.html",
		scope: {
			a: "=",
			b: "=c"
		},
		constroller: function($scope, $element, $attrs){
			// code here
		}
	}
});

app.directive('sharedScopeDirective', function(){
	return {
		// template: "<strong>This is directive{{name}}</strong>" 
		// templateUrl: "info-msg.html"
		templateUrl: "directive-file.html",
		constroller: function($scope, $element, $attrs){
			// code here
		}
	}
});

//@
app.directive('isolatedScopeOneWayDirective', function(){
	return {
		// template: "<strong>This is directive{{name}}</strong>" 
		// templateUrl: "info-msg.html"
		templateUrl: "directive-file.html",
		scope: {
			a: "@",
			b: "@c"
		},
		constroller: function($scope, $element, $attrs){
			// code here
		}
	}
});


app.directive('inheritedScopeDirective', function(){
	return {
		// template: "<strong>This is directive{{name}}</strong>" 
		// templateUrl: "info-msg.html"
		templateUrl: "directive-file.html",
		scope: true,
		constroller: function($scope, $element, $attrs){
			// code here
		}
	}
});

app.directive('isolatedScopeDirective', function(){
	return {
		// template: "<strong>This is directive{{name}}</strong>" 
		// templateUrl: "info-msg.html"
		templateUrl: "directive-file.html",
		scope: {},
		constroller: function($scope, $element, $attrs){
			// code here
		}
	}
});


app.controller("directiveController", function($scope){
	$scope.name = "Controller";
});

//component 
// decorators
// templating
