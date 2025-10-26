<template>
  <div class="components-overview">
    <p class="overview-description">
      Entdecken Sie alle verfügbaren UI-Komponenten und Design-Elemente
    </p>
    <div class="component-links">
      <router-link to="/buttons" custom v-slot="{ navigate }">
        <div class="component-card" @click="navigate">
          <MaterialIcon name="smart_button" size="large" />
          <h4>Buttons & Icon Buttons</h4>
          <p>Alle Button-Varianten und Interactive Elements</p>
        </div>
      </router-link>

      <div class="component-card disabled">
        <MaterialIcon name="input" size="large" />
        <h4>Form Elements</h4>
        <p>Input Fields, Checkboxes, Dropdowns (Coming Soon)</p>
      </div>

      <div class="component-card disabled">
        <MaterialIcon name="dashboard" size="large" />
        <h4>Layout Components</h4>
        <p>Grids, Cards, Navigation Elements (Coming Soon)</p>
      </div>

      <div class="component-card disabled">
        <MaterialIcon name="palette" size="large" />
        <h4>Design Tokens</h4>
        <p>Colors, Typography, Spacing System (Coming Soon)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsOverview'
}
</script>

<style scoped lang="scss">
.components-overview {
  width: 100%;
  height: 100%;
}

.overview-description {
  font-family: $font-family-primary;
  font-size: get-font-size(base);
  color: get-color(text-secondary);
  text-align: center;
  margin: 0 0 get-spacing(lg) 0;
}

.component-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: get-spacing(m);
}

.component-card {
  background: get-color(background-gray);
  border-radius: get-border-radius(lg);
  padding: get-spacing(lg);
  text-align: center;
  cursor: pointer;
  transition: get-transition(base);
  border: 2px solid transparent;

  &:hover:not(.disabled) {
    background: get-color(background-white);
    border-color: get-color(primary-light);
    transform: translateY(-2px);
    box-shadow: get-shadow(base);
  }

  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;

    .material-icon {
      color: get-color(text-muted) !important;
    }

    h4 {
      color: get-color(text-muted) !important;
    }
  }

  .material-icon {
    color: get-color(primary);
    margin-bottom: get-spacing(sm);
  }

  h4 {
    font-family: $font-family-primary;
    font-size: get-font-size(lg);
    font-weight: get-font-weight(semibold);
    color: get-color(text-primary);
    margin: 0 0 get-spacing(s) 0;
  }

  p {
    font-family: $font-family-primary;
    font-size: get-font-size(sm);
    color: get-color(text-secondary);
    margin: 0;
    line-height: get-line-height(base);
  }
}
</style>