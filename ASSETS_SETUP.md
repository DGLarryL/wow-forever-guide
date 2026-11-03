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

## v0.11.2 – Talentregler auf SVG umgestellt
- Ring, Fortschrittsbogen und Punkt liegen jetzt auf exakt derselben SVG-Kreisbahn.
- Winkelbasis korrigiert: 0° oben, im Uhrzeigersinn.
- Stufe 1 startet unten links; Stufe 60 endet unten rechts.
- 90°-Lücke unten wie bei einem WoW-artigen Drehregler.
- Der Punkt kann geometrisch nicht mehr vom Ende des Fortschrittsbogens abweichen.

## v0.11.3 – Globale Versionsanzeige
Auf jeder Seite wird oben dauerhaft die aktuelle Version plus kurze Änderungszusammenfassung angezeigt.

Aktueller Text:
`v0.11.3 · Geändert: Versionsanzeige jetzt auf jeder Seite fest eingebaut; SVG-Talentregler korrigiert und bleibt enthalten; alle bisherigen Klassen-, Berufs- und Quellen-Updates aus v0.11.2 übernommen.`

Für zukünftige Releases muss diese Leiste immer mit aktualisiert werden.


## v0.12.0
- Versionsleiste aktualisiert auf allen Seiten.
- Lederverarbeitung: neuer Reiter `Crafting-Gear` mit Rezept-Freischaltung, Material- und Einsatz-Tipps.
- Schmiedekunst: neuer Reiter `Crafting-Gear` mit guten Waffen/Rüstungen für Selbstversorgung.
- Schneiderei: neuer Reiter `Crafting-Gear` mit starken Caster-Crafts und Taschen.
- Bergbau: neuer Reiter `Erz-Karten` mit klickbaren Modalfenstern und markierten Gebietsrouten für Kupfer, Zinn, Eisen, Mithril und Thorium.


## v0.13.0
- Neues Hover-Menü `Guides` auf der Startseite.
- Neuer Guide `Allianz Levelroute 1–60`.
- Startgebiet wählbar: Elwynn Forest, Dun Morogh, Teldrassil, Zephras Isle.
- Auswahl wird im Browser gespeichert.
- Zonenroute 1–30 wechselt je Startgebiet; ab 30 gemeinsame optimierte Forever-Route.
- Dungeon-Abstecher und komplette Zonenübersicht ergänzt.


## v0.14.0
- Neues Hauptmenü `Dungeons`.
- Vollständiger Browser mit 35 Dungeon-Einträgen und Level-/Typ-Filtern.
- Verifizierte Detaildaten für Hall of Thanes, Ruins of Lordaeron, Deadmines, Excavation Site und City of Dalaran.
- Bosskarten mit Original-WoW-Icons nach Kreaturentyp.
- Klickbarer Loot mit Itemtooltip, Stats und Dropchance soweit verlässlich erfasst.
- Klickbarer Gebietsbutton mit vereinfachter Karte und Eingangspfeil.
- Höhere/unentdeckte Forever-Dungeons zeigen bewusst keinen erfundenen Loot.


## v0.14.1
- JavaScript-Fehler in `dungeons.html` behoben; alle Karten sind anklickbar.
- Event-Delegation statt einzelner Card-Listener, damit Karten/Buttons zuverlässig funktionieren.
- Gruppierung: Allianzgebiet / Hordegebiet / Umkämpft-Neutral.
- Filter für alle drei Gebietskategorien ergänzt.
- Aktuelle Mobalytics-Levelbereiche für Classic-Dungeons korrigiert.
- Bosslisten für fast alle Classic-Dungeons ergänzt.
- Verifizierte Loot-/Dropchance-Daten aus v0.14.0 bleiben erhalten.
- Bei unverifizierten Lootdaten wird weiterhin nichts erfunden.


## v0.15.0
- Dungeon-Loot stark erweitert (Wailing Caverns, BFD, SFK, Stockade, Gnomeregan, RFK/RFD, Scarlet Monastery).
- Populäre Items mit aktuellen Forever-Stats/Dropwerten ergänzt.
- Schematische Karten durch echte WoW-Gebietskarten mit Marker ersetzt.
- Survival Hunter, Holy Priest und Arms Warrior: neuer Reiter Build-Varianten.

## v0.16.0
- Jeder Dungeon hat eine eigene Seite unter `dungeons/<slug>.html`.
- Eigene Reiter: Übersicht, Bosse & Loot, Dungeonquests, Gebietskarte.
- Dungeonquests in Allianz / Horde / Neutral-Klasse getrennt.
- Große echte Forever-Gebietskarten statt Popup-Schema.
- Itemicons: bekannte Wowhead-IDs + Originalicons; sichere Slot-Fallbacks für noch nicht zugeordnete Items.
- Buildkarten sind klickbar und öffnen eigene Seiten unter `builds/`.

## v0.17.0 – Best Builds nach dem Launch-Patch
- Neue komplette Best-Build-Guides: `best-builds/survival-hunter.html`, `best-builds/holy-priest.html`, `best-builds/arms-warrior.html`.
- In jeder der 3 Klassenseiten zusätzlicher Reiter „Bester Build“ und Direktlink in der Übersicht.
- Homepage zeigt die drei Best-Build-Guides als Karten.
- Warrior: interaktiver Talentplan auf neue Maximalränge (Tactical Mastery 3/3, Bloodthrill 2/2) umgebaut.
- Priest: Binding Heal → Holy Binding (passiver Effekt) in Talentbaum und Rotation.
- Hunter: Lightning Reflexes bis 15 % Beweglichkeit; Oktober-PvE-Splits neu einordnen.
- Bestehende 12 Build-Varianten mit Launch-Patch-Hinweisen versehen; Versionbanner auch auf diesen Unterseiten.
- Die WoW-Forever-Wowhead-Guides sind noch Beta-basiert; Stufe-60-Statpriorität/BiS nicht als endgültig ausgeben.

- Weitere Fury-Änderungen aufgenommen: Enrage jetzt Reihe 3, Reckless Swings und Improved Whirlwind ergänzt. Für Gore Drinker fehlt in den Patchnotes eine verifizierte maximale Rangzahl; kein erfundener Talentrang.


## v0.18.0 – Alle neun Klassen
- Neue Klassenguides: Feral-Druide, Frost-Magier, Vergeltungs-Paladin, Kampf-Schurke, Verstärkungs-Schamane, Gebrechen-Hexenmeister.
- Jede neue Klasse: Übersicht, Build, Level-1–60-Slider, Talente, Rotation, Gear/Stats, Alternativen, Quellen.
- Klassenmenü und Startseitenkarten auf neun Klassen erweitert.
- Die drei separaten Seiten im Ordner `best-builds` entfernt; Empfehlungen stehen wieder direkt in bestehenden Klassenguides.
- Die zwölf bestehenden Build-Varianten-Seiten aus v0.16 bleiben erhalten.
- Patchnotes vom 03.11.2026 für die neuen Builds berücksichtigt; unbestätigte exakte Punkte-Splits bewusst nicht erfunden.
- Bei jedem Update Versionsleiste auf allen Seiten aktualisieren.
