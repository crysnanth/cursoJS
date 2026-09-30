const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Título de teste',
//     descricao: 'Descrição de teste'
// })
// .then(data => console.log(data))
// .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    // isso aqui vai ficar salvo por 7 dias
    // req.session.usuario = { nome: 'Crys', logado: true };

    // mensagem temporária que vai ser apagada depois que eu recuperar elas
    //primeiro parametro é o nome da mensagem e o segundo é a mensagem
    // req.flash('info', 'Olá Mundo!');

    //essa é uma das formas que eu recupero elas
    // console.log(req.flash('info'));
    
    res.render('index', {
        title: 'Título da Página que veio do Controller',
        nums: [1, 2, 3, 4, 5]
    });
};

exports.paginaCliente = (req, res) => {
    res.send(`Foi recebido ${req.body.cliente}`);
}