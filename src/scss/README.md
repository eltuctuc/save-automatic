# AKDB Design System

Das AKDB Design System bietet zentrale Design-Token und Helper-Funktionen für konsistente Gestaltung in der gesamten Anwendung.

## Struktur

```
src/scss/
├── global.scss     # Zentrale Variablen und Funktionen
```

## Verwendung

Die globalen SCSS-Variablen sind automatisch in allen Vue-Komponenten verfügbar:

### Farben

```scss
.my-component {
  color: get-color(text-primary);
  background: get-color(background-white);
  border-color: get-color(border-base);
}
```

**Verfügbare Farben:**
- `get-color(primary)` - AKDB Hauptfarbe (#003979)
- `get-color(primary-light)` - Helleres Blau (#276ae1)
- `get-color(secondary)` - Sekundärfarbe (#00A1E0)
- `get-color(text-primary)` - Haupttext
- `get-color(text-secondary)` - Sekundärtext
- `get-color(border-base)` - Standard Border
- `get-color(error)` - Fehlerfarbe
- `get-color(success)` - Erfolgsfarbe

### Abstände

```scss
.my-component {
  padding: get-spacing(m);
  margin-bottom: get-spacing(s);
  gap: get-spacing(lg);
}
```

**Verfügbare Abstände:**
- `get-spacing(xs)` - 2px
- `get-spacing(s)` - 4px
- `get-spacing(sm)` - 8px
- `get-spacing(m)` - 16px
- `get-spacing(lg)` - 24px
- `get-spacing(xl)` - 32px

### Typography

```scss
.my-component {
  font-family: $font-family-primary;
  font-size: get-font-size(base);
  font-weight: get-font-weight(semibold);
}
```

**Verfügbare Schriftgrößen:**
- `get-font-size(xs)` - 12px
- `get-font-size(sm)` - 14px
- `get-font-size(base)` - 16px
- `get-font-size(lg)` - 18px
- `get-font-size(xl)` - 20px

### Layout

```scss
.my-component {
  border-radius: get-border-radius(base);
  box-shadow: get-shadow(base);
  transition: get-transition(base);
}
```

## Konsistente Nutzung

Das Design System verwendet ausschließlich Helper-Funktionen für maximale Konsistenz und bessere Wartbarkeit:

```scss
// ✅ Empfohlen - Nutze immer die Helper-Funktionen
.component {
  color: get-color(text-primary);
  margin: get-spacing(m);
  border-radius: get-border-radius(base);
}
```

## Erweiterung

Das Design System kann einfach erweitert werden, indem neue Werte zu den Maps in `global.scss` hinzugefügt werden:

```scss
$colors: (
  // Bestehende Farben...
  new-color: #123456
);
```

## Konfiguration

Die globalen SCSS-Variablen werden automatisch über die `vue.config.js` geladen:

```javascript
css: {
  loaderOptions: {
    scss: {
      additionalData: `@import "@/scss/global.scss";`
    }
  }
}
```