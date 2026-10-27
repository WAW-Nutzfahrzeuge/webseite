import { readFile } from "node:fs/promises";

const documents = ["src/pages/impressum.astro", "src/pages/datenschutz.astro", "src/pages/agb.astro"];
let blocked = false;
for (const path of documents) {
  const content = await readFile(new URL(`../${path}`, import.meta.url), "utf8");
  if (content.includes("PLATZHALTER")) {
    console.error(`Vor Livegang ausfüllen und rechtlich prüfen: ${path}`);
    blocked = true;
  }
}
console.log("Zusätzlich vor Livegang bestätigen: Unternehmensdaten, Telefon/E-Mail, Öffnungszeiten, WhatsApp-Nummer, Bildrechte/-herkunft und Quellen der Kundenrezensionen.");
console.log("WhatsApp wird nur mit PUBLIC_WHATSAPP_NUMBER (internationale Ziffernfolge ohne +) angezeigt.");
console.log("Mailkonfiguration, Absenderdomain und echte Zustellung im Zielhosting prüfen. Dieser Check versendet keine E-Mails und führt kein Deployment aus.");
process.exitCode = blocked ? 1 : 0;
