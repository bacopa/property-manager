var app = angular.module("propertyManager");


app.controller("newPropCtrl", function ($scope, PropertyServices) {


	$scope.createProp = function (property) {
		PropertyServices.createProp(property)
	}
})