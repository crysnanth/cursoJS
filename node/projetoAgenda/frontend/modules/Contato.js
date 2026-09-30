export default class Contato {
    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    init() {
        this.events();
    }

    events() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            const campos = document.querySelectorAll(".input-validar");

            this.validarCampos(campos);
        });
    }

    validarCampos(campos) {
        let isOk = true;
        
        // pego todos os elementos de mensagem de erro e removo do formulário antes de colocar novas mensagens
        const erros = document.querySelectorAll('.p-error-message');
        if (erros) {
            erros.forEach(erroEl => {
                erroEl.remove();
            });
        }

        // para cada campo eu verifico se tem valor
        campos.forEach((campo) => {
            const campoValue = campo.value;

            // se não tiver eu crio a mensagem de erro 
            if (!campoValue) {
                isOk = false;
                this.mostraErro(campo, "O campo não pode estar vazio");
            }
        });

        // se estiver tudo ok no final, eu mando o formulário
        if (isOk) {
            this.form.submit();
        }
    }

    mostraErro(campo, erro) {
        const p = document.createElement('p');
        p.innerText = erro;
        p.style.color = 'red';
        // coloco classe em cada elemento para poder remover posteriormente
        p.setAttribute('class', 'p-error-message');
        campo.insertAdjacentElement('afterend', p);
    }
}