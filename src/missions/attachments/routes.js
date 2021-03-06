const express = require("express");
const  AttachmentsController = require("./controller");
const uploader = require("./uploader");
const routes = express.Router();

const controller = new AttachmentsController(uploader);
routes.post("/attachments", controller.create);

module.exports = routes;