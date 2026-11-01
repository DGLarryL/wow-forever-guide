# WoW Forever Guide – lokale Assets

Die Website verwendet lokale Dateien unter `assets/maps/` und `assets/icons/`.

## Einmalige Einrichtung
1. Lade alle Dateien dieses Projekts in dein GitHub-Repository hoch.
2. Öffne auf GitHub den Tab **Actions**.
3. Wähle **Fetch website assets**.
4. Klicke **Run workflow**.
5. Der Workflow lädt die Karten und Icons herunter und committed sie automatisch in dein Repository.

Die `index.html` enthält zusätzlich einen externen Fallback. Dadurch funktioniert die Seite auch schon, bevor der Workflow fertig ist. Nach erfolgreichem Lauf werden die Bilder direkt aus deinem eigenen GitHub-Pages-Projekt geladen.

Hinweis: WoW-/Blizzard-Grafiken bleiben Eigentum ihrer jeweiligen Rechteinhaber; dieses Repo ist ein Fan-Guide.


## Gear-Icons
Die ausgewählten Gear-Items verwenden lokale Original-WoW-Icons unter `assets/icons/items/`. Der bestehende Fetch-Workflow lädt sie über die `assets-manifest.json` automatisch mit.


## Mehrere Klassenguides
Die Startseite ist `index.html`. Die einzelnen Guides liegen derzeit als `survival-hunter.html` und `holy-priest.html` im Projektroot. Neue Klassen können später nach demselben Muster ergänzt werden.

- `arms-warrior.html` – Arms Warrior Guide


## v0.7 – Allgemeiner Guide-Hub
`index.html` ist jetzt der allgemeine WoW-Forever-Hub mit Mega-Menüs für Klassen und Berufe. `leatherworking.html` ist der erste Berufsguide.


## v0.8
Die Mega-Menüs öffnen auf Desktop ausschließlich per Hover. Neue Guides: Schneiderei, Verzauberkunst, Kürschnerei, Schmiedekunst und Bergbau.
