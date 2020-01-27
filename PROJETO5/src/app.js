const express = require('express');
const app = express();
const router = express.Router();


const index = require ('./routes/index');
const pokemonRoutes = require ('./routes/pokemonRoutes');

app.use('/', index);
app.use('/pokemon/', pokemonRoutes);
app.use('/pokemon-species/', pokemonRoutes);
app.use('/pokemon-color/', pokemonRoutes);


module.exports = app;