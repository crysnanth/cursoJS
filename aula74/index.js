// função construtora
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.defineProperty(this, 'nomeCompleto', {
        get: function() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set: function(value) {
            this.nome = value;
        }
    });
};

// esse prototype é um objeto que é automaticamente linkado ao construto pelo JS, que funciona como um tipo de herança, ou seja, todo método ou atributo criado no prototype vai ter nos objetos desse construtor

// é recomendado não escrever métodos dentro da função construtora, e sim do prototype (melhora a performance)
Pessoa.prototype.dataNascimento = 1995;


// função de fábrica
function criaCarro(nome, ano) {
    return {
        nome,
        ano,
    }
}

const p1 = new Pessoa('Crys', 'Oliveira');
p1.nomeCompleto = 'teste';
console.log(p1.dataNascimento);

const c1 = criaCarro('Supra', 1999);
console.log(c1.ano);