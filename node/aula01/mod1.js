const nome = "Crys";
const sobreNome = "Oliveira";

const falaNome = () => {
    console.log(nome, sobreNome);
};

// essa é a forma do node exportar
module.exports.nome = nome;

// também é possível fazer assim
exports.sobreNome = sobreNome;

// nesse contexto, o this aponta para module.exports, então assim também funciona
this.falaNome = falaNome;

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;