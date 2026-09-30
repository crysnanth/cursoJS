//               012345678
let umaString = "Meu valor";
console.log(umaString[2]); // retorna o caractere da posição 2 (u)
console.log(umaString.charAt(2)); // retorna o caractere da posição 2 (u)

// length
umaString.length;

// Caractere de escape \
console.log(umaString.charAt(-1)); // Retorna o valor da pos
console.log(umaString.charCodeAt(4)); // Retorna o código inteiro que repsetanta o valor na tabela asc
console.log(umaString.concat(" ", "ei", " ", "sister")); // raramente usado
console.log(umaString.indexOf("e", 0)); // Retorna o índice
console.log(umaString.lastIndexOf("e", umaString.length)); // Retorna o índice
console.log(umaString.match(/[A-Za-z]+/g)); // Retorna um array com os valores encontrados (se g)
console.log(umaString.search(/[a-z]+/g)); // Retorna o índice da primeira ocorrência
console.log(umaString.replace(/e/g, "3"));
console.log(umaString.slice(2, 7));
console.log(umaString.slice(-3, -1));
console.log(umaString.split(" ", 2));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
