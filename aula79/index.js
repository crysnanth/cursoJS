// Declaração de função (Function hoisting, nesse tipo de função, a engine do JS joga todas as funções para o topo do script, então não tem problema chamar a função antes da declaração dela no código)
falaOi();
function falaOi() {
  console.log("Oie");
}

// First-class objects (Objetos de primeira classe, as funções são tratadas como dados no JS)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();
