// proteção dos meus dados
require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');

// mongoose retorna uma promise, quando terminar eu mando um evento
mongoose
    .connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log("banco de dados foi conectado");
        app.emit("pronto");
    })
    .catch((e) => console.log(e));

const app = express();

// caminho absoluto, mas poderia ser o relativo ./src/views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

// aqui eu falo pro express usar os arquivos estáticos
// arquivos estáticos são arquivos html, css e imagens, são arquivos que não vão mudar muito
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(routes);
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor Iniciado');
        console.log('Acesse: http://localhost:3000');
    });
});

// basicamente, o que está acontecendo é: o banco de dados estava sendo conectado alguns milissegundos depois do app ser iniciado, o que poderia causar alguns bugs para o usuário, então o que eu fiz foi: quando o banco de dados conectar, eu mando mando um evento para o app que depois captura esse evento e só inicia o servidor depois do evento ser capturado (app.emit e app.on)

