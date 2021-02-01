const express = require('express');
const multer =require('multer');
const multerConfig = require('./config/multer');

const TeamController = require('./controllers/TeamController');
const LoginController = require('./controllers/LoginController');
const MissionController = require('./controllers/MissionController');


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

//TIME
routes.post('/time', TeamController.create);
routes.get('/time',TeamController.list);

//MISSÕES
routes.post('/missions', MissionController.create);
routes.get('/missions', MissionController.list);
routes.get('/missions/:numMonth', MissionController.listMonth);
//routes.delete('/missions/:id', MissionController.delete);


module.exports = routes;