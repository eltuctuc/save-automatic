<template>
  <div class="home">
    <DashboardGrid>
      <!-- Erste Zeile: Begrüßungsbereich über alle 3 Spalten -->
      <GridItem :column="1" :row="1" :column-span="3" :row-span="1">
        <WelcomeBanner />
      </GridItem>

      <!-- Zweite Zeile: 3 Widgets nebeneinander -->
      <!-- Widget 1: Mit aktuellem Inhalt -->
      <GridItem :column="1" :row="2" :column-span="1" :row-span="1">
        <DashboardWidget title="Willkommen">
          <div class="welcome-content">
            <div class="user-info">
              <MaterialIcon name="account_circle" size="large" />
              <h3>{{ currentUser?.name || 'Benutzer' }}</h3>
              <p>Zuletzt angemeldet: {{ formatLastLogin() }}</p>
            </div>
            <div class="quick-stats">
              <div class="stat-item">
                <MaterialIcon name="notifications" size="small" />
                <span>3 neue Nachrichten</span>
              </div>
              <div class="stat-item">
                <MaterialIcon name="task" size="small" />
                <span>5 offene Aufgaben</span>
              </div>
            </div>
          </div>
        </DashboardWidget>
      </GridItem>

      <!-- Widget 2: Leer -->
      <GridItem :column="2" :row="2" :column-span="1" :row-span="1">
        <DashboardWidget title="Statistiken" />
      </GridItem>

      <!-- Widget 3: Leer -->
      <GridItem :column="3" :row="2" :column-span="1" :row-span="1">
        <DashboardWidget title="Aktivitäten" />
      </GridItem>

      <!-- Dritte Zeile: Komponenten-Übersicht Widget über alle 3 Spalten -->
      <GridItem :column="1" :row="3" :column-span="3" :row-span="1">
        <DashboardWidget title="Komponenten-Übersicht">
          <ComponentsOverview />
        </DashboardWidget>
      </GridItem>
    </DashboardGrid>
  </div>
</template>

<script>
import ComponentsOverview from '@/components/ComponentsOverview.vue';
import DashboardGrid from '@/components/DashboardGrid.vue';
import DashboardWidget from '@/components/DashboardWidget.vue';
import GridItem from '@/components/GridItem.vue';
import WelcomeBanner from '@/components/WelcomeBanner.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    ComponentsOverview,
    DashboardGrid,
    GridItem,
    DashboardWidget,
    WelcomeBanner
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    formatLastLogin() {
      // Beispiel für letzte Anmeldung
      const now = new Date();
      const today = now.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      const time = now.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit'
      });
      return `${today} um ${time}`;
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  padding: get-spacing(lg);
}

// Widget-spezifische Styles für das Willkommen-Widget
.welcome-content {
  display: flex;
  flex-direction: column;
  gap: get-spacing(lg);
  width: 100%;
  padding: get-spacing(m);
}

.user-info {
  text-align: center;

  .material-icon {
    color: get-color(primary);
    margin-bottom: get-spacing(sm);
  }

  h3 {
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
  }
}

.quick-stats {
  display: flex;
  flex-direction: column;
  gap: get-spacing(sm);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: get-spacing(sm);
  padding: get-spacing(sm);
  background: get-color(background-gray);
  border-radius: get-border-radius(base);

  .material-icon {
    color: get-color(primary);
    font-size: 18px;
  }

  span {
    font-family: $font-family-primary;
    font-size: get-font-size(sm);
    color: get-color(text-primary);
  }
}
</style>
