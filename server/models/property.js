var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PropertySchema = new mongoose.Schema({
 
	name: {type: String, required: true},
	address: {type: String, required: true},
	rent: {type: Number},
	type: {type: String},
	vacancies: {type: Number},
	units: {type: Number},
	tenants: [{type: Schema.Types.ObjectId, ref: "Tenant"}]

});

mongoose.model("Property", PropertySchema);