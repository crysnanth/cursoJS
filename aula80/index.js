//cria uma classe
class Pessoa {
    // construtor da classe, onde fica os parametros obrigatórios na hora de instanciar o objeto da classe
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // na classe, os métodos já são colocados automaticamente no prototype
    falar() {
        console.log(this.nome + 'está falando');
    }

    comer() {
        console.log(this.nome + "está comendo");
    }

    beber() {
        console.log(this.nome + "está bebendo");
    }
}

const p1 = new Pessoa('Crys', 'Oliveira');

// isso aqui serve para proteção dos atributos da classe
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(value) {
        if (typeof value !== 'number' || value > 100) return;
        this[_velocidade] = value;
    }

    get velocidade() {
        return this[_velocidade];
    }

    aumentar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 300; i++) {
    c1.aumentar();
}

console.log(c1.velocidade);

// para extendar uma classe, usa-se a palavra extends (meio padrão mesmo)
// usa-se a função super() para chamar o construtor da classe pai para a classe filha