var tenants = require("./../controllers/tenants.js");
var properties = require("./../controllers/properties.js");

module.exports = function(app) {

	app.get("/properties", function (req, res) {
		properties.getProperties(req, res);
	});

	app.post("/properties", function (req, res) {
		properties.createProperty(req, res); 
	});

	app.post("/properties/new/tenant/:id", function (req, res) {
		tenants.createTenant(req, res);
	});

	app.get("/properties/tenants", function (req, res) {
		tenants.getTenants(req, res);
	});

	app.get("/properties/tenant/:id", function (req, res) {
		tenants.getTenantById(req, res);
	});

	app.get("/properties/:id", function (req, res) {
		properties.getOneProperty(req, res);
	});

	app.delete("/properties/:id", function (req, res) {
		properties.removeProperty(req, res);
	});

	app.delete("/properties/tenant/:id", function (req, res) {
		tenants.removeTenant(req, res);
	});

	app.put("/properties/tenants/:id", function (req, res) {
		tenants.updateTenant(req, res);
	})

	app.put("/properties/:id", function (req, res) {
		properties.updateProperty(req, res);
	})
}