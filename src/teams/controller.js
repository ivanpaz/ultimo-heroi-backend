const Team = require("./model");
const Mission = require("../models/mission");

module.exports = {
	async create(request, response) {
		const team = await Team.create(request.body);
		return response.json(team._id);
	},

	async list(request, response) {
		const times = await Team.find({});
		return response.json(times);
	},

	async newScore(request, response) {
		const id = request.params.id;
		const f_score = request.body.score;

		const result = await Team.findOneAndUpdate(
			{ _id: id },
			{ score: f_score }
		);
		return response.json(result);
	},

	async update(request, response) {
		const id = request.params.id;
		const campos = request.body;

		const result = await Team.findOneAndUpdate({ _id: id }, { ...campos });
		return response.json(result);
	},

	async listTeamsByMountMission(request, response) {
		const missions = await Mission.find({
			numMonth: request.body.numMonth,
			numMission: request.body.numMission,
		}).sort({ done: -1, team_id: 1 });
		return response.json(missions);
	},

	async getTeam(request, response) {
		const teamId = request.headers.authorization;
		const result = await Team.findOne({ _id: teamId });
		return response.json(result);
	},
};
