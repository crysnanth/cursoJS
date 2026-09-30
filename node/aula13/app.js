const express = require('express');
const routes = require('./routes');
const path = require('path');
// const middlware = require('./src/middlewares/middlewares');

// dessa forma eu estou pegando apenas o meuMidddlwareGlobal, usando desestruturação
const { meuMidddlwareGlobal } = require('./src/middlewares/middlewares');

const app = express();

// caminho absoluto, mas poderia ser o relativo ./src/views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

// aqui eu falo pro express usar os arquivos estáticos
// arquivos estáticos são arquivos html, css e imagens, são arquivos que não vão mudar muito
app.use(express.static(path.resolve(__dirname, 'public')));

// com isso, todas as requisições, em todos os verbos (GET, POST, etc) vão passar por esse middleware
// app.use(middlware);
app.use(meuMidddlwareGlobal);

app.use(routes);


app.listen(3000, () => {
    console.log('Servidor Iniciado');
    console.log('Acesse: http://localhost:3000');
});