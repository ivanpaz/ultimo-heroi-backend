const mongoose = require("../database");

const MissionSchema = new mongoose.Schema({

	done:{
		type: Boolean,
		default: false
	},
	feedback:{
		type: String,
		default: "Sem feedback"
	},
	anex:{
		type: String,
		default: ""
	},
	title:{
		type: String
	},
	numMonth:{
		type: String
	},
	numMission:{
		type: String
	},
	team_id:{
		type: String
	},

	createdAt: {
		type: Date,
		default: Date.now
	},

});

const Mission = mongoose.model("Mission", MissionSchema);

module.exports = Mission;