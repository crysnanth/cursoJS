// para selecionar um elemento do html, pode-se usar o querySelector passando o id (# no começo), classe (. no começo) ou elemento (tag html), 
const divParagrafos = document.querySelector('#paragrafos');

// o querySelectorAll pega todos os elementos p do html e transforma em uma NodeList, algo bem similar a um array, podendo até utilizar as mesmas coisas do array
const paragrafos = divParagrafos.querySelectorAll('p');

//getComputedStyle() pega todo o estilo (CSS) do html
const bodyStyle = getComputedStyle(document.body);
const backgroundBody = bodyStyle.backgroundColor;

for (const p of paragrafos) {
    p.style.backgroundColor = backgroundBody;
    p.style.color = 'white';
    p.style.padding = '5px';
    p.style.borderRadius = '5px';
}