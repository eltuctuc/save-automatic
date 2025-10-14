# Login-System

Das Login-System wurde erfolgreich implementiert und basiert auf dem Figma-Design.

## Verfügbare Login-Credentials

Es stehen 3 Test-Benutzer zur Verfügung:

### 1. Administrator
- **Benutzerkennung:** `admin`
- **Passwort:** `admin123`
- **Rolle:** Administrator

### 2. Benutzer 1
- **Benutzerkennung:** `benutzer1`
- **Passwort:** `password123`
- **Rolle:** User

### 3. Test-Benutzer
- **Benutzerkennung:** `test`
- **Passwort:** `test123`
- **Rolle:** User

## Features

✅ **Login-Seite** basierend auf Figma-Design
✅ **Passwort-Sichtbarkeit** umschalten
✅ **Fehlerbehandlung** bei ungültigen Credentials
✅ **Persistent Login** - Benutzer bleibt nach Reload angemeldet
✅ **Router Guards** - Automatische Weiterleitung zu Login wenn nicht angemeldet
✅ **Logout-Funktionalität** in der Navigation
✅ **Simuliertes Backend** mit 500ms Delay
✅ **Material Icons** für UI-Elemente

## Technische Details

- **State Management:** Vuex Store für Authentication
- **Persistent Storage:** LocalStorage für Token und User-Daten
- **Mock-Daten:** `src/data/auth.json`
- **Navigation Guards:** Automatischer Redirect basierend auf Auth-Status
- **Security:** Token-basierte Authentifizierung (simuliert)

## Verhalten

1. **App-Start:** Automatische Prüfung des Authentication-Status
2. **Nicht angemeldet:** Redirect zur Login-Seite
3. **Erfolgreiches Login:** Redirect zur Startseite
4. **Navigation:** Nur für angemeldete Benutzer sichtbar
5. **Logout:** Löscht alle Auth-Daten und redirect zu Login