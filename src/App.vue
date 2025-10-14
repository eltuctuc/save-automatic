<template>
  <div id="app">
    <!-- Navigation nur anzeigen wenn authentifiziert -->
    <nav v-if="isAuthenticated">
      <router-link to="/">
        <MaterialIcon name="home" size="small" /> Home
      </router-link> |
      <router-link to="/about">
        <MaterialIcon name="info" size="small" /> About
      </router-link> |
      <button @click="handleLogout" class="logout-btn">
        <MaterialIcon name="logout" size="small" /> Abmelden
      </button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['logout', 'checkAuthStatus']),

    handleLogout() {
      console.log('Logout button clicked'); // Debug log
      // Direktes Logout und Navigation zur Logout-Seite
      this.logout();
      this.$router.push('/logout').then(() => {
        console.log('Navigation to /logout successful');
      }).catch(error => {
        console.error('Navigation error:', error);
      });
    }
  },
  created() {
    // Prüfe Authentication-Status beim App-Start
    this.checkAuthStatus()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .logout-btn {
    background: none;
    border: none;
    color: #2c3e50;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: inherit;
    font-family: inherit;

    &:hover {
      color: #42b983;
    }
  }
}
</style>
