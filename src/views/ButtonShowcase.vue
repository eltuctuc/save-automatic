<template>
  <div class="button-showcase">
    <h1>Button & Icon Button Showcase</h1>

    <!-- Base Buttons Section -->
    <section class="showcase-section">
      <h2>Base Buttons</h2>

      <div class="button-group">
        <h3>Primary Buttons</h3>
        <div class="button-row">
          <BaseButton variant="primary">Primary Button</BaseButton>
          <BaseButton variant="primary" disabled>Primary Disabled</BaseButton>
        </div>
      </div>

      <div class="button-group">
        <h3>Secondary Buttons</h3>
        <div class="button-row">
          <BaseButton variant="secondary">Secondary Button</BaseButton>
          <BaseButton variant="secondary" disabled>Secondary Disabled</BaseButton>
        </div>
      </div>

      <div class="button-group">
        <h3>Tertiary Buttons</h3>
        <div class="button-row">
          <BaseButton variant="tertiary">Tertiary Button</BaseButton>
          <BaseButton variant="tertiary" disabled>Tertiary Disabled</BaseButton>
        </div>
      </div>

      <div class="button-group">
        <h3>Danger Buttons</h3>
        <div class="button-row">
          <BaseButton variant="danger-primary">Danger Primary</BaseButton>
          <BaseButton variant="danger-primary" disabled>Danger Primary Disabled</BaseButton>
        </div>
        <div class="button-row">
          <BaseButton variant="danger-secondary">Danger Secondary</BaseButton>
          <BaseButton variant="danger-secondary" disabled>Danger Secondary Disabled</BaseButton>
        </div>
        <div class="button-row">
          <BaseButton variant="danger-tertiary">Danger Tertiary</BaseButton>
          <BaseButton variant="danger-tertiary" disabled>Danger Tertiary Disabled</BaseButton>
        </div>
      </div>

      <div class="button-group">
        <h3>Buttons with Icons</h3>
        <div class="button-row">
          <BaseButton variant="primary">
            <MaterialIcon name="add" size="small" />
            Add Item
          </BaseButton>
          <BaseButton variant="secondary">
            <MaterialIcon name="edit" size="small" />
            Edit
          </BaseButton>
          <BaseButton variant="danger-primary">
            <MaterialIcon name="delete" size="small" />
            Delete
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Icon Buttons Section -->
    <section class="showcase-section">
      <h2>Icon Buttons</h2>

      <div class="button-group">
        <h3>Small Icon Buttons</h3>
        <div class="button-row">
          <IconButton icon="home" size="small" />
          <IconButton icon="search" size="small" />
          <IconButton icon="settings" size="small" />
          <IconButton icon="favorite" size="small" disabled />
        </div>
      </div>

      <div class="button-group">
        <h3>Medium Icon Buttons (Default)</h3>
        <div class="button-row">
          <IconButton icon="home" />
          <IconButton icon="search" />
          <IconButton icon="settings" />
          <IconButton icon="favorite" disabled />
        </div>
      </div>

      <div class="button-group">
        <h3>Large Icon Buttons</h3>
        <div class="button-row">
          <IconButton icon="home" size="large" />
          <IconButton icon="search" size="large" />
          <IconButton icon="settings" size="large" />
          <IconButton icon="favorite" size="large" disabled />
        </div>
      </div>

      <div class="button-group">
        <h3>Custom Icon Content</h3>
        <div class="button-row">
          <IconButton>
            <MaterialIcon name="notifications" size="medium" />
          </IconButton>
          <IconButton>
            <MaterialIcon name="account_circle" size="medium" />
          </IconButton>
          <IconButton disabled>
            <MaterialIcon name="logout" size="medium" />
          </IconButton>
        </div>
      </div>
    </section>

    <!-- Interactive Examples -->
    <section class="showcase-section">
      <h2>Interactive Examples</h2>

      <div class="button-group">
        <h3>Click Events</h3>
        <div class="button-row">
          <BaseButton variant="primary" @click="showAlert('Primary clicked!')">
            Click me!
          </BaseButton>
          <IconButton icon="info" @click="showAlert('Icon button clicked!')" />
        </div>
        <p v-if="lastClickMessage" class="click-message">{{ lastClickMessage }}</p>
      </div>
    </section>

    <!-- Navigation -->
    <section class="showcase-section">
      <div class="button-group">
        <h3>Navigation</h3>
        <div class="button-row">
          <router-link to="/" custom v-slot="{ navigate }">
            <BaseButton variant="secondary" @click="navigate">
              <MaterialIcon name="arrow_back" size="small" />
              Zurück zur Startseite
            </BaseButton>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import IconButton from '@/components/IconButton.vue';

export default {
  name: 'ButtonShowcase',
  components: {
    BaseButton,
    IconButton
  },
  data() {
    return {
      lastClickMessage: ''
    }
  },
  methods: {
    showAlert(message) {
      this.lastClickMessage = message;
      setTimeout(() => {
        this.lastClickMessage = '';
      }, 3000);
    }
  }
}
</script>

<style scoped lang="scss">
.button-showcase {
  padding: get-spacing(lg);
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-family: $font-family-primary;
    font-size: get-font-size(3xl);
    font-weight: get-font-weight(bold);
    color: get-color(text-primary);
    margin-bottom: get-spacing(xl);
    text-align: center;
  }
}

.showcase-section {
  margin-bottom: get-spacing(3xl);

  h2 {
    font-family: $font-family-primary;
    font-size: get-font-size(2xl);
    font-weight: get-font-weight(semibold);
    color: get-color(text-primary);
    margin-bottom: get-spacing(lg);
    padding-bottom: get-spacing(sm);
    border-bottom: 2px solid get-color(border-light);
  }
}

.button-group {
  margin-bottom: get-spacing(xl);

  h3 {
    font-family: $font-family-primary;
    font-size: get-font-size(lg);
    font-weight: get-font-weight(medium);
    color: get-color(text-secondary);
    margin-bottom: get-spacing(m);
  }
}

.button-row {
  display: flex;
  gap: get-spacing(m);
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: get-spacing(sm);
}

.click-message {
  font-family: $font-family-primary;
  font-size: get-font-size(sm);
  color: get-color(primary);
  background: get-color(background-gray);
  padding: get-spacing(sm) get-spacing(m);
  border-radius: get-border-radius(base);
  margin-top: get-spacing(sm);
  border-left: 3px solid get-color(primary);
}
</style>