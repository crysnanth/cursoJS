const mod1 = require('./mod1'); // assim é feita a importação do node
// console.log(mod1.falaNome());

const falaNome = require('./mod1').falaNome; // assim eu importo apenas um módulo
// falaNome();

const falaNome2 = mod1.falaNome;

// desestruturação também funciona normalmente
const {nome, sobreNome} = require('./mod1');

const {Pessoa} = require('./mod1');
const p1 = new Pessoa('Crys');
// console.log(p1);

// quando você instala algum módulo do node, usando npm install por exemplo, ele vai pra pasta node_modules e na hora de importar não precisa colocar o caminho, apenas o nome do módulo
const axios = require('axios');
axios("https://api.github.com/users/hadley/orgs")
    .then((response) => console.log(response.data))
    .catch((e) => console.log(e));