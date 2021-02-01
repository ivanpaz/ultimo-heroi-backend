const express = require('express');
const morgan = require('morgan');
require('dotenv/config');

const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(morgan('dev'));

app.use(require('./routes'));



app.listen(process.env.PORT ||  3000);

//const bodyParser = require('body-parser');
/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
require('./controllers/authController')(app);*/