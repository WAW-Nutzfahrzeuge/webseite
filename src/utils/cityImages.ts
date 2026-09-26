// Optionale Stadtfotos: eine Datei mit dem Stadtnamen oder dem Stadt-Slug
// in src/assets/cities/ ablegen (siehe README dort), z. B. "Düsseldorf.webp"
// oder "duesseldorf.webp". Städte ohne Foto fallen automatisch auf das
// jeweils bestehende Design zurück.
const cityImageModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/cities/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const cityImages: Record<string, ImageMetadata> = {};
for (const path in cityImageModules) {
  const filename = path.split("/").pop()?.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  if (filename) cityImages[filename.toLowerCase()] = cityImageModules[path].default;
}

export function getCityImage(name: string, slug: string): ImageMetadata | null {
  return cityImages[name.toLowerCase()] ?? cityImages[slug.toLowerCase()] ?? null;
}
