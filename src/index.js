const express = require('express');
const morgan = require('morgan');
require('dotenv/config');

const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_URL, {useMongoClient: true, useNewUrlParser:true});
console.log(process.env.MONGODB_URL, 'aaaaaaaaaaaa');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(morgan('dev'));

app.use(require('./routes'));



app.listen(3000);

//const bodyParser = require('body-parser');
/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
require('./controllers/authController')(app);*/