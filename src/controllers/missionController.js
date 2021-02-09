const { json } = require('body-parser');
const crypto = require('crypto');

const express = require('express');

const Mission = require('../models/mission');
const Team = require('../models/team');



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

    async listAll(request, response){
        console.log("allllllllllllllll");
        const missions = await Mission.find({})
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
        

    },

    async deleteMission(request, response){
        const f_team_id = request.headers.authorization;
        console.log("Id do time", f_team_id);
        const f_numMonth = request.body.numMonth;
        const f_numMission = request.body.numMission;
        if(f_numMission){
            try{
                await Mission.deleteMany({'team_id': f_team_id, 'numMonth': f_numMonth, 'numMission': f_numMission});
                return response.status(204).send();
            }catch{
                return response.status(400).json({error: "Id do Time não encontrado"});
            }         
        }else{
            try{
                await Mission.deleteMany({'team_id': f_team_id, 'numMonth': f_numMonth});
                return response.status(204).send();
            }catch{
                return response.status(400).json({error: "Id do Time não encontrado"});
            }   
        }

    },

    async createMissionForTeams(request, response){
        const {numMonth, numMission} = request.body;
        console.log(numMonth, numMission);
        const times = await Team.find({});

        const done= false;
        const feedback =" ";
        const anex = "sem_anexo";
        const title = "Missão "+ numMission;


        for(var i = 0; i < times.length; i++) {
            var team_id = times[i].id;  

            const mission = result = await Mission.create({
                
                feedback, 
                anex, 
                title, 
                numMonth, 
                numMission,
                team_id,
            });
            
            console.log(mission);
        }

        return response.json(times);
    }
}