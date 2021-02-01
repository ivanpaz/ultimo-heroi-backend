//const connection = require('../database/connection');
const crypto = require('crypto');

const express = require('express');

const Team = require('../models/team');



module.exports = {
    async create(request, response) {
        const {name, capitan, image, score, password} = request.body;
        console.log(name, capitan, image, score, password);

        const team = await Team.create(request.body);
        return response.json(team._id);

        
        
    },


    async list(request, response){
        console.log("Lista de times");

        const times = await Team.find({});            
        return response.json(times);
    }
}