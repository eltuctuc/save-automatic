<template>
  <div class="dashboard-widget">
    <!-- Widget Header -->
    <div class="widget-header">
      <h3 class="widget-title">{{ title }}</h3>
    </div>

    <!-- Widget Content -->
    <div class="widget-content">
      <slot>
        <div class="placeholder-content">
          <span class="placeholder-text">Placeholder SLOT</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardWidget',
  props: {
    title: {
      type: String,
      default: 'Widget'
    }
  }
}
</script>

<style scoped lang="scss">
.dashboard-widget {
  background: get-color(background-white);
  border-radius: get-border-radius(lg);
  box-shadow: get-shadow(base);
  overflow: hidden;
  width: 100%;
  max-width: 597px;
  min-height: 304px;
  display: flex;
  flex-direction: column;
}

.widget-header {
  padding: get-spacing(m) get-spacing(lg);
  border-bottom: 1px solid get-color(border-light);
  background: get-color(background-white);
}

.widget-title {
  font-family: $font-family-primary;
  font-size: get-font-size(lg);
  font-weight: get-font-weight(semibold);
  color: get-color(text-primary);
  margin: 0;
  line-height: 1.2;
}

.widget-content {
  flex: 1;
  padding: get-spacing(lg);
  background: get-color(background-white);
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
  background: get-color(background-gray);
  border-radius: get-border-radius(base);
  border: 2px dashed get-color(border-light);
}

.placeholder-text {
  font-family: $font-family-primary;
  font-size: get-font-size(xl);
  font-weight: get-font-weight(medium);
  color: get-color(text-muted);
  text-align: center;
}
</style>