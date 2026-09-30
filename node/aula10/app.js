const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();

// caminho absoluto, mas poderia ser o relativo ./src/views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

// aqui eu falo pro express usar os arquivos estáticos
// arquivos estáticos são arquivos html, css e imagens, são arquivos que não vão mudar muito
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(routes);

app.listen(3000, () => {
    console.log('Servidor Iniciado');
    console.log('Acesse: http://localhost:3000');
});