const assert = require('node:assert/strict');
const { webcrypto } = require('node:crypto');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

const tool = join(__dirname, '../static/araclar/parola-cumlesi-olusturucu');
const source = readFileSync(join(tool, 'app.js'), 'utf8');
// Exercise the production generator without starting the page's DOM handlers.
const core = source.slice(0, source.indexOf('const elements ='))
  + '\nlet validatedWordList = null;\n'
  + source.slice(source.indexOf('function getWordList()'), source.indexOf('function render('));
const words = ['kirpi', 'iktisadi', 'deste', 'tegmen', 'ekim', 'kavalye'];
const options = { wordCount: 6, digitCount: 1, addRandomDigit: true, separator: '-', capitalize: false };
const plain = value => JSON.parse(JSON.stringify(value));
const phrase = (sourceWords = words) => ({ sourceWords: [...sourceWords], digits: [] });

function app() {
  const context = vm.createContext({ window: { crypto: webcrypto } });
  vm.runInContext(core, context);
  return context;
}

test('12 digits can occupy repeated prefixes and suffixes, including leading zeros', () => {
  const context = app();
  const choices = [0, 8, 1, 3, 2, 8, 2, 3, 4, 2, 5, 4, 5, 5, 7, 8, 8, 3, 8, 7, 8, 0, 11, 7];
  context.secureRandomInt = max => {
    const value = choices.shift();
    assert(value >= 0 && value < max);
    return value;
  };
  const current = phrase();
  context.updatePhraseDigits(current, { ...options, digitCount: 12 });
  assert.equal(context.getPhraseWords(current, options).join('-'),
    '8kirpi3-38iktisadi-2deste45-tegmen8-073ekim-kavalye7');
  assert.equal(choices.length, 0);
  assert.deepEqual(current.sourceWords, words);
});

test('count increases preserve old choices; decreases restore the previous phrase', () => {
  const context = app();
  const current = phrase();
  const snapshots = [];
  for (const count of [1, 12, 100]) {
    context.updatePhraseDigits(current, { ...options, digitCount: count });
    if (snapshots.length) {
      const previous = snapshots.at(-1).digits;
      assert.deepEqual(plain(current.digits.slice(0, previous.length)), previous);
    }
    snapshots.push({ digits: plain(current.digits), text: context.getPhraseWords(current, options).join('-') });
  }
  for (const previous of snapshots.reverse()) {
    context.updatePhraseDigits(current, { ...options, digitCount: previous.digits.length });
    assert.equal(context.getPhraseWords(current, options).join('-'), previous.text);
  }
});

test('format changes use no randomness and disabling digits preserves the words', () => {
  const context = app();
  const current = phrase();
  const settings = { ...options, digitCount: 12 };
  context.updatePhraseDigits(current, settings);
  const digits = plain(current.digits);
  const text = context.getPhraseWords(current, settings).join('-');
  context.secureRandomInt = () => { throw new Error('Unexpected regeneration'); };
  context.updatePhraseDigits(current, settings);
  assert.equal(context.getPhraseWords(current, { ...settings, capitalize: true, capitalizeAll: true }).join('-'),
    text.toUpperCase());
  assert.deepEqual(plain(current.digits), digits);
  context.updatePhraseDigits(current, { ...settings, addRandomDigit: false });
  assert.equal(context.getPhraseWords(current, options).join('-'), words.join('-'));
});

test('one to 1000 words support up to 100 digits without altering word order', () => {
  const context = app();
  for (const wordCount of [1, 6, 1000]) {
    for (const digitCount of [1, 12, 100]) {
      const settings = { ...options, wordCount, digitCount };
      const current = context.generatePassphrase(settings, words, false);
      const originals = plain(current.sourceWords);
      context.updatePhraseDigits(current, settings);
      const rendered = context.getPhraseWords(current, settings);
      assert.equal(rendered.join('').replace(/\D/g, '').length, digitCount);
      assert.deepEqual(plain(rendered.map(word => word.replace(/\d/g, ''))), originals);
      assert(current.digits.every(digit => digit.position >= 0 && digit.position < wordCount * 2));
    }
  }
});

test('entropy matches exhaustive final-output probabilities, without counting duplicate histories', () => {
  const context = app();
  for (const [wordCount, digitCount] of [[1, 1], [1, 2], [1, 4], [2, 2], [2, 3]]) {
    const settings = { ...options, wordCount, digitCount };
    const choices = wordCount * 2 * 10;
    const histories = choices ** digitCount;
    for (const separator of ['-', '1']) {
      const counts = new Map();
      for (let history = 0; history < histories; history += 1) {
        const current = phrase(words.slice(0, wordCount));
        let remaining = history;
        for (let digit = 0; digit < digitCount; digit += 1) {
          const choice = remaining % choices;
          remaining = Math.floor(remaining / choices);
          current.digits.push({ position: choice % (wordCount * 2), value: String(Math.floor(choice / (wordCount * 2))) });
        }
        const text = context.getPhraseWords(current, settings).join(separator);
        counts.set(text, (counts.get(text) || 0) + 1);
      }
      const maximum = Math.max(...counts.values());
      const actual = Math.log2(histories / maximum);
      const reported = context.calculateEntropy({ ...settings, separator }, 1);
      assert(reported <= actual + 1e-10);
      if (separator === '-') assert(Math.abs(reported - actual) < 1e-10);
    }
  }
});

test('the default entropy uses the actual common-word pool and excludes formatting', () => {
  const context = app();
  for (const file of ['turkce-parola-cumlesi-listesi.js', 'kelime-etiketleri.js']) {
    vm.runInContext(readFileSync(join(tool, file), 'utf8'), context);
  }
  const settings = { ...options, commonOnly: true };
  const size = context.getSelectedWordList(settings).length;
  const entropy = context.calculateEntropy(settings, size);
  assert.equal(entropy.toFixed(1), '78.7');
  assert.equal(context.calculateEntropy({ ...settings, capitalize: true, showEmojis: true }, size), entropy);
  assert.equal(context.calculateEntropy({ ...settings, addRandomDigit: false }, size), 6 * Math.log2(size));
  for (const wordCount of [1, 6, 1000]) {
    let previous = 0;
    for (let digitCount = 1; digitCount <= 100; digitCount += 1) {
      const value = context.calculateEntropy({ ...settings, wordCount, digitCount }, 1);
      assert(Number.isFinite(value) && value >= previous);
      assert(value >= digitCount * Math.log2(10));
      assert(value <= digitCount * Math.log2(wordCount * 20) + 1e-10);
      previous = value;
    }
  }
});

test('bulk downloads keep confirmation and the current phrase on the first line', async () => {
  const context = app();
  let downloaded = null;
  let confirmations = 0;
  context.window.confirm = () => { confirmations += 1; return true; };
  context.window.setTimeout = callback => { callback(); };
  context.Blob = Blob;
  context.URL = { createObjectURL: blob => { downloaded = blob; return 'blob:test'; }, revokeObjectURL() {} };
  context.document = { createElement: () => ({ click() {}, remove() {} }), body: { appendChild() {} } };
  context.elements = {
    downloadConfirm: { disabled: false }, downloadCount: { value: '4' },
    downloadPanel: { matches: () => false }, downloadButton: { focus() {} }
  };
  context.readOptions = () => ({ ...options, digitCount: 12 });
  context.getSelectedWordList = () => words;
  context.setStatus = message => assert.fail(message);
  vm.runInContext("let currentPassphrase = 'mevcut-parola7';\n"
    + source.slice(source.indexOf('function positiveInteger('), source.indexOf('function readSeparator('))
    + source.slice(source.indexOf('async function downloadPassphrases('), source.indexOf('function printPassphrase(')), context);
  await context.downloadPassphrases(true);
  const lines = (await downloaded.text()).trimEnd().split('\n');
  assert.equal(confirmations, 1);
  assert.equal(lines.length, 4);
  assert.equal(lines[0], 'mevcut-parola7');
  for (const line of lines.slice(1)) {
    assert.equal(line.replace(/\D/g, '').length, 12);
    assert.equal(line.split('-').length, 6);
  }
  assert.equal(context.elements.downloadConfirm.disabled, false);
  downloaded = null;
  context.window.confirm = () => false;
  await context.downloadPassphrases(true);
  assert.equal(downloaded, null);
});

test('secure random selection rejects biased values and fails without Web Crypto', () => {
  const context = app();
  const values = [2 ** 32 - 1, 0];
  context.window.crypto = { getRandomValues: output => { output[0] = values.shift(); } };
  assert.equal(context.secureRandomInt(10), 0);
  assert.equal(values.length, 0);
  context.window.crypto = undefined;
  assert.throws(() => context.secureRandomInt(10), /güvenli rastgele sayı/);
});

function settingsApp(storage = new Map()) {
  const context = app();
  const defaults = { ...options, capitalizeAll: false, commonOnly: true, showEmojis: true };
  const rendered = [];
  const errors = [];
  const ui = { resets: 0, focuses: 0 };
  context.elements = {};
  for (const [name, value] of Object.entries(defaults)) {
    context.elements[name] = typeof value === 'boolean'
      ? { type: 'checkbox', defaultChecked: value, checked: value }
      : { type: typeof value === 'number' ? 'number' : 'text', defaultValue: String(value), value: String(value),
          min: '1', max: name === 'wordCount' ? '1000' : '100' };
  }
  context.elements.settingsForm = { reset() {
    ui.resets += 1;
    for (const name of Object.keys(defaults)) {
      const field = context.elements[name];
      if (field.type === 'checkbox') field.checked = field.defaultChecked;
      else field.value = field.defaultValue;
    }
  } };
  context.elements.clearSettingsButton = { hidden: true };
  context.elements.passphraseOutput = { setAttribute() {} };
  for (const name of ['copyButton', 'printButton', 'printEmojiButton', 'downloadButton', 'downloadCreateButton', 'refreshButton']) {
    context.elements[name] = {};
  }
  context.elements.refreshButton.focus = () => { ui.focuses += 1; };
  context.localStorage = {
    getItem: key => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: key => storage.delete(key)
  };
  vm.runInContext('let currentPhrase = null; let currentPassphrase = "";\n'
    + source.slice(source.indexOf('function render('), source.indexOf('async function downloadPassphrases('))
    + source.slice(source.indexOf('function readOptions('), source.indexOf('function updateControls(')), context);
  for (const name of ['clearStatus', 'updateControls', 'resetCopyIcon', 'updateInfo', 'updateWordListDetails', 'checkVersionUpdate']) {
    context[name] = () => {};
  }
  context.getSelectedWordList = () => words;
  context.renderPassphraseOutput = value => rendered.push(plain(value));
  context.setError = value => { if (value) errors.push(value); };
  context.setStatus = value => errors.push(value);
  const start = () => vm.runInContext(source.slice(source.lastIndexOf('\nloadSettings();')), context);
  return { context, storage, defaults, rendered, errors, ui, start };
}

test('only preferences persist, and revisiting restores them before generating a fresh phrase', () => {
  const storage = new Map([['pref-theme', 'dark'], ['passphrase-last-seen-version', '3']]);
  const first = settingsApp(storage);
  first.context.secureRandomInt = () => 0;
  first.start();
  assert(!storage.has('passphrase-settings'));
  first.context.elements.wordCount.value = '3';
  first.context.elements.digitCount.value = '12';
  first.context.elements.commonOnly.checked = false;
  first.context.elements.showEmojis.checked = false;
  first.context.render();
  const saved = JSON.parse(storage.get('passphrase-settings'));
  assert.deepEqual(saved, { ...first.defaults, wordCount: 3, digitCount: 12, commonOnly: false, showEmojis: false });
  first.context.saveSettings({ ...saved, currentPassphrase: 'secret', sourceWords: ['secret'], digits: ['secret'] });
  assert(!storage.get('passphrase-settings').includes('secret'));
  const second = settingsApp(storage);
  second.context.secureRandomInt = max => max - 1;
  second.start();
  assert.deepEqual(plain(second.context.readOptions()), saved);
  assert.notDeepEqual(second.rendered[0], first.rendered.at(-1));
  assert.equal(second.rendered[0].length, 3);
  assert.equal(second.rendered[0].join('').replace(/\D/g, '').length, 12);
  assert.equal(storage.get('pref-theme'), 'dark');
  assert.deepEqual(second.errors, []);
});

test('invalid stored fields retain defaults, while valid booleans and a blank separator survive', () => {
  const page = settingsApp(new Map([['passphrase-settings', JSON.stringify({
    wordCount: 1001, digitCount: '12', capitalize: 'false', commonOnly: false,
    showEmojis: false, separator: 'letters', currentPassphrase: 'secret'
  })]]));
  page.start();
  assert.deepEqual(plain(page.context.readOptions()), { ...page.defaults, commonOnly: false, showEmojis: false });
  for (const saved of ['null', '[]', '{broken', JSON.stringify({ wordCount: 1.5, digitCount: 0, separator: '-'.repeat(33) })]) {
    const invalid = settingsApp(new Map([['passphrase-settings', saved]]));
    invalid.start();
    assert.deepEqual(plain(invalid.context.readOptions()), invalid.defaults);
    assert.deepEqual(invalid.errors, []);
  }
  page.context.elements.separator.value = '';
  page.context.render(false);
  const reloaded = settingsApp(page.storage);
  reloaded.start();
  assert.equal(reloaded.context.elements.separator.value, '');
  assert.equal(reloaded.context.readOptions().separator, ' ');
});

test('deletion removes only the settings and does not immediately save defaults again', () => {
  const storage = new Map([['passphrase-settings', JSON.stringify({ wordCount: 3, digitCount: 12 })],
    ['passphrase-last-seen-version', '3'], ['pref-theme', 'dark']]);
  const page = settingsApp(storage);
  page.start();
  assert.equal(page.context.readOptions().wordCount, 3);
  assert.equal(page.context.elements.clearSettingsButton.hidden, false);
  page.context.clearSettings();
  assert.equal(page.context.elements.clearSettingsButton.hidden, true);
  assert(!storage.has('passphrase-settings'));
  assert.deepEqual(plain(page.context.readOptions()), page.defaults);
  assert.equal(page.rendered.at(-1).length, 6);
  assert.equal(storage.get('passphrase-last-seen-version'), '3');
  assert.equal(storage.get('pref-theme'), 'dark');
  assert.deepEqual(page.ui, { resets: 1, focuses: 1 });
  const reloaded = settingsApp(storage);
  reloaded.start();
  assert(!storage.has('passphrase-settings'));
  assert.deepEqual(plain(reloaded.context.readOptions()), reloaded.defaults);
});

test('the trash button appears only for preferences that differ from the HTML defaults', () => {
  const page = settingsApp();
  page.start();
  assert.equal(page.context.elements.clearSettingsButton.hidden, true);
  page.context.render();
  assert(page.storage.has('passphrase-settings'));
  assert.equal(page.context.elements.clearSettingsButton.hidden, true);
  for (const name of Object.keys(page.defaults)) {
    const field = page.context.elements[name];
    if (field.type === 'checkbox') field.checked = !field.defaultChecked;
    else field.value = field.type === 'number' ? '12' : '_';
    page.context.render(false);
    assert.equal(page.context.elements.clearSettingsButton.hidden, false, name);
    if (field.type === 'checkbox') field.checked = field.defaultChecked;
    else field.value = field.defaultValue;
    page.context.render(false);
    assert.equal(page.context.elements.clearSettingsButton.hidden, true, name);
  }
});

test('unavailable or full storage never prevents generation; failed deletion leaves settings intact', () => {
  const page = settingsApp();
  page.context.localStorage.getItem = () => { throw new Error('Blocked'); };
  page.context.localStorage.setItem = () => { throw new Error('Full'); };
  page.start();
  page.context.render();
  assert.equal(page.rendered.length, 2);
  assert.deepEqual(page.errors, []);
  page.context.elements.wordCount.value = '3';
  page.context.localStorage.removeItem = () => { throw new Error('Blocked'); };
  page.context.clearSettings();
  assert.equal(page.context.readOptions().wordCount, 3);
  assert.deepEqual(page.ui, { resets: 0, focuses: 0 });
  assert.deepEqual(page.errors, ['Kayıtlı ayarlar silinemedi.']);
});
