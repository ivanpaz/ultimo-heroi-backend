const mongoose = require("../database");

const AdmSchema = new mongoose.Schema({

	user:{
		type: String,
		required: true
	},
   
	password:{
		type: String,
		required: true
	},   
	m1:{
		type: Number
	},
	m2:{
		type: Number
	},
	m3:{
		type: Number
	},
	m4:{
		type: Number
	},
	m5:{
		type: Number
	},
	m6:{
		type: Number
	},
	m7:{
		type: Number
	},
	m8:{
		type: Number
	},
	m9:{
		type: Number
	},
	m10:{
		type: Number
	},
	m11:{
		type: Number
	},
	m12:{
		type: Number
	}

});

const Adm = mongoose.model("Adm", AdmSchema);

module.exports = Adm;