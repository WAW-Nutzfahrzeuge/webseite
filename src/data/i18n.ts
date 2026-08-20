export type Locale = "de" | "en" | "fr";

export const defaultLocale: Locale = "de";
export const locales: Locale[] = ["de", "en", "fr"];

export const localeLabels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
};

export const localeShortLabels: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  fr: "FR",
};

export const routeMap = {
  home: { de: "/", en: "/en", fr: "/fr" },
  about: { de: "/ueber-uns", en: "/en/about", fr: "/fr/a-propos" },
  services: { de: "/leistungen", en: "/en/services", fr: "/fr/services" },
  process: { de: "/ablauf", en: "/en/process", fr: "/fr/processus" },
  vehicles: { de: "/fahrzeuge", en: "/en/vehicles", fr: "/fr/vehicules" },
  locations: { de: "/standorte", en: "/en/locations", fr: "/fr/implantations" },
  contact: { de: "/kontakt", en: "/en/contact", fr: "/fr/contact" },
  legalNotice: { de: "/impressum", en: "/en/legal-notice", fr: "/fr/mentions-legales" },
  privacy: { de: "/datenschutz", en: "/en/privacy-policy", fr: "/fr/confidentialite" },
  terms: { de: "/agb", en: "/en/terms", fr: "/fr/cgv" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routeMap;
export type StaticRouteKey = Exclude<RouteKey, "home">;

export const routeSlugAliases: Record<StaticRouteKey, string[]> = {
  about: ["about", "a-propos", "ueber-uns"],
  services: ["services", "leistungen"],
  process: ["process", "processus", "ablauf"],
  vehicles: ["vehicles", "vehicules", "fahrzeuge"],
  locations: ["locations", "implantations", "standorte"],
  contact: ["contact", "kontakt"],
  legalNotice: ["legal-notice", "mentions-legales", "impressum"],
  privacy: ["privacy-policy", "confidentialite", "datenschutz"],
  terms: ["terms", "cgv", "agb"],
};

export const cityRoutePrefixes: Record<Locale, string> = {
  de: "/lkw-verkaufen",
  en: "/en/sell-trucks",
  fr: "/fr/vendre-camion",
};

export const ui = {
  de: {
    language: "Sprache",
    home: "Startseite",
    about: "Über uns",
    services: "Leistungen",
    allServices: "Alle Leistungen",
    process: "Ablauf",
    vehicles: "Fahrzeuge",
    locations: "Standorte",
    allLocations: "Alle Standorte",
    contact: "Kontakt",
    startInquiry: "Fahrzeug anbieten",
    call: "Anrufen",
    writeWhatsapp: "WhatsApp schreiben",
    serviceLinks: {
      lkw: "LKW Ankauf",
      nutzfahrzeuge: "Nutzfahrzeuge Ankauf",
      auflieger: "Auflieger Ankauf",
      anhaenger: "Anhänger Ankauf",
      transporter: "Transporter Ankauf",
      baumaschinen: "Baumaschinen Ankauf",
      fuhrpark: "Fuhrpark Ankauf",
    },
    footerText:
      "WAW kauft LKW, Nutzfahrzeuge, Anhänger, Auflieger, Baumaschinen und Fuhrparks direkt an.",
    regions: "Regionen",
    company: "Unternehmen",
    legal: "Rechtliches",
    legalNotice: "Impressum",
    privacy: "Datenschutz",
    terms: "AGB",
    sellTrucksCity: "LKW verkaufen",
  },
  en: {
    language: "Language",
    home: "Home",
    about: "About us",
    services: "Services",
    allServices: "All services",
    process: "Process",
    vehicles: "Vehicles",
    locations: "Locations",
    allLocations: "All locations",
    contact: "Contact",
    startInquiry: "Start inquiry",
    call: "Call",
    writeWhatsapp: "Write on WhatsApp",
    serviceLinks: {
      lkw: "Truck purchase",
      nutzfahrzeuge: "Commercial vehicle purchase",
      auflieger: "Semi-trailer purchase",
      anhaenger: "Trailer purchase",
      transporter: "Van purchase",
      baumaschinen: "Construction machinery purchase",
      fuhrpark: "Fleet purchase",
    },
    footerText:
      "WAW is your partner for purchasing trucks, commercial vehicles, trailers, semi-trailers, construction machinery and fleets.",
    regions: "Regions",
    company: "Company",
    legal: "Legal",
    legalNotice: "Legal notice",
    privacy: "Privacy policy",
    terms: "Terms",
    sellTrucksCity: "Sell trucks",
  },
  fr: {
    language: "Langue",
    home: "Accueil",
    about: "À propos",
    services: "Services",
    allServices: "Tous les services",
    process: "Processus",
    vehicles: "Véhicules",
    locations: "Implantations",
    allLocations: "Toutes les villes",
    contact: "Contact",
    startInquiry: "Démarrer une demande",
    call: "Appeler",
    writeWhatsapp: "Écrire sur WhatsApp",
    serviceLinks: {
      lkw: "Rachat de camions",
      nutzfahrzeuge: "Rachat de véhicules utilitaires",
      auflieger: "Rachat de semi-remorques",
      anhaenger: "Rachat de remorques",
      transporter: "Rachat de fourgons",
      baumaschinen: "Rachat de machines de chantier",
      fuhrpark: "Rachat de flottes",
    },
    footerText:
      "WAW est votre interlocuteur pour le rachat de camions, véhicules utilitaires, remorques, semi-remorques, machines de chantier et flottes.",
    regions: "Régions",
    company: "Entreprise",
    legal: "Mentions légales",
    legalNotice: "Mentions légales",
    privacy: "Confidentialité",
    terms: "CGV",
    sellTrucksCity: "Vendre un camion",
  },
} as const;

export function localizePath(route: RouteKey, locale: Locale): string {
  return routeMap[route][locale];
}

export function localizeCityPath(slug: string, locale: Locale): string {
  return `${cityRoutePrefixes[locale]}/${slug}`;
}

export function withTrailingSlash(path: string): string {
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

export function getRouteKeyFromPath(pathname: string): RouteKey | null {
  const cleanPath = withTrailingSlash(pathname);
  for (const key of Object.keys(routeMap) as RouteKey[]) {
    if (Object.values(routeMap[key]).some((path) => withTrailingSlash(path) === cleanPath)) {
      return key;
    }
  }

  for (const locale of locales.filter((entry) => entry !== "de")) {
    const prefix = `/${locale}/`;
    if (!cleanPath.startsWith(prefix)) continue;

    const slug = cleanPath.slice(prefix.length).split("/")[0];
    for (const key of Object.keys(routeSlugAliases) as StaticRouteKey[]) {
      if (routeSlugAliases[key].includes(slug)) return key;
    }
  }

  return null;
}

export function getCitySlugFromPath(pathname: string): string | null {
  const cleanPath = withTrailingSlash(pathname);
  for (const prefix of Object.values(cityRoutePrefixes)) {
    const cleanPrefix = withTrailingSlash(prefix);
    if (cleanPath.startsWith(`${cleanPrefix}/`)) {
      return cleanPath.slice(cleanPrefix.length + 1).split("/")[0] || null;
    }
  }
  return null;
}

export function getLocalizedEquivalentPath(pathname: string, locale: Locale): string {
  const citySlug = getCitySlugFromPath(pathname);
  if (citySlug) return localizeCityPath(citySlug, locale);

  const routeKey = getRouteKeyFromPath(pathname);
  if (routeKey) return localizePath(routeKey, locale);

  return localizePath("home", locale);
}

export function getAlternates(pathname: string) {
  return locales.map((locale) => ({
    locale,
    href: getLocalizedEquivalentPath(pathname, locale),
  }));
}

export function getLocaleFromPath(pathname: string): Locale {
  const cleanPath = withTrailingSlash(pathname);
  if (cleanPath === "/en" || cleanPath.startsWith("/en/")) return "en";
  if (cleanPath === "/fr" || cleanPath.startsWith("/fr/")) return "fr";
  return "de";
}
