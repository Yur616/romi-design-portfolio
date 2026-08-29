import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectIds = ["aura", "lapadoctor", "flux", "kultur", "yandexpet", "prostolaser", "phonelab"];

test("portfolio cards open dedicated project pages", async () => {
  const html = await readFile(new URL("../public/portfolio.html", import.meta.url), "utf8");

  assert.match(html, /window\.location\.href = `\/projects\/\$\{id\}\.html\?lang=\$\{currentLang\}`/);
  for (const id of projectIds) {
    assert.match(html, new RegExp(`openModal\\('${id}'\\)`));
    await access(new URL(`../public/projects/${id}.html`, import.meta.url));
  }
});

test("case pages use real exported project screens", async () => {
  const script = await readFile(new URL("../public/projects/case.js", import.meta.url), "utf8");
  const stylesheet = await readFile(new URL("../public/projects/case.css", import.meta.url), "utf8");

  assert.match(script, /const caseProjects =/);
  assert.match(script, /gallery-grid--phones/);
  assert.match(script, /lang === "en"/);
  assert.match(stylesheet, /\.case-cover/);
  assert.match(stylesheet, /@media \(max-width: 560px\)/);

  const referencedAssets = [...script.matchAll(/"(\/cases\/[^"]+\.webp)"/g)].map((match) => match[1]);
  assert.ok(referencedAssets.length >= 20);
  for (const asset of new Set(referencedAssets)) {
    await access(new URL(`../public${asset}`, import.meta.url));
  }
});

test("the all-projects page contains every case and both languages", async () => {
  const html = await readFile(new URL("../public/projects.html", import.meta.url), "utf8");

  for (const id of projectIds) {
    assert.match(html, new RegExp(`data-project-id="${id}"`));
    assert.match(html, new RegExp(`/projects/${id}\\.html\\?lang=ru`));
  }
  assert.match(html, /const copy =/);
  assert.match(html, /titles:/);
  assert.match(html, /descriptions:/);
  assert.match(html, /language === 'en'/);
});

test("premium bear intro lands in Hero before cursor scrubbing starts", async () => {
  const html = await readFile(new URL("../public/portfolio.html", import.meta.url), "utf8");

  assert.match(html, /id="site-preloader"/);
  assert.match(html, /id="site-preloader-canvas"/);
  assert.match(html, /gsap@3\.13\.0/);
  assert.match(html, /ease: 'power4\.inOut'/);
  assert.match(html, /duration: 2, ease: 'power4\.inOut'/);
  assert.match(html, /duration: 0\.5, ease: 'power2\.out'/);
  assert.match(html, /bear-intro-frame-ready/);
  assert.match(html, /bear-intro-complete/);
  assert.match(html, /dataset\.bearIntroComplete === 'true'/);
  assert.match(html, /window\.location\.hash !== '#top'/);
  assert.match(html, /loadElapsed > 3000/);
  assert.match(html, /window\.setTimeout\(hideImmediately, 4200\)/);
  assert.match(html, /preloader\.hidden = true/);
});
