import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createServer } from "vite";

let server;
let POST;
let requests;
let responses;
const originalFetch = globalThis.fetch;
const accepted = () => new Response(JSON.stringify({ id: "test-mail" }), { status: 200 });
const rejected = () => new Response(JSON.stringify({ name: "validation_error", message: "Rejected by test provider" }), { status: 422 });

before(async () => {
  server = await createServer({
    configFile: false,
    envFile: false,
    server: { middlewareMode: true },
    define: {
      "import.meta.env.RESEND_API_KEY": JSON.stringify("re_test_not_a_real_key"),
      "import.meta.env.CONTACT_TO_EMAIL": JSON.stringify("leads@example.test"),
      "import.meta.env.CONTACT_FROM_EMAIL": JSON.stringify("website@example.test"),
    },
  });
  ({ POST } = await server.ssrLoadModule("/src/pages/api/contact.ts"));
  globalThis.fetch = async (input, options) => {
    assert.equal(String(input), "https://api.resend.com/emails", "No real network calls are allowed");
    requests.push(JSON.parse(options.body));
    const respond = responses.shift();
    assert.ok(respond, "Unexpected mail request");
    return respond();
  };
});

after(async () => {
  globalThis.fetch = originalFetch;
  await server?.close();
});

let client = 0;
async function submit(changes = {}, mailResponses = [accepted]) {
  requests = [];
  responses = [...mailResponses];
  const response = await POST({
    request: new Request("https://example.test/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", "x-forwarded-for": `test-${client++}` },
      body: JSON.stringify({ name: "Test Verkäufer", phone: "+49 4156 8203739", formStartedAt: Date.now() - 5000, ...changes }),
    }),
  });
  return { status: response.status, body: await response.json() };
}

test("name and phone suffice; vehicle location and damage reach the lead", async () => {
  const result = await submit({ location: "Hamburg", condition: "Nicht fahrbereit" });
  assert.equal(result.status, 200);
  assert.equal(result.body.redirectTo, "/danke");
  assert.equal(requests.length, 1);
  assert.match(requests[0].text, /Fahrzeugstandort: Hamburg/);
  assert.match(requests[0].text, /Nicht fahrbereit/);
});

test("provider rejection never returns success or sends a confirmation", async () => {
  const result = await submit({ email: "seller@example.test" }, [rejected]);
  assert.equal(result.status, 500);
  assert.equal(result.body.success, false);
  assert.equal(requests.length, 1);
});

test("a failed confirmation does not turn an accepted lead into a failed inquiry", async () => {
  const result = await submit({ email: "seller@example.test" }, [accepted, rejected]);
  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(requests.length, 2);
});

test("French confirmation, redirect and validation use the submitted locale", async () => {
  let result = await submit({ locale: "fr", email: "seller@example.test" }, [accepted, accepted]);
  assert.equal(result.body.redirectTo, "/fr/danke");
  assert.match(requests[1].text, /Bonjour/);
  result = await submit({ locale: "fr", phone: "x", email: "invalid" }, []);
  assert.equal(result.status, 400);
  assert.match(result.body.errors.phone, /téléphone/);
  assert.match(result.body.errors.email, /e-mail/);
  assert.equal(requests.length, 0);
});

test("network failure on confirmation preserves accepted lead; lead failure does not", async () => {
  const fail = () => { throw new Error("Offline test"); };
  let result = await submit({ locale: "en", email: "seller@example.test" }, [accepted, fail]);
  assert.equal(result.body.success, true);
  assert.equal(result.body.redirectTo, "/en/danke");
  result = await submit({}, [fail]);
  assert.equal(result.status, 500);
  assert.equal(result.body.success, false);
});

test("missing required details and optional invalid email fail without sending mail", async () => {
  const result = await submit({ name: "", phone: "", email: "invalid" }, []);
  assert.equal(result.status, 400);
  assert.deepEqual(Object.keys(result.body.errors).sort(), ["email", "name", "phone"]);
  assert.equal(requests.length, 0);
});
