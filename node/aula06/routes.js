const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require("./controllers/contatoController");

// em vez de usar o app.get eu uso o route.get
// em vez de colocar a função aqui eu uso a função que exportei do controller
route.get("/rotateste", homeController.paginaInicial);

route.get('/contato', contatoController.paginaInicial);

module.exports = route;