const mongoose = require("../database");

const TeamSchema = new mongoose.Schema({

	name:{
		type: String,
		required: true
	},

	capitan:{
		type: String,
		unique: true,
		required: true,
		lowercase: true
	},
	image:{
		type:String    
	},
	score:{
		type: Number,
		default: 0,
	},
	password:{
		type: String,
		required: true
	},
	matricula:{
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},




});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;