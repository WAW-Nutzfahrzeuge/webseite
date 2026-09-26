# Stadtbilder für /standorte

Lege hier ein Foto pro Stadt ab, um die passende Hintergrundkachel auf
`/standorte` automatisch zu aktivieren. Fehlt ein Bild für eine Stadt,
wird automatisch das bisherige (bilderlose) Kartendesign angezeigt –
du kannst die Städte also nach und nach befüllen.

## Namenskonvention

Der Dateiname kann entweder dem **Stadtnamen** (z. B. `Düsseldorf.webp`,
`München.webp`) oder dem `slug` der Stadt aus `src/data/cities.ts`
entsprechen (z. B. `duesseldorf.webp`, `muenchen.webp`) – Groß-/
Kleinschreibung ist egal. Beispiele:

- `Hamburg.webp` oder `hamburg.webp` → Hamburg
- `München.webp` oder `muenchen.webp` → München
- `Köln.webp` oder `koeln.webp` → Köln

Erlaubte Formate: `.jpg`, `.jpeg`, `.png`, `.webp`

## Bildgröße

- Querformat (Landscape), Seitenverhältnis ca. **3:2**
- Empfohlene Auflösung: **1200 × 800 px**
- Ausgangsdateigröße bis ca. 1 MB reicht völlig – Astro verkleinert,
  komprimiert und konvertiert die Bilder beim Build automatisch
  (WebP, mehrere Größen für Mobile/Desktop).

## Motividee

Am besten Fotos, die die Stadt/Region erkennbar machen: Skyline,
Wahrzeichen, Hafen/Industrie/Gewerbegebiet – je nach thematischem
Bezug zur Stadt (siehe `cardText`/`localProfile` in `cities.ts`).
