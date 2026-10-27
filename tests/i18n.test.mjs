import assert from "node:assert/strict";
import { test } from "node:test";
import { getAlternates, getLocaleFromPath, getLocalizedEquivalentPath } from "../src/data/i18n.ts";

test("only equivalent routes receive hreflang, never unrelated homepage links", () => {
  assert.deepEqual(getAlternates("/standorte/bayern"), []);
  assert.deepEqual(getAlternates("/danke"), []);
  assert.deepEqual(getAlternates("/en/danke"), []);
  assert.equal(getLocalizedEquivalentPath("/kontakt", "fr"), "/fr/contact");
  assert.equal(getLocalizedEquivalentPath("/lkw-verkaufen/hamburg", "en"), "/en/sell-trucks/hamburg");
  assert.equal(getAlternates("/leistungen").length, 3);
  assert.equal(getLocaleFromPath("/fr/contact"), "fr");
});
