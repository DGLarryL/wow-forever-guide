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

## v0.10
- Rezept- und Materialicons werden pro Eintrag nur einmal angezeigt.
- Alle Klassen-Seiten verlinken mit `./` robust zurück zum Hub.
- Vollständige Talentbäume zeigen auch ungeskillte Talente mit `0/x`.
- Im Projekt wird bewusst keine `CNAME`-Datei mitgeliefert. Eine Custom Domain wird ausschließlich in GitHub unter Settings -> Pages verwaltet.

## v0.10.1 – Home-Link-Fix
Die sichtbaren Zurück-Links in allen Unterguides zeigen vorübergehend bewusst direkt auf:
`https://dglarryl.github.io/wow-forever-guide/`
Damit kann ein alter Browser-/DNS-Zustand der entfernten Custom Domain den Rücklink nicht mehr beeinflussen.

## v0.10.2 – Interaktiver Talentplaner
- Level-Regler 10–60 auf Survival Hunter, Holy Priest und Arms Warrior.
- Schnellwahl 10 / 25 / 30 / 40 / 60.
- Vollständige Bäume bleiben sichtbar; Ränge werden live auf den gewählten Levelstand gesetzt.
- Der auf dem gewählten Level neu gesetzte Punkt wird hervorgehoben.

## v0.10.3 – Radialer Talent-Levelregler
Der Stufenregler in allen drei Klassenguides ist jetzt ein echter Drehregler:
- per Maus/Touch direkt am Kreis ziehen
- Plus/Minus weiterhin verfügbar
- Tastatur: Pfeiltasten, Home=10, End=60
- Talentbaum aktualisiert während des Ziehens live

## v0.11 – Quellengeprüfte Best-Practice-Guides
- Klassen: Wowhead Forever als Primärquelle; Icy Veins/Mobalytics als Gegencheck.
- Berufe: WoW-Professions als Primärquelle für schnelle/günstige Skillrouten; Mobalytics/Icy Veins als Gegencheck.
- Survival: Bestes Leveltempo = Beast Mastery bis ca. 31, Survival ab ca. 32.
- Holy: Solo Shadow/Discipline schneller; Holy primär für Gruppen/Dungeons.
- Arms: Waffen-DPS, Rage-Pooling und Dungeonquests stärker priorisiert.
- Leatherworking/Tailoring/Enchanting/Blacksmithing Routen und Einkaufslisten aktualisiert.

## v0.11.1 – Talent-Drehregler korrigiert
- Levelbereich jetzt 1–60 statt 10–60.
- Stufe 1 sitzt exakt am Anfang des Kreisbogens.
- Stufe 60 sitzt exakt am Ende des Kreisbogens.
- Marker und Ringfüllung nutzen dieselbe Winkelberechnung.
- Stufe 1–9: 0/51 Talentpunkte; erster Punkt auf Stufe 10.
- Schnellbutton für Stufe 1 ergänzt.
