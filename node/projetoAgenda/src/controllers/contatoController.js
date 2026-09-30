const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato', {
        contato: {},
    });
};

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();
        
        if (contato.errors.length > 0) {
            req.flash("errors", contato.errors);
            req.session.save(() => {
                res.redirect("/contato");
                return;
            });
            return;
        }

        req.flash("success", 'Contato registrado');
        req.session.save(() => {
            res.redirect(`/contato/show/${contato.contato._id}`);
        });
    } catch (e) {
        console.log(e);
        res.render('404');
    }
    
    return;
};

exports.showContato = async function (req, res) {
    const id = req.params.id;
    
    if (!id) {
        console.error('Id não econtrado');
        res.render('404');
        return;
    }

    const contato = await Contato.buscaPorId(id);
    if (!contato) {
        console.error("Contato não econtrado");
        res.render("404");
        return;
    }

    res.render('contato', {
        contato,
    });
    
    return;
};

exports.editContato = async function (req, res) {
    try {
        const id = req.params.id;
    
        if (!id) {
            console.error("Id não econtrado");
            res.render("404");
            return;
        }
    
        const contato = new Contato(req.body);
        await contato.edit(id);
        
        if (contato.errors.length > 0) {
            req.flash("errors", contato.errors);
            req.session.save(() => {
                res.redirect(`/contato/show/${id}`);
                return;
            });
            return;
        }
    
        req.flash("success", "Contato editado com sucesso");
        req.session.save(() => {
            res.redirect(`/contato/show/${id}`);
        });
    } catch (e) {
        console.log(e);
        res.send('404');
    }
};

exports.deleteContato = async function(req, res) {
    const id = req.params.id;

    if (!id) {
        console.error("Id não econtrado");
        res.render("404");
        return;
    }

    const contato = await Contato.deleteContato(id);
    if (!contato) {
        console.error("Contato não econtrado");
        res.render("404");
        return;
    }
    req.flash("success", "Contato apagado com sucesso");
    req.session.save(() => {
        res.redirect(`/`);
    });

    return;
}