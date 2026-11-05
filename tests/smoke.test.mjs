import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("web app shell declares manifest, stylesheet and module entrypoint", async () => {
  const html = await read("../index.html");
  assert.match(html, /rel="manifest"/);
  assert.match(html, /href="\.\/styles\.css"/);
  assert.match(html, /type="module" src="\.\/app\.js"/);
});

test("core workspace views and accessible status region exist", async () => {
  const html = await read("../index.html");
  for (const id of ["overview", "documents", "tasks", "toast", "entryForm"]) {
    assert.ok(html.includes(`id="${id}"`), `Missing required element: ${id}`);
  }
  assert.match(html, /aria-live="polite"/);
});

test("application implements local persistence and backup flows", async () => {
  const js = await read("../app.js");
  assert.match(js, /indexedDB\.open/);
  assert.match(js, /\["documents","tasks"\]/);
  assert.match(js, /exportBtn/);
  assert.match(js, /importInput/);
});

test("PWA manifest is valid and has an app icon", async () => {
  const manifest = JSON.parse(await read("../manifest.webmanifest"));
  assert.equal(manifest.name, "PocketOps — Your life, in order");
  assert.equal(manifest.display, "standalone");
  assert.ok(manifest.icons.some((icon) => icon.src === "./assets/icon.svg"));
});

test("offline worker precaches the application shell", async () => {
  const sw = await read("../sw.js");
  for (const asset of ["./index.html", "./styles.css", "./app.js", "./manifest.webmanifest"]) {
    assert.ok(sw.includes(asset), `Service worker does not precache ${asset}`);
  }
});

test("backup format preserves attachments and validates imported records", async () => {
  const js = await read("../app.js");
  assert.match(js, /version:2/);
  assert.match(js, /blobToDataURL/);
  assert.match(js, /dataURLToBlob/);
  assert.match(js, /50\*1024\*1024/);
  assert.match(js, /Invalid document record/);
  assert.match(js, /Invalid task record/);
});
