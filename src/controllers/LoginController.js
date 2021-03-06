const Team = require("../teams/model");
module.exports = {

	async login(request, response){
		const time = await Team.findOne({matricula: request.body.matricula, password: request.body.password});            
		if(time != undefined){
			return response.json(time);
		}else{ 
			return response.status(400).json({error: "Senha ou matricula incorrentos"});
		}
	},

	async listAdmin(request, response){
		const times = await Team.find({});            
		return response.json(times);
	},
};
