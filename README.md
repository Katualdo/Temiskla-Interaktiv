# Temiskla – interaktive Leaflet-Karte

Diese kleine statische Website verwendet die gelieferte Karte als Bild und Leaflet mit
`L.CRS.Simple`. Dadurch wird die Karte wie eine zoombare Weltkarte behandelt.

## Enthalten

- `index.html` – Einstiegspunkt
- `styles.css` – Darstellung und Popup-Design
- `app.js` – Leaflet-Logik und die 5 Orte
- `Karte_Temiscla_Gebiete_Staedte.jpg` – deine Originalkarte

## Die 5 Start-Orte

1. Drachenküste
2. Drachenatem-Inseln
3. Drachenmaul-Bucht
4. Grüfte der Aasgeier
5. Das Horntor

Die Markerpositionen sind in `app.js` als Bildkoordinaten `x/y` hinterlegt. Du kannst sie
sehr leicht verschieben:

```js
{
  title: "Das Horntor",
  x: 1098,
  y: 1150,
  ...
}
```

Die Originalkarte ist 2048 × 1356 Pixel groß.

## Lokal testen

Einfach `index.html` im Browser öffnen. Falls dein Browser lokale Ressourcen blockiert,
kannst du einen kleinen lokalen Webserver verwenden, z. B.:

```bash
python -m http.server 8000
```

Danach `http://localhost:8000` öffnen.

## Für Notion

Notion kann eine lokale HTML-Datei nicht direkt als dauerhaft eingebettete Website
hosten. Die Seite muss zuerst öffentlich über HTTPS erreichbar sein.

Ein einfacher Weg:

1. Projekt in ein GitHub-Repository laden.
2. GitHub Pages für das Repository aktivieren.
3. Die erzeugte `https://...`-Adresse der Website kopieren.
4. In Notion `/embed` wählen und diese Adresse einfügen.

Alternativ funktioniert auch Netlify, Vercel oder ein eigener Webserver.

## Später erweitern

Weitere Orte werden einfach als weiteres Objekt in `places` ergänzt. Du kannst außerdem
später Kategorien, Filter, eigene Marker-Icons, Bilder in Popups oder eine Suche ergänzen.
