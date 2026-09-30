const btnIniciar = document.querySelector('#btn-iniciar');
const btnPausar = document.querySelector('#btn-pausar');
const btnZerar = document.querySelector('#btn-zerar');
const spanTimer = document.querySelector('#span-timer');
const hora = new Date();

let count = 0;
let timer;

// evento de click em toda a página
document.addEventListener('click', e => {
    const el = e.target; // pega o elemento que foi clicado
    
    switch (el) {
        case btnIniciar:
            spanTimer.style.color = "black";
    
            timer = setInterval(() => {
                hora.setHours(0, 0, count);

                spanTimer.innerHTML = hora.toLocaleTimeString("pt-br", {
                    hour12: false,
                });

                count++;
            }, 1000);
            break;
        case btnPausar:
            spanTimer.style.color = "red";

            setTimeout(() => {
                clearInterval(timer);
            });
            
            break;
        case btnZerar:
            spanTimer.style.color = "black";
                
            count = 0;
            
            hora.setHours(0, 0, count);
            
            spanTimer.innerHTML = hora.toLocaleTimeString("pt-br", {
                hour12: false,
            });
            
            setTimeout(() => {
                clearInterval(timer);
            });
            break;

        default:
            break;
    }
});