// proteção dos meus dados
require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');
const {
    meuMiddlewareGlobal,
    checkCsrfError,
    csrfMiddleware,
} = require("./src/middlewares/middleware");

// mongoose retorna uma promise, quando terminar eu mando um evento
mongoose
    .connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log("banco de dados foi conectado");
        app.emit("pronto");
    })
    .catch((e) => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');

const app = express();

// caminho absoluto, mas poderia ser o relativo ./src/views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// aqui eu falo pro express usar os arquivos estáticos
// arquivos estáticos são arquivos html, css e imagens, são arquivos que não vão mudar muito
app.use(express.static(path.resolve(__dirname, 'public')));


const sessionOption = session({
    secret: '12.546548d7a68sd4as4dasd45ada56d',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        // quanto tempo vai durar a conexão
        maxAge: 1000 * 60 * 60 * 24 * 7, // sete dias
        httpOnly: true
    }
});

app.use(sessionOption);
app.use(flash());
app.use(helmet());

app.use(csrf());

app.use(meuMiddlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor Iniciado');
        console.log('Acesse: http://localhost:3000');
    });
});

// basicamente, o que está acontecendo é: o banco de dados estava sendo conectado alguns milissegundos depois do app ser iniciado, o que poderia causar alguns bugs para o usuário, então o que eu fiz foi: quando o banco de dados conectar, eu mando mando um evento para o app que depois captura esse evento e só inicia o servidor depois do evento ser capturado (app.emit e app.on)

