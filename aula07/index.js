// não pode criar constante com palavras reservadas da linguagem
// constantes precisam ter nomes significativos
// Não pode começar o nome com número
// Não pode conter espaços ou traços no nome da constante
// camelCase é o padrão dos devs JS
// js é case sensitive
// não podemos modificar um valor de uma consntate
// não utilizar VAR e sim CONST

const nome = 'João';

// com const, não posso simplesmente declarar sem colocar um valor, pois como não pode ser alterado, não teria como mudar depois
// const nome2;

// não funciona
// nome = 'Maria';

// String = Text | Number = Número
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
console.log(resultaDuplicado);

// descobrir qual o tipo da variável
console.log(typeof primeiroNumero);