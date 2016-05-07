var mongoose = require("mongoose");
var Tenant = mongoose.model("Tenant");
var Property = mongoose.model("Property");

module.exports = (function (req, res) {
	return {

		getTenants: function (req, res) {
			Tenant.find({}, function (err, data) {
				if(err) { console.log(err)}
				else { 
					res.send(data);
				}
			})
		},

		createTenant: function (req, res) {
			var id = req.params.id;
			Property.find({ _id: id }, function (err, property) {

				var newTenant = new Tenant({
					name: req.body.name,
					email: req.body.email,
					phone: req.body.phone,
					occupation: req.body.occupation,
					income: req.body.income,
					_property: id
				})

				var property0 = property[0];
				property[0].tenants.push(newTenant);
				
				newTenant.save(function (err, data) {
					property0.save(function (err, data) {
						if(err) {
							res.status(400).send(err);
						} else {
							res.send(data)}
					})
				})
			})
		},

		getTenantById: function (req, res) {
			var id = req.params.id
			Tenant.findById(id, function (err, found) {
				if(err) {
					res.status(400).send(err);
				} else {
					res.send(found);
				}
			})
		},

		removeTenant: function (req, res) {
			Tenant.findByIdAndRemove(req.params.id, function (err) {
				if(err) {
						res.status(400).send(err);
				} else {
					//redirect?
					res.send();
				}				
			})
		},

		updateTenant: function (req, res) {
			Tenant.findByIdAndUpdate(req.params.id, 
				{$set: req.body }, 
				{ new: true }, 
				function (err, updatedTenant) 
				{ err ? res.status(400).send(err) : res.send(updatedTenant) });
		}




	}

})();