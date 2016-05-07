var app = angular.module("propertyManager", ["ui.router"]);

app.config(function ($urlRouterProvider, $stateProvider) {

	$stateProvider
	.state("properties", {
		url: "/properties",
		templateUrl: "/partials/properties.html",
		controller: "propertyCtrl"
	})
	.state("detailProperties", {
		url: "/properties/:id",
		templateUrl: "/partials/detailProperty.html",
		controller: "detailPropCtrl"
	})
	.state("detailTenant", {
		url: "/tenant/:id", 
		templateUrl: "/partials/detailTenant.html",
		controller: "detailTenantCtrl"
	})
	.state("newProperty", {
		url: "/new/property",
		templateUrl: "/partials/newProperty.html",
		controller:"newPropCtrl"
	})
	$urlRouterProvider.otherwise("/properties");
})










		// resolve: {
		// 	obj:
		// 		function ($stateParams, propertyCtrl){
		// 			console.log("$index", $stateParams.dollaIndex);
		// 			return propertyCtrl.getFromScopeArr($stateParams.dollaIndex);
		// 		}
		// }