const express = require("express");
const missionController = require("../controllers/missionController");
const missionAttachmentsRoutes = require("./attachments/routes");
const routes = express.Router();

routes.use("/:id", missionAttachmentsRoutes);

routes.post("/", missionController.create);
routes.get("/", missionController.list);
routes.get("/:numMonth", missionController.listMonth);
routes.post("/createForAll/", missionController.createMissionForTeams);
routes.get("/all", missionController.listAll);
routes.delete("/delete/:id", missionController.deleteMission);
routes.post("/update", missionController.updateMIssion);
routes.get("/score", missionController.getScore);

module.exports = routes;
