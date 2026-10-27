export const site = {
    name: "WAW Nutzfahrzeuge",
    url: "https://www.wawnutzfahrzeuge.de",
    description:
        "WAW kauft LKW, Nutzfahrzeuge, Auflieger, Anhänger, Transporter, Baumaschinen und Fuhrparks professionell an.",
    email: "info@waw-nutzfahrzeuge.de",
    phoneDisplay: "+49 4156 8203739",
    phoneHref: "+4941568203739",
    whatsappHref: /^\d{8,15}$/.test(import.meta.env.PUBLIC_WHATSAPP_NUMBER || "")
        ? `https://wa.me/${import.meta.env.PUBLIC_WHATSAPP_NUMBER}`
        : "",
    address: {
        street: "Hegesahl 2",
        postalCode: "21493",
        locality: "Talkau",
        region: "Schleswig-Holstein",
        country: "DE",
    },
    openingHours: ["Mo-Fr 08:30-17:30"],
    openingHoursDisplay: "Mo–Fr 08:30–17:30",
    areaServed: [
        "Deutschland",
        "Europa",
        "Hamburg",
        "Berlin",
        "Hannover",
        "Bremen",
        "Kiel",
        "Lübeck",
        "Schwerin",
        "Rostock",
        "München",
        "Frankfurt am Main",
        "Köln",
        "Nordrhein-Westfalen",
        "Bayern",
        "Niedersachsen",
        "Schleswig-Holstein",
        "Hessen",
        "Baden-Württemberg",
    ],
    socialProfiles: [] as string[],
};

export const serviceLinks = [
    { href: "/leistungen#lkw", label: "LKW Ankauf" },
    { href: "/leistungen#nutzfahrzeuge", label: "Nutzfahrzeuge Ankauf" },
    { href: "/leistungen#sattelzugmaschinen", label: "Sattelzugmaschinen Ankauf" },
    { href: "/leistungen#auflieger", label: "Auflieger Ankauf" },
    { href: "/leistungen#anhaenger", label: "Anhänger Ankauf" },
    { href: "/leistungen#transporter", label: "Transporter Ankauf" },
    { href: "/leistungen#baumaschinen", label: "Baumaschinen Ankauf" },
    { href: "/leistungen#fuhrpark", label: "Fuhrpark Ankauf" },
];
