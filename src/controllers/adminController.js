const crypto = require("crypto");

const express = require("express");


const Adm = require("../models/admin");
const Team = require("../models/team");

module.exports = {

	async create(request, response) {
        
		const {user, password, m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12} = request.body;
		console.log(request.body);

		const newUser = await Adm.create(request.body);
		return response.json(newUser);    
        
	},

 

	async admin(request, response){
		console.log("Tentar logar ssss",request.body.user, request.body.password );
		const time = await Adm.findOne({user: request.body.user, password: request.body.password});            
        
		console.log(time);
		if(time != undefined){
			return response.json(time);
		}else{ 
			console.log("Senha ou usuario incorreto");
			return response.status(400).json({error: "Login incorrento"});
		}
	},

	async listAdmin(request, response){
		console.log("Lista de admins");

		const aaa = await Adm.find({});            
		return response.json(aaa);
	},

    
};
