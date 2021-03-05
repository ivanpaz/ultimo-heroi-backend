const express = require("express");
const {create} = require("./controller");
const routes = express.Router();

routes.post("/attachments", create);

module.exports = routes;