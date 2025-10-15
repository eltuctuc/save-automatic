# AppHeader Komponente

Die AppHeader-Komponente bietet eine konsistente Navigation für die gesamte Anwendung und entspricht dem AKDB Design System.

## Features

- **Figma-konformes Design**: Exakte Umsetzung des AKDB Header-Designs
- **Echtes AKDB Logo**: Verwendet das vorhandene `logo.svg`
- **Dynamische Titel**: App-Titel und Organisation können per Props angepasst werden
- **Responsive Layout**: Optimiert für verschiedene Bildschirmgrößen
- **Icon-Integration**: Material Icons für konsistente Bedienung

## Props

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `appTitle` | String | `'Anwendung Modul'` | Titel der aktuellen Anwendung |
| `organization` | String | `'Stadt Musterhausen'` | Name der Organisation |

## Verwendung

### Standard-Verwendung
```vue
<template>
  <AppHeader />
</template>
```

### Mit benutzerdefinierten Titeln
```vue
<template>
  <AppHeader 
    app-title="Bürgerverwaltung"
    organization="Stadt München"
  />
</template>
```

### Dynamische Titel basierend auf Route
```vue
<template>
  <AppHeader 
    :app-title="currentModuleTitle"
    :organization="userOrganization"
  />
</template>

<script>
export default {
  computed: {
    currentModuleTitle() {
      const routeTitles = {
        '/dashboard': 'Dashboard',
        '/citizens': 'Bürgerverwaltung',
        '/documents': 'Dokumentenverwaltung',
        '/reports': 'Berichte'
      }
      return routeTitles[this.$route.path] || 'Anwendung Modul'
    },
    userOrganization() {
      return this.$store.getters.currentUser?.organization || 'Stadt Musterhausen'
    }
  }
}
</script>
```

## Design-Spezifikationen

- **Höhe**: 56px (Figma Global Header Height)
- **Hintergrund**: #f2f3f5 (Global Header Background)
- **Logo**: 93×16px AKDB Logo
- **Schrift**: Segoe UI (18px für Titel)
- **Icon-Größen**: 24px für Navigation, 32px für User Avatar
- **Abstände**: 16px Padding horizontal, 12px vertikal

## Funktionalität

- **Logout**: Click auf User Avatar führt zur Logout-Seite
- **Navigation Icons**: App Switcher, Notifications, Help, Settings
- **Notification Badge**: Zeigt aktuelle Benachrichtigungsanzahl
- **Responsive**: Passt sich verschiedenen Bildschirmgrößen an

## Technische Details

- **Framework**: Vue 3 mit Composition API
- **Styling**: SCSS mit AKDB Design System
- **Icons**: Material Symbols (outline variant)
- **State Management**: Vuex für Authentication