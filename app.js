// Temiskla – Leaflet mit einer historischen Kartenabbildung als ImageOverlay.
//
// WICHTIG:
// Die Positionen unten sind Bildkoordinaten (x = links/rechts, y = oben/unten)
// der gelieferten Karte mit 2048 × 1356 Pixeln.
// Wenn du einen Marker verschieben möchtest, ändere nur x/y.

const IMAGE_WIDTH = 2048;
const IMAGE_HEIGHT = 1356;

const places = [
  {
    id: "drachenkueste",
    title: "Drachenküste",
    type: "Meer",
    x: 1450,
    y: 1275,
    quote: "„Zitat über Kampf von Drache mit Seeungeheuer“",
    author: "Vigilor Soundso",
    description:
      "Unzählige Felsspitzen durchbohren die Wasseroberfläche der unruhigen Region. " +
      "Die langgezogene Steilküste bietet allen Arten von großen und kleinen Drachen sichere Nistplätze " +
      "und einen guten Ausgangspunkt für die Jagd auf frische Beute. Allein segelnde Schiffe setzen sich " +
      "beim Befahren der Gewässer enormer Gefahr aus und viele Seefahrer endeten bereits im Drachenwanst " +
      "und ihre Schätze in den Drachenhorten."
  },
  {
    id: "drachenatem-inseln",
    title: "Drachenatem-Inseln",
    type: "Inselgruppe",
    x: 995,
    y: 1240,
    quote: "„Zitat“",
    author: "Vigilor Soundso",
    description:
      "Die dem Subkontinent vorgelagerte Inselgruppe besteht aus etlichen, zum Teil erloschenen Vulkanen. " +
      "Ausgedehnte, erstarrte Lavafelder und üppige Wälder prägen das Landschaftsbild. Riesige Schwärme " +
      "von Vögeln, fliegenden Reptilien und übergroßen Insekten bevölkern die Hänge und Ufer. Wildork-Stämme, " +
      "sogar noch unzivilisierter und unterentwickelter als die gewöhnlichen ihrer Art, überfallen sich in " +
      "ständig andauerndem Kampf gegeneinander. Unter den alles zerstampfenden Orks und dem dichten Dschungel " +
      "flackern hier und dort Anzeichen einer uralten, versunkenen Zivilisation auf. Die kleine Feuerzahn-Insel " +
      "ist der südlichste Punkt Temisclas."
  },
  {
    id: "drachenmaul-bucht",
    title: "Drachenmaul-Bucht",
    type: "Meer",
    x: 1325,
    y: 1245,
    quote: "„Zitat“",
    author: "Vigilor Soundso",
    description:
      "Heiße Dämpfe steigen an den hoch aufragenden Klippen empor und sind noch kilometerweit zu sehen. " +
      "Hier und da tritt Lava aus den Felswänden aus und ergießt sich zischend und brodelnd ins Meer. " +
      "Ein schwefelartiger Geruch liegt in der Luft und kann auch von den meist starken Winden nicht davongetragen werden. " +
      "Die große Anzahl abgebrochener und versengter Schiffsmasten, die aus dem brühenden Wasser hervorragen, " +
      "erzählen eine konfliktreiche Geschichte der Eroberung und Abwehr."
  },
  {
    id: "gruefte-der-aasgeier",
    title: "Grüfte der Aasgeier",
    type: "Ort",
    x: 1138,
    y: 1240,
    quote: "„Zitat“",
    author: "Vigilor Soundso",
    description:
      "Die Stille, die hier herrscht, ist beunruhigender als die enormen Ausmaße des Gräberfeldes, " +
      "das sich hier soweit erstreckt wie das Auge sehen kann. Unzählige Mausoleen und Grüfte reihen sich " +
      "in heilloser Anarchie aneinander. Des Nachts zerreißen Schreie oder ungeduldiges Knurren ab und zu die Stille, " +
      "bis sie sich wieder wie ein Leichentuch über die gesamte Landschaft legt."
  },
  {
    id: "horntor",
    title: "Das Horntor",
    type: "Tor / Relikt",
    x: 1098,
    y: 1150,
    quote: "„Zitat“",
    author: "Vigilor Soundso",
    description:
      "Über alles thronend steht das Horntor da, umgeben von Knochen und Schädeln einst mächtiger Drachen. " +
      "Auf der Spitze des Torbogens ist das namensgebende Horn angebracht. Welchem mächtigen Wesen es einst gehört haben mochte " +
      "ist unmöglich zu sagen. Der Torbogen an sich ist über und über mit Reliefs verziert. Sie zeigen alle möglichen Arten " +
      "von Fabelwesen und Ungeheuern, im Kampf verschlungen oder in ehrfurchtgebietenden Posen. Beim Blick durch das Tor " +
      "wirkt die Landschaft dahinter unscharf, wie hinter einem dicken Milchglas. Starke Energien durchflossen es einst und " +
      "haben den inneren Teil des Bogens geschwärzt. Doch schon lange liegt es brach. Ein großer Platz vor dem Tor ist restlos " +
      "mit Opfergaben und Geschenken gefüllt. Die Bewohner des Restreiches legen diese seit Jahrzehnten ab in der Hoffnung, " +
      "das Tor würde sich reaktivieren und ihnen die Rettung bringen."
  }
];

const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 3,
  zoomSnap: 0.25,
  zoomDelta: 0.5,
  wheelPxPerZoomLevel: 120,
  zoomControl: true,
  attributionControl: false
});

const bounds = [[0, 0], [IMAGE_HEIGHT, IMAGE_WIDTH]];

L.imageOverlay("Karte_Temiscla_Gebiete_Staedte.jpg", bounds, {
  interactive: false,
  opacity: 1
}).addTo(map);

const markerIcon = L.divIcon({
  className: "",
  html: '<div class="temiskla-marker"></div>',
  iconSize: [28, 28],
  iconAnchor: [14, 27],
  popupAnchor: [0, -25]
});

function popupHtml(place) {
  return `
    <article>
      <h2 class="place-title">${escapeHtml(place.title)}</h2>
      <p class="place-type">${escapeHtml(place.type)}</p>
      <p class="quote">${escapeHtml(place.quote)}</p>
      <p class="author">— ${escapeHtml(place.author)}</p>
      <p class="description">${escapeHtml(place.description)}</p>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

places.forEach((place) => {
  // Leaflet CRS.Simple verwendet [y, x].
  const marker = L.marker([place.y, place.x], { icon: markerIcon })
    .addTo(map)
    .bindPopup(popupHtml(place), {
      className: "temiskla-popup",
      maxWidth: 400,
      closeButton: true,
      autoPan: true
    });

  marker.on("click", () => {
    // Für spätere Erweiterungen: hier kann z. B. Analytics oder ein
    // eigener Detailbereich ausgelöst werden.
  });
});

map.fitBounds(bounds);

// Auf kleineren Bildschirmen etwas herauszoomen, damit die komplette Karte
// initial sichtbar bleibt.
const fit = () => map.fitBounds(bounds, { padding: [8, 8] });
window.addEventListener("resize", fit);
