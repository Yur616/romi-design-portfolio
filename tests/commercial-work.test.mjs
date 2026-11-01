import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const home = await readFile(new URL('../public/portfolio.html', import.meta.url), 'utf8');

function calculatorContext() {
  const elements = new Map();
  const element = id => {
    if (!elements.has(id)) elements.set(id, { textContent: '', innerText: '', value: '', classList: { add() {}, remove() {} } });
    return elements.get(id);
  };
  const context = vm.createContext({
    document: { getElementById: element, querySelector: element, querySelectorAll: () => [] },
    window: { location: {} }, setTimeout: () => {}, showToast() {}
  });
  const dictionaries = home.slice(home.indexOf('const i18n ='), home.indexOf('let currentLang'));
  const calculator = home.slice(home.indexOf('    let basePrice'), home.indexOf('    function toggleFaq'));
  vm.runInContext(`${dictionaries}\nlet currentLang = 'ru';\n${calculator}`, context);
  return { context, element, run: code => vm.runInContext(code, context) };
}

test('calculator separates design/build, includes store assembly once, and preserves options across types', () => {
  const { run, element } = calculatorContext();
  const amount = () => Number(element('calc-price').innerText.replace(/\D/g, ''));
  run('updateCalcResult()');
  assert.equal(amount(), 18000);
  run("toggleAddon('dev', 8000, 2, true)");
  assert.equal(amount(), 26000);
  run("toggleAddon('dev', 8000, 2, true)");
  assert.equal(amount(), 26000, 'a repeated checked event must not add another build');
  run("setCalcOption('type', 'store', 40000, 18)");
  assert.equal(amount(), 40000);
  assert.equal(element('addon-tilda').disabled, true);
  assert.equal(element('addon-tilda').checked, true);
  run("toggleAddon('branding', 10000, 3, true)");
  assert.equal(amount(), 50000);
  run("setCalcOption('type', 'landing', 18000, 4)");
  assert.equal(amount(), 36000);
  assert.equal(element('addon-tilda').disabled, false);
  run("toggleAddon('dev', 8000, 2, false)");
  assert.equal(amount(), 28000);
  run("currentLang = 'en'; setCalcOption('type', 'store', 40000, 18)");
  assert.equal(amount(), 50000);
  assert.match(element('calc-scope').textContent, /already included/);
  run('applyCalcToContact()');
  assert.match(element('form-message').value, /already included/);
  assert.match(element('form-message').value, /50,000/);
});

test('the brief prepares an encoded email draft and preserves the entered contact details', () => {
  const { context, element, run } = calculatorContext();
  element('form-name').value = 'Тест & Юрий';
  element('form-contact').value = '@example';
  element('form-service').options = [{ text: 'Лендинг / промо-сайт' }];
  element('form-service').selectedIndex = 0;
  element('form-message').value = 'Нужны формы + адаптив';
  const handler = home.slice(home.indexOf('    function handleFormSubmit'), home.indexOf('    async function copyContactDraft'));
  vm.runInContext(handler, context);
  run('handleFormSubmit({ preventDefault() {} })');
  const mail = new URL(element('contact-email-draft').href);
  assert.equal(mail.protocol, 'mailto:');
  assert.equal(mail.pathname, 'zhilnikov_yuriy@mail.ru');
  assert.match(mail.searchParams.get('body'), /Тест & Юрий/);
  assert.match(mail.searchParams.get('body'), /Нужны формы \+ адаптив/);
  assert.equal(element('contact-draft').hidden, false);
  assert.equal(element('form-contact').value, '@example');
});

test('all nine projects have case pages and every gallery image exists', async () => {
  const script = await readFile(new URL('../public/projects/case.js', import.meta.url), 'utf8');
  const context = vm.createContext({});
  vm.runInContext(script.slice(0, script.indexOf('const ui =')) + '; globalThis.data = caseProjects; globalThis.order = projectOrder;', context);
  assert.equal(context.order.length, 9);
  assert.deepEqual(Array.from(context.order.slice(0, 2)), ['prometr', 'nonmarfa']);
  for (const id of context.order) {
    await access(new URL(`../public/projects/${id}.html`, import.meta.url));
    for (const [asset] of context.data[id].gallery) await access(new URL(`../public${asset}`, import.meta.url));
  }
  for (const id of ['prometr', 'nonmarfa']) {
    assert.equal(new URL(context.data[id].live).protocol, 'https:');
    assert.match(home, new RegExp(`openModal\\('${id}'\\)`));
  }
  const navigation = vm.createContext({ window: { location: {} } });
  const start = home.indexOf('    function openModal(id)');
  const end = home.indexOf('\n    }', start) + '\n    }'.length;
  vm.runInContext("let currentLang = 'ru';\n" + home.slice(start, end), navigation);
  for (const id of context.order) {
    vm.runInContext(`openModal('${id}')`, navigation);
    assert.equal(navigation.window.location.href, `/projects/${id}.html?lang=ru`);
  }
});

test('all inline scripts and shared case code are valid JavaScript', async () => {
  const index = await readFile(new URL('../public/projects.html', import.meta.url), 'utf8');
  for (const html of [home, index]) {
    for (const [, script] of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) new vm.Script(script);
  }
  new vm.Script(await readFile(new URL('../public/projects/case.js', import.meta.url), 'utf8'));
});
