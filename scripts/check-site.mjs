import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { cities, indexableCitySlugs, cityAliasRoutes, stateGroups } from "../src/data/cities.ts";
import { routeMap, getLocalizedEquivalentPath } from "../src/data/i18n.ts";

const root = new URL("../dist/client/", import.meta.url);
const readPage = (path) => readFile(new URL(`${path.replace(/^\//, "")}${path === "/" ? "" : "/"}index.html`, root), "utf8");
const pages = Object.values(routeMap).flatMap((translations) => Object.entries(translations));
pages.push(["de", "/danke"], ["en", "/en/danke"], ["fr", "/fr/danke"], ["de", "/standorte/bayern"], ["en", "/en/locations/bayern"], ["fr", "/fr/implantations/bayern"]);

for (const [locale, path] of pages) {
  const html = await readPage(path);
  assert.match(html, new RegExp(`<html[^>]+lang="${locale}"`), path);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: exactly one H1`);
  assert.match(html, new RegExp(`<link[^>]+rel="canonical"[^>]+href="https://www\\.wawnutzfahrzeuge\\.de${path === "/" ? "/" : path}"`), `${path}: canonical`);
  assert.ok(!html.includes('href=""'), `${path}: empty link`);
  assert.doesNotMatch(
    html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " "),
    /deutschland- und europaweit|Deutschland (?:&amp;|&|und) Europa|Germany (?:and|&amp;|&) Europe|Allemagne (?:et|comme) en Europe|Allemagne et l'Europe|Allemagne et Europe/i,
    `${path}: outdated geographic scope`,
  );
  if (path.includes("danke")) {
    assert.ok(!html.includes('hreflang="en"'), `${path}: unrelated hreflang`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const schema = JSON.parse(match[1]);
    if (schema["@type"] === "AutoDealer") {
      assert.ok(schema.areaServed.some((area) => area.name === "Worldwide"), `${path}: worldwide service area`);
      assert.equal(schema.contactPoint[0].areaServed, "Worldwide", `${path}: worldwide contact scope`);
    }
    if (schema["@type"] === "FAQPage") {
      for (const item of schema.mainEntity) {
        assert.ok(html.includes(item.name), `${path}: FAQ schema question missing from visible content`);
        assert.ok(html.includes(item.acceptedAnswer.text), `${path}: FAQ schema answer missing from visible content`);
      }
    }
  }
}

for (const path of ["/", "/en", "/fr", "/kontakt", "/en/contact", "/fr/contact"]) {
  const html = await readPage(path);
  const form = html.match(/<form[\s\S]*?<\/form>/)?.[0];
  assert.ok(form, `${path}: shared contact form`);
  const requiredNames = [...form.matchAll(/<input\b[^>]*>/g)]
    .map(([input]) => input)
    .filter((input) => /\brequired(?:\s|>|=)/.test(input))
    .map((input) => input.match(/\bname="([^"]+)"/)?.[1]);
  assert.deepEqual(requiredNames.sort(), ["name", "phone"], `${path}: only first-contact essentials required`);
}

const homeHtml = await readPage("/");
const germanReviewTexts = [...homeHtml.matchAll(/<p\b[^>]*lang="de"[^>]*>([^<]+)<\/p>/g)].map(([, text]) => text);
assert.equal(germanReviewTexts.length, 27, "German review originals preserved");
for (const [locale, path, notice] of [
  ["en", "/en", "Translated from German"],
  ["fr", "/fr", "Traduit de l&#39;allemand"],
]) {
  const html = await readPage(path);
  const cards = [...html.matchAll(/<article class="review-card"[\s\S]*?<\/article>/g)].map(([card]) => card);
  assert.equal(cards.length, 27, `${path}: all nine reviews in each slider set`);
  for (const card of cards) {
    assert.match(card, new RegExp(`<p\\b[^>]*lang="${locale}"[^>]*>`), `${path}: localized review body`);
    assert.ok(card.includes(notice) || card.includes(notice.replace("&#39;", "'")), `${path}: translation disclosed`);
    assert.doesNotMatch(card, /Rezensionen?|vor 3 Jahren/, `${path}: localized review metadata`);
    assert.ok(!germanReviewTexts.some((text) => card.includes(text)), `${path}: review text translated`);
  }
}
const mainContent = (html) => {
  const content = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert.ok(content, "page has main content");
  return content;
};
const structure = (html) => [...mainContent(html).matchAll(/<\/?([a-z][a-z0-9-]*)(?:\s[^>]*?)?>/g)]
  .map((match) => `${match[0].startsWith("</") ? "/" : ""}${match[1]}`);
const images = (html) => [...mainContent(html).matchAll(/<(?:img|source)\b[^>]*>/g)]
  .map(([tag]) => tag.match(/\b(?:src|srcset)="([^"]+)"/)?.[1]);
for (const key of ["home", "about", "services", "process", "vehicles", "locations", "contact", "legalNotice", "privacy", "terms"]) {
  const translations = routeMap[key];
  const german = await readPage(translations.de);
  for (const locale of ["en", "fr"]) {
    const path = translations[locale];
    const html = await readPage(path);
    assert.deepEqual(structure(html), structure(german), `${path}: shared markup structure`);
    assert.deepEqual(images(html), images(german), `${path}: same images and responsive sources`);
    assert.doesNotMatch(html, /<details\b[^>]*\bopen(?:\s|=|>)/, `${path}: FAQs start closed`);
  }
}
for (const germanPath of ["/lkw-verkaufen/hamburg", "/lkw-verkaufen/berlin", `/lkw-verkaufen/${cities.find((city) => !indexableCitySlugs.has(city.slug)).slug}`, "/standorte/bayern"]) {
  const german = await readPage(germanPath);
  for (const locale of ["en", "fr"]) {
    const path = getLocalizedEquivalentPath(germanPath, locale);
    const html = await readPage(path);
    assert.deepEqual(structure(html), structure(german), `${path}: shared regional structure`);
    assert.deepEqual(images(html), images(german), `${path}: same regional images`);
    assert.ok(html.includes(`value="${getLocalizedEquivalentPath(path, "de")}"`), `${path}: switch back to equivalent German page`);
  }
}
const mobileCityFiles = await readdir(new URL("../src/assets/cities/mobile/", import.meta.url));
for (const filename of mobileCityFiles.filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))) {
  const name = filename.replace(/(?:_mobile)?\.(jpg|jpeg|png|webp)$/i, "").toLowerCase();
  const city = cities.find((entry) => entry.name.toLowerCase() === name || entry.slug.toLowerCase() === name);
  assert.ok(city, `${filename}: matching city`);
  const html = await readPage(`/lkw-verkaufen/${city.slug}`);
  const picture = html.match(/<picture class="city-hero-background"[\s\S]*?<\/picture>/)?.[0];
  assert.ok(picture, `${filename}: responsive city background`);
  assert.match(picture, /<source[^>]+media="\(max-width: 850px\)"[^>]+srcset="[^"]+"/, `${filename}: mobile hero configured`);
  assert.doesNotMatch(picture, /hero-yard-sunset/, `${filename}: city photo instead of generic truck`);
}
for (const path of ["/standorte", ...stateGroups.map((state) => `/standorte/${state.slug}`), ...cities.map((city) => `/lkw-verkaufen/${city.slug}`)]) {
  const html = await readPage(path);
  for (const id of ["ablauf", "fahrzeugarten"]) {
    assert.equal((html.match(new RegExp(`\\bid="${id}"`, "g")) || []).length, 1, `${path}: exactly one ${id} section`);
  }
  assert.ok(html.includes('id="process-title"'), `${path}: shared purchase process`);
  assert.ok(html.includes('id="vehicles-title"'), `${path}: shared vehicle types`);
}
const homeMain = homeHtml.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
assert.ok(homeMain, "homepage main content");
for (const [, href] of homeMain.matchAll(/href="((?:\/[^"]*)?#[^"]+)"/g)) {
  const [path, fragment] = href.split("#");
  const targetHtml = path ? await readPage(path) : homeHtml;
  assert.ok(targetHtml.includes(`id="${fragment}"`), `homepage link ${href}: missing anchor target`);
}

for (const path of ["/en/services", "/fr/services"]) {
  const html = await readPage(path);
  for (const id of ["lkw", "nutzfahrzeuge", "sattelzugmaschinen", "auflieger", "anhaenger", "transporter", "baumaschinen", "fuhrpark"]) {
    assert.ok(html.includes(`id="${id}"`), `${path}#${id}: missing service target`);
  }
}

const sitemap = await readFile(new URL("sitemap-0.xml", root), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname.replace(/\/$/, "") || "/");
assert.equal(urls.length, new Set(urls).size, "duplicate sitemap entries");
assert.ok(!urls.some((path) => /\/danke$/.test(path)), "thank-you page in sitemap");
assert.ok(!urls.some((path) => cityAliasRoutes.some((prefix) => path.startsWith(`/${prefix}/`))), "alias in sitemap");
for (const city of cities) {
  const path = `/lkw-verkaufen/${city.slug}`;
  assert.equal(urls.includes(path), indexableCitySlugs.has(city.slug), `${path}: sitemap follows indexing policy`);
}
const genericCity = cities.find((city) => !indexableCitySlugs.has(city.slug));
for (const path of [`/lkw-verkaufen/${genericCity.slug}`, `/en/sell-trucks/${genericCity.slug}`, `/fr/vendre-camion/${genericCity.slug}`]) {
  assert.match(await readPage(path), /content="noindex,follow"/, `${path}: generic city page must not be indexed`);
}
assert.ok(!(await readPage("/lkw-verkaufen/hamburg")).includes('content="noindex,follow"'), "edited Hamburg page should remain indexable");
console.log(`Built-site checks passed: ${pages.length} main routes, localized service targets, forms, FAQ schema and ${cities.length} city sitemap decisions.`);
