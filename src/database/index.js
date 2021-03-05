const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true});
mongoose.Promise = global.Promise;

module.exports = mongoose;