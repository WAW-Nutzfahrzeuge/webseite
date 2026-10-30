import assert from "node:assert/strict";
import { test } from "node:test";
import { getAlternates, getLocaleFromPath, getLocalizedEquivalentPath } from "../src/data/i18n.ts";

test("only equivalent routes receive hreflang, never unrelated homepage links", () => {
  assert.deepEqual(getAlternates("/standorte/bayern"), [
    { locale: "de", href: "/standorte/bayern" },
    { locale: "en", href: "/en/locations/bayern" },
    { locale: "fr", href: "/fr/implantations/bayern" },
  ]);
  assert.equal(getLocalizedEquivalentPath("/fr/implantations/bayern", "en"), "/en/locations/bayern");
  assert.deepEqual(getAlternates("/danke"), []);
  assert.deepEqual(getAlternates("/en/danke"), []);
  assert.equal(getLocalizedEquivalentPath("/kontakt", "fr"), "/fr/contact");
  assert.equal(getLocalizedEquivalentPath("/lkw-verkaufen/hamburg", "en"), "/en/sell-trucks/hamburg");
  assert.equal(getAlternates("/leistungen").length, 3);
  assert.equal(getLocaleFromPath("/fr/contact"), "fr");
});
