const express = require("express");
var missionRoutes = require("./missions/routes");

const LoginController = require("./controllers/LoginController");
const missionController = require("./controllers/missionController");
const teamController = require("./controllers/teamController");
const adminController = require("./controllers/adminController");

const routes = express.Router();

//LOGAR
routes.post("/login", LoginController.login);
routes.post("/admin", adminController.admin);
routes.get("/listAdmins", adminController.listAdmin);

routes.post("/createAdmin", adminController.create);

//TIME
routes.post("/time", teamController.create);
routes.get("/time", teamController.list);
routes.post("/time/updateScore", teamController.newScore);

routes.use("/missions", missionRoutes);
//ADMIN
routes.post("/listTeamsByMountMission", teamController.listTeamsByMountMission);
routes.get("/getTeam", teamController.getTeam);

module.exports = routes;
