import Dashboard from '../pages/Admin/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Forum from '../pages/Forum';
import Topicos from '../pages/Topicos';
import Splash from '../pages/Splash';
import Profile from '../pages/Admin/Profile';
import Carteirinha from '../pages/Admin/Carteirinha/Dashboard';
import SalvarTopico from '../pages/Home/SalvarTopico';
import ListagemTopico from '../pages/Home/Listagem';
import Responder from '../pages/Forum/responder';
import FaleConosco from '../pages/FaleConosco';
import TermoUso from '../pages/TermoUso';
import PoliticaPrivacidade from '../pages/PoliticaPrivacidade';
import Sobre from '../pages/Sobre';
import Crescimento from '../pages/Admin/Crescimento/Dashboard';
import Agenda from '../pages/Agenda';

const ROUTES = {
  DASHBOARD: {
    NAME: 'Dashboard',
    ROUTE: Dashboard,
    TITLE: 'Dashboard',
  },
  HOME: {
    NAME: 'Home',
    ROUTE: Home,
    TITLE: 'Página Principal',
  },
  SIGNUP: {
    NAME: 'SignUp',
    ROUTE: SignUp,
    TITLE: 'Cadastrar-se',
  },
  SIGNIN: {
    NAME: 'SignIn',
    ROUTE: SignIn,
    TITLE: 'Login',
  },
  FORUM: {
    NAME: 'Forum',
    ROUTE: Forum,
    TITLE: 'Fórum',
  },
  TOPICO: {
    NAME: 'Topicos',
    ROUTE: Topicos,
    TITLE: 'Tópicos',
  },
  SPLASH: {
    NAME: 'Splash',
    ROUTE: Splash,
    title: 'hide',
  },
  PROFILE: {
    NAME: 'Profile',
    ROUTE: Profile,
    title: 'hide',
  },
  CARTEIRINHA: {
    NAME: 'Carteirinha',
    ROUTE: Carteirinha,
    TITLE: 'hide',
  },
  CRESCIMENTO: {
    NAME: 'Curva Crescimento',
    ROUTE: Crescimento,
    TITLE: 'hide',
  },
  LISTAGEMTOPICO: {
    NAME: 'ListagemTopico',
    ROUTE: ListagemTopico,
    TITLE: 'hide',
  },
  SALVARTOPICO: {
    NAME: 'SalvarTopico',
    ROUTE: SalvarTopico,
    TITLE: 'hide',
  },
  RESPONDER: {
    NAME: 'Responder',
    ROUTE: Responder,
    TITLE: 'hide',
  },
  FALECONOSCO: {
    NAME: 'FaleConosco',
    ROUTE: FaleConosco,
    TITLE: 'hide',
  },
  TERMOUSO: {
    NAME: 'TermoUso',
    ROUTE: TermoUso,
    TITLE: 'hide',
  },
  TERMOPRIVACIDADE: {
    NAME: 'PoliticaPrivacidade',
    ROUTE: PoliticaPrivacidade,
    TITLE: 'hide',
  },
  SOBRE: {
    NAME: 'Sobre',
    ROUTE: Sobre,
    TITLE: 'hide',
  },
  AGENDA: {
    NAME: 'Agenda',
    ROUTE: Agenda,
    TITLE: 'Agenda',
  },
};

export default ROUTES;
