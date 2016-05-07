var app = angular.module("propertyManager");

app.service("PropertyServices", function ($http) {

	this.getAllProps = function (cb) {
		$http.get("/properties").success(
			function (output) {
				cb(output);
		});
	};

	this.createProp = function (property, cb) {
		$http.post("/properties", { property: property }).success(function (output) {
				cb(output);
		});
	};

	//for later ;)
	this.propertyObjSetter = function (obj) {
		this.propertyObj = obj;
	};

	this.propertyObjGetter = function () {
		return this.propertyObj;
	};

	this.getOneProp = function (id, cb) {
		$http.get("/properties/" + id.id).success(function (output) {
			cb(output);
		});
	};

})

