<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <h1 class="dashboard-title">Dashboard</h1>

      <div class="widgets-grid">
        <!-- Standard Widget mit Placeholder -->
        <DashboardWidget title="Beispiel Widget" />

        <!-- Widget mit benutzerdefiniertem Content -->
        <DashboardWidget title="Statistiken">
          <div class="stats-content">
            <div class="stat-item">
              <div class="stat-number">142</div>
              <div class="stat-label">Aktive Benutzer</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">89%</div>
              <div class="stat-label">Systemauslastung</div>
            </div>
          </div>
        </DashboardWidget>

        <!-- Widget mit Listen-Content -->
        <DashboardWidget title="Neueste Aktivitäten">
          <div class="activity-list">
            <div class="activity-item">
              <MaterialIcon name="person_add" size="small" />
              <span>Neuer Benutzer registriert</span>
              <span class="activity-time">vor 2 Min.</span>
            </div>
            <div class="activity-item">
              <MaterialIcon name="description" size="small" />
              <span>Dokument erstellt</span>
              <span class="activity-time">vor 15 Min.</span>
            </div>
            <div class="activity-item">
              <MaterialIcon name="settings" size="small" />
              <span>Konfiguration geändert</span>
              <span class="activity-time">vor 1 Std.</span>
            </div>
          </div>
        </DashboardWidget>

        <!-- Widget mit Chart-ähnlichem Content -->
        <DashboardWidget title="Monatliche Übersicht">
          <div class="chart-content">
            <div class="chart-placeholder">
              <MaterialIcon name="bar_chart" size="large" />
              <p>Hier könnte ein Chart angezeigt werden</p>
            </div>
          </div>
        </DashboardWidget>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardWidget from '@/components/DashboardWidget.vue';

export default {
  name: 'DashboardView',
  components: {
    DashboardWidget
  }
}
</script>

<style scoped lang="scss">
.dashboard {
  min-height: calc(100vh - 56px);
  padding: get-spacing(lg);
}

.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-title {
  font-family: $font-family-primary;
  font-size: get-font-size(3xl);
  font-weight: get-font-weight(bold);
  color: get-color(primary);
  margin: 0 0 get-spacing(xl) 0;
}

.widgets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(580px, 1fr));
  gap: get-spacing(lg);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

// Custom content styles für die Demo
.stats-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: $font-family-primary;
  font-size: get-font-size(3xl);
  font-weight: get-font-weight(bold);
  color: get-color(primary);
  margin-bottom: get-spacing(s);
}

.stat-label {
  font-family: $font-family-primary;
  font-size: get-font-size(sm);
  color: get-color(text-secondary);
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: get-spacing(m);
  width: 100%;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: get-spacing(sm);
  padding: get-spacing(sm);
  background: get-color(background-white);
  border-radius: get-border-radius(base);
  border: 1px solid get-color(border-light);

  .material-icon {
    color: get-color(primary);
  }

  span:first-of-type {
    flex: 1;
    font-family: $font-family-primary;
    font-size: get-font-size(sm);
    color: get-color(text-primary);
  }
}

.activity-time {
  font-family: $font-family-primary;
  font-size: get-font-size(xs);
  color: get-color(text-muted);
}

.chart-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.chart-placeholder {
  text-align: center;
  color: get-color(text-muted);

  .material-icon {
    font-size: 48px;
    margin-bottom: get-spacing(sm);
  }

  p {
    font-family: $font-family-primary;
    font-size: get-font-size(base);
    margin: 0;
  }
}
</style>