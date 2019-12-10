import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Fetch from '../components/Fetch.vue';
import Todos from '../components/Todos.vue';

Vue.use(VueRouter);

// {
//   path: '/',
//   name: 'home',
//   component: Home,
// },

const routes = [

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: Fetch,
  },
  {
    path: '/todos',
    name: 'todos',
    component: Todos,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
