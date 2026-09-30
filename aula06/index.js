// declaração de variável
let nome = 'João';

// maneira mais antiga de declarar uma variável
var nome2 = 'Maria';

// também é possível declarar sem dizer o valor
let nome3; // na verdade, o motor do JS coloca o valor undefined na variável que serve para mostrar que não tem valor

console.log(nome, 'tem 22 anos');

// é possível mudar o da variável valor durante a execução do programa
nome = 'Enzo';

console.log(nome, 'tem 22 anos');

nome = 'Arquibaldo';

console.log(nome, 'tem 22 anos');

// não pode criar variável com palavras reservadas da linguagem
// variável precisam ter nomes significativos
// Não pode começar o nome com número
// Não pode conter espaços ou traços no nome da variável
// camelCase é o padrão dos devs JS
// js é case sensitive
// não podemos redeclarar variávels com a palavra let
// não utilizar VAR e sim LET