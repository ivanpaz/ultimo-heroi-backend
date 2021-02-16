const crypto = require('crypto');

const express = require('express');

const Team = require('../models/team');

module.exports = {

    async login(request, response){
        console.log("Tentar logar",request.body.capitan, request.body.password );
        const time = await Team.findOne({capitan: request.body.capitan, password: request.body.password});            
        
        console.log(time);
        if(time != undefined){
            return response.json(time);
        }else{ 
            console.log("Senha ou usuario incorreto");
            return response.status(400).json({error: 'Login incorrento'});
        }
    },

    async admin(request, response){
        console.log("Tentar logar admin",request.body.user, request.body.password );
        const time = await Team.findOne({capitan: request.body.capitan, password: request.body.password});            
        
        console.log(time);
        if(time != undefined){
            return response.json(time);
        }else{ 
            console.log("Senha ou usuario incorreto");
            return response.status(400).json({error: 'Login incorrento'});
        }
    },

    
}
