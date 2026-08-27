import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

test("every translated element has Russian and English copy", async () => {
  const html = await readFile(new URL("../public/portfolio.html", import.meta.url), "utf8");
  const start = html.indexOf("const i18n =");
  const end = html.indexOf("let currentLang", start);
  assert.ok(start >= 0 && end > start, "translation dictionary was not found");

  const context = {};
  vm.createContext(context);
  vm.runInContext(`${html.slice(start, end)}; globalThis.translations = i18n;`, context);

  const elementKeys = [
    ...html.matchAll(/data-i18n="([^"]+)"/g),
    ...html.matchAll(/data-i18n-placeholder="([^"]+)"/g),
  ].map((match) => match[1]);

  for (const key of new Set(elementKeys)) {
    assert.ok(context.translations.ru[key], `missing Russian translation: ${key}`);
    assert.ok(context.translations.en[key], `missing English translation: ${key}`);
  }
});
