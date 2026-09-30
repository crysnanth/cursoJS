const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Título de teste',
    descricao: 'Descrição de teste'
})
.then(data => console.log(data))
.catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
}