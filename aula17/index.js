function soma (n1 = 0, n2 = 0) {
    return n1 + n2;
}

const resultado = soma(10, 10);
console.log(resultado);

const resultado2 = soma();
console.log(resultado2);


// criando uma função e colocando em uma variável
const raiz = function(n) {
    return n ** 0.5;
}

// a chamada da função é a mesma coisa
console.log(raiz(3));

// arrow function
const menor = (n1 ,n2) => {
    return n1 < n2 ? n1 : n2;
}

// também pode ser assim
// const menor = (n1, n2) => return n1 < n2 ? n1 : n2;