<template>
  <div class="home">
    <!-- Startseite ist leer, nur Navigation wird in App.vue angezeigt -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  computed: {
    ...mapGetters(['currentUser'])
  }
}
</script>

<style scoped>
/* Startseite ist leer - nur Navigation sichtbar */
</style>
