# Temiskla – Leaflet v2

Diese Version verwendet die mitgelieferte JPG-Datei direkt als Leaflet-ImageOverlay.

## Wichtiger Hinweis zur Bildgröße

Die in diesem Upload tatsächlich vorliegende Datei wurde vom Laufzeitsystem mit
**2048 × 1356 Pixeln** erkannt. Wenn deine Originaldatei tatsächlich 3956 × 2620
Pixel hat, wurde sie beim Upload offenbar bereits verkleinert.

Du kannst die hochauflösende Originaldatei später einfach unter demselben Dateinamen

`Karte_Temiscla_Gebiete_Staedte.jpg`

ersetzen. Der Leaflet-Code liest die tatsächliche Bildgröße beim Laden automatisch aus.

## Koordinatenmodus

Oben rechts gibt es den Schalter:

`Klick auf Karte zeigt X/Y`

Aktivieren und auf einen Punkt klicken. Unten rechts erscheinen die Bildkoordinaten,
z. B.:

`X: 1234  Y: 567`

Der Klick kopiert die Koordinaten außerdem in die Zwischenablage.

## Neuen Ort hinzufügen

In `app.js` findest du ganz oben `const places = [`.

Dort einen bestehenden Block kopieren. Für die Position werden normalisierte
Koordinaten verwendet:

```js
{
  id: "neuer-ort",
  title: "Neuer Ort",
  type: "Stadt",
  rx: 1234 / 3956,
  ry: 567 / 2620,
  quote: "„Zitat“",
  author: "Vigilor Soundso",
  description: "Beschreibung des Ortes."
},
```

Dabei gilt:

- X = von links nach rechts
- Y = von oben nach unten
- `rx` und `ry` liegen zwischen 0 und 1
- Beispiel: X 1234 bei einer 3956-Pixel-breiten Karte → `rx: 1234 / 3956`
- Beispiel: Y 567 bei einer 2620-Pixel-hohen Karte → `ry: 567 / 2620`

Dadurch bleiben die Marker korrekt, wenn du später die echte 3956 × 2620-Datei
einsetzt.

## GitHub Pages aktualisieren

Nach Änderungen:

1. Dateien im GitHub-Repository ersetzen/hochladen.
2. `Commit changes`.
3. GitHub Pages baut die Seite automatisch neu.
4. Nach kurzer Zeit die Notion-Seite neu laden.

## Notion

Die GitHub-Pages-Adresse bleibt gleich. Daher muss das Embed in Notion nicht
neu angelegt werden, wenn du nur `app.js`, CSS oder die JPG-Datei aktualisierst.
