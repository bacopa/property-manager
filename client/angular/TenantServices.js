var app = angular.module("propertyManager");

app.service("TenantServices", function ($http) {

	this.getAllTenants = function(cb) {
		$http.get("/properties/tenants/:id").success(function (output) {
			cb(output);
		})
	};

	this.createTenant = function(id, cb) {
		$http.post("/properties/new/tenant/" + id.id).success(function (ouput) {
			cb(output);
		})
	};

	this.getOneTenant = function(id, cb) {
		$http.get("/properties/tenant/" + id.id).success(function (output) {
			cb(output);
		})
	}


})