import Recompose from '../views/pages/recompose';
import Loadable from '../views/pages/loadable';
import Flow from '../views/pages/flow';
import Login from '../views/pages/login';

const appRoutes = [
  {
    path: '/recompose',
    name: 'Recompose',
    icon: 'pe-7s-graph',
    component: Recompose,
  },
  {
    path: '/loadable',
    name: 'Loadable',
    icon: 'pe-7s-user',
    component: Loadable,
  },
  {
    path: '/flow',
    name: 'Flow',
    icon: 'pe-7s-user',
    component: Flow,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

export default appRoutes;
