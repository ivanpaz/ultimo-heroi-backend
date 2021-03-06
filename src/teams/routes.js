const express = require("express");
const routes = express.Router();
const { create, list, newScore, update } = require("./controller");

routes.post("/", create);
routes.get("/", list);
routes.patch("/:id", newScore);
routes.put("/:id", update);

module.exports = routes;
