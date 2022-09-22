
import Dashboard from '../pages/Admin/Home'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home'
import Forum from '../pages/Forum'
import Topicos from '../pages/Topicos'
import Vacina from '../pages/CadastroVacina/Vacina';
import Fabricante from '../pages/CadastroVacina/Fabricante';
import Splash from '../pages/Splash';
import Profile from '../pages/Admin/Profile';

const ROUTES = {
    DASHBOARD: {
        NAME: 'Dashboard',
        ROUTE: Dashboard,
        TITLE: 'Dashboard'
    },
    HOME: {
        NAME: 'Home',
        ROUTE: Home,
        TITLE: 'Página Principal'
    },
    SIGNUP: {
        NAME: 'SignUp',
        ROUTE: SignUp,
        TITLE: 'Cadastrar-se'
    },
    SIGNIN: {
        NAME: 'SignIn',
        ROUTE: SignIn,
        TITLE: 'Login'
    },
    FORUM: {
        NAME: 'Forum',
        ROUTE: Forum,
        TITLE: 'Fórum'
    },
    TOPICO: {
        NAME: 'Topicos',
        ROUTE: Topicos,
        TITLE: 'Tópicos'
    },
    VACINA: {
        NAME: 'Vacina',
        ROUTE: Vacina,
        TITLE: 'Vacinas'
    },
    FABRICANTE: {
        NAME: 'Fabricante',
        ROUTE: Fabricante,
        TITLE: 'Fabricante'
    },
    SPLASH: {
        NAME: 'Splash',
        ROUTE: Splash,
        title: 'hide'
    },
    PROFILE: {
        NAME: 'Profile',
        ROUTE: Profile,
        title: 'hide'
    }
}

export default ROUTES;