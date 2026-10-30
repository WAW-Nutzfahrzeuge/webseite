import type { Locale } from "./i18n";
import type { FaqItem } from "../utils/seo";

interface AboutPageCopy {
  title: string; description: string; schemaName: string; schemaDescription: string;
  offer: string; call: string; benefitsLabel: string; statsLabel: string;
  hero: { kicker: string; heading: string; text: string; trust: string[] };
  intro: { kicker: string; heading: string; paragraphs: string[] };
  advantages: { kicker: string; heading: string; text: string };
  range: { kicker: string; heading: string; text: string };
  process: { kicker: string; heading: string; text: string };
  proof: { kicker: string; heading: string; text: string; imageAlt: string; items: string[]; vehicles: string };
  faqHeading: string;
  final: { kicker: string; heading: string; text: string; whatsapp: string };
  stats: { value: string; label: string }[];
  reasons: { title: string; text: string }[];
  sellers: { title: string; text: string }[];
  keywords: string[];
  steps: [string, string, string][];
  faqs: FaqItem[];
}

export const aboutPageCopy: Record<Locale, AboutPageCopy> = {
  de: {
    title: "Über uns | LKW & Nutzfahrzeuge direkt verkaufen | WAW",
    description: "WAW kauft LKW, Auflieger, Anhänger, Transporter, Baumaschinen und Fuhrparks direkt an. Für Unternehmen, Händler, Speditionen und Fuhrparks.",
    schemaName: "Über WAW Nutzfahrzeuge",
    schemaDescription: "WAW ist Ansprechpartner für den direkten Ankauf von LKW, Nutzfahrzeugen, Aufliegern, Anhängern, Transportern, Baumaschinen und Fuhrparks.",
    offer: "Fahrzeug unverbindlich anbieten", call: "Direkt anrufen", benefitsLabel: "Vorteile", statsLabel: "WAW Kennzahlen",
    hero: { kicker: "ÜBER WAW NUTZFAHRZEUGE", heading: "LKW verkaufen mit einem Partner, der den Nutzfahrzeugmarkt kennt.", text: "WAW kauft LKW, Auflieger, Anhänger, Transporter, Baumaschinen und komplette Fuhrparks direkt an – schnell, persönlich und zu einem fairen, marktgerechten Preis.", trust: ["Direkter Ankauf", "Auch mit Schäden", "Einzelfahrzeuge & Fuhrparks"] },
    intro: { kicker: "WARUM WAW?", heading: "Eine klare Lösung statt langer Verkaufswege.", paragraphs: ["Sie möchten einen gebrauchten LKW, eine Sattelzugmaschine, einen Auflieger oder einen kompletten Fuhrpark verkaufen? Dann zählt vor allem eines: ein Ansprechpartner, der schnell erreichbar ist und Ihr Fahrzeug realistisch einschätzt. Genau dafür steht WAW.", "Wir kaufen Nutzfahrzeuge aller Art an – auch mit hoher Laufleistung, fehlendem TÜV, technischen Mängeln oder Unfallschaden. Im Mittelpunkt steht eine direkte, seriöse und unkomplizierte Abwicklung."] },
    advantages: { kicker: "IHRE VORTEILE", heading: "Warum Unternehmen direkt bei WAW anfragen", text: "Kurze Wege, klare Kommunikation und ein Ansprechpartner, der den Nutzfahrzeugmarkt kennt – das zählt für Unternehmen, Händler und Fuhrparks." },
    range: { kicker: "ANKAUFSSPEKTRUM", heading: "Vom einzelnen LKW bis zum kompletten Fuhrpark.", text: "Wir sind Ansprechpartner für Unternehmen, Händler, Speditionen und Fuhrparkbetreiber, die Nutzfahrzeuge direkt und professionell verkaufen möchten." },
    process: { kicker: "SO ARBEITEN WIR", heading: "Direkt, verständlich und ohne unnötige Hürden.", text: "Der Verkauf Ihres Nutzfahrzeugs soll nicht kompliziert sein. Deshalb halten wir den Ablauf bewusst klar." },
    proof: { kicker: "VERTRAUEN IM ANKAUF", heading: "Auch schwierige Fahrzeuge sind bei uns willkommen.", text: "Nicht jeder LKW ist in perfektem Zustand – das ist für uns kein Problem. Entscheidend sind die realen Fahrzeugdaten, der Standort und die weitere Abstimmung. Auch nicht fahrbereite Fahrzeuge können Sie anbieten. Ob ein Ankauf möglich ist, prüfen wir im Einzelfall.", imageAlt: "Nutzfahrzeuge und Fuhrpark auf großem Hof", items: ["LKW mit hoher Laufleistung", "Fahrzeuge ohne TÜV oder HU", "Motorschaden, Getriebeschaden oder Unfallschaden", "Auflieger, Anhänger, Baumaschinen und Fuhrparks"], vehicles: "Alle Fahrzeugtypen ansehen →" },
    faqHeading: "Häufige Fragen zu WAW",
    final: { kicker: "NUTZFAHRZEUG VERKAUFEN?", heading: "Senden Sie uns Ihre Anfrage.", text: "Hinterlassen Sie Ihre Kontaktdaten und die wichtigsten Angaben zum Fahrzeug. Fehlen Ihnen Daten, reicht der erste Kontakt trotzdem aus – wir klären den Rest gemeinsam mit Ihnen.", whatsapp: "WhatsApp schreiben" },
    stats: [], reasons: [], sellers: [], keywords: [], steps: [], faqs: [],
  },
  en: {
    title: "About us | Sell Trucks & Commercial Vehicles Directly | WAW",
    description: "WAW buys trucks, semi-trailers, trailers, vans, construction machinery and fleets directly. For businesses, dealers, hauliers and fleet operators.",
    schemaName: "About WAW Commercial Vehicles",
    schemaDescription: "WAW is your direct buyer for trucks, commercial vehicles, semi-trailers, trailers, vans, construction machinery and fleets.",
    offer: "Offer your vehicle, no obligation", call: "Call us directly", benefitsLabel: "Benefits", statsLabel: "WAW at a glance",
    hero: { kicker: "ABOUT WAW COMMERCIAL VEHICLES", heading: "Sell your truck to a partner who knows the commercial vehicle market.", text: "WAW buys trucks, semi-trailers, trailers, vans, construction machinery and entire fleets directly – promptly, personally and at a fair market price.", trust: ["Direct purchase", "Damaged vehicles welcome", "Single vehicles & fleets"] },
    intro: { kicker: "WHY WAW?", heading: "A clear solution instead of a drawn-out sale.", paragraphs: ["Looking to sell a used truck, tractor unit, semi-trailer or an entire fleet? What matters most is a buyer who is easy to reach and assesses your vehicle realistically. That is exactly what WAW stands for.", "We buy commercial vehicles of every kind – including high-mileage vehicles, vehicles without a valid inspection, those with technical defects or accident damage. Our focus is a direct, professional and straightforward transaction."] },
    advantages: { kicker: "YOUR BENEFITS", heading: "Why businesses contact WAW directly", text: "A straightforward approach, clear communication and a partner who knows the commercial vehicle market – that is what matters to businesses, dealers and fleet operators." },
    range: { kicker: "WHAT WE BUY", heading: "From a single truck to an entire fleet.", text: "We work with businesses, dealers, hauliers and fleet operators who want to sell commercial vehicles directly and professionally." },
    process: { kicker: "HOW WE WORK", heading: "Direct, clear and without unnecessary hurdles.", text: "Selling your commercial vehicle should not be complicated. That is why we keep the process clear and simple." },
    proof: { kicker: "CONFIDENCE WHEN SELLING", heading: "Vehicles with problems are welcome too.", text: "Not every truck is in perfect condition – that is not a problem for us. What matters is accurate vehicle information, the location and agreeing the next steps. You can also offer non-running vehicles. We assess whether a purchase is possible on a case-by-case basis.", imageAlt: "Commercial vehicles and a fleet in a large vehicle yard", items: ["High-mileage trucks", "Vehicles without a valid roadworthiness inspection", "Engine, gearbox or accident damage", "Semi-trailers, trailers, construction machinery and fleets"], vehicles: "View all vehicle types →" },
    faqHeading: "Frequently asked questions about WAW",
    final: { kicker: "SELLING A COMMERCIAL VEHICLE?", heading: "Send us your inquiry.", text: "Leave your contact details and the main information about your vehicle. Even if some details are missing, getting in touch is enough to start – we will work through the rest together.", whatsapp: "Write on WhatsApp" },
    stats: [{ value: "Direct", label: "Purchase of commercial vehicles" }, { value: "Worldwide", label: "Buying and selling commercial vehicles" }, { value: "1:1", label: "Personal contact, no middlemen" }],
    reasons: [
      { title: "A direct sale instead of lengthy listings", text: "Talk directly to us – without a platform, unnecessary steps or endless negotiations with uncertain buyers." },
      { title: "Older and damaged vehicles too", text: "You can also offer trucks with high mileage, no valid inspection, damage or that do not run. We will assess whether a purchase is possible." },
      { title: "Prompt response", text: "We respond promptly to your inquiry and discuss vehicle details, location and next steps with you personally." },
      { title: "Professional handling", text: "From first contact to handover: clear communication, reliable agreements and a professional sales process." },
    ],
    sellers: [
      { title: "Businesses & trade", text: "For businesses looking for a straightforward sale of individual commercial vehicles, vans, construction machinery or trailers." },
      { title: "Hauliers & fleets", text: "For hauliers and fleet operators with several trucks, tractor units, semi-trailers or complete vehicle packages." },
      { title: "Dealers & stock", text: "For dealer stock, returned vehicles, older vehicles, export vehicles and mixed commercial vehicle packages." },
    ],
    keywords: ["Sell trucks", "Commercial vehicle purchase", "Sell semi-trailers", "Sell a tractor unit", "Construction machinery purchase", "Sell a fleet", "Truck export", "Commercial vehicles worldwide"],
    steps: [
      ["01", "Send vehicle details", "The key details by phone, WhatsApp or through the form are enough to get started."],
      ["02", "Discuss the details", "We clarify vehicle type, condition, location, documentation and any damage directly with you."],
      ["03", "Complete the sale", "Once agreed, we coordinate handover, payment and, where applicable, collection."],
    ],
    faqs: [
      { question: "Why should I sell my truck directly to WAW?", answer: "You have a direct point of contact and can arrange the sale without listings, stressful viewings or uncertain buyers. We professionally buy trucks, semi-trailers, trailers, vans, construction machinery and fleets." },
      { question: "Does WAW also buy older or damaged commercial vehicles?", answer: "Yes. Offer vehicles with high mileage, damage, no valid inspection or older model years too. This also applies to non-running vehicles. We assess whether a purchase is possible using the information you provide." },
      { question: "Does WAW operate worldwide?", answer: "Yes. WAW buys and sells commercial vehicles worldwide. We agree the arrangements directly with you depending on the vehicle, location and number of vehicles." },
      { question: "Can I offer several vehicles or a fleet?", answer: "Yes. WAW is a suitable partner for businesses, dealers, hauliers and fleet operators looking to sell multiple vehicles or complete vehicle packages." },
      { question: "What information helps with an initial inquiry?", answer: "Vehicle type, make, model, year, mileage or operating hours, condition, location and photos are helpful. If anything is missing, we will clarify it together." },
    ],
  },
  fr: {
    title: "À propos | Vendre directement camions et utilitaires | WAW",
    description: "WAW rachète directement camions, semi-remorques, remorques, fourgons, engins de chantier et flottes. Pour les entreprises, négociants et transporteurs.",
    schemaName: "À propos de WAW Véhicules utilitaires",
    schemaDescription: "WAW est votre interlocuteur pour le rachat direct de camions, utilitaires, semi-remorques, remorques, fourgons, engins de chantier et flottes.",
    offer: "Proposer un véhicule sans engagement", call: "Appelez-nous directement", benefitsLabel: "Vos avantages", statsLabel: "WAW en bref",
    hero: { kicker: "À PROPOS DE WAW VÉHICULES UTILITAIRES", heading: "Vendez votre camion à un partenaire qui connaît le marché des utilitaires.", text: "WAW rachète directement camions, semi-remorques, remorques, fourgons, engins de chantier et flottes complètes : rapidement, avec un suivi personnel et à un prix juste, conforme au marché.", trust: ["Rachat direct", "Même avec des dommages", "Véhicules individuels et flottes"] },
    intro: { kicker: "POURQUOI WAW ?", heading: "Une solution claire plutôt qu’une vente qui s’éternise.", paragraphs: ["Vous souhaitez vendre un camion d’occasion, un tracteur routier, une semi-remorque ou une flotte complète ? L’essentiel est d’avoir un interlocuteur facilement joignable, capable d’évaluer votre véhicule de façon réaliste. C’est précisément ce que propose WAW.", "Nous rachetons des utilitaires de tout type, même fortement kilométrés, sans contrôle technique valide, présentant des défauts techniques ou accidentés. Notre priorité : une transaction directe, sérieuse et simple."] },
    advantages: { kicker: "VOS AVANTAGES", heading: "Pourquoi les entreprises contactent directement WAW", text: "Des démarches simples, une communication claire et un interlocuteur qui connaît le marché des utilitaires : voilà ce qui compte pour les entreprises, négociants et gestionnaires de flotte." },
    range: { kicker: "NOS DOMAINES DE RACHAT", heading: "D’un seul camion à une flotte complète.", text: "Nous accompagnons les entreprises, négociants, transporteurs et gestionnaires de flotte qui souhaitent vendre directement et professionnellement leurs véhicules utilitaires." },
    process: { kicker: "NOTRE MÉTHODE", heading: "Des échanges directs, clairs et sans obstacles inutiles.", text: "Vendre votre utilitaire ne devrait pas être compliqué. C’est pourquoi nous privilégions un déroulement simple et clair." },
    proof: { kicker: "VENDRE EN CONFIANCE", heading: "Les véhicules difficiles à vendre sont aussi les bienvenus.", text: "Tous les camions ne sont pas en parfait état, et cela ne nous pose pas de problème. L’essentiel est de disposer d’informations fiables sur le véhicule, son emplacement et de convenir de la suite. Vous pouvez aussi proposer un véhicule non roulant. Nous étudions chaque cas pour déterminer si un rachat est possible.", imageAlt: "Véhicules utilitaires et flotte sur un grand parc automobile", items: ["Camions fortement kilométrés", "Véhicules sans contrôle technique valide", "Moteur ou boîte endommagés, véhicule accidenté", "Semi-remorques, remorques, engins de chantier et flottes"], vehicles: "Voir tous les types de véhicules →" },
    faqHeading: "Questions fréquentes sur WAW",
    final: { kicker: "VOUS VENDEZ UN UTILITAIRE ?", heading: "Envoyez-nous votre demande.", text: "Laissez vos coordonnées et les principales informations sur votre véhicule. Même si certaines données manquent, un premier contact suffit : nous clarifierons le reste ensemble.", whatsapp: "Écrire sur WhatsApp" },
    stats: [{ value: "Direct", label: "Rachat de véhicules professionnels" }, { value: "Mondial", label: "Achat et vente d’utilitaires dans le monde entier" }, { value: "1:1", label: "Un interlocuteur direct, sans intermédiaire" }],
    reasons: [
      { title: "Une vente directe plutôt que de longues annonces", text: "Vous échangez directement avec nous, sans plateforme, sans démarches intermédiaires ni négociations interminables avec des acheteurs incertains." },
      { title: "Véhicules anciens et endommagés aussi", text: "Proposez aussi vos camions fortement kilométrés, sans contrôle technique valide, endommagés ou non roulants. Nous étudions la possibilité d’un rachat." },
      { title: "Une réponse rapide", text: "Nous vous recontactons rapidement et discutons personnellement avec vous du véhicule, de son emplacement et des prochaines étapes." },
      { title: "Une transaction sérieuse", text: "Du premier contact à la remise : une communication claire, des engagements fiables et un processus de vente professionnel." },
    ],
    sellers: [
      { title: "Entreprises et professionnels", text: "Pour les entreprises souhaitant vendre simplement un utilitaire, un fourgon, un engin de chantier ou une remorque." },
      { title: "Transporteurs et flottes", text: "Pour les transporteurs et gestionnaires de flotte ayant plusieurs camions, tracteurs routiers, semi-remorques ou lots complets." },
      { title: "Négociants et stocks", text: "Pour les stocks de négociants, retours de véhicules, modèles anciens, véhicules d’export et lots d’utilitaires variés." },
    ],
    keywords: ["Vendre un camion", "Rachat d’utilitaires", "Vendre une semi-remorque", "Vendre un tracteur routier", "Rachat d’engins de chantier", "Vendre une flotte", "Export de camions", "Utilitaires dans le monde entier"],
    steps: [
      ["01", "Envoyer les informations", "Les principales informations par téléphone, WhatsApp ou formulaire suffisent pour commencer."],
      ["02", "Échanger directement", "Nous clarifions avec vous le type de véhicule, son état, son emplacement, les documents et les éventuels dommages."],
      ["03", "Finaliser la vente", "Après accord, nous coordonnons la remise, le paiement et, selon le cas, l’enlèvement."],
    ],
    faqs: [
      { question: "Pourquoi vendre mon camion directement à WAW ?", answer: "Vous disposez d’un interlocuteur direct et pouvez organiser la vente sans annonces, visites stressantes ni acheteurs incertains. Nous rachetons professionnellement camions, semi-remorques, remorques, fourgons, engins de chantier et flottes." },
      { question: "WAW rachète-t-il aussi les utilitaires anciens ou endommagés ?", answer: "Oui. Proposez aussi les véhicules fortement kilométrés, endommagés, sans contrôle technique valide ou anciens. Cela vaut également pour les véhicules non roulants. Nous étudions la possibilité d’un rachat à partir de vos informations." },
      { question: "WAW intervient-il dans le monde entier ?", answer: "Oui. WAW achète et vend des utilitaires dans le monde entier. Nous convenons directement avec vous des modalités en fonction du véhicule, de l’emplacement et du nombre de véhicules." },
      { question: "Puis-je proposer plusieurs véhicules ou une flotte ?", answer: "Oui. WAW accompagne notamment les entreprises, négociants, transporteurs et gestionnaires de flotte souhaitant vendre plusieurs véhicules ou des lots complets." },
      { question: "Quelles informations sont utiles pour une première demande ?", answer: "Le type de véhicule, la marque, le modèle, l’année, le kilométrage ou les heures de fonctionnement, l’état, l’emplacement et des photos sont utiles. Nous clarifierons ensemble les informations manquantes." },
    ],
  },
};
