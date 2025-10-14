import { createStore } from 'vuex';
import authData from '../data/auth.json';

export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
    token: null,
    loginError: null,
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
    loginError: (state) => state.loginError,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    CLEAR_AUTH(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.loginError = null;
    },
    SET_LOGIN_ERROR(state, error) {
      state.loginError = error;
    },
    CLEAR_LOGIN_ERROR(state) {
      state.loginError = null;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        commit('CLEAR_LOGIN_ERROR');

        // Simuliere Backend-Anfrage (500ms Delay)
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Suche Benutzer in Mock-Daten
        const user = authData.users.find((u) => u.username === credentials.username && u.password === credentials.password);

        if (!user) {
          throw new Error('Ungültige Benutzerkennung oder Passwort');
        }

        // Simuliere Token-Generierung
        const token = `token_${user.id}_${Date.now()}`;

        // Speichere in LocalStorage
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(user));

        commit('SET_USER', user);
        commit('SET_TOKEN', token);

        return { success: true, user };
      } catch (error) {
        commit('SET_LOGIN_ERROR', error.message);
        throw error;
      }
    },

    logout({ commit }) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
      commit('CLEAR_AUTH');
    },

    checkAuthStatus({ commit }) {
      const token = localStorage.getItem('auth_token');
      const userStr = localStorage.getItem('auth_user');

      if (token && userStr) {
        try {
          const user = JSON.parse(userStr);
          commit('SET_USER', user);
          commit('SET_TOKEN', token);
        } catch (error) {
          // Fehlerhafte Daten im LocalStorage
          localStorage.removeItem('auth_token');
          localStorage.removeItem('auth_user');
        }
      }
    },
  },
  modules: {},
});
