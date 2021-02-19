const crypto = require('crypto');

const express = require('express');

const Team = require('../models/team');
//const Admin = require('../models/admin');

module.exports = {

    async login(request, response){
        console.log("Tentar logar",request.body.matricula, request.body.password );
        const time = await Team.findOne({capitan: request.body.matricula, password: request.body.password});            
        
        console.log(time);
        if(time != undefined){
            return response.json(time);
        }else{ 
            console.log("Senha ou matricula incorreto");
            return response.status(400).json({error: 'Senha ou matricula incorrento'});
        }
    },

   /* async admin(request, response){
        console.log("Tentar logar ssss",request.body.user, request.body.password );
        const time = await Admin.findOne({user: request.body.user, password: request.body.password});            
        
        console.log(time);
        if(time != undefined){
            return response.json(time);
        }else{ 
            console.log("Senha ou usuario incorreto");
            return response.status(400).json({error: 'Login incorrento'});
        }
    },*/

    async listAdmin(request, response){
        console.log("Lista de admins");

        const times = await Team.find({});            
        return response.json(times);
    },

    
}
