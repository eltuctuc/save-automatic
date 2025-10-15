<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Header mit Logo -->
      <div class="login-header">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="AKDB Logo" class="logo-image" />
        </div>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin">
        <div class="login-form">
          <!-- Benutzerkennung -->
          <div class="form-field">
            <div class="field-label-container">
              <span class="field-label">Benutzerkennung</span>
              <span class="required">*</span>
            </div>
            <input v-model="credentials.username" type="text" class="field-input" :class="{ 'error': loginError }"
              required />
          </div>

          <!-- Passwort -->
          <div class="form-field">
            <div class="field-label-container">
              <span class="field-label">Passwort</span>
              <span class="required">*</span>
            </div>
            <div class="password-field">
              <input v-model="credentials.password" :type="showPassword ? 'text' : 'password'" class="field-input"
                :class="{ 'error': loginError }" required />
              <button type="button" class="password-toggle" @click="togglePassword">
                <MaterialIcon :name="showPassword ? 'visibility_off' : 'visibility'" size="small" />
              </button>
            </div>
          </div>

          <!-- Fehleranzeige -->
          <div v-if="loginError" class="error-message">
            {{ loginError }}
          </div>

          <!-- Buttons -->
          <div class="button-group">
            <button type="submit" class="btn-primary" :disabled="isLoading">
              {{ isLoading ? 'Anmelden...' : 'Anmelden' }}
            </button>

            <button type="button" class="btn-secondary" @click="resetPassword">
              Passwort ändern
            </button>
          </div>

          <!-- Test Login Daten -->
          <div class="test-credentials">
            <div class="credentials-list">
              <div v-for="testUser in testUsers" :key="testUser.username" class="credential-item"
                @click="fillCredentials(testUser)">
                <span class="username">{{ testUser.username }}</span>
                <span class="separator">•</span>
                <span class="password">{{ testUser.password }}</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginPage',
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      showPassword: false,
      isLoading: false,
      testUsers: [
        {
          username: 'admin',
          password: 'admin123',
          role: 'Administrator'
        },
        {
          username: 'benutzer1',
          password: 'password123',
          role: 'Benutzer'
        },
        {
          username: 'test',
          password: 'test123',
          role: 'Test-Account'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['loginError'])
  },
  methods: {
    ...mapActions(['login']),

    async handleLogin() {
      if (!this.credentials.username || !this.credentials.password) {
        return
      }

      this.isLoading = true

      try {
        await this.login(this.credentials)
        // Explizite Navigation zur Startseite nach erfolgreichem Login
        this.$router.push('/')
      } catch (error) {
        // Fehler wird bereits im Store gesetzt
      } finally {
        this.isLoading = false
      }
    },

    togglePassword() {
      this.showPassword = !this.showPassword
    },

    resetPassword() {
      alert('Passwort ändern Funktion ist noch nicht implementiert.')
    },

    fillCredentials(testUser) {
      this.credentials.username = testUser.username
      this.credentials.password = testUser.password
      // Fehler zurücksetzen falls vorhanden
      this.$store.commit('CLEAR_LOGIN_ERROR')
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: get-color(background-gray);
  padding: get-spacing(m);
}

.login-card {
  background: white;
  border: 1px solid get-color(border-base);
  border-radius: get-border-radius(base);
  width: 288px;
  overflow: hidden;
  box-shadow: get-shadow(base);
}

.login-header {
  height: 110px;
  border-bottom: 1px solid get-color(border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: get-border-radius(base) get-border-radius(base) 0 0;
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

.test-credentials {
  margin-top: get-spacing(lg);
  padding-top: get-spacing(m);
  border-top: 1px solid get-color(border-light);
}

.credentials-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.credential-item {
  padding: 4px 8px;
  border-radius: 2px;
  cursor: pointer;
  transition: get-transition(fast);
  display: flex;
  align-items: center;
  gap: get-spacing(s);
  font-family: 'Courier New', monospace;
  font-size: get-font-size(xs);
  color: get-color(text-muted);

  &:hover {
    background: rgba(get-color(secondary), 0.08);
    color: get-color(text-secondary);
  }

  .username {
    font-weight: get-font-weight(medium);
    color: get-color(text-secondary);
  }

  .separator {
    color: get-color(text-muted);
    font-size: 10px;
  }

  .password {
    color: get-color(text-muted);
  }
}

.login-form {
  padding: get-spacing(m);
  display: flex;
  flex-direction: column;
  gap: get-spacing(m);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: get-spacing(s);
  align-items: flex-start;
  width: 256px;
}

.field-label {
  &-container {
    display: flex;
    gap: 2px;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;

    .field-label {
      font-family: $font-family-primary;
      font-size: get-font-size(base);
      font-weight: get-font-weight(regular);
      line-height: 24px;
      color: get-color(text-secondary);
      white-space: nowrap;
      margin: 0;
    }
  }
}

.required {
  color: get-color(required);
}

.field-input {
  font-family: $font-family-primary;
  font-size: get-font-size(base);
  font-weight: get-font-weight(regular);
  line-height: 24px;
  padding: 5px 9px;
  border: 1px solid get-color(border-base);
  border-radius: get-border-radius(base);
  background: white;
  color: get-color(text-primary);
  height: 36px;
  box-sizing: border-box;
  width: 100%;
  transition: get-transition(base);

  &:focus {
    outline: none;
    border-color: get-color(primary-light);
  }

  &.error {
    border-color: get-color(error);
  }
}

.password-field {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.password-toggle {
  position: absolute;
  right: 9px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: get-color(text-muted);
  transition: get-transition(fast);

  &:hover {
    color: get-color(text-primary);
  }
}

.error-message {
  color: get-color(error);
  font-size: get-font-size(sm);
  margin-top: -8px;
  margin-bottom: 8px;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: get-spacing(m);
  padding-top: get-spacing(m);
  width: 100%;
}

%button-base {
  border: none;
  border-radius: get-border-radius(base);
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
  padding: 0 get-spacing(m);
  box-sizing: border-box;
  transition: get-transition(base);
}

.btn-primary {
  @extend %button-base;
  background: get-color(primary-light);
  color: white;

  &:hover:not(:disabled) {
    background: get-color(primary-hover);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.btn-secondary {
  @extend %button-base;
  background: transparent;
  color: get-color(required);

  &:hover {
    background: rgba(0, 89, 189, 0.05);
  }
}
</style>