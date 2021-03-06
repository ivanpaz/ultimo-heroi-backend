const express = require("express");
const missionRoutes = require("./missions/routes");
const teamsRoutes = require("./teams/routes");

const LoginController = require("./controllers/LoginController");

const adminController = require("./controllers/adminController");

const routes = express.Router();

//LOGAR
routes.post("/login", LoginController.login);
routes.post("/admin", adminController.admin);
routes.get("/listAdmins", adminController.listAdmin);

routes.post("/createAdmin", adminController.create);

routes.use("/times", teamsRoutes);
routes.use("/missions", missionRoutes);
//ADMIN
/*
routes.post("/listTeamsByMountMission", teamController.listTeamsByMountMission);
routes.get("/getTeam", teamController.getTeam);
*/
module.exports = routes;
