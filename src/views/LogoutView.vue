<template>
  <div class="logout-container">
    <div class="logout-card">
      <!-- Header mit Logo -->
      <div class="logout-header">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="AKDB Logo" class="logo-image" />
        </div>
      </div>

      <!-- Logout Content -->
      <div class="logout-content">
        <div class="logout-message">
          <div class="success-icon">✓</div>
          <h2>Erfolgreich abgemeldet</h2>
          <p>Sie wurden sicher von der Anwendung abgemeldet.</p>
          <p class="farewell">Vielen Dank für die Nutzung der AKDB-Anwendung!</p>
        </div>

        <div class="action-buttons">
          <button type="button" class="btn-primary" @click="goToLogin">
            Erneut anmelden
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoutView',
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped lang="scss">
.logout-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: $background-gray;
  padding: $space-m;
}

.logout-card {
  background: white;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  width: 320px;
  overflow: hidden;
  box-shadow: get-shadow(base);
}

.logout-header {
  height: 110px;
  border-bottom: 1px solid $border-light;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: $border-radius $border-radius 0 0;
  overflow: hidden;
}

.logo {
  position: relative;
  height: 35px;
  width: 203px;
  display: flex;
  align-items: center;
  justify-content: center;

  &-image {
    height: 100%;
    width: auto;
    max-width: 100%;
    object-fit: contain;
  }
}

.logout-content {
  padding: $space-m get-spacing(lg);
  display: flex;
  flex-direction: column;
  gap: get-spacing(lg);
  text-align: center;
}

.logout-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $space-m;

  .success-icon {
    color: get-color(success);
    font-size: 48px;
    margin-bottom: $space-s;
    font-weight: bold;
  }

  h2 {
    font-family: $font-family-primary;
    font-size: get-font-size(lg);
    font-weight: get-font-weight(semibold);
    color: get-color(text-primary);
    margin: 0;
    line-height: 1.3;
  }

  p {
    font-family: $font-family-primary;
    font-size: get-font-size(base);
    font-weight: get-font-weight(regular);
    color: get-color(text-secondary);
    margin: 0;
    line-height: 1.5;
  }

  .farewell {
    font-size: get-font-size(sm);
    color: get-color(text-muted);
    font-style: italic;
    margin-top: $space-s;
  }
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: $space-m;
  width: 100%;
}

%button-base {
  border: none;
  border-radius: $border-radius;
  height: 36px;
  font-family: $font-family-primary;
  font-size: get-font-size(base);
  font-weight: get-font-weight(semibold);
  line-height: 24px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 $space-m;
  box-sizing: border-box;
  transition: get-transition(base);
}

.btn-primary {
  @extend %button-base;
  background: $primary-blue;
  color: white;

  &:hover:not(:disabled) {
    background: $primary-blue-hover;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>