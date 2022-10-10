
import Dashboard from '../pages/Admin/Home'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home'
import Forum from '../pages/Forum'
import Topicos from '../pages/Topicos'
import Splash from '../pages/Splash';
import Profile from '../pages/Admin/Profile';
import Carteirinha from '../pages/Admin/Carteirinha/Dashboard'

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
    SPLASH: {
        NAME: 'Splash',
        ROUTE: Splash,
        title: 'hide'
    },
    PROFILE: {
        NAME: 'Profile',
        ROUTE: Profile,
        title: 'hide'
    },
    CARTEIRINHA: {
        NAME: 'Carteirinha',
        ROUTE: Carteirinha,
        TITLE: 'hide'
    },
}

export default ROUTES;