var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TenantSchema = new mongoose.Schema({

	_property: {type: Schema.Types.ObjectId, ref: "Property"},
	name: {type: String, required: true},
	email: {type: String},
	phone: {type: Number},
	occupation: {type: String},
	income: {type: Number},
	unit: {type: String}

});

mongoose.model("Tenant", TenantSchema)