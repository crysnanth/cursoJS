const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

route.get('/', homeController.paginaInicial); 
route.post('/', homeController.paginaCliente);

// tenho que exportar as rotas!!!!!
module.exports = route;