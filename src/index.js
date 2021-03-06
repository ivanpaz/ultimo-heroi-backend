const express = require("express");
const morgan = require("morgan");
require("dotenv/config");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(process.env.PORT || 3000);
