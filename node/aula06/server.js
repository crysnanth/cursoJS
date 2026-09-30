// micro-framework
const express = require('express');
// importando rotas do arquivo de rotas
const routes = require('./routes');
const app = express();

// aqui eu estou falando para o express usar o método de decodificação para eu conseguir capturar os corpos das requisições post
app.use(express.urlencoded({extended: true}));

// falando para o express usar minhas rotas
app.use(routes);

// rota do tipo get
//rota, requição e resposta
app.get('/', (req, res) => {
    // quando eu acessar a rota /, o server vai me mandar essa resposta
    // res.send('Hello, World!');
    res.send(`
        <form action="/" method="POST" >
            <label>Nome: <label>
            <input type="text" name="nome" />
            <button type="submit">Enviar</button>
        </form>
        `);
});

// dá pra ter várias rotas em métodos HTTP diferentes
app.post('/', (req, res) => {
    // req.body pega o corpo da requisição e devolve o JSON
    console.log(req.body);

    // aqui eu pego o name do formulário
    res.send(`Recebi: ${req.body.nome}`);
});

// barra dois pontos após a rota indica que estou esperando paramentros na rota
// quando eu coloco paramentros na rota, a rota só funciona se tiver os paramentos nela, ou eu posso colocar no final uma interrogação que indica que o parametro pode ou não ser recebido (v4 express), na versão 5 envelope o parametro entre chaves

app.get('/teste/{:id}', (req, res) => {
    // parametros
    console.log(req.params);
    // query string (?nome=Crys&sobreNome=Oliveira)
    console.log(req.query);
    res.send('Oi');
});


// o node vai ficar escutando/executando o servidor nessa porta
app.listen(3000, () => {
    console.log('Servidor Iniciado');
    // eu mesmo coloquei o link do server com a porta 3000 (da hora)
    console.log('Acesse: http://localhost:3000');
});