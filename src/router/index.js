import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresGuest: true }, // Nur für nicht-angemeldete Benutzer
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation Guards
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  // Prüfe ob Route Authentifizierung benötigt
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
    return;
  }

  // Prüfe ob Route nur für Gäste ist (z.B. Login-Seite)
  if (to.meta.requiresGuest && isAuthenticated) {
    next('/');
    return;
  }

  next();
});

export default router;
