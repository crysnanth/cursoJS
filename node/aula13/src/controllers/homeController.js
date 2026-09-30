exports.paginaInicial = (req, res) => {
    // esses dados vieram do middlware anterior
    console.log(req.session);
    res.render('index');
}