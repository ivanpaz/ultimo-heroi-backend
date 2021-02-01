const crypto = require('crypto');

const express = require('express');

const Mission = require('../models/mission');

module.exports = {

    async create(request,response){
        const {done, feedback, anex, title, numMonth, numMission} = request.body;
        const team_id = request.headers.authorization;

        console.log(team_id);

        const mission = result = await Mission.create({
            done, 
            feedback, 
            anex, 
            title, 
            numMonth, 
            numMission,
            team_id
        });

        return response.json(mission);
        
    },


    async list(request, response){
        const f_team_id = request.headers.authorization;
        const missions = await Mission.find({team_id:f_team_id})
        return response.json(missions);
    },

    async listMonth(request, response){
        const {f_numMonth} = request.params.numMonth;
        console.log(request.params.numMonth);
        const f_team_id = request.headers.authorization;
        const missions = await Mission.find({team_id: f_team_id, numMonth: request.params.numMonth});
        return response.json(missions);
    },


    async delete(request, response){
        const {id} = request.params;
        console.log(id, "deletar");

        const team_id = request.headers.authorization;

        console.log("deletar do " + team_id );

        const mission = await connection('missions').select('team_id', 'feedback').where('id', id);
        console.log(mission);

        if(mission[0].team_id){
            if(mission[0].team_id != team_id){
                console.log("Não autorizado");
                return response.status(401).json({error: "Não permitido"});
            }
            await connection('missions').where('id', id).delete();
            return response.status(204).send();
        }else{
            return response.status(400).json({error: "Id não encontrado"});
        }
        

    }
}