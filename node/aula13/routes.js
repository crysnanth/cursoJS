const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

// middlware são funções que serão executadas durante as rotas.
// ou seja, eu posso fazer várias coisas até chegar na função final, serve para intercptar as ações do usuário
function meuMidddlware(req, res, next) {
    req.session = { nome: 'Crys' };
    console.log("Passei no Midddlware");
    // se eu não colocar o next, essa função nunca vai passar para a próxima
    next();
}

route.get('/', meuMidddlware, homeController.paginaInicial);

// tenho que exportar as rotas!!!!!
module.exports = route;