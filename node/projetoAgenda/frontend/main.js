// esses dois imports é para transpilar o código para navegadores mais antigos funcionarem com tudo
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// estilos
import './assets/css/style.css';

// importando com um nome que eu escolhi, pois o export default da classe me permite fazer assim, já que sempre o que vai ser exportado é a classe
import Login from './modules/Login';
import Contato from './modules/Contato';

console.log('Tô aqui hein!');

const loginCadastro = new Login('form-register');
const login = new Login('form-login');

loginCadastro.init();
login.init();

const contato = new Contato('form-contato');

contato.init();