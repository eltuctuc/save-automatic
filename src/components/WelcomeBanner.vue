<template>
  <div class="welcome-banner">
    <div class="welcome-content">
      <h1 class="welcome-title">Willkommen in der AKDB-Anwendung</h1>
      <p class="welcome-subtitle">Sie sind erfolgreich angemeldet.</p>
      <div class="welcome-actions">
        <router-link to="/dashboard" custom v-slot="{ navigate }">
          <BaseButton variant="primary" @click="navigate">
            <MaterialIcon name="dashboard" size="small" />
            Dashboard
          </BaseButton>
        </router-link>
        <router-link to="/buttons" custom v-slot="{ navigate }">
          <BaseButton variant="secondary" @click="navigate">
            <MaterialIcon name="smart_button" size="small" />
            Button Showcase
          </BaseButton>
        </router-link>
        <router-link to="/about" custom v-slot="{ navigate }">
          <BaseButton variant="tertiary" @click="navigate">
            <MaterialIcon name="info" size="small" />
            Über die App
          </BaseButton>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'WelcomeBanner',
  components: {
    BaseButton
  }
}
</script>

<style scoped lang="scss">
.welcome-banner {
  // Widget-like styling - same as DashboardWidget but without header
  background: get-color(background-white);
  border-radius: get-border-radius(lg);
  box-shadow: get-shadow(base);
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 304px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcome-content {
  text-align: center;
  max-width: 600px;
  padding: get-spacing(xl);
}

.welcome-title {
  font-family: $font-family-primary;
  font-size: get-font-size(3xl);
  font-weight: get-font-weight(bold);
  color: get-color(text-primary);
  margin: 0 0 get-spacing(sm) 0;
  line-height: 1.2;
}

.welcome-subtitle {
  font-family: $font-family-primary;
  font-size: get-font-size(lg);
  font-weight: get-font-weight(regular);
  color: get-color(text-secondary);
  margin: 0 0 get-spacing(xl) 0;
}

.welcome-actions {
  display: flex;
  gap: get-spacing(m);
  justify-content: center;
  flex-wrap: wrap;
}
</style>