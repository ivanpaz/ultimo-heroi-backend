
const Adm = require("../models/admin");


module.exports = {

	async create(request, response) {
		const newUser = await Adm.create(request.body);
		return response.json(newUser);    
        
	},

 

	async admin(request, response){
		const time = await Adm.findOne({user: request.body.user, password: request.body.password});            
    
		if(time != undefined){
			return response.json(time);
		}else{ 
			return response.status(400).json({error: "Login incorrento"});
		}
	},

	async listAdmin(request, response){
		const aaa = await Adm.find({});            
		return response.json(aaa);
	},

    
};
