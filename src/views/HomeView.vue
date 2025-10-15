<template>
  <div class="home">
    <div class="content-area">
      <h1>Willkommen in der AKDB-Anwendung</h1>
      <p>Sie sind erfolgreich angemeldet.</p>

      <div class="navigation-links">
        <router-link to="/about" class="nav-button">
          <MaterialIcon name="info" size="small" />
          Über die Anwendung
        </router-link>
      </div>
    </div>
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

<style scoped lang="scss">
.home {
  min-height: calc(100vh - 56px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: get-color(background-gray);
}

.content-area {
  text-align: center;
  padding: get-spacing(2xl);
  background: white;
  border-radius: get-border-radius(lg);
  box-shadow: get-shadow(base);
  max-width: 600px;
  width: 100%;
  margin: get-spacing(lg);

  h1 {
    font-family: $font-family-primary;
    font-size: get-font-size(2xl);
    font-weight: get-font-weight(semibold);
    color: get-color(primary);
    margin: 0 0 get-spacing(m) 0;
  }

  p {
    font-family: $font-family-primary;
    font-size: get-font-size(base);
    color: get-color(text-secondary);
    margin: 0 0 get-spacing(lg) 0;
  }
}

.navigation-links {
  margin-top: get-spacing(lg);
}

.nav-button {
  display: inline-flex;
  align-items: center;
  gap: get-spacing(s);
  padding: get-spacing(sm) get-spacing(m);
  background: get-color(primary);
  color: white;
  text-decoration: none;
  border-radius: get-border-radius(base);
  font-family: $font-family-primary;
  font-size: get-font-size(base);
  font-weight: get-font-weight(medium);
  transition: get-transition(base);

  &:hover {
    background: get-color(primary-hover);
    transform: translateY(-1px);
    box-shadow: get-shadow(base);
  }

  &:active {
    transform: translateY(0);
  }
}
</style>
