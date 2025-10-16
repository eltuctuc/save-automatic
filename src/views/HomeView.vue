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
    </DashboardGrid>
  </div>
</template>

<script>
import DashboardGrid from '@/components/DashboardGrid.vue';
import DashboardWidget from '@/components/DashboardWidget.vue';
import GridItem from '@/components/GridItem.vue';
import WelcomeBanner from '@/components/WelcomeBanner.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
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
</style>
