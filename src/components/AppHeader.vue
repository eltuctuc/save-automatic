<template>
  <header class="app-header">
    <div class="header-content">
      <!-- Left Side: Logo + Title -->
      <div class="left-section">
        <div class="logo-container">
          <img src="@/assets/logo.svg" alt="AKDB Logo" class="akdb-logo" />
        </div>

        <div class="title-section">
          <div class="app-title">{{ appTitle }}</div>
          <div class="organization">{{ organization }}</div>
        </div>
      </div>

      <!-- Right Side: Icons + User -->
      <div class="right-section">
        <div class="icon-group">
          <button type="button" class="icon-button" title="App Switcher">
            <MaterialIcon name="apps" size="medium" />
          </button>
          <button type="button" class="icon-button notification-btn" title="Benachrichtigungen">
            <MaterialIcon name="notifications" size="medium" />
            <div class="notification-badge">1</div>
          </button>
          <button type="button" class="icon-button" title="Hilfe">
            <MaterialIcon name="help" size="medium" />
          </button>
          <button type="button" class="icon-button" title="Einstellungen">
            <MaterialIcon name="settings" size="medium" />
          </button>
        </div>

        <button type="button" class="user-avatar" @click="handleLogout" title="Benutzerkonto">
          <MaterialIcon name="account_circle" size="large" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  props: {
    appTitle: {
      type: String,
      default: 'Anwendung Modul'
    },
    organization: {
      type: String,
      default: 'Stadt Musterhausen'
    }
  },
  methods: {
    ...mapActions(['logout']),

    handleLogout() {
      // Logout durchführen und zur Logout-Seite navigieren
      this.logout();
      this.$router.push('/logout');
    }
  }
}
</script>

<style scoped lang="scss">
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #f2f3f5; // Figma design background
  box-sizing: border-box;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px; // Figma design height
  padding: 12px 16px; // Figma design padding
  gap: 16px;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  min-width: 0;
}

.logo-container {
  flex-shrink: 0;
}

.akdb-logo {
  height: 16px;
  width: 93px;
  object-fit: contain;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #001e40; // Figma text color
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
  line-height: 1;
  white-space: nowrap;
}

.app-title {
  font-weight: 700; // Bold
  line-height: 24px;
}

.organization {
  font-weight: 400; // Regular
  line-height: 27px;
}

.right-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  flex-shrink: 0;
}

.icon-group {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 24px;
}

.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #001f429c; // Figma icon color
  transition: get-transition(fast);

  &:hover {
    color: #001e40;
  }

  .material-icon {
    font-size: 24px;
  }
}

.notification-btn {
  position: relative;
}

.notification-badge {
  position: absolute;
  top: -3px;
  right: -3px;
  background: #e22c36; // Figma danger color
  color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  min-width: 18px;
  min-height: 18px;
  border-radius: 100px;
  padding: 1px 4px 3px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #001f429c; // Figma icon color
  transition: get-transition(fast);

  &:hover {
    color: #001e40;
  }

  .material-icon {
    font-size: 32px;
  }
}
</style>