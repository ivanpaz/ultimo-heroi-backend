const mongoose = require("../database");

const TeamSchema = new mongoose.Schema({

    user:{
        type: String,
        required: true
    },

    drive:{
        type: String,
        require: false
    },
    password:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },




});

const Admin = mongoose.model('Admin', TeamSchema);

module.exports = Admin;