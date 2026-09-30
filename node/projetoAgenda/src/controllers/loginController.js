const Login = require('../models/loginModel');

exports.index = (req, res) => {
    if (req.session.user) {
        return res.render('login-logado');
    }

    return res.render('login');
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        // como a função de register é async, eu obrigatoriamente tenho que colocar await no retorno dela
        await login.register();

        if (login.errors.length > 0) {
            // cria a mensagem flash de erro (só aparece uma vez)
            req.flash("errors", login.errors);

            // salva a sessão com as mensagem e redireciona para a rota de login
            req.session.save(() => {
                return res.redirect("/login");
            });

            return;
        }

        req.flash("success", 'Seu usuário foi criado!');

        req.session.save(() => {
            return res.redirect("/login");
        });

        return;
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}


exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash("errors", login.errors);
            req.session.save(() => {
                return res.redirect("/login");
            });

            return;
        }
        
        req.flash("success", 'Você entrou no sistema');
        req.session.user = login.user;
        req.session.save(() => {
            return res.redirect("/login");
        });

        return;
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}