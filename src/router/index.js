import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import LogoutView from '../views/LogoutView.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresGuest: true }, // Nur für nicht-angemeldete Benutzer
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView,
    // Keine Meta-Eigenschaften - Logout sollte immer zugänglich sein
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
    component: AboutView,
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
