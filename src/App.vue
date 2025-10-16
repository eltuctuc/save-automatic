<template>
  <div id="app" :class="{ 'authenticated': isAuthenticated, 'unauthenticated': !isAuthenticated }">
    <!-- AppHeader nur anzeigen wenn authentifiziert -->
    <AppHeader v-if="isAuthenticated" :app-title="headerTitle" :organization="headerOrganization" />

    <!-- Main Content Area -->
    <main :class="{ 'with-header': isAuthenticated }">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      headerTitle: 'Anwendung Modul',
      headerOrganization: 'Stadt Musterhausen'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['checkAuthStatus'])
  },
  created() {
    // Prüfe Authentication-Status beim App-Start
    this.checkAuthStatus()
  }
}
</script>

<style lang="scss">
#app {
  font-family: $font-family-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: get-color(text-primary);
  min-height: 100vh;

  // Dynamische Hintergrundfarbe basierend auf Authentication-Status
  &.authenticated {
    background: get-color(background-white);
  }

  &.unauthenticated {
    background: get-color(background-gray);
  }
}

main {
  min-height: 100vh;

  &.with-header {
    padding-top: 56px; // Platz für den fixen Header
  }
}
</style>
