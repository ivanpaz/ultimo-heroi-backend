const crypto = require('crypto');

const express = require('express');

const Team = require('../models/team');

module.exports = {

    async login(request, response){
        console.log("Tentar logar");
        const time = await Team.findOne({name: request.body.capitan, password: request.body.password});            
        
        console.log(time);
        if(time != undefined){
            return response.json(time);
        }else{ 
            console.log("Senha ou usuario incorreto");
            return response.status(400).json({error: 'Login incorrento'});
        }
    },

    
}
