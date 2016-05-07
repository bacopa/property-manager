var app = angular.module("propertyManager").value();


app.controller("propertyCtrl", function ($scope, PropertyServices, TenantServices){
	
	//for later ;)
	//var cache = $cacheFactory("prop");
	//$scope.prop = prop;


	$scope.properties = [];

	PropertyServices.getAllProps(function (output) {
		$scope.properties = output;
	})

	$scope.sortBy = function(column) {
		$scope.column = column;
	}

	$scope.create = function () {
		var prop = $scope.newProp;
		PropertyServices.create(newProp, function (output) {
			$scope.properties.push(output);
		})
	}
	
	//for later ;)
	$scope.propertyObjSetter = function (obj) {
		PropertyServices.propertyObjSetter(obj);
	}



})

