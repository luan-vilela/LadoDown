import Dashboard from '../pages/Admin/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Conteudo from '../pages/Conteudos';
import Forum from '../pages/Forum';
import Topicos from '../pages/Topicos';
import Splash from '../pages/Splash';
import Profile from '../pages/Admin/Profile';
import Carteirinha from '../pages/Admin/Carteirinha';
import Responder from '../pages/Forum/responder';
import FaleConosco from '../pages/FaleConosco';
import TermoUso from '../pages/TermoUso';
import PoliticaPrivacidade from '../pages/PoliticaPrivacidade';
import Sobre from '../pages/Sobre';
import Crescimento from '../pages/Admin/Crescimento';
import Agenda from '../pages/Agenda';
import Alerta from '../pages/Alerta';
import Historico from '../pages/Historico';
import Recomendacao from '../pages/Recomendacao';

const ROUTES = {
  DASHBOARD: {
    NAME: 'Dashboard',
    ROUTE: Dashboard,
    TITLE: 'Dashboard',
  },
  CONTEUDO: {
    NAME: 'Conteudo',
    ROUTE: Conteudo,
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
    TITLE: 'hide',
  },
  ALERTA: {
    NAME: 'Alerta',
    ROUTE: Alerta,
    TITLE: 'hide',
  },
  HISTORICO: {
    NAME: 'Hstorico',
    ROUTE: Historico,
    TITLE: 'hide',
  },
  RECOMENDACAO: {
    NAME: 'Recomendacao',
    ROUTE: Recomendacao,
    TITLE: 'hide',
  },
};

export default ROUTES;
