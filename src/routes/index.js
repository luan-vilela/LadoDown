
import Dashboard from '../pages/Admin/Home'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home'
import Forum from '../pages/Forum'

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
}

export default ROUTES;