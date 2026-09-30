function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  // as promisses são promesas do JS que servem quando você não sabe quanto tempo vai demorar para a chegada dos dados, ou execução do código

  // cria-se uma promise usando o objeto promise, passando como paramentro uma função com dois paramentros: resolve ou reject (os nomes são boas práticas), o resolve é quando tudo está ok então você usa resolve para devolver a resposta, o reject é quando algo dá errado.
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Tipo inválido");
      return;
    }

    setTimeout(function () {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("teste", rand(1, 5))
  //usa-se o then para quando a promise terminar, ou seja, quando terminar execute isso
  // o then aceita como callback uma função com o parametro da resposta da promise
  .then((resposta) => {
    console.log(resposta);

    // usa-se return se eu quiser executar outra função com promise depois da primeira
    return esperaAi('teste 2', rand(1, 5))
        .then((resposta) => {
        console.log(resposta);

        return esperaAi('teste 3', rand(1, 5))
            .then(resposta => {
                console.log(resposta)
        });
    });
  })
  // só é necessário um catch dentre as funções, se alguma promise for rejeitada, cai aqui.
  .catch((error) => console.log(error));

// Promise.all -> usa-se quando se tem um array de promises e você quer esperar todos terminarem
const arrayPromises = [
    esperaAi('primeiro', rand(1, 5)),
    esperaAi('segundo', rand(1, 5)),
    esperaAi('terceiro', rand(1, 5)),
    esperaAi('quarto', rand(1, 5)),
];

// quando todas as promises terminarem, ele vai pegar todos os resolves e colocar dentro de um array
// se por acaso alguma der errado, vai ser retornado o erro apenas
Promise.all(arrayPromises).then(resposta => console.log(resposta)).catch(error => console.log(error));

//Promise.race -> quanse a mesma coisa do all, porém só vai retornar uma resposta, sendo ela a que terminar a execução primeiro

//Promise.resolve -> já retorna de uma vez o resolve, dá pra usar quando você já sabe que a resposta já está pronta, tipo, você verifica se o arquivo já está pronto, se já estiver não ter porque esperar ele, aí você já usa o Promise.resolve(arquivo) que já devolve direto o arquivo.
//Promise.reject -> já retorna de uma vez o reject

// em vez de usar o .then, eu posso usar async e await para aguardar o retorno da promise:
// async indica que essa função é assíncrona, eu só posso usar await dentro de uma função async
async function executa() {
    try {
        // await -> espera a promise ser finalizada
        const p1 = await esperaAi('fase 1', rand(1, 5));
        console.log(p1);
        const p2 = await esperaAi('fase 2', rand(1, 5));
        console.log(p2);
        const p3 = await esperaAi('fase 3', rand(1, 5));
        console.log(p3);
        const p4 = await esperaAi('fase 4', rand(1, 5));
        console.log(p4);
        console.log('finalizou');
    } catch (e) {
        // caso algum de errado, ele cai aqui e para de executar o restante
        console.log(e);
    }
}

executa();

// lembrando que todas as funções são de alguma forma assíncrona, ou seja, todas podem executar em tempos diferentes e quando uma terminar, ela pode mostrar o resultado antes da outra, pois promises são executadas em um tempo diferente das demais no JS

// as promises tem 3 estados
// pending -> quando ainda não foi resolvida
// fullfiled -> quando foi resolvida
// reject -> quando foi rejeitada