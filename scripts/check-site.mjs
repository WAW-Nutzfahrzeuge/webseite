import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { cities, indexableCitySlugs, cityAliasRoutes } from "../src/data/cities.ts";
import { routeMap } from "../src/data/i18n.ts";

const root = new URL("../dist/client/", import.meta.url);
const readPage = (path) => readFile(new URL(`${path.replace(/^\//, "")}${path === "/" ? "" : "/"}index.html`, root), "utf8");
const pages = Object.values(routeMap).flatMap((translations) => Object.entries(translations));
pages.push(["de", "/danke"], ["en", "/en/danke"], ["fr", "/fr/danke"], ["de", "/standorte/bayern"]);

for (const [locale, path] of pages) {
  const html = await readPage(path);
  assert.match(html, new RegExp(`<html[^>]+lang="${locale}"`), path);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: exactly one H1`);
  assert.match(html, new RegExp(`<link[^>]+rel="canonical"[^>]+href="https://www\\.wawnutzfahrzeuge\\.de${path === "/" ? "/" : path}"`), `${path}: canonical`);
  assert.ok(!html.includes('href=""'), `${path}: empty link`);
  if (path.includes("danke") || path.startsWith("/standorte/")) {
    assert.ok(!html.includes('hreflang="en"'), `${path}: unrelated hreflang`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const schema = JSON.parse(match[1]);
    if (schema["@type"] === "FAQPage") {
      for (const item of schema.mainEntity) {
        assert.ok(html.includes(item.name), `${path}: FAQ schema question missing from visible content`);
        assert.ok(html.includes(item.acceptedAnswer.text), `${path}: FAQ schema answer missing from visible content`);
      }
    }
  }
}

for (const path of ["/kontakt", "/en/contact", "/fr/contact"]) {
  const html = await readPage(path);
  const form = html.match(/<form[\s\S]*?<\/form>/)?.[0];
  assert.ok(form, `${path}: shared contact form`);
  const requiredNames = [...form.matchAll(/<input\b[^>]*>/g)]
    .map(([input]) => input)
    .filter((input) => /\brequired(?:\s|>|=)/.test(input))
    .map((input) => input.match(/\bname="([^"]+)"/)?.[1]);
  assert.deepEqual(requiredNames.sort(), ["name", "phone"], `${path}: only first-contact essentials required`);
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
