const request = obj => {
    // esse objeto, xml, é usado para fazer requisições a sites/apis da internet
    // famoso AJAX
    const xhr = new XMLHttpRequest();
    
    // aqui se abre a requisição com os paramentros: método HTTP (GET, POST, etc), a url da requisição, e true para indicar que é async (sempre vai ser true, eu acho)
    xhr.open(obj.method, obj.url, true);

    // se fosse POST, eu mandaria os dados do POST aqui, mas GET não precisa
    xhr.send();

    // (modelo antigo, com funções de callback)
    // xhr.addEventListener('load', () => {
    //     // aqui eu verifico o status da requisição
    //     if (xhr.status >= 200 && xhr.status < 300) {
    //         obj.success(xhr.responseText);
    //     } else {
    //         // se der errado
    //         obj.error({
    //             code: xhr.status,
    //             msg: xhr.statusText
    //         });
    //     }
    // });

    // forma moderna, usando promise
    return new Promise((resolve, reject) => {
      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      });
    });
}

// estou adicionando um escutado de eventos de click no documento (página toda)
document.addEventListener('click', e => {
    const el = e.target; // pega o elemento que foi clicado
    const tag = el.tagName.toLowerCase(); // pega a tag html do elemento clicado

    // verifico se a tag é um link
    if (tag === 'a') {
        // previno o comportamento padrão de link (redirecionar)
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina (el) {
    // pego o valor do atributo href do link
    const href = el.getAttribute('href');
    
    const objConfig = {
      method: "GET",
      url: href,
        // aqui são as funções de callback do objeto, poderia ser qualquer outro nome e para qualquer outra funcionalidade, quem cria essas funções sou eu, que também podem ser chamadas de método
        //   success(response) {
        //     carregaResultado(response);
        //   },
        //   error(error) {
        //     console.log(error);
        //   },
        // no caso, eu não uso mais essas funções pois agora estou usando promise, mas se não estivesse usando promise, aí eu usaria essas funções de callback
    };

    // aqui eu chamo a função de request, passando como paramentro um objeto (forma com promise sem async)
    // request(objConfig)
    //     .then(response => carregaResultado(response))
    //     .catch(error => console.log(error));

    // com async e await fica dessa forma (mais moderno e recomendado)
    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch (e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const result = document.querySelector('#resultado');
    result.innerHTML = response;
}