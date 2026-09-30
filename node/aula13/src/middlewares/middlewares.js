//module.exports é a mesma coisa de faze export default do JS
// module.exports = (req, res, next) => {
//     console.log('Middleware global aqui...');
//     next();
// };

// dessa forma eu estou passando apenas um objeto no exports, ou seja, preciso pegar ele na hora de importar
exports.meuMidddlwareGlobal = (req, res, next) => {
    console.log('Middleware global aqui...');
    next();
}