// fazendo o import do um módulo do node, estilo ES6 (no node tem que ser commomJS que é o require)
import validator from 'validator';

//criando e exportando a classe por padrão, ou seja, quando eu for importar não preciso especificar nada, pois essa classe é a padrão do export
export default class Login {
    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    init() {
        this.events();
    }

    events() {
        // cofere se o formulário existe, se não existir não faz nada
        if (!this.form) return;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const inputEmail = el.querySelector('input[name="email"]');
        const inputPassword = el.querySelector('input[name="password"]');
        let error = false;
        
        if (!validator.isEmail(inputEmail.value)) {
            error = true;
            if (!document.getElementById('p-validate-email')) {
                const p = document.createElement("p");
                p.setAttribute('id', 'p-validate-email');
                p.innerText = 'Email inválido';
                p.style.color = 'red';
                inputEmail.insertAdjacentElement("afterend", p);
            }
        } else {
            if (document.getElementById("p-validate-email")) {
                document.getElementById("p-validate-email").remove();
            }
        }

        if (inputPassword.value.length < 3 || inputPassword.value.length > 50) {
            error = true;
            if (!document.getElementById('p-validate-password')) {
                const p = document.createElement("p");
                p.setAttribute('id', 'p-validate-password');
                p.innerText = "Senha inválida";
                p.style.color = 'red';
                inputPassword.insertAdjacentElement("afterend", p);
            }
        } else {
            if (document.getElementById("p-validate-password")) {
                document.getElementById("p-validate-password").remove();
            }
        }

        // se não tiver nenhum erro, o formulário pode ser enviado normalmente
        if (!error) {
            el.submit();
        }
    }
}