import { createRouter, createWebHashHistory } from 'vue-router';
import Vidanta from '../builds/vidanta/index.vue';
import Aspire from '../builds/aspire/index.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vidanta',
    name: 'vidanta',
    component: Vidanta,
  },
  {
    path: '/aspire',
    name: 'aspire',
    component: Aspire,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
