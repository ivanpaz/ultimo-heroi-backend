//const connection = require('../database/connection');
const crypto = require("crypto");

const express = require("express");

const Team = require("../models/team");
const Mission = require("../models/mission"); 


module.exports = {
	async create(request, response) {
		const {name, capitan, image, score, password, matricula} = request.body;
		console.log(name, capitan, image, score, password);

		const team = await Team.create(request.body);
		return response.json(team._id);    
        
	},


	async list(request, response){
		console.log("Lista de times");

		const times = await Team.find({});            
		return response.json(times);
	},

	async newScore(request, response){
		console.log(request.body);        
		const f_id = request.body._id;
		const f_score = request.body.score;

		const result = await Team.findOneAndUpdate({_id: f_id}, {score: f_score});
		console.log(result);
		return response.json(result);
	},

	async listTeamsByMountMission(request, response){
		console.log("Lista de times do mes e missao", request.body);

		const missions = await Mission.find({numMonth: request.body.numMonth, numMission: request.body.numMission}).sort({done:-1, team_id:1});            
		return response.json(missions);
	},

	async getTeam(request, response){

		const teamId = request.headers.authorization;
		console.log("opa", request.body._id);
		const result = await Team.findOne({_id: teamId});
		return response.json(result);
	}
};