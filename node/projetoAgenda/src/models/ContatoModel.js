const mongoose = require("mongoose");
const validator = require("validator");

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model("Contato", ContatoSchema);

// função construtora, basicamente a mesma coisa da classe, só muda um pouco a sintaxe
function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

// por não estar ligado ao prototype, essa função é estática, ou seja, eu posso chamar ela sem precisar instaciar um objeto Contato, ela não tem acesso nenhuma ao this do objeto
Contato.buscaPorId = async function(idContato) {
    if (typeof idContato !== 'string') {
        this.errors.push('Id inválido');
        return;
    }

    const contato = await ContatoModel.findById(idContato);
    return contato;
};

// método da classe (quando usado função construtora, os métodos devem ser funções normais e não pode ser arrow function)
Contato.prototype.register = async function () {
    this.valida();

    if (this.errors.length > 0) {
        return;
    }

    this.contato = await ContatoModel.create(this.body);
    return;
};

Contato.prototype.valida = function () {
    this.cleanUp();
    if (this.body.email && !(validator.isEmail(this.body.email))) {
        this.errors.push("Email inválido");
    }
    
    if (!(this.body.nome)) {
        this.errors.push("Campo nome é obrigatório");
    }
    
    if (!(this.body.email) && !(this.body.telefone)) {
        this.errors.push("Pelo menos um contato deve ser enviado");
    }

    return;
};

Contato.prototype.cleanUp = function () {
    for (const key in this.body) {
        if (typeof this.body[key] !== "string") {
            this.body[key] = "";
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    };

    return;
};

Contato.prototype.edit = async function (idContato) {
    if (typeof idContato !== 'string') {
        return;
    }

    this.valida();

    if (this.errors.length > 0) {
        return;
    }

    this.contato = await ContatoModel.findByIdAndUpdate(idContato, this.body, { new: true });
};

Contato.buscaContatos = async function() {
    const contatos = await ContatoModel.find().sort({ criadoEm: 1 });
    return contatos;
}

Contato.deleteContato = async function (idContato) {
    if (typeof idContato !== "string") {
        return;
    }

    const contato = await ContatoModel.findByIdAndDelete(idContato);
    return contato;
};

// não esquece de exportar a classe também!!!
module.exports = Contato;
