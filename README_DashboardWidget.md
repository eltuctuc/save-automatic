# DashboardWidget Komponente

Die DashboardWidget-Komponente ist eine flexible, wiederverwendbare Vue-Komponente für Dashboard-Interfaces, die dem AKDB Design System entspricht.

## Features

- **Figma-konformes Design**: Exakte Umsetzung des AKDB Dashboard Widget Designs
- **Dynamischer Titel**: Anpassbarer Widget-Titel über Props
- **Slot-basierter Content**: Vollständig flexibler Inhaltsbereich
- **Responsive Layout**: Optimiert für verschiedene Bildschirmgrößen
- **SCSS Design System**: Konsistente Verwendung der AKDB Design Token

## Props

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `title` | String | `'Widget'` | Titel des Widgets, der im Header angezeigt wird |

## Slots

| Slot | Beschreibung |
|------|--------------|
| `default` | Der Hauptinhaltsbereich des Widgets. Falls leer, wird ein "Placeholder SLOT" Text angezeigt |

## Verwendung

### Basis-Widget mit Placeholder
```vue
<template>
  <DashboardWidget title="Mein Widget" />
</template>
```

### Widget mit benutzerdefiniertem Content
```vue
<template>
  <DashboardWidget title="Statistiken">
    <div class="custom-content">
      <h3>Benutzerdefinierter Inhalt</h3>
      <p>Hier kann beliebiger Content stehen</p>
    </div>
  </DashboardWidget>
</template>
```

### Widget mit Listen-Content
```vue
<template>
  <DashboardWidget title="Aktivitäten">
    <div class="activity-list">
      <div class="activity-item">
        <MaterialIcon name="person_add" size="small" />
        <span>Neue Aktivität</span>
      </div>
    </div>
  </DashboardWidget>
</template>
```

### Widget mit Statistiken
```vue
<template>
  <DashboardWidget title="Kennzahlen">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">{{ userCount }}</div>
        <div class="stat-label">Aktive Benutzer</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ systemLoad }}%</div>
        <div class="stat-label">Systemauslastung</div>
      </div>
    </div>
  </DashboardWidget>
</template>
```

## Design-Spezifikationen

- **Breite**: Max 597px (automatisch responsive)
- **Mindesthöhe**: 304px
- **Hintergrund**: Weiß mit grauem Content-Bereich (#f8f9fa)
- **Border-Radius**: 8px (lg)
- **Schatten**: Standard Basis-Schatten
- **Header-Padding**: 16px vertikal, 24px horizontal
- **Content-Padding**: 24px rundum

## Styling-Klassen

### Widget-Struktur
- `.dashboard-widget` - Haupt-Container
- `.widget-header` - Header-Bereich mit Titel
- `.widget-title` - Titel-Styling
- `.widget-content` - Content-Bereich
- `.placeholder-content` - Standard-Placeholder
- `.placeholder-text` - Placeholder-Text

### Verwendung im Grid
```scss
.widgets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(580px, 1fr));
  gap: 24px;
}
```

## Beispiel-Dashboard Layout

```vue
<template>
  <div class="dashboard">
    <div class="widgets-grid">
      <!-- Standard Widget -->
      <DashboardWidget title="Übersicht" />
      
      <!-- Widget mit Charts -->
      <DashboardWidget title="Verkaufszahlen">
        <ChartComponent :data="salesData" />
      </DashboardWidget>
      
      <!-- Widget mit Tabelle -->
      <DashboardWidget title="Neueste Einträge">
        <TableComponent :items="recentItems" />
      </DashboardWidget>
      
      <!-- Widget mit Custom Content -->
      <DashboardWidget title="Quick Actions">
        <div class="actions-grid">
          <button class="action-btn">Neu erstellen</button>
          <button class="action-btn">Importieren</button>
          <button class="action-btn">Exportieren</button>
        </div>
      </DashboardWidget>
    </div>
  </div>
</template>
```

## Best Practices

1. **Titel aussagekräftig wählen**: Kurze, präzise Titel verwenden
2. **Content-Höhe beachten**: Mindestens 200px Höhe für Content einplanen
3. **Responsive Design**: Content sollte sich an verschiedene Widget-Breiten anpassen
4. **Loading States**: Loading-Indikatoren für dynamische Inhalte implementieren
5. **Error Handling**: Fallback-Content für Fehlerszenarien berücksichtigen

## Technische Details

- **Framework**: Vue 3 mit Composition API
- **Styling**: SCSS mit AKDB Design System
- **Icons**: Material Symbols (wenn verwendet)
- **Accessibility**: Semantische HTML-Struktur
- **Performance**: Scoped Styles für optimale Performance