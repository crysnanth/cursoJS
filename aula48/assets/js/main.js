const formTarefas = document.querySelector('#form-tarefas');
const ulTarefas = document.querySelector('#ul-tarefas');
const inputTarefa = document.querySelector('#input-tarefa');
const teste1 = localStorage.getItem("tarefas");
const test = JSON.parse(teste1);
let count = 0;
let listaTarefas = test;
// captura o evento de submit do formulário
formTarefas.addEventListener('submit', e => {
    e.preventDefault(); // previne o comportamento padrão de envio do formulário

    const tarefa = inputTarefa.value;
    listaTarefas.push(tarefa);
    
    const li = document.createElement('li');
    
    const buttonApagar = document.createElement('button');
    buttonApagar.innerText = 'Apagar';
    buttonApagar.classList.add('btn-apagar');
    
    li.innerText = tarefa + ' ';
    li.appendChild(buttonApagar);
    
    ulTarefas.appendChild(li);

    inputTarefa.value = '';
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
});

document.addEventListener('click', e => {
    const el = e.target;
    if (el.classList.contains('btn-apagar')) {
        const currentTask = el.parentElement.innerText.replace("Apagar", "").trim();
        
        listaTarefas = listaTarefas.filter(v => v != currentTask);
        
        const tarefasJSON = JSON.stringify(listaTarefas);
        localStorage.setItem("tarefas", tarefasJSON);
        
        el.parentElement.remove(); // remove o elemento pai
    }
});

window.onload = () => {
    
    
    for (const tarefa of test) {
        const li = document.createElement("li");

        const buttonApagar = document.createElement("button");
        buttonApagar.innerText = "Apagar";
        buttonApagar.classList.add("btn-apagar");

        li.innerText = tarefa + " ";
        li.appendChild(buttonApagar);

        ulTarefas.appendChild(li);
    }
}