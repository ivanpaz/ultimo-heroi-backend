const Mission = require("../models/mission");
const Team = require("../teams/model");

module.exports = {
	async create(request, response) {
		const {
			done,
			feedback,
			anex,
			title,
			numMonth,
			numMission,
		} = request.body;
		const team_id = request.headers.authorization;

		const mission = await Mission.create({
			done,
			feedback,
			anex,
			title,
			numMonth,
			numMission,
			team_id,
		});

		return response.json(mission);
	},

	async list(request, response) {
		const f_team_id = request.headers.authorization;
		const missions = await Mission.find({ team_id: f_team_id });
		return response.json(missions);
	},

	async listAll(request, response) {
		const missions = await Mission.find({});
		return response.json(missions);
	},

	async listMonth(request, response) {
		const f_team_id = request.headers.authorization;
		const missions = await Mission.find({
			team_id: f_team_id,
			numMonth: request.params.numMonth,
		});
		return response.json(missions);
	},

	async getScore(request, response) {
		const f_team_id = request.headers.authorization;
		const missions = await Mission.find({ team_id: f_team_id, done: true });
		return response.json(missions);
	},

	
	async deleteMission(request, response) {
		const f_team_id = request.headers.authorization;
		const f_numMonth = request.body.numMonth;
		const f_numMission = request.body.numMission;
		if (f_numMission) {
			try {
				await Mission.deleteMany({
					team_id: f_team_id,
					numMonth: f_numMonth,
					numMission: f_numMission,
				});
				return response.status(204).send();
			} catch {
				return response
					.status(400)
					.json({ error: "Id do Time não encontrado" });
			}
		} else {
			try {
				await Mission.deleteMany({
					team_id: f_team_id,
					numMonth: f_numMonth,
				});
				return response.status(204).send();
			} catch {
				return response
					.status(400)
					.json({ error: "Id do Time não encontrado" });
			}
		}
	},

	async createMissionForTeams(request, response) {
		const { numMonth, numMission } = request.body;
		const times = await Team.find({});
		const feedback = " ";
		const anex = "sem_anexo";
		const title = "Missão " + numMission;

		for (var i = 0; i < times.length; i++) {
			var team_id = times[i].id;
			await Mission.create({
				feedback,
				anex,
				title,
				numMonth,
				numMission,
				team_id,
			});
		}
		return response.json(times);
	},

	async updateMIssion(request, response) {
		const f_done = request.body.done;
		const f_feedback = request.body.feedback;
		const f_anex = request.body.anex;
		const f_id = request.body._id;

		const result = await Mission.findOneAndUpdate(
			{ _id: f_id },
			{ done: f_done, feedback: f_feedback, anex: f_anex }
		);
		return response.json(result);
	},
};
