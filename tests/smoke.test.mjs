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
  assert.match(js, /restoreRecords/);
  assert.match(js, /tx\.onabort/);
});


test("branded illustration is referenced and cached for offline use", async () => {
  const html = await read("../index.html");
  const sw = await read("../sw.js");
  const css = await read("../styles.css");
  const illustration = await read("../assets/workspace-illustration.svg");
  assert.match(html, /workspace-illustration\.svg/);
  assert.match(sw, /workspace-illustration\.svg/);
  assert.match(illustration, /<svg/);
  assert.doesNotMatch(css, /@import\s+url\(['"]https?:/);
});


test("documents and tasks expose edit workflows and preserve existing records", async () => {
  const js = await read("../app.js");
  assert.match(js, /function modal\(kind,record=null\)/);
  assert.match(js, /data-edit-doc/);
  assert.match(js, /data-edit-task/);
  assert.match(js, /updatedAt:new Date\(\)\.toISOString\(\)/);
  assert.match(js, /old\?\.fileBlob/);
  assert.match(js, /done:old\?\.done\|\|false/);
});


test("overdue task summary and attachment preview controls are present", async () => { const js=await read("../app.js"); const html=await read("../index.html"); assert.match(js,/todayKey/); assert.match(js,/overdue-label/); assert.match(html,/statOverdue/); assert.match(js,/data-preview/); assert.match(js,/noopener noreferrer/); });


test("project changelog records current user-facing improvements", async () => { const log = await read("../CHANGELOG.md"); assert.match(log, /Unreleased/); assert.match(log, /overdue-task count/); });


test("English, Urdu and Arabic localization is loaded and supports RTL", async () => {
  const html = await read("../index.html");
  const app = await read("../app.js");
  const locale = await read("../i18n.js");
  const sw = await read("../sw.js");
  assert.match(html, /id="languageSelect"/);
  assert.match(html, /value="ur"/);
  assert.match(html, /value="ar"/);
  assert.match(app, /import "\.\/i18n\.js"/);
  assert.match(locale, /ur:\{/);
  assert.match(locale, /ar:\{/);
  assert.match(locale, /documentElement\.dir/);
  assert.match(locale, /pocketops-language/);
  assert.match(sw, /\.\/i18n\.js/);
});

test("localized select labels keep stable stored values", async () => {
  const html = await read("../index.html");
  for (const value of ["Receipt", "Bill", "Warranty", "Personal", "Study", "Other", "Normal", "High", "Low"]) {
    assert.ok(html.includes(`<option value="${value}">${value}</option>`), `Missing stable option value: ${value}`);
  }
});


test("localization never rewrites user-authored records and tolerates blocked storage", async () => {
  const locale = await read("../i18n.js");
  const app = await read("../app.js");
  assert.match(locale, /parentElement\?\.closest\("\.user-content"\)/);
  assert.match(locale, /function savedLanguage\(\)[\s\S]*?catch\{return "en"\}/);
  assert.match(locale, /try\{localStorage\.setItem\("pocketops-language",current\)\}catch\{\}/);
  assert.match(app, /<h3 class="user-content"(?: dir="auto")?>\$\{esc\(d\.title\)\}<\/h3>/);
  assert.match(app, /<strong class="user-content"(?: dir="auto")?>\$\{esc\(t\.title\)\}<\/strong>/);
});


test("user-authored content follows its own text direction in RTL locales", async () => {
  const html = await read("../index.html");
  const app = await read("../app.js");
  assert.match(html, /name="title" dir="auto"/);
  assert.match(html, /name="taskTitle" dir="auto"/);
  assert.match(html, /id="docSearch" dir="auto"/);
  assert.match(app, /class="user-content" dir="auto"/);
  assert.match(app, /<bdi class="user-content" dir="auto">/);
});


test("localization updates accessible labels and placeholders", async () => {
  const locale = await read("../i18n.js");
  assert.match(locale, /function translateAttributes\(root=document\.body\)/);
  assert.match(locale, /aria-label/);
  assert.match(locale, /Complete task/);
  assert.match(locale, /translateAttributes\(node\)/);
});


test("dashboard statistics use a responsive four-card grid", async () => {
  const css = await read("../styles.css");
  const html = await read("../index.html");
  assert.match(css, /\.stats\{grid-template-columns:repeat\(4,minmax\(0,1fr\)\)\}/);
  assert.match(css, /@media\(max-width:1050px\)\{\.stats\{grid-template-columns:repeat\(2,minmax\(0,1fr\)\)\}\}/);
  assert.match(css, /@media\(max-width:720px\)\{\.stats\{grid-template-columns:repeat\(2,minmax\(0,1fr\)\)\}\}/);
  for (const id of ["statDocs", "statTasks", "statDue", "statOverdue"]) assert.ok(html.includes(`id="${id}"`));
});

test("imported record IDs are escaped before entering HTML attributes", async () => {
  const app = await read("../app.js");
  for (const attribute of ["data-preview", "data-file", "data-edit-doc", "data-delete-doc", "data-toggle", "data-edit-task", "data-delete-task"]) {
    assert.ok(app.includes(attribute + '="${esc('), "Missing escaped attribute interpolation for " + attribute);
  }
});
