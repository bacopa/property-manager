var app = angular.module("propertyManager").value();

app.controller("detailTenantCtrl", function ($scope, TenantServices, PropertyServices, $stateParams) {

	$scope.getOneTenant = function (id) {
		TenantServices.getOneTenant(id, function (output) {
			$scope.tenant = output;
		})
	}

	var id = $stateParams;
	$scope.getOneTenant(id);
	
})