const express = require("express");
const multer =require("multer");
const multerConfig = require("./config/multer");


const LoginController = require("./controllers/LoginController");
const missionController = require("./controllers/missionController");
const teamController = require("./controllers/teamController");
const adminController = require("./controllers/adminController");


const routes = express.Router();


routes.get("/", (request, response) => {
	response.send("<h1>Ivan</h1>");
});

routes.post("/posts",multer(multerConfig).single("file"),  (request, response) => {
	response.json({post: "Post"});
});


//LOGAR
routes.post("/login", LoginController.login);
routes.post("/admin", adminController.admin);
routes.get("/listAdmins", adminController.listAdmin);

routes.post("/createAdmin", adminController.create);

//TIME
routes.post("/time", teamController.create);
routes.get("/time",teamController.list);
routes.post("/time/updateScore", teamController.newScore);

//MISSÕES
routes.post("/missions", missionController.create);
routes.get("/missions", missionController.list);
routes.get("/missions/:numMonth", missionController.listMonth);
routes.post("/missions/createForAll/", missionController.createMissionForTeams);
routes.get("/missions/all", missionController.listAll);
routes.delete("/missions/delete/:id", missionController.deleteMission);
routes.post("/missions/update", missionController.updateMIssion);
routes.get("/score", missionController.getScore);

//ADMIN
routes.post("/listTeamsByMountMission", teamController.listTeamsByMountMission);
routes.get("/getTeam", teamController.getTeam);


module.exports = routes;