var mongoose = require("mongoose");
var Tenant = mongoose.model("Tenant");
var Property = mongoose.model("Property");

module.exports = (function (){

	return {

		getProperties: function (req, res) {

			Property.find({})
			.populate("tenants")
			.exec(function (err, data) {
				err ? console.log(err) : res.send(data);
			});
		},

		getOneProperty: function (req, res) {

			var id = req.params.id;
			
			Property.find( { _id: id } )
				.populate("tenants")
				.exec(function (err, found) {
					if(err) {
						res.status(400).send(err);
					} else {

						res.send(found[0]);
					}
			});
		},

		createProperty: function (req, res) {

			var newProperty = new Property({

				address: req.body.address,
				rent: req.body.rent,
				type: req.body.rent,
				vacant: req.body.rent,
				units: req.body.rent,
				tenants: []

			});

			newProperty.save(function (err, data) {
				if(err){console.log("Error while saving newProperty...=( :", err)}
				else {
					res.send(data);
				}
			})
		},

		removeProperty: function (req, res) {
			Property.findByIdAndRemove(req.params.id, function (err) {
				if(err) {
						res.status(400).send(err);
				} else {
					res.send();
				}
			})
		},

		updateProperty: function (req, res) {
			Property.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, updated){
				err ? res.status(400).send(err) : res.send(updated);
			})
		}
	}
		
})();