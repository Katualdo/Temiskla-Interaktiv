/*
 * TEMISKLA – INTERAKTIVE KARTE
 *
 * NEUE ORTE HINZUFÜGEN:
 *
 * Kopiere innerhalb von "places" einen vorhandenen Block und ändere:
 *   title       = Name des Ortes
 *   type        = Kategorie
 *   rx / ry     = normalisierte Koordinaten (0.0 bis 1.0)
 *                 Die Koordinaten aus dem Koordinatenmodus können mit
 *                 x / Bildbreite und y / Bildhöhe umgerechnet werden.
 *   quote       = Zitat
 *   author      = Urheber des Zitats
 *   description = Beschreibung
 *
 * Beispiel:
 *
 * {
 *   id: "neuer-ort",
 *   title: "Neuer Ort",
 *   type: "Stadt",
 *   rx: 1234 / 3956,
 *   ry: 567 / 2620,
 *   quote: "„Zitat“",
 *   author: "Vigilor Soundso",
 *   description: "Beschreibung ..."
 * },
 *
 * Die Koordinaten sind immer Bildpixel:
 * X = von links nach rechts
 * Y = von oben nach unten
 *
 * Die Datei wird beim Laden automatisch auf ihre tatsächliche
 * Bildgröße angepasst. Dadurch funktioniert dieselbe Datei auch
 * mit einer später eingesetzten 3956 × 2620-Version der Karte.
 */

const places = [
  {
    id: "drachenkueste",
    title: "Drachenküste",
    type: "Meer",
    rx: 0.678711,
    ry: 0.951327,
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
    rx: 0.490723,
    ry: 0.910767,
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
    rx: 0.590820,
    ry: 0.892330,
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
    rx: 0.895996,
    ry: 0.287611,
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
    rx: 0.532227,
    ry: 0.844395,
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

const image = new Image();
image.src = "Karte_Temiscla_Gebiete_Staedte.jpg";

const map = L.map("map", {
  crs: L.CRS.Simple,
  zoomControl: true,
  attributionControl: false,
  scrollWheelZoom: true,
  wheelDebounceTime: 20,
  wheelPxPerZoomLevel: 180,
  zoomDelta: 0.25,
  zoomSnap: 0.25,
  zoomAnimation: true,
  fadeAnimation: false,
  markerZoomAnimation: true,
  inertia: true,
  inertiaDeceleration: 3000,
  maxBoundsViscosity: 1.0
});

let imageWidth = 2048;
let imageHeight = 1356;
let lastCoords = null;
let lastCoordinateMarker = null;
let maxZoom = 3;

const coordText = document.getElementById("coordsText");
const copyButton = document.getElementById("copyCoords");
const coordinateMode = document.getElementById("coordinateMode");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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

function imagePointToLeaflet(x, y) {
  return [y, x];
}

function normalizedToActual(place) {
  // Orte werden relativ zur Bildgröße gespeichert. Dadurch bleiben sie an
  // derselben Stelle, wenn dieselbe Karte später in höherer Auflösung vorliegt.
  return [place.ry * imageHeight, place.rx * imageWidth];
}

function addPlaces() {
  const markerIcon = L.divIcon({
    className: "",
    html: '<div class="temiskla-marker"></div>',
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -14]
  });

  places.forEach((place) => {
    const marker = L.marker(normalizedToActual(place), {
      icon: markerIcon,
      keyboard: true,
      title: place.title
    }).addTo(map);

    marker.bindPopup(popupHtml(place), {
      className: "temiskla-popup",
      maxWidth: 440,
      maxHeight: Math.min(620, window.innerHeight - 70),
      autoPan: true,
      autoPanPaddingTopLeft: [25, 25],
      autoPanPaddingBottomRight: [25, 25],
      closeButton: true
    });
  });
}

function setCoordinates(latlng) {
  const x = Math.round(latlng.lng);
  const y = Math.round(latlng.lat);

  lastCoords = { x, y };
  coordText.textContent = `X: ${x}   Y: ${y}`;
  copyButton.disabled = false;
}

image.onload = () => {
  imageWidth = image.naturalWidth;
  imageHeight = image.naturalHeight;

  const bounds = [[0, 0], [imageHeight, imageWidth]];

  L.imageOverlay(image.src, bounds, {
    interactive: false,
    opacity: 1
  }).addTo(map);

  // Die Karte startet so, dass das komplette Bild sichtbar ist.
map.fitBounds(bounds, {
  padding: [0, 0],
  animate: false
});

const startZoom = map.getZoom();

// Nicht weiter herauszoomen als die komplette Kartenansicht
map.setMinZoom(startZoom);

// Bis zu 5 Stufen hineinzoomen
map.setMaxZoom(startZoom + 5);

// Etwas Spielraum beim Verschieben der Karte
map.setMaxBounds([
  [-imageHeight * 0.10, -imageWidth * 0.10],
  [imageHeight * 1.10, imageWidth * 1.10]
]);

  addPlaces();
};

map.on("mousemove", (event) => {
  setCoordinates(event.latlng);
});

map.on("click", (event) => {
  if (!coordinateMode.checked) return;

  setCoordinates(event.latlng);

  if (lastCoordinateMarker) {
    map.removeLayer(lastCoordinateMarker);
  }

  lastCoordinateMarker = L.circleMarker(event.latlng, {
    radius: 7,
    weight: 2,
    color: "#fff3ce",
    fillColor: "#7b211b",
    fillOpacity: 0.9,
    className: "coordinate-click-marker"
  }).addTo(map);

  copyCoords();
});

async function copyCoords() {
  if (!lastCoords) return;

  const text = `X: ${lastCoords.x}, Y: ${lastCoords.y}`;

  try {
    await navigator.clipboard.writeText(text);
    const oldText = copyButton.textContent;
    copyButton.textContent = "Kopiert!";
    setTimeout(() => {
      copyButton.textContent = oldText;
    }, 1000);
  } catch {
    // Clipboard kann auf manchen Umgebungen blockiert sein.
  }
}

copyButton.addEventListener("click", copyCoords);

// Bei Resize nur die Popup-Höhe aktualisieren – NICHT die Karte neu fitten.
window.addEventListener("resize", () => {
  map.eachLayer((layer) => {
    if (layer.getPopup && layer.getPopup()) {
      layer.getPopup().options.maxHeight = Math.min(620, window.innerHeight - 70);
    }
  });
});
