var app = angular.module("propertyManager").value();

app.controller("detailPropCtrl", function ($scope, PropertyServices, TenantServices, $stateParams) {

	//console.log("prop", prop)

	//for later ;)
	$scope.propertyObjGetter = function () {
		$scope.prop = PropertyServices.propertyObjGetter();
	}
	
	$scope.getOneProp = function (id) {
		PropertyServices.getOneProp(id, function (output) {
			$scope.prop = output;
		});
		
	}
	var id = $stateParams;
	$scope.getOneProp(id);

	//get tenants' info 

})