// fetch('./pessoas.json')
//   .then(response => response.json())
//   .then(jsonPessoas => renderizaPessoas(jsonPessoas));


// utilizando axios (mais simples)
axios('./pessoas.json')
.then(response => renderizaPessoas(response.data));

const renderizaPessoas = json => {
  const divResultado = document.querySelector('.resultado');
  const table = document.createElement('table');
  table.setAttribute('border', 1);
  const tableBody = document.createElement('tbody');
  
  for (const pessoa of json) {
    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    const tdEmail = document.createElement('td');
  
    tdNome.innerText = pessoa.nome;
    tdEmail.innerText = pessoa.email;
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tableBody.appendChild(tr);
  }
  
  table.appendChild(tableBody);
  
  divResultado.appendChild(table);
}