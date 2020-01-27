const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

//Rotas
const index = require('./routes/index');
const personRoute =  require('./routes/personRoute');

app.use('/', index);
app.use('/all', personRoute);

module.exports = app;