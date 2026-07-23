import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the elevator company holding page with direct phone links", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="uk">/i);
  assert.match(html, /<title>РЕМБУД МОНТАЖ ЛІФТ — сайт у розробці<\/title>/i);
  assert.match(html, /Сайт у розробці/);
  assert.match(html, /href="tel:\+380674560292"/);
  assert.match(html, /href="tel:\+380674305971"/);
  assert.match(html, /\+380 \(67\) 456 02 92/);
  assert.match(html, /\+380 \(67\) 430 59 71/);
  assert.match(html, /Цілодобово/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Building your site/);
});
