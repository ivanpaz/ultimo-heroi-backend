const express = require('express');
const multer =require('multer');
const multerConfig = require('./config/multer');


const LoginController = require('./controllers/LoginController');
const missionController = require('./controllers/missionController');
const teamController = require('./controllers/teamController');


const routes = express.Router();


routes.get('/', (request, response) => {
   response.send("<h1>Ivan</h1>");
});

routes.post('/posts',multer(multerConfig).single('file'),  (request, response) => {
    console.log(request.file);
    response.json({post: "Post"});
 });


/*
routes.get('/users/:id', (request, response) => {

    const params = request.params;
    console.log(params);
    return response.json({
        evento: 'teste Ivan',
        dev: 'ivan'
    });
});


routes.post('/users/add/', (request, response) => {

    const body = request.body;
    return response.json({
        AddUser: 'Ivan',
        dev: 'ivan'
    });
});
*/

//LOGAR
routes.post('/login', LoginController.login);
routes.post('/admin', LoginController.admin);

//TIME
routes.post('/time', teamController.create);
routes.get('/time',teamController.list);
routes.post('/time/updateScore', teamController.newScore);

//MISSÕES
routes.post('/missions', missionController.create);
routes.get('/missions', missionController.list);
routes.get('/missions/:numMonth', missionController.listMonth);
routes.post('/missions/createForAll/', missionController.createMissionForTeams);
routes.get('/missions/all', missionController.listAll);
routes.delete('/missions/delete/:id', missionController.deleteMission);
routes.post('/missions/update', missionController.updateMIssion);
routes.get('/score', missionController.getScore);

module.exports = routes;