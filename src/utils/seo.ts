import { site } from "../data/site";

export interface FaqItem {
    question: string;
    answer: string;
}

export interface BreadcrumbItem {
    name: string;
    url: string;
}

export function absoluteUrl(path = "") {
    if (!path || path === "/") return `${site.url}/`;
    return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createLocalBusinessSchema(url = site.url, description = site.description) {
    const schema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "AutoDealer",
        "@id": `${site.url}/#localbusiness`,
        name: site.name,
        url,
        description,
        email: site.email,
        telephone: site.phoneDisplay,
        image: `${site.url}/og-image.png`,
        priceRange: "€€",
        address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            postalCode: site.address.postalCode,
            addressLocality: site.address.locality,
            addressRegion: site.address.region,
            addressCountry: site.address.country,
        },
        openingHours: site.openingHours,
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: site.phoneDisplay,
                contactType: "sales",
                areaServed: "DE",
                availableLanguage: ["de", "en", "fr"],
                email: site.email,
            },
        ],
        areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
        makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "LKW Ankauf" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nutzfahrzeuge Ankauf" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auflieger Ankauf" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Anhänger Ankauf" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transporter Ankauf" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Baumaschinen Ankauf" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fuhrpark Ankauf" } },
        ],
    };

    if (site.socialProfiles.length > 0) {
        schema.sameAs = site.socialProfiles;
    }

    return schema;
}

export function createFaqSchema(items: FaqItem[] = []) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
