<template>
  <div class="dashboard-grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DashboardGrid'
}
</script>

<style scoped lang="scss">
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 304px; // Feste Zeilenhöhe wie ein Widget
  gap: get-spacing(m); // 16px aus dem globalen Design System
  width: 100%;
}
</style>