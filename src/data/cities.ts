export interface CityFaq {
    question: string;
    answer: string;
}

export interface City {
    slug: string;
    name: string;
    state: string;
    cardText: string;
    featured: boolean;
    showInNavigation: boolean;
    heroTitle: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    sectionTitle: string;
    sectionText: string;
    localProfile: string;
    localFocus: string;
    transportSignals: string[];
    nearbyCities: string[];
    faq: CityFaq[];
    keywords: string[];
    searchTerms: string[];
}

interface CitySeed {
    slug: string;
    name: string;
    state: string;
    cardText: string;
    localProfile: string;
    nearbyCities?: string[];
    showInNavigation?: boolean;
}

interface TopCitySeoProfile {
    localFocus: string;
    transportSignals: string[];
}

const citySeeds: CitySeed[] = [
    { slug: "hamburg", name: "Hamburg", state: "Hamburg", cardText: "Hafen, Logistik & Nutzfahrzeuge", localProfile: "Hamburg ist durch Hafen, Containerverkehr, Speditionen und Gewerbegebiete ein besonders relevanter Standort für gebrauchte LKW, Auflieger und Fuhrparks.", nearbyCities: ["Norderstedt", "Pinneberg", "Stade", "Lüneburg"], showInNavigation: true },
    { slug: "berlin", name: "Berlin", state: "Berlin", cardText: "Hauptstadtregion & Fuhrparks", localProfile: "Berlin und das Umland Brandenburg bilden eine große Wirtschaftsregion mit Lieferverkehr, Baugewerbe, Dienstleistern und gewerblichen Fuhrparks.", nearbyCities: ["Potsdam", "Oranienburg", "Bernau", "Königs Wusterhausen"], showInNavigation: true },
    { slug: "muenchen", name: "München", state: "Bayern", cardText: "Süddeutschland & Wirtschaft", localProfile: "München ist ein starker Wirtschaftsstandort mit Gewerbe, Bau, Handel und regionalem Verteilerverkehr in ganz Südbayern.", nearbyCities: ["Augsburg", "Ingolstadt", "Rosenheim", "Freising"], showInNavigation: true },
    { slug: "koeln", name: "Köln", state: "Nordrhein-Westfalen", cardText: "Rheinland & Transport", localProfile: "Köln liegt zentral im Rheinland und ist durch Messe, Handel, Transportachsen und gewerbliche Flotten ein wichtiger Standort für Nutzfahrzeuge.", nearbyCities: ["Bonn", "Leverkusen", "Bergisch Gladbach", "Düsseldorf"], showInNavigation: true },
    { slug: "frankfurt", name: "Frankfurt", state: "Hessen", cardText: "Logistik & Finanzmetropole", localProfile: "Frankfurt am Main verbindet Flughafen, Messe, Finanzwirtschaft und Logistik. Entsprechend hoch ist der Bedarf an professioneller Fuhrpark-Abwicklung.", nearbyCities: ["Offenbach", "Wiesbaden", "Mainz", "Darmstadt"], showInNavigation: true },
    { slug: "stuttgart", name: "Stuttgart", state: "Baden-Württemberg", cardText: "Industrie, Gewerbe & Fuhrparks", localProfile: "Stuttgart und die Region Neckar sind von Industrie, Zulieferern, Handwerk und Gewerbe geprägt. Viele Unternehmen nutzen LKW, Transporter und Spezialfahrzeuge.", nearbyCities: ["Esslingen", "Ludwigsburg", "Sindelfingen", "Reutlingen"], showInNavigation: true },
    { slug: "duesseldorf", name: "Düsseldorf", state: "Nordrhein-Westfalen", cardText: "Rhein-Ruhr & Gewerbe", localProfile: "Düsseldorf ist ein zentraler Unternehmens- und Handelsstandort in Rhein-Ruhr mit vielen gewerblichen Fahrzeugbeständen.", nearbyCities: ["Neuss", "Ratingen", "Krefeld", "Köln"], showInNavigation: true },
    { slug: "dortmund", name: "Dortmund", state: "Nordrhein-Westfalen", cardText: "Ruhrgebiet & Logistik", localProfile: "Dortmund ist ein bedeutender Logistikstandort im Ruhrgebiet mit Transportgewerbe, Handel und regionalen Fuhrparks.", nearbyCities: ["Bochum", "Essen", "Hagen", "Unna"], showInNavigation: true },
    { slug: "essen", name: "Essen", state: "Nordrhein-Westfalen", cardText: "Ruhrgebiet & Unternehmensflotten", localProfile: "Essen liegt im Zentrum des Ruhrgebiets und ist durch Dienstleistung, Gewerbe und Industrie ein wichtiger Markt für Nutzfahrzeuge.", nearbyCities: ["Mülheim an der Ruhr", "Oberhausen", "Bochum", "Gelsenkirchen"], showInNavigation: true },
    { slug: "leipzig", name: "Leipzig", state: "Sachsen", cardText: "Logistik, Handel & Wachstum", localProfile: "Leipzig ist ein wachsender Logistik- und Wirtschaftsstandort mit Güterverkehr, Gewerbeparks und zahlreichen Fuhrparks.", nearbyCities: ["Halle", "Delitzsch", "Markkleeberg", "Schkeuditz"], showInNavigation: true },
    { slug: "bremen", name: "Bremen", state: "Bremen", cardText: "Handel, Hafen & Logistik", localProfile: "Bremen ist durch Hafenwirtschaft, Handel, Automobilindustrie und Logistik ein starker Standort für LKW und Auflieger.", nearbyCities: ["Bremerhaven", "Delmenhorst", "Oldenburg", "Achim"], showInNavigation: true },
    { slug: "dresden", name: "Dresden", state: "Sachsen", cardText: "Sachsen & Gewerbe", localProfile: "Dresden verbindet Technologie, Bau, Handel und regionale Transportachsen. Für Unternehmen ist eine direkte Nutzfahrzeug-Abwicklung wichtig.", nearbyCities: ["Meißen", "Radebeul", "Pirna", "Freital"], showInNavigation: true },
    { slug: "hannover", name: "Hannover", state: "Niedersachsen", cardText: "Messe, Transport & Gewerbe", localProfile: "Hannover liegt verkehrsgünstig in Niedersachsen und ist durch Messe, Großhandel und regionale Logistik für Nutzfahrzeuge relevant.", nearbyCities: ["Laatzen", "Langenhagen", "Hildesheim", "Celle"], showInNavigation: true },
    { slug: "nuernberg", name: "Nürnberg", state: "Bayern", cardText: "Franken & Transportachsen", localProfile: "Nürnberg ist ein zentraler Gewerbe- und Logistikstandort in Franken mit starker Anbindung an süddeutsche Transportachsen.", nearbyCities: ["Fürth", "Erlangen", "Schwabach", "Ansbach"], showInNavigation: true },
    { slug: "duisburg", name: "Duisburg", state: "Nordrhein-Westfalen", cardText: "Binnenhafen & Schwerlastlogistik", localProfile: "Duisburg ist durch Binnenhafen, Stahl, Industrie und Logistik ein besonders relevanter Standort für LKW und Auflieger.", nearbyCities: ["Moers", "Oberhausen", "Dinslaken", "Krefeld"], showInNavigation: true },
    { slug: "bochum", name: "Bochum", state: "Nordrhein-Westfalen", cardText: "Ruhrgebiet & Gewerbe", localProfile: "Bochum liegt mitten im Ruhrgebiet und ist durch Handel, Handwerk, Logistik und Gewerbe ein wichtiger Nutzfahrzeugstandort.", nearbyCities: ["Dortmund", "Essen", "Herne", "Witten"], showInNavigation: true },
    { slug: "luebeck", name: "Lübeck", state: "Schleswig-Holstein", cardText: "Ostsee, Hafen & Gewerbe", localProfile: "Lübeck ist als Hafenstadt und Verkehrsknoten im Norden ein relevanter Standort für Transport, Handel und gewerbliche Fahrzeuge.", nearbyCities: ["Bad Oldesloe", "Eutin", "Ratzeburg", "Reinfeld"], showInNavigation: true },
    { slug: "kiel", name: "Kiel", state: "Schleswig-Holstein", cardText: "Schleswig-Holstein & Hafen", localProfile: "Kiel ist Landeshauptstadt, Hafenstandort und Verkehrsknoten in Schleswig-Holstein. Gewerbliche Fuhrparks und Transporter spielen dort eine wichtige Rolle.", nearbyCities: ["Neumünster", "Rendsburg", "Eckernförde", "Plön"], showInNavigation: true },
    { slug: "rostock", name: "Rostock", state: "Mecklenburg-Vorpommern", cardText: "Hafen & Nordosten", localProfile: "Rostock ist durch Hafen, Ostseelogistik und Gewerbe ein wichtiger Standort für LKW, Auflieger und Nutzfahrzeuge im Nordosten.", nearbyCities: ["Bad Doberan", "Güstrow", "Stralsund", "Wismar"], showInNavigation: true },
    { slug: "schwerin", name: "Schwerin", state: "Mecklenburg-Vorpommern", cardText: "Mecklenburg-Vorpommern", localProfile: "Schwerin liegt zwischen Hamburg, Lübeck und Rostock und ist für regionale Transporte, Baugewerbe und Unternehmensfuhrparks relevant.", nearbyCities: ["Wismar", "Parchim", "Ludwigslust", "Güstrow"], showInNavigation: true },

    { slug: "mannheim", name: "Mannheim", state: "Baden-Württemberg", cardText: "Rhein-Neckar & Industrie", localProfile: "Mannheim ist mit Hafen, Industrie, Handel und Rhein-Neckar-Verkehr ein starker Standort für LKW und gewerbliche Fuhrparks.", nearbyCities: ["Ludwigshafen", "Heidelberg", "Worms", "Speyer"] },
    { slug: "karlsruhe", name: "Karlsruhe", state: "Baden-Württemberg", cardText: "Technologie & Logistik", localProfile: "Karlsruhe verbindet Technologie, Gewerbe, Handel und wichtige Verkehrsachsen Richtung Rhein, Pfalz und Südwestdeutschland.", nearbyCities: ["Pforzheim", "Rastatt", "Bruchsal", "Baden-Baden"] },
    { slug: "augsburg", name: "Augsburg", state: "Bayern", cardText: "Bayern & Gewerbeflotten", localProfile: "Augsburg ist ein Industrie- und Handelsstandort zwischen München und Ulm, mit vielen gewerblich genutzten LKW und Transportern.", nearbyCities: ["München", "Ingolstadt", "Ulm", "Landsberg am Lech"] },
    { slug: "wiesbaden", name: "Wiesbaden", state: "Hessen", cardText: "Rhein-Main & Gewerbe", localProfile: "Wiesbaden liegt in der Rhein-Main-Region und ist durch Gewerbe, Dienstleistungen und regionale Logistik mit Frankfurt und Mainz verbunden.", nearbyCities: ["Mainz", "Frankfurt", "Rüsselsheim", "Hofheim"] },
    { slug: "muenster", name: "Münster", state: "Nordrhein-Westfalen", cardText: "Westfalen & Transport", localProfile: "Münster ist ein zentraler Standort in Westfalen mit Handel, Baugewerbe, Landwirtschaftsbezug und regionalen Nutzfahrzeugen.", nearbyCities: ["Osnabrück", "Hamm", "Warendorf", "Greven"] },
    { slug: "aachen", name: "Aachen", state: "Nordrhein-Westfalen", cardText: "Grenzregion & Gewerbe", localProfile: "Aachen liegt in einer wirtschaftlich starken Grenzregion mit Verbindungen nach Belgien und in die Niederlande.", nearbyCities: ["Düren", "Eschweiler", "Stolberg", "Heinsberg"] },
    { slug: "braunschweig", name: "Braunschweig", state: "Niedersachsen", cardText: "Industrie & Niedersachsen", localProfile: "Braunschweig ist ein Industrie- und Forschungsstandort mit Gewerbe, Zulieferern und regionalem Transportbedarf.", nearbyCities: ["Wolfsburg", "Salzgitter", "Peine", "Wolfenbüttel"] },
    { slug: "chemnitz", name: "Chemnitz", state: "Sachsen", cardText: "Industrie & Maschinenbau", localProfile: "Chemnitz ist durch Maschinenbau, Gewerbe und Industrie im südlichen Sachsen ein relevanter Standort für Nutzfahrzeuge.", nearbyCities: ["Zwickau", "Freiberg", "Mittweida", "Annaberg-Buchholz"] },
    { slug: "halle", name: "Halle", state: "Sachsen-Anhalt", cardText: "Mitteldeutschland & Logistik", localProfile: "Halle liegt in der Logistikregion Mitteldeutschland und ist eng mit Leipzig, Gewerbeparks und Transportachsen verbunden.", nearbyCities: ["Leipzig", "Merseburg", "Dessau-Roßlau", "Bitterfeld-Wolfen"] },
    { slug: "magdeburg", name: "Magdeburg", state: "Sachsen-Anhalt", cardText: "Elbe, Gewerbe & Transport", localProfile: "Magdeburg ist Landeshauptstadt und Verkehrsknoten an der Elbe mit Gewerbe, Handel und regionalen Fuhrparks.", nearbyCities: ["Burg", "Schönebeck", "Helmstedt", "Stendal"] },
    { slug: "freiburg", name: "Freiburg", state: "Baden-Württemberg", cardText: "Südwesten & Gewerbe", localProfile: "Freiburg ist ein wichtiger Standort im Südwesten mit regionalem Handel, Handwerk, Bau und Transport Richtung Oberrhein.", nearbyCities: ["Offenburg", "Lörrach", "Emmendingen", "Villingen-Schwenningen"] },
    { slug: "mainz", name: "Mainz", state: "Rheinland-Pfalz", cardText: "Rhein-Main & Transport", localProfile: "Mainz liegt direkt an Rhein und Rhein-Main-Gebiet und ist durch Handel, Gewerbe und Verkehr nach Frankfurt und Wiesbaden geprägt.", nearbyCities: ["Wiesbaden", "Frankfurt", "Rüsselsheim", "Worms"] },
    { slug: "erfurt", name: "Erfurt", state: "Thüringen", cardText: "Thüringen & zentrale Lage", localProfile: "Erfurt liegt zentral in Thüringen und ist ein wichtiger Standort für Handel, Bau, Gewerbe und regionale Transportflotten.", nearbyCities: ["Weimar", "Gotha", "Jena", "Arnstadt"] },
    { slug: "saarbruecken", name: "Saarbrücken", state: "Saarland", cardText: "Saarland & Grenzverkehr", localProfile: "Saarbrücken ist zentraler Gewerbe- und Grenzstandort im Saarland mit Verbindungen nach Frankreich und Rheinland-Pfalz.", nearbyCities: ["Völklingen", "Homburg", "Neunkirchen", "Saarlouis"] },
    { slug: "potsdam", name: "Potsdam", state: "Brandenburg", cardText: "Brandenburg & Hauptstadtregion", localProfile: "Potsdam ist Teil der Hauptstadtregion und durch Dienstleister, Baugewerbe und regionale Flotten eng mit Berlin verbunden.", nearbyCities: ["Berlin", "Brandenburg an der Havel", "Werder", "Teltow"] },
    { slug: "oldenburg", name: "Oldenburg", state: "Niedersachsen", cardText: "Nordwesten & Gewerbe", localProfile: "Oldenburg ist ein starker Standort im Nordwesten mit Handel, Logistik, Handwerk und regionalen Nutzfahrzeugflotten.", nearbyCities: ["Bremen", "Wilhelmshaven", "Delmenhorst", "Cloppenburg"] },
    { slug: "osnabrueck", name: "Osnabrück", state: "Niedersachsen", cardText: "Westniedersachsen & Logistik", localProfile: "Osnabrück liegt an wichtigen Verkehrsachsen zwischen Münster, Bremen und Hannover und ist relevant für Speditionen und Gewerbe.", nearbyCities: ["Münster", "Bielefeld", "Rheine", "Bramsche"] },
    { slug: "bielefeld", name: "Bielefeld", state: "Nordrhein-Westfalen", cardText: "Ostwestfalen & Industrie", localProfile: "Bielefeld ist ein wichtiger Wirtschaftsstandort in Ostwestfalen mit Industrie, Handel, Handwerk und regionalem Transport.", nearbyCities: ["Gütersloh", "Herford", "Detmold", "Minden"] },
    { slug: "bonn", name: "Bonn", state: "Nordrhein-Westfalen", cardText: "Rheinland & Dienstleister", localProfile: "Bonn liegt im südlichen Rheinland und ist durch Dienstleister, Gewerbe und Nähe zu Köln für Nutzfahrzeug-Anfragen relevant.", nearbyCities: ["Köln", "Siegburg", "Troisdorf", "Koblenz"] },
    { slug: "wuppertal", name: "Wuppertal", state: "Nordrhein-Westfalen", cardText: "Bergisches Land & Gewerbe", localProfile: "Wuppertal ist durch Gewerbe, Handwerk und Industrie im Bergischen Land ein wichtiger Standort für Transporter und LKW.", nearbyCities: ["Solingen", "Remscheid", "Düsseldorf", "Essen"] },
    { slug: "kassel", name: "Kassel", state: "Hessen", cardText: "Nordhessen & Transport", localProfile: "Kassel liegt zentral in Deutschland und ist durch Logistik, Industrie und Transportachsen ein relevanter Nutzfahrzeugstandort.", nearbyCities: ["Göttingen", "Baunatal", "Eschwege", "Paderborn"] },
    { slug: "ulm", name: "Ulm", state: "Baden-Württemberg", cardText: "Donau, Industrie & Gewerbe", localProfile: "Ulm liegt zwischen Stuttgart, Augsburg und München und ist durch Industrie, Bau und Handel für Nutzfahrzeuge relevant.", nearbyCities: ["Neu-Ulm", "Biberach", "Heidenheim", "Augsburg"] },
    { slug: "regensburg", name: "Regensburg", state: "Bayern", cardText: "Ostbayern & Industrie", localProfile: "Regensburg ist ein starker Industriestandort in Ostbayern mit Zulieferern, Gewerbe und regionalem Transportverkehr.", nearbyCities: ["Straubing", "Ingolstadt", "Landshut", "Amberg"] },
    { slug: "ingolstadt", name: "Ingolstadt", state: "Bayern", cardText: "Automotive & Gewerbe", localProfile: "Ingolstadt ist durch Automobilindustrie, Zulieferer und Gewerbe ein wichtiger Standort für Flotten und Nutzfahrzeuge.", nearbyCities: ["München", "Regensburg", "Augsburg", "Eichstätt"] },
    { slug: "wolfsburg", name: "Wolfsburg", state: "Niedersachsen", cardText: "Automotive & Flotten", localProfile: "Wolfsburg ist ein prägender Automotive-Standort mit Zulieferern, Gewerbeflotten und Transportbedarf in der Region.", nearbyCities: ["Braunschweig", "Gifhorn", "Helmstedt", "Salzgitter"] },
    { slug: "goettingen", name: "Göttingen", state: "Niedersachsen", cardText: "Südniedersachsen", localProfile: "Göttingen liegt an wichtigen Nord-Süd-Verbindungen und ist für Gewerbe, Handel und regionale Transporter relevant.", nearbyCities: ["Kassel", "Northeim", "Einbeck", "Hildesheim"] },
    { slug: "flensburg", name: "Flensburg", state: "Schleswig-Holstein", cardText: "Grenzregion & Norden", localProfile: "Flensburg liegt an der dänischen Grenze und ist durch Grenzverkehr, Handel und regionale Gewerbeflotten geprägt.", nearbyCities: ["Schleswig", "Husum", "Kiel", "Rendsburg"] },
    { slug: "bremerhaven", name: "Bremerhaven", state: "Bremen", cardText: "Hafen & Fahrzeuglogistik", localProfile: "Bremerhaven ist durch Seehafen, Automobillogistik und Transportgewerbe ein besonders relevanter Standort für Nutzfahrzeuge.", nearbyCities: ["Bremen", "Cuxhaven", "Nordenham", "Oldenburg"] },
    { slug: "wilhelmshaven", name: "Wilhelmshaven", state: "Niedersachsen", cardText: "JadeWeserPort & Logistik", localProfile: "Wilhelmshaven ist Hafen- und Logistikstandort im Nordwesten mit gewerblichen Fahrzeugen, Bau und Transport.", nearbyCities: ["Oldenburg", "Bremerhaven", "Jever", "Varel"] },
    { slug: "neumuenster", name: "Neumünster", state: "Schleswig-Holstein", cardText: "Schleswig-Holstein & Logistik", localProfile: "Neumünster liegt zentral in Schleswig-Holstein und ist durch Gewerbe, Logistik und Verkehr zwischen Hamburg und Kiel relevant.", nearbyCities: ["Kiel", "Rendsburg", "Itzehoe", "Bad Segeberg"] },
    { slug: "norderstedt", name: "Norderstedt", state: "Schleswig-Holstein", cardText: "Hamburger Umland & Gewerbe", localProfile: "Norderstedt grenzt direkt an Hamburg und ist durch Gewerbegebiete, Handwerk und regionale Transporter eng mit dem Hamburger Markt verbunden.", nearbyCities: ["Hamburg", "Quickborn", "Kaltenkirchen", "Ahrensburg"] },
    { slug: "pinneberg", name: "Pinneberg", state: "Schleswig-Holstein", cardText: "Metropolregion Hamburg", localProfile: "Pinneberg liegt westlich von Hamburg und ist durch Pendlerverkehr, Gewerbe und regionale Logistik mit dem Hamburger Nutzfahrzeugmarkt verbunden.", nearbyCities: ["Hamburg", "Elmshorn", "Wedel", "Uetersen"] },
    { slug: "elmshorn", name: "Elmshorn", state: "Schleswig-Holstein", cardText: "Hamburg-West & Gewerbe", localProfile: "Elmshorn ist ein wichtiger Standort im westlichen Hamburger Umland mit Gewerbe, Handwerk und Transportverbindungen Richtung A23.", nearbyCities: ["Pinneberg", "Itzehoe", "Hamburg", "Uetersen"] },
    { slug: "stade", name: "Stade", state: "Niedersachsen", cardText: "Elbe, Industrie & Hamburg", localProfile: "Stade liegt an der Elbe und verbindet Industrie, Hafenbezug, Baugewerbe und Nähe zur Metropolregion Hamburg.", nearbyCities: ["Hamburg", "Buxtehude", "Cuxhaven", "Harsefeld"] },
    { slug: "lueneburg", name: "Lüneburg", state: "Niedersachsen", cardText: "Hamburger Umland & Heide", localProfile: "Lüneburg ist ein starker Gewerbe- und Pendlerstandort südlich von Hamburg mit regionalem Transport und Handwerk.", nearbyCities: ["Hamburg", "Winsen", "Uelzen", "Buchholz"] },
    { slug: "buxtehude", name: "Buxtehude", state: "Niedersachsen", cardText: "Süderelbe & Gewerbe", localProfile: "Buxtehude liegt im südwestlichen Hamburger Umland und ist durch Gewerbe, Bau und regionale Lieferverkehre geprägt.", nearbyCities: ["Hamburg", "Stade", "Neu Wulmstorf", "Jork"] },
    { slug: "ahrensburg", name: "Ahrensburg", state: "Schleswig-Holstein", cardText: "Hamburg-Ost & Gewerbe", localProfile: "Ahrensburg liegt nordöstlich von Hamburg und ist ein bedeutender Gewerbestandort mit vielen Handwerks- und Dienstleistungsflotten.", nearbyCities: ["Hamburg", "Bad Oldesloe", "Reinbek", "Norderstedt"] },
    { slug: "geesthacht", name: "Geesthacht", state: "Schleswig-Holstein", cardText: "Elbe & Hamburger Osten", localProfile: "Geesthacht liegt an der Elbe im Hamburger Osten und ist für Bau, Gewerbe und regionale Transporter relevant.", nearbyCities: ["Hamburg", "Lauenburg", "Reinbek", "Winsen"] },
    { slug: "winsen-luhe", name: "Winsen (Luhe)", state: "Niedersachsen", cardText: "Süderelbe & Logistik", localProfile: "Winsen (Luhe) liegt südöstlich von Hamburg und ist durch Logistik, Gewerbe und Anbindung an die A39 ein wichtiger Nutzfahrzeugstandort.", nearbyCities: ["Hamburg", "Lüneburg", "Seevetal", "Buchholz"] },
    { slug: "buchholz-in-der-nordheide", name: "Buchholz in der Nordheide", state: "Niedersachsen", cardText: "Nordheide & Hamburg-Süd", localProfile: "Buchholz in der Nordheide liegt im südlichen Hamburger Umland mit Gewerbe, Handwerk und regionalem Verteilerverkehr.", nearbyCities: ["Hamburg", "Seevetal", "Lüneburg", "Buxtehude"] },
    { slug: "wedel", name: "Wedel", state: "Schleswig-Holstein", cardText: "Elbe & Hamburg-West", localProfile: "Wedel liegt direkt an der Elbe im Hamburger Westen und ist für Gewerbe, Handwerk und regionale Transporter interessant.", nearbyCities: ["Hamburg", "Pinneberg", "Schenefeld", "Stade"] },
    { slug: "reinbek", name: "Reinbek", state: "Schleswig-Holstein", cardText: "Hamburg-Ost & Gewerbe", localProfile: "Reinbek liegt im östlichen Hamburger Umland und ist durch Gewerbegebiete, Handwerk und Lieferverkehr eng mit Hamburg verbunden.", nearbyCities: ["Hamburg", "Glinde", "Ahrensburg", "Geesthacht"] },
    { slug: "seevetal", name: "Seevetal", state: "Niedersachsen", cardText: "Logistik südlich von Hamburg", localProfile: "Seevetal liegt direkt südlich von Hamburg und ist durch Logistik, Gewerbeparks und Autobahnanbindung ein wichtiger Standort für Nutzfahrzeuge.", nearbyCities: ["Hamburg", "Winsen", "Buchholz", "Lüneburg"] },
    { slug: "itzehoe", name: "Itzehoe", state: "Schleswig-Holstein", cardText: "A23 & Schleswig-Holstein", localProfile: "Itzehoe liegt an der A23 und ist ein wichtiger regionaler Standort für Gewerbe, Bau und Transport zwischen Hamburg und Westküste.", nearbyCities: ["Elmshorn", "Neumünster", "Heide", "Pinneberg"] },
    { slug: "bad-oldesloe", name: "Bad Oldesloe", state: "Schleswig-Holstein", cardText: "Zwischen Hamburg und Lübeck", localProfile: "Bad Oldesloe liegt zwischen Hamburg und Lübeck und ist durch Gewerbe, Handwerk und regionale Verkehre gut für Nutzfahrzeug-Anfragen geeignet.", nearbyCities: ["Lübeck", "Hamburg", "Ahrensburg", "Reinfeld"] },
    { slug: "kaltenkirchen", name: "Kaltenkirchen", state: "Schleswig-Holstein", cardText: "A7 & Hamburger Norden", localProfile: "Kaltenkirchen liegt nördlich von Hamburg an der A7 und ist durch Gewerbegebiete, Handel und Transporterflotten geprägt.", nearbyCities: ["Norderstedt", "Quickborn", "Neumünster", "Hamburg"] },
    { slug: "henstedt-ulzburg", name: "Henstedt-Ulzburg", state: "Schleswig-Holstein", cardText: "Hamburger Norden & Gewerbe", localProfile: "Henstedt-Ulzburg ist ein wachsender Gewerbestandort im Norden Hamburgs mit Handwerk, Dienstleistern und regionalen Fahrzeugflotten.", nearbyCities: ["Norderstedt", "Kaltenkirchen", "Quickborn", "Bad Bramstedt"] },
    { slug: "quickborn", name: "Quickborn", state: "Schleswig-Holstein", cardText: "Hamburg-Nord & A7", localProfile: "Quickborn liegt nördlich von Hamburg und ist durch A7-Anbindung, Gewerbe und regionale Transporter für LKW-Anfragen relevant.", nearbyCities: ["Norderstedt", "Pinneberg", "Kaltenkirchen", "Hamburg"] },
    { slug: "uetersen", name: "Uetersen", state: "Schleswig-Holstein", cardText: "Pinneberg & Gewerbe", localProfile: "Uetersen liegt im Kreis Pinneberg und ist durch Gartenbau, Gewerbe und Nähe zu Hamburg ein sinnvoller regionaler Standort.", nearbyCities: ["Pinneberg", "Elmshorn", "Tornesch", "Wedel"] },
    { slug: "rendsburg", name: "Rendsburg", state: "Schleswig-Holstein", cardText: "Nord-Ostsee-Kanal & Transport", localProfile: "Rendsburg liegt zentral in Schleswig-Holstein am Nord-Ostsee-Kanal und ist für Transport, Bau und Gewerbe relevant.", nearbyCities: ["Kiel", "Neumünster", "Schleswig", "Eckernförde"] },
    { slug: "cuxhaven", name: "Cuxhaven", state: "Niedersachsen", cardText: "Nordsee, Hafen & Logistik", localProfile: "Cuxhaven ist Hafen- und Küstenstandort mit Gewerbe, Bau, Logistik und regionalen Nutzfahrzeugflotten.", nearbyCities: ["Bremerhaven", "Stade", "Hamburg", "Otterndorf"] },
    { slug: "soltau", name: "Soltau", state: "Niedersachsen", cardText: "Heide & Logistikachsen", localProfile: "Soltau liegt zwischen Hamburg, Hannover und Bremen und ist durch A7, Gewerbe und regionale Verkehre interessant.", nearbyCities: ["Walsrode", "Celle", "Lüneburg", "Hamburg"] },
];

const additionalCityGroups: Array<{ state: string; cardText: string; cities: string[] }> = [
    {
        state: "Baden-Württemberg",
        cardText: "Baden-Württemberg & Gewerbe",
        cities: [
            "Pforzheim", "Heilbronn", "Reutlingen", "Esslingen", "Ludwigsburg", "Tübingen", "Villingen-Schwenningen", "Konstanz", "Aalen", "Sindelfingen", "Schwäbisch Gmünd", "Offenburg", "Göppingen", "Baden-Baden", "Rastatt", "Böblingen", "Waiblingen", "Friedrichshafen", "Heidenheim", "Lörrach", "Ravensburg", "Singen", "Leonberg", "Fellbach", "Albstadt", "Bruchsal", "Weinheim", "Nürtingen", "Filderstadt", "Bietigheim-Bissingen", "Leinfelden-Echterdingen", "Ostfildern", "Crailsheim", "Backnang", "Kehl", "Ettlingen", "Rottenburg am Neckar", "Herrenberg", "Wertheim", "Mosbach", "Sinsheim", "Schwäbisch Hall", "Achern", "Gaggenau", "Waldshut-Tiengen", "Balingen", "Emmendingen", "Rottweil", "Tuttlingen", "Calw", "Freudenstadt",
        ],
    },
    {
        state: "Bayern",
        cardText: "Bayern & Nutzfahrzeuge",
        cities: [
            "Fürth", "Würzburg", "Erlangen", "Bamberg", "Bayreuth", "Landshut", "Aschaffenburg", "Kempten", "Rosenheim", "Neu-Ulm", "Schweinfurt", "Passau", "Freising", "Straubing", "Dachau", "Hof", "Memmingen", "Kaufbeuren", "Weiden in der Oberpfalz", "Amberg", "Ansbach", "Schwabach", "Germering", "Coburg", "Landsberg am Lech", "Starnberg", "Erding", "Deggendorf", "Kulmbach", "Marktoberdorf", "Donauwörth", "Günzburg", "Kitzingen", "Forchheim", "Bad Kissingen", "Lichtenfels", "Neumarkt in der Oberpfalz", "Pfaffenhofen an der Ilm", "Mühldorf am Inn", "Altötting", "Traunstein", "Bad Tölz", "Garmisch-Partenkirchen", "Weißenburg in Bayern", "Roth", "Lauf an der Pegnitz", "Herzogenaurach",
        ],
    },
    {
        state: "Brandenburg",
        cardText: "Brandenburg & Hauptstadtregion",
        cities: [
            "Cottbus", "Brandenburg an der Havel", "Frankfurt (Oder)", "Oranienburg", "Falkensee", "Eberswalde", "Bernau bei Berlin", "Königs Wusterhausen", "Fürstenwalde", "Neuruppin", "Schwedt", "Hennigsdorf", "Senftenberg", "Spremberg", "Ludwigsfelde", "Teltow", "Werder", "Prenzlau", "Rathenow", "Luckenwalde", "Eisenhüttenstadt", "Finsterwalde", "Lübbenau", "Lübben", "Pritzwalk", "Wittenberge", "Zossen", "Strausberg", "Wildau", "Nauen",
        ],
    },
    {
        state: "Hessen",
        cardText: "Hessen & Rhein-Main",
        cities: [
            "Darmstadt", "Offenbach", "Hanau", "Marburg", "Fulda", "Gießen", "Rüsselsheim", "Bad Homburg", "Wetzlar", "Oberursel", "Rodgau", "Dreieich", "Bensheim", "Maintal", "Hofheim", "Neu-Isenburg", "Langen", "Mörfelden-Walldorf", "Bad Vilbel", "Lampertheim", "Viernheim", "Dietzenbach", "Eschborn", "Heppenheim", "Korbach", "Limburg an der Lahn", "Friedberg", "Alsfeld", "Eschwege", "Bad Hersfeld", "Baunatal", "Homberg", "Nidderau", "Weiterstadt", "Groß-Gerau", "Seligenstadt",
        ],
    },
    {
        state: "Mecklenburg-Vorpommern",
        cardText: "Mecklenburg-Vorpommern & Gewerbe",
        cities: [
            "Neubrandenburg", "Stralsund", "Greifswald", "Wismar", "Güstrow", "Waren", "Parchim", "Ludwigslust", "Ribnitz-Damgarten", "Anklam", "Demmin", "Ueckermünde", "Bad Doberan", "Grimmen", "Teterow", "Malchin", "Neustrelitz", "Hagenow", "Boizenburg", "Grevesmühlen", "Sassnitz", "Wolgast", "Röbel", "Bergen auf Rügen",
        ],
    },
    {
        state: "Niedersachsen",
        cardText: "Niedersachsen & Logistik",
        cities: [
            "Salzgitter", "Hildesheim", "Delmenhorst", "Langenhagen", "Celle", "Garbsen", "Hameln", "Lingen", "Nordhorn", "Emden", "Wolfenbüttel", "Peine", "Wilhelmshaven", "Laatzen", "Seelze", "Wunstorf", "Hemmingen", "Lehrte", "Burgdorf", "Gifhorn", "Uelzen", "Verden", "Achim", "Syke", "Cloppenburg", "Vechta", "Meppen", "Papenburg", "Leer", "Aurich", "Wittmund", "Jever", "Varel", "Norden", "Nienburg", "Stadthagen", "Rinteln", "Holzminden", "Northeim", "Einbeck", "Osterode am Harz", "Duderstadt", "Rotenburg", "Walsrode", "Schneverdingen", "Munster", "Bergen", "Seesen", "Springe", "Sarstedt", "Barsinghausen", "Isernhagen", "Buchholz", "Neu Wulmstorf", "Winsen", "Tostedt", "Zeven", "Bremervörde", "Osterholz-Scharmbeck", "Stuhr", "Weyhe", "Nordenham",
        ],
    },
    {
        state: "Nordrhein-Westfalen",
        cardText: "NRW & Gewerbe",
        cities: [
            "Gelsenkirchen", "Mönchengladbach", "Krefeld", "Oberhausen", "Hagen", "Hamm", "Mülheim an der Ruhr", "Leverkusen", "Solingen", "Herne", "Neuss", "Paderborn", "Recklinghausen", "Bottrop", "Remscheid", "Moers", "Siegen", "Gütersloh", "Iserlohn", "Düren", "Ratingen", "Marl", "Lünen", "Velbert", "Minden", "Gladbeck", "Arnsberg", "Viersen", "Rheine", "Lüdenscheid", "Troisdorf", "Castrop-Rauxel", "Bocholt", "Kerpen", "Herford", "Bergisch Gladbach", "Dormagen", "Lippstadt", "Grevenbroich", "Willich", "Herten", "Unna", "Wesel", "Euskirchen", "Langenfeld", "Hürth", "Hattingen", "Pulheim", "Ahlen", "Meerbusch", "Bad Salzuflen", "Ibbenbüren", "Soest", "Detmold", "Schwerte", "Porta Westfalica", "Witten", "Erftstadt", "Sankt Augustin", "Bergheim", "Bornheim", "Frechen", "Kleve", "Warendorf", "Coesfeld", "Ahaus", "Borken", "Dülmen", "Greven", "Hilden", "Monheim am Rhein", "Rheda-Wiedenbrück", "Oelde", "Gevelsberg", "Ennepetal", "Wermelskirchen", "Gummersbach", "Wiehl", "Olpe", "Meschede", "Brilon", "Höxter", "Lemgo", "Bünde",
        ],
    },
    {
        state: "Rheinland-Pfalz",
        cardText: "Rheinland-Pfalz & Transport",
        cities: [
            "Ludwigshafen", "Koblenz", "Trier", "Kaiserslautern", "Worms", "Neuwied", "Speyer", "Bad Kreuznach", "Frankenthal", "Landau", "Pirmasens", "Zweibrücken", "Andernach", "Idar-Oberstein", "Bingen", "Ingelheim", "Mayen", "Germersheim", "Haßloch", "Wittlich", "Lahnstein", "Bad Neuenahr-Ahrweiler", "Alzey", "Kirn", "Bitburg", "Prüm", "Montabaur", "Diez", "Sinzig", "Remagen",
        ],
    },
    {
        state: "Saarland",
        cardText: "Saarland & Gewerbe",
        cities: [
            "Neunkirchen", "Homburg", "Völklingen", "Saarlouis", "Merzig", "St. Ingbert", "Dillingen", "Blieskastel", "St. Wendel", "Lebach", "Püttlingen", "Wadern", "Bexbach", "Sulzbach", "Ottweiler", "Illingen",
        ],
    },
    {
        state: "Sachsen",
        cardText: "Sachsen & Industrie",
        cities: [
            "Zwickau", "Plauen", "Görlitz", "Freiberg", "Bautzen", "Freital", "Pirna", "Radebeul", "Riesa", "Meißen", "Delitzsch", "Markkleeberg", "Wurzen", "Glauchau", "Limbach-Oberfrohna", "Annaberg-Buchholz", "Mittweida", "Döbeln", "Auerbach", "Reichenbach", "Kamenz", "Hoyerswerda", "Weißwasser", "Oschatz", "Torgau", "Sebnitz", "Zittau", "Grimma", "Crimmitschau", "Meerane",
        ],
    },
    {
        state: "Sachsen-Anhalt",
        cardText: "Sachsen-Anhalt & Mitteldeutschland",
        cities: [
            "Dessau-Roßlau", "Wittenberg", "Weißenfels", "Bitterfeld-Wolfen", "Merseburg", "Bernburg", "Halberstadt", "Stendal", "Zeitz", "Aschersleben", "Naumburg", "Sangerhausen", "Köthen", "Quedlinburg", "Burg", "Schönebeck", "Haldensleben", "Wernigerode", "Staßfurt", "Salzwedel", "Eisleben", "Oschersleben", "Gardelegen", "Genthin",
        ],
    },
    {
        state: "Schleswig-Holstein",
        cardText: "Schleswig-Holstein & Gewerbe",
        cities: [
            "Schleswig", "Husum", "Heide", "Eutin", "Eckernförde", "Plön", "Ratzeburg", "Reinfeld", "Glinde", "Tornesch", "Bad Segeberg", "Bad Bramstedt", "Ellerau", "Schenefeld", "Harrislee", "Kappeln", "Preetz", "Mölln", "Lauenburg", "Trittau", "Bargteheide", "Stockelsdorf", "Ratekau", "Eutin", "Heiligenhafen", "Fehmarn", "Neustadt in Holstein", "Kellinghusen", "Brunsbüttel", "Meldorf", "Büsum", "Niebüll", "Leck",
        ],
    },
    {
        state: "Thüringen",
        cardText: "Thüringen & zentrale Lage",
        cities: [
            "Jena", "Gera", "Weimar", "Gotha", "Eisenach", "Nordhausen", "Suhl", "Altenburg", "Mühlhausen", "Saalfeld", "Ilmenau", "Arnstadt", "Sonneberg", "Meiningen", "Greiz", "Apolda", "Sömmerda", "Rudolstadt", "Bad Salzungen", "Schmalkalden", "Pößneck", "Zeulenroda-Triebes", "Eisenberg", "Leinefelde-Worbis", "Bad Langensalza", "Hildburghausen",
        ],
    },
];

const topCitySeoProfiles: Record<string, TopCitySeoProfile> = {
    hamburg: {
        localFocus: "In Hamburg spielen Hafenlogistik, Containerverkehr, Speditionen, Gewerbegebiete und Fuhrparks eine besonders große Rolle. Für Unternehmen mit LKW, Aufliegern und Nutzfahrzeugen ist deshalb eine schnelle, direkte Abwicklung wichtig.",
        transportSignals: ["Hafen Hamburg", "A1 / A7 / A24", "Containerlogistik", "Speditionen", "Gewerbegebiete"],
    },
    berlin: {
        localFocus: "Berlin und die Hauptstadtregion verbinden Lieferverkehr, Baugewerbe, Serviceflotten, Händler und große Unternehmensfuhrparks. Wir kaufen Nutzfahrzeuge aus Berlin und dem Umland direkt an.",
        transportSignals: ["Hauptstadtregion", "A10 Berliner Ring", "Baugewerbe", "Serviceflotten", "Brandenburg-Umland"],
    },
    hannover: {
        localFocus: "Hannover liegt zentral in Niedersachsen und ist durch Messe, Großhandel, Logistikachsen und regionale Gewerbeflotten relevant für den LKW Ankauf.",
        transportSignals: ["A2 / A7", "Messestandort", "Großhandel", "Niedersachsen", "Logistikachsen"],
    },
    bremen: {
        localFocus: "Bremen ist durch Hafenwirtschaft, Industrie, Handel und Fahrzeuglogistik geprägt. LKW, Auflieger und Fuhrparks aus Bremen können direkt bei WAW angefragt werden.",
        transportSignals: ["Hafenwirtschaft", "A1 / A27", "Automobillogistik", "Handel", "Speditionen"],
    },
    luebeck: {
        localFocus: "Lübeck ist als Ostsee- und Hafenstandort ein wichtiger Verkehrsknoten für Handel, Transport und gewerbliche Nutzfahrzeuge in Schleswig-Holstein.",
        transportSignals: ["Ostseehafen", "A1 / A20", "Schleswig-Holstein", "Handel", "Gewerbe"],
    },
    kiel: {
        localFocus: "Kiel verbindet Hafen, Landeshauptstadt, Gewerbe und regionale Transportwege. WAW ist für LKW Ankauf und Nutzfahrzeuge Ankauf in Kiel und Umgebung erreichbar.",
        transportSignals: ["Hafen Kiel", "Landeshauptstadt", "A7 / B76", "Gewerbeflotten", "Schleswig-Holstein"],
    },
    rostock: {
        localFocus: "Rostock ist ein bedeutender Hafen- und Logistikstandort im Nordosten. Entsprechend relevant sind LKW, Auflieger, Transporter und Fuhrparks aus Gewerbe und Hafenwirtschaft.",
        transportSignals: ["Hafen Rostock", "A19 / A20", "Ostseelogistik", "Nordosten", "Gewerbe"],
    },
    schwerin: {
        localFocus: "Schwerin liegt zwischen Hamburg, Lübeck und Rostock und ist für regionale Transporte, Baugewerbe und Unternehmensfuhrparks in Mecklenburg-Vorpommern relevant.",
        transportSignals: ["Mecklenburg-Vorpommern", "A14 / A24", "Baugewerbe", "Regionalverkehr", "Fuhrparks"],
    },
    muenchen: {
        localFocus: "München und Südbayern stehen für starke Wirtschaft, Bau, Handel, Gewerbe und hochwertige Unternehmensflotten. Wir kaufen Fahrzeuge aus München und der Region direkt an.",
        transportSignals: ["Südbayern", "A8 / A9 / A99", "Wirtschaftsraum", "Baugewerbe", "Unternehmensflotten"],
    },
    frankfurt: {
        localFocus: "Frankfurt am Main ist durch Flughafen, Messe, Rhein-Main-Logistik und gewerbliche Fuhrparks ein starker Standort für Nutzfahrzeug-Anfragen.",
        transportSignals: ["Flughafen Frankfurt", "Rhein-Main", "A3 / A5", "Messe", "Logistik"],
    },
    koeln: {
        localFocus: "Köln liegt zentral im Rheinland und verbindet Messe, Handel, Transportachsen und gewerbliche Flotten. WAW kauft LKW und Nutzfahrzeuge aus Köln professionell an.",
        transportSignals: ["Rheinland", "A1 / A3 / A4", "Messe Köln", "Handel", "Transportachsen"],
    },
    duesseldorf: {
        localFocus: "Düsseldorf ist ein zentraler Standort in Rhein-Ruhr mit vielen Unternehmensflotten, Dienstleistern, Händlern und gewerblichen Fahrzeugbeständen.",
        transportSignals: ["Rhein-Ruhr", "A3 / A44 / A46", "Unternehmen", "Handel", "Gewerbe"],
    },
    dortmund: {
        localFocus: "Dortmund ist ein Logistikstandort im Ruhrgebiet mit Speditionen, Handel, Gewerbeparks und regionalen Nutzfahrzeugflotten.",
        transportSignals: ["Ruhrgebiet", "A1 / A2 / A45", "Logistik", "Gewerbeparks", "Speditionen"],
    },
    essen: {
        localFocus: "Essen liegt im Zentrum des Ruhrgebiets und ist durch Dienstleistung, Industrie, Gewerbe und Flottenfahrzeuge ein relevanter Markt für den Nutzfahrzeuge Ankauf.",
        transportSignals: ["Ruhrgebiet", "A40 / A52", "Industrie", "Dienstleister", "Fuhrparks"],
    },
    stuttgart: {
        localFocus: "Stuttgart und die Region Neckar sind durch Industrie, Automotive, Zulieferer und Handwerk geprägt. Das macht Nutzfahrzeuge und Transporter aus der Region besonders relevant.",
        transportSignals: ["Region Stuttgart", "A8 / A81", "Industrie", "Automotive", "Handwerk"],
    },
    leipzig: {
        localFocus: "Leipzig ist ein wachsender Wirtschafts- und Logistikstandort in Mitteldeutschland mit Güterverkehr, Handel, Gewerbeparks und Fuhrparks.",
        transportSignals: ["Mitteldeutschland", "A9 / A14 / A38", "Logistik", "Gewerbeparks", "Wachstumsregion"],
    },
    nuernberg: {
        localFocus: "Nürnberg liegt zentral in Franken und ist durch Industrie, Gewerbe, Messe und süddeutsche Transportachsen relevant für den LKW Ankauf.",
        transportSignals: ["Franken", "A3 / A6 / A9", "Messe", "Industrie", "Transportachsen"],
    },
};

const stateSlugOverrides: Record<string, string> = {
    "Baden-Württemberg": "baden-wuerttemberg",
    "Bayern": "bayern",
    "Berlin": "berlin",
    "Brandenburg": "brandenburg",
    "Bremen": "bremen",
    "Hamburg": "hamburg",
    "Hessen": "hessen",
    "Mecklenburg-Vorpommern": "mecklenburg-vorpommern",
    "Niedersachsen": "niedersachsen",
    "Nordrhein-Westfalen": "nordrhein-westfalen",
    "Rheinland-Pfalz": "rheinland-pfalz",
    "Saarland": "saarland",
    "Sachsen": "sachsen",
    "Sachsen-Anhalt": "sachsen-anhalt",
    "Schleswig-Holstein": "schleswig-holstein",
    "Thüringen": "thueringen",
};

function createSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/&/g, "und")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function createStateSlug(state: string): string {
    return stateSlugOverrides[state] || createSlug(state);
}

function createAdditionalCitySeed(name: string, state: string, cardText: string): CitySeed {
    return {
        slug: createSlug(name),
        name,
        state,
        cardText,
        localProfile: `${name} liegt in ${state} und ist durch Gewerbe, Handwerk, Bau, Handel und regionale Transportwege ein relevanter Ort für Nutzfahrzeug-Anfragen.`,
    };
}

const allCitySeeds: CitySeed[] = [
    ...citySeeds,
    ...additionalCityGroups.flatMap((group) =>
        group.cities.map((name) => createAdditionalCitySeed(name, group.state, group.cardText))
    ),
].filter((seed, index, seeds) => seeds.findIndex((entry) => entry.slug === seed.slug) === index);

const homepageCitySlugs = new Set([
    "hamburg",
    "berlin",
    "hannover",
    "luebeck",
    "bremen",
    "kiel",
    "schwerin",
    "rostock",
    "muenchen",
    "frankfurt",
    "koeln",
]);

function createCity(seed: CitySeed): City {
    const baseName = seed.name;
    const nearby = seed.nearbyCities || [];
    const nearbyText = nearby.length > 0 ? ` Auch im Umfeld von ${nearby.join(", ")} können Fahrzeuge angefragt werden.` : "";
    const seoProfile = topCitySeoProfiles[seed.slug];
    const localFocus = seoProfile?.localFocus || `${baseName} ist für regionale Unternehmen, Händler, Speditionen, Handwerk und Fuhrparks ein relevanter Standort für den Verkauf von LKW und Nutzfahrzeugen. Wir kaufen Fahrzeuge aus ${baseName} und ${seed.state} direkt an.`;
    const transportSignals = seoProfile?.transportSignals || [seed.state, seed.cardText, "Gewerbe", "Transportwege", "Fuhrparks"];
    const searchTerms = [
        `LKW Ankauf ${baseName}`,
        `LKW verkaufen ${baseName}`,
        `LKW Export ${baseName}`,
        `LKW Händler ${baseName}`,
        `gebrauchte LKW verkaufen ${baseName}`,
        `Nutzfahrzeuge Ankauf ${baseName}`,
        `Nutzfahrzeuge verkaufen ${baseName}`,
        `Auflieger Ankauf ${baseName}`,
        `Auflieger verkaufen ${baseName}`,
        `Anhänger Ankauf ${baseName}`,
        `Anhänger verkaufen ${baseName}`,
        `Sattelzugmaschine verkaufen ${baseName}`,
        `Transporter Ankauf ${baseName}`,
        `Transporter verkaufen ${baseName}`,
        `Baumaschinen Ankauf ${baseName}`,
        `Baumaschinen verkaufen ${baseName}`,
        `Fuhrpark Ankauf ${baseName}`,
        `Fuhrpark verkaufen ${baseName}`,
        `defekten LKW verkaufen ${baseName}`,
        `LKW ohne TÜV verkaufen ${baseName}`,
        `LKW mit Motorschaden verkaufen ${baseName}`,
    ];

    return {
        slug: seed.slug,
        name: baseName,
        state: seed.state,
        cardText: seed.cardText,
        featured: homepageCitySlugs.has(seed.slug),
        showInNavigation: Boolean(seed.showInNavigation),
        localProfile: seed.localProfile,
        localFocus,
        transportSignals,
        nearbyCities: nearby,
        heroTitle: `LKW verkaufen in ${baseName}`,
        metaTitle: `LKW verkaufen ${baseName} | Nutzfahrzeuge Ankauf WAW`,
        metaDescription: `LKW in ${baseName} verkaufen? WAW kauft Nutzfahrzeuge, Auflieger, Anhänger, Transporter, Baumaschinen und Fuhrparks direkt an.`,
        intro: `${seed.localProfile} Unternehmen, Händler, Speditionen und Fuhrparks können LKW, Nutzfahrzeuge, Auflieger, Anhänger, Transporter, Baumaschinen und komplette Fahrzeugbestände aus ${baseName} anbieten. Auch ältere Fahrzeuge, hohe Laufleistungen oder Schäden sind möglich.`,
        sectionTitle: `Nutzfahrzeuge in ${baseName} professionell verkaufen`,
        sectionText: `Für Unternehmen, Händler und Fuhrparks in ${baseName} und ${seed.state} zählt eine direkte Abstimmung. Fahrzeugdaten, Zustand, Unterlagen und Standort besprechen wir persönlich, damit der Verkauf von gebrauchten Nutzfahrzeugen, Export-LKW, Aufliegern, Anhängern, Baumaschinen oder Fuhrparks nachvollziehbar abgestimmt werden kann.${nearbyText}`,
        faq: [
            {
                question: `Kauft WAW LKW in ${baseName} an?`,
                answer: `Ja, wir kaufen LKW, Sattelzugmaschinen, Auflieger, Anhänger, Transporter und Baumaschinen in ${baseName} und Umgebung an.`,
            },
            {
                question: `Welche Fahrzeuge können in ${baseName} angeboten werden?`,
                answer: `Angefragt werden können einzelne LKW, Nutzfahrzeuge, Auflieger, Anhänger, Transporter, Baumaschinen sowie komplette Fuhrparks oder gemischte Fahrzeugpakete.`,
            },
            {
                question: `Ist der Ankauf auch im Umfeld von ${baseName} möglich?`,
                answer: nearby.length > 0
                    ? `Ja. Neben ${baseName} können auch Fahrzeuge aus der Umgebung wie ${nearby.join(", ")} und weiteren Orten angefragt werden.`
                    : `Ja. Wir sind deutschland- und europaweit tätig und kaufen auch Fahrzeuge aus umliegenden Städten und Regionen an.`,
            },
            {
                question: `Wie läuft der LKW Verkauf in ${baseName} ab?`,
                answer: `Sie senden Fahrzeugdaten, Standort und Fotos. Wir melden uns schnellstmöglich zur Abstimmung von Angebot, Übergabe und möglicher Abholung.`,
            },
            {
                question: `Kann ich in ${baseName} auch einen defekten LKW oder ein Fahrzeug ohne TÜV anbieten?`,
                answer: `Ja. TÜV spielt für uns im Einkauf keine Rolle, da wir über einen großen Exportmarkt verfügen, in den wir Fahrzeuge weiterverkaufen können. Auch LKW mit hoher Laufleistung, Motorschaden oder Getriebeschaden können Sie direkt anbieten.`,
            },
            {
                question: `Ist WAW auch für LKW Export und Händler-Anfragen in ${baseName} relevant?`,
                answer: `Ja. Wir sind Ansprechpartner für LKW Ankauf, Nutzfahrzeuge Ankauf, Händler-Anfragen, Export-Fahrzeuge und Fuhrparks in ${baseName} sowie deutschland- und europaweit.`,
            },
        ],
        keywords: searchTerms.slice(0, 10),
        searchTerms,
    };
}

export const cities: City[] = allCitySeeds.map(createCity);

export const featuredCities = cities.filter((city) => city.featured);

export const navigationCities = cities.filter((city) => city.showInNavigation);

export const stateGroups = Object.values(
    cities.reduce<Record<string, { name: string; slug: string; cities: City[] }>>((groups, city) => {
        const key = city.state;
        if (!groups[key]) {
            groups[key] = {
                name: key,
                slug: createStateSlug(key),
                cities: [],
            };
        }

        groups[key].cities.push(city);
        return groups;
    }, {})
).sort((a, b) => a.name.localeCompare(b.name, "de"));

export const cityAliasRoutes = [
    "lkw-zu-verkaufen",
    "lkw-ankauf",
    "nutzfahrzeuge-verkaufen",
    "nutzfahrzeuge-ankauf",
    "nutzfahrzeug-verkaufen",
    "nutzfahrzeug-ankauf",
    "auflieger-verkaufen",
    "auflieger-ankauf",
    "anhaenger-verkaufen",
    "anhaenger-ankauf",
    "sattelzugmaschine-verkaufen",
    "sattelzugmaschinen-ankauf",
    "transporter-verkaufen",
    "transporter-ankauf",
    "baumaschinen-verkaufen",
    "baumaschinen-ankauf",
    "fuhrpark-verkaufen",
    "fuhrpark-ankauf",
    "lkw-export",
    "lkw-haendler",
    "gebrauchte-lkw-verkaufen",
    "defekten-lkw-verkaufen",
    "lkw-ohne-tuev-verkaufen",
    "lkw-mit-motorschaden-verkaufen",
];
