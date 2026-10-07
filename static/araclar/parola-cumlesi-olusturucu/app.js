"use strict";

const MIN_WORD_COUNT = 1;
const MAX_WORD_COUNT = 1000;
const MAX_DIGIT_COUNT = 100;
const MAX_DOWNLOAD_COUNT = 1000;
const MAX_SEPARATOR_LENGTH = 32;
const DEFAULT_WORD_COUNT = 6;
// Practical UI target, not a universal or NIST-mandated password threshold.
const ENTROPY_HINT_THRESHOLD = 72;
const ENTROPY_COLOR_THRESHOLDS = [36, 48, 60, ENTROPY_HINT_THRESHOLD, 78];
const COPY_FEEDBACK_DURATION = 500;
const STATUS_DURATION = 5000;
const HOVER_CLOSE_DELAY = 150;
const UINT32_RANGE = 2 ** 32;
const CLEAN_WORD_PATTERN = /^[A-Za-z]+$/;
const EXCLUDED_LETTER_PATTERN = /[qQwWxX]/;
const VOWEL_PATTERN = /[aeiouAEIOU]/;
const VERSION_STORAGE_KEY = "passphrase-last-seen-version";

const elements = {
  errorBox: document.getElementById("errorBox"),
  passphraseOutput: document.getElementById("passphraseOutput"),
  refreshButton: document.getElementById("refreshButton"),
  copyButton: document.getElementById("copyButton"),
  printButton: document.getElementById("printButton"),
  printEmojiButton: document.getElementById("printEmojiButton"),
  downloadButton: document.getElementById("downloadButton"),
  downloadCreateButton: document.getElementById("downloadCreateButton"),
  downloadPanel: document.getElementById("downloadPanel"),
  downloadCount: document.getElementById("downloadCount"),
  downloadConfirm: document.getElementById("downloadConfirm"),
  versionButton: document.getElementById("versionButton"),
  changelogDialog: document.getElementById("changelogDialog"),
  copyStatus: document.getElementById("copyStatus"),
  copyButtonIcon: document.querySelector("#copyButton path"),
  settingsForm: document.getElementById("settingsForm"),
  wordCount: document.getElementById("wordCount"),
  separator: document.getElementById("separator"),
  capitalize: document.getElementById("capitalize"),
  capitalizeAll: document.getElementById("capitalizeAll"),
  capitalizeLabel: document.getElementById("capitalizeLabel"),
  capitalizeSettingsButton: document.getElementById("capitalizeSettingsButton"),
  addRandomDigit: document.getElementById("addRandomDigit"),
  digitCount: document.getElementById("digitCount"),
  digitSettingsButton: document.getElementById("digitSettingsButton"),
  wordCountWarning: document.getElementById("wordCountWarning"),
  separatorWarning: document.getElementById("separatorWarning"),
  commonOnly: document.getElementById("commonOnly"),
  showEmojis: document.getElementById("showEmojis"),
  wordListDetails: document.getElementById("wordListDetails"),
  commonWordDetails: document.getElementById("commonWordDetails")
};

let currentPassphrase = "";
let currentPhrase = null;
let validatedWordList = null;
let statusTimer = 0;
let copyIconTimer = 0;
let currentInfoMessage = "";
let currentInfoClass = "";

function getWordList() {
  const wordList = window.PASSPHRASE_TR_WORDLIST;

  if (validatedWordList === wordList) {
    return validatedWordList;
  }

  if (!Array.isArray(wordList)) {
    throw new Error("Kelime listesi yüklenemedi. Parola cümlesi üretilemiyor.");
  }

  if (wordList.length === 0) {
    throw new Error("Kelime listesi boş. Parola cümlesi üretilemiyor.");
  }

  const seenWords = new Set();
  const invalidWordIndex = wordList.findIndex(function findInvalidWord(word) {
    if (!isCleanWord(word) || seenWords.has(word)) {
      return true;
    }

    seenWords.add(word);
    return false;
  });

  if (invalidWordIndex !== -1) {
    throw new Error("Kelime listesinde temizleme kurallarına uymayan veya tekrar eden girdi var. İşlem durduruldu.");
  }

  validatedWordList = wordList;
  return validatedWordList;
}

function isCleanWord(word) {
  return typeof word === "string"
    && Array.from(word).length > 2
    && CLEAN_WORD_PATTERN.test(word)
    && !EXCLUDED_LETTER_PATTERN.test(word)
    && VOWEL_PATTERN.test(word);
}

function getSelectedWordList(options) {
  const wordList = getWordList();
  if (!options.commonOnly) return wordList;

  const metadata = window.PASSPHRASE_TR_METADATA;
  if (!metadata) throw new Error("Kelime etiketleri yüklenemedi.");
  const commonWords = wordList.filter(word => metadata[word]?.[0] === 1);
  if (!commonWords.length) throw new Error("Yaygın kelime havuzu boş.");
  return commonWords;
}

function secureRandomInt(maxExclusive) {
  if (!Number.isSafeInteger(maxExclusive) || maxExclusive <= 0 || maxExclusive > UINT32_RANGE) {
    throw new Error("Geçersiz rastgele sayı aralığı.");
  }

  const cryptoObject = window.crypto;

  if (!cryptoObject || typeof cryptoObject.getRandomValues !== "function") {
    throw new Error("Bu tarayıcı güvenli rastgele sayı üretimini desteklemiyor. Parola cümlesi üretilemedi.");
  }

  const randomValue = new Uint32Array(1);
  const limit = Math.floor(UINT32_RANGE / maxExclusive) * maxExclusive;
  let value = 0;

  // Rejection sampling avoids modulo bias; every list item remains equally likely.
  do {
    cryptoObject.getRandomValues(randomValue);
    value = randomValue[0];
  } while (value >= limit);

  return value % maxExclusive;
}

function generatePassphrase(options, wordList = getSelectedWordList(options), includeHints = true) {
  const sourceWords = [];

  for (let index = 0; index < options.wordCount; index += 1) {
    const word = wordList[secureRandomInt(wordList.length)];
    sourceWords.push(word);
  }

  return {
    sourceWords,
    digit: null,
    hints: includeHints ? sourceWords.map(word => {
      const emojis = window.PASSPHRASE_TR_METADATA?.[word]?.slice(1);
      return emojis?.length ? emojis[secureRandomInt(emojis.length)] : "";
    }) : []
  };
}

function capitalizeWord(word) {
  const characters = Array.from(String(word));

  if (characters.length === 0) {
    return "";
  }

  characters[0] = characters[0].toUpperCase();
  return characters.join("");
}

function calculateEntropy(options, wordListLength) {
  let entropy = options.wordCount * Math.log2(wordListLength);

  if (options.addRandomDigit) {
    entropy += Math.log2(options.wordCount) + options.digitCount * Math.log2(10);
  }

  return entropy;
}

function updatePhraseDigit(phrase, options) {
  if (options.addRandomDigit && !phrase.digit) {
    phrase.digit = { index: secureRandomInt(options.wordCount), value: "" };
  } else if (!options.addRandomDigit) {
    phrase.digit = null;
  }
  if (phrase.digit) {
    phrase.digit.value = phrase.digit.value.slice(0, options.digitCount);
    while (phrase.digit.value.length < options.digitCount) {
      phrase.digit.value += String(secureRandomInt(10));
    }
  }
}

function getPhraseWords(phrase, options) {
  const words = phrase.sourceWords.map(word => {
    if (!options.capitalize) return word;
    return options.capitalizeAll ? word.toUpperCase() : capitalizeWord(word);
  });
  if (phrase.digit) words[phrase.digit.index] += phrase.digit.value;
  return words;
}

function render(regenerate = true) {
  const options = readOptions();

  clearStatus({ keepTimer: false });
  updateControls(options);

  try {
    if (options.separator.length > MAX_SEPARATOR_LENGTH) {
      throw new Error(`Ayraç en fazla ${MAX_SEPARATOR_LENGTH} karakter olabilir.`);
    }
    if (/\p{L}/u.test(options.separator)) {
      throw new Error("Ayraç harf içeremez; boşluk veya simge seçin.");
    }
    const wordList = getSelectedWordList(options);
    if (regenerate || !currentPhrase || currentPhrase.sourceWords.length !== options.wordCount) {
      currentPhrase = generatePassphrase(options, wordList);
    }
    updatePhraseDigit(currentPhrase, options);
    const words = getPhraseWords(currentPhrase, options);
    const entropy = calculateEntropy(options, wordList.length);

    currentPassphrase = words.join(options.separator);
    renderPassphraseOutput(words, options.separator, currentPhrase.hints, options.showEmojis);
    elements.passphraseOutput.title = "Kopyalamak için tıklayın";
    elements.passphraseOutput.setAttribute("aria-label", `${currentPassphrase}. Kopyalamak için tıklayın.`);
    elements.passphraseOutput.setAttribute("aria-disabled", "false");
    resetCopyIcon();
    elements.copyButton.disabled = false;
    elements.printButton.disabled = false;
    elements.printEmojiButton.disabled = false;
    elements.downloadButton.disabled = false;
    elements.downloadCreateButton.disabled = false;
    elements.refreshButton.disabled = false;
    setError("");
    updateInfo(entropy);
    updateWordListDetails();
  } catch (error) {
    if (regenerate) currentPhrase = null;
    currentPassphrase = "";
    elements.passphraseOutput.textContent = "";
    updatePassphraseOutputSize("");
    elements.passphraseOutput.title = "";
    elements.passphraseOutput.setAttribute("aria-label", "Parola cümlesi üretilemedi.");
    elements.passphraseOutput.setAttribute("aria-disabled", "true");
    resetCopyIcon();
    elements.copyButton.disabled = true;
    elements.printButton.disabled = true;
    elements.printEmojiButton.disabled = true;
    elements.downloadButton.disabled = true;
    elements.downloadCreateButton.disabled = true;
    elements.refreshButton.disabled = true;
    setError(error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu.");
    updateInfo(null);
    updateWordListDetails();
  }
}

async function downloadPassphrases(useOptions = false) {
  if (!currentPassphrase || elements.downloadConfirm.disabled) return;
  if (!window.confirm("Dosyaya erişenler parolanızı okuyabilir. Parola yöneticisinde veya kâğıda yazıp güvenli bir yerde saklayın.\nİndirmek istiyor musunuz?")) return;

  const count = useOptions
    ? positiveInteger(Number(elements.downloadCount.value), 1, MAX_DOWNLOAD_COUNT) : 1;
  elements.downloadCount.value = String(count);
  const options = readOptions();
  const lines = [currentPassphrase];
  elements.downloadConfirm.disabled = true;
  elements.downloadConfirm.textContent = "Hazırlanıyor…";
  elements.downloadCount.disabled = true;

  try {
    if (count > 1) {
      const wordList = getSelectedWordList(options);
      const choicesPerPhrase = options.wordCount + (options.addRandomDigit ? options.digitCount : 0);
      const batchSize = Math.max(1, Math.floor(1000 / choicesPerPhrase));
      for (let index = 1; index < count; index += 1) {
        const phrase = generatePassphrase(options, wordList, false);
        updatePhraseDigit(phrase, options);
        lines.push(getPhraseWords(phrase, options).join(options.separator));
        if (index % batchSize === 0 && index + 1 < count) {
          await new Promise(resolve => window.setTimeout(resolve, 0));
        }
      }
    }
    const url = URL.createObjectURL(new Blob([lines.join("\n") + "\n"], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = count === 1 ? "parola-cumlesi.txt" : "parola-cumleleri.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    if (elements.downloadPanel.matches(":popover-open")) elements.downloadPanel.hidePopover();
    elements.downloadButton.focus();
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "İndirme başarısız oldu.", "error");
  } finally {
    elements.downloadConfirm.disabled = false;
    elements.downloadConfirm.textContent = "İndir";
    elements.downloadCount.disabled = false;
  }
}

function printPassphrase(includeEmojis = false) {
  if (!currentPassphrase) {
    setStatus("Yazdırılacak parola cümlesi yok.", "error");
    return;
  }

  const content = includeEmojis && elements.showEmojis.checked
    ? elements.passphraseOutput.cloneNode(true) : document.createTextNode(currentPassphrase);
  const frame = document.createElement("iframe");
  frame.hidden = true;
  frame.setAttribute("aria-hidden", "true");
  frame.srcdoc = '<!doctype html><html lang="tr"><head><meta charset="utf-8"><title></title><style>@page{margin:0}body{margin:0;padding:20mm;font:22pt/1.5 system-ui,sans-serif;color:#000;background:#fff;white-space:pre-wrap;overflow-wrap:anywhere}.passphrase-output{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-align:center;white-space:normal}.passphrase-token{display:inline-grid;grid-template-columns:minmax(0,auto) minmax(0,auto);grid-template-rows:1.2em auto;max-width:100%;break-inside:avoid}.passphrase-word{grid-column:1;grid-row:2}.passphrase-separator{grid-column:2;grid-row:2;white-space:pre-wrap}.passphrase-hint{grid-column:1;grid-row:1;align-self:center;font-size:.9em;line-height:1}</style></head><body></body></html>';
  frame.addEventListener("load", () => {
    frame.contentDocument.body.appendChild(content);
    frame.contentWindow.addEventListener("afterprint", () => frame.remove(), { once: true });
    frame.contentWindow.print();
  }, { once: true });
  document.body.appendChild(frame);
}

async function copyToClipboard() {
  if (!currentPassphrase) {
    setStatus("Kopyalanacak parola cümlesi yok.", "error");
    return;
  }

  if (!navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
    setStatus("Tarayıcınız pano erişimini desteklemiyor veya bu sayfa güvenli bağlamda açılmamış.", "error");
    return;
  }

  const passphrase = currentPassphrase;
  try {
    await navigator.clipboard.writeText(passphrase);
    if (currentPassphrase !== passphrase) return;
    clearStatus({ keepTimer: false });
    showCopySuccessIcon();
  } catch (error) {
    if (currentPassphrase !== passphrase) return;
    setStatus("Kopyalama başarısız oldu. Tarayıcınız pano erişimine izin vermemiş olabilir.", "error");
  }
}

function readOptions() {
  const parsedWordCount = Number(elements.wordCount.value);
  const wordCount = clampWordCount(parsedWordCount);

  return {
    wordCount,
    separator: readSeparator(elements.separator.value),
    capitalize: elements.capitalize.checked,
    capitalizeAll: elements.capitalizeAll.checked,
    addRandomDigit: elements.addRandomDigit.checked,
    digitCount: positiveInteger(Number(elements.digitCount.value), 1, MAX_DIGIT_COUNT),
    commonOnly: elements.commonOnly.checked,
    showEmojis: elements.showEmojis.checked
  };
}

function clampWordCount(value) {
  return positiveInteger(value, DEFAULT_WORD_COUNT, MAX_WORD_COUNT);
}

function positiveInteger(value, fallback, maximum) {
  return Number.isFinite(value) && Number.isInteger(value) && value >= MIN_WORD_COUNT
    ? Math.min(value, maximum) : fallback;
}

function readSeparator(value) {
  return String(value) || " ";
}

function updateControls(options) {
  elements.wordCount.value = String(options.wordCount);
  elements.digitCount.value = String(options.digitCount);
  elements.capitalizeLabel.textContent = options.capitalizeAll ? "Tüm harfleri büyüt" : "Baş harfleri büyüt";
  elements.printEmojiButton.hidden = !options.showEmojis;
  setOptionVisible(elements.capitalizeSettingsButton, options.capitalize);
  setOptionVisible(elements.digitSettingsButton, options.addRandomDigit);
  setOptionVisible(elements.separatorWarning, /\s/.test(options.separator));
}

function updateWordListDetails() {
  const wordList = Array.isArray(window.PASSPHRASE_TR_WORDLIST) ? window.PASSPHRASE_TR_WORDLIST : [];
  const commonCount = wordList.filter(word => window.PASSPHRASE_TR_METADATA?.[word]?.[0] === 1).length;
  elements.wordListDetails.textContent = `Ana listede ${wordList.length.toLocaleString("tr-TR")} kelime var. Birçoğunu günlük hayatta kullanmıyoruz. Daha çok kelime, daha çok olası parola demek. Bu da parolanın tahmin edilmesini zorlaştırır.`;
  elements.commonWordDetails.textContent = `Yaygın kelimeler seçeneği, bu listeden yapay zekâyla seçilen ${commonCount.toLocaleString("tr-TR")} daha bilindik kelimeyi kullanır.`;
}

function updateInfo(entropy) {
  const message = entropy === null ? "Entropi hesaplanamadı" : `Entropi: ≈ ${entropy.toFixed(1)} bit`;
  setOptionVisible(elements.wordCountWarning, entropy !== null && entropy < ENTROPY_HINT_THRESHOLD);
  const className = entropy === null ? "status-error" : `entropy-${1 + ENTROPY_COLOR_THRESHOLDS.filter(threshold => entropy >= threshold).length}`;

  currentInfoMessage = message;
  currentInfoClass = className;
  elements.copyStatus.textContent = message;
  elements.copyStatus.className = `status ${className}`;
}

function renderPassphraseOutput(words, separator, hints = [], showHints = true) {
  const fragment = document.createDocumentFragment();
  elements.passphraseOutput.classList.toggle("passphrase-output-hints", showHints && hints.length > 0);

  words.forEach(function appendWord(word, index) {
    const tokenElement = document.createElement("span");
    const wordElement = document.createElement("span");

    tokenElement.className = "passphrase-token";
    wordElement.className = "passphrase-word";
    appendHighlightedWord(wordElement, word);
    tokenElement.appendChild(wordElement);

    if (hints[index]) {
      const hintElement = document.createElement("span");
      hintElement.className = "passphrase-hint";
      hintElement.setAttribute("aria-hidden", "true");
      hintElement.textContent = hints[index];
      tokenElement.appendChild(hintElement);
    }

    if (index < words.length - 1 && separator.length > 0) {
      const separatorElement = document.createElement("span");
      separatorElement.className = "passphrase-separator";
      separatorElement.textContent = separator;
      tokenElement.appendChild(separatorElement);
    }

    fragment.appendChild(tokenElement);
  });

  elements.passphraseOutput.textContent = "";
  elements.passphraseOutput.appendChild(fragment);
  updatePassphraseOutputSize(words.join(separator));
}

function updatePassphraseOutputSize(text) {
  const length = Array.from(String(text)).length;

  elements.passphraseOutput.classList.remove(
    "passphrase-output-long",
    "passphrase-output-very-long",
    "passphrase-output-extra-long"
  );

  if (length > 220) {
    elements.passphraseOutput.classList.add("passphrase-output-extra-long");
  } else if (length > 140) {
    elements.passphraseOutput.classList.add("passphrase-output-very-long");
  } else if (length > 90) {
    elements.passphraseOutput.classList.add("passphrase-output-long");
  }
}

function appendHighlightedWord(parentElement, value) {
  Array.from(String(value)).forEach(function appendCharacter(character) {
    if (/\d/.test(character)) {
      const digitElement = document.createElement("span");
      digitElement.className = character === "0" ? "passphrase-digit passphrase-zero" : "passphrase-digit";
      digitElement.textContent = character;
      parentElement.appendChild(digitElement);
      return;
    }

    parentElement.appendChild(document.createTextNode(character));
  });
}

function setError(message) {
  elements.errorBox.textContent = message;
  elements.errorBox.hidden = message.length === 0;
}

function setStatus(message, type, duration = STATUS_DURATION) {
  window.clearTimeout(statusTimer);
  statusTimer = 0;
  elements.copyStatus.textContent = message;
  elements.copyStatus.className = `status status-${type}`;

  if (message) {
    statusTimer = window.setTimeout(function hideStatus() {
      clearStatus({ keepTimer: true });
    }, duration);
  }
}

function clearStatus(options) {
  if (!options || !options.keepTimer) {
    window.clearTimeout(statusTimer);
  }

  statusTimer = 0;
  elements.copyStatus.textContent = currentInfoMessage;
  elements.copyStatus.className = `status ${currentInfoClass}`;
}

function showCopySuccessIcon() {
  if (!elements.copyButtonIcon) {
    return;
  }

  window.clearTimeout(copyIconTimer);
  elements.copyButtonIcon.setAttribute("d", "m5 12 4 4 10-10");
  elements.copyButton.classList.add("button-copied");
  elements.copyButton.setAttribute("aria-label", "Kopyalandı");

  copyIconTimer = window.setTimeout(resetCopyIcon, COPY_FEEDBACK_DURATION);
}

function resetCopyIcon() {
  window.clearTimeout(copyIconTimer);
  copyIconTimer = 0;

  if (!elements.copyButtonIcon) {
    return;
  }

  elements.copyButtonIcon.setAttribute("d", "M8 8h13v13H8zM16 8V3H3v13h5");
  elements.copyButton.classList.remove("button-copied");
  elements.copyButton.removeAttribute("aria-label");
}

function setVersionUpdate(hasUpdate) {
  elements.versionButton.classList.toggle("has-update", hasUpdate);
  elements.versionButton.setAttribute("aria-label",
    `Sürüm ${elements.versionButton.dataset.version}, ${hasUpdate ? "yeni değişiklikler var, " : ""}değişiklik geçmişini aç`);
  elements.versionButton.title = hasUpdate ? "Yeni değişiklikler var" : "Değişiklik geçmişi";
}

function markVersionSeen() {
  setVersionUpdate(false);
  try {
    localStorage.setItem(VERSION_STORAGE_KEY, elements.versionButton.dataset.version);
  } catch {
    // The tool still works when browser storage is unavailable.
  }
}

function checkVersionUpdate() {
  try {
    const previousVersion = localStorage.getItem(VERSION_STORAGE_KEY);
    if (previousVersion === null) {
      markVersionSeen();
    } else {
      setVersionUpdate(previousVersion !== elements.versionButton.dataset.version);
    }
  } catch {
    // Version notifications are optional; passphrase generation stays available.
  }
}


elements.refreshButton.addEventListener("click", function refreshPassphrase() {
  elements.refreshButton.classList.remove("is-spinning");
  void elements.refreshButton.offsetWidth;
  elements.refreshButton.classList.add("is-spinning");
  render();
});
elements.copyButton.addEventListener("click", copyToClipboard);
elements.printButton.addEventListener("click", () => printPassphrase());
elements.printEmojiButton.addEventListener("click", () => printPassphrase(true));
elements.downloadButton.addEventListener("click", () => downloadPassphrases());
elements.downloadConfirm.addEventListener("click", () => downloadPassphrases(true));
elements.downloadCount.addEventListener("change", () => {
  elements.downloadCount.value = String(positiveInteger(Number(elements.downloadCount.value), 1, MAX_DOWNLOAD_COUNT));
});
elements.downloadPanel.addEventListener("beforetoggle", event => {
  if (event.newState === "open" && !elements.downloadConfirm.disabled) {
    elements.downloadCount.value = "1";
  }
});
function setOptionVisible(button, visible) {
  button.classList.toggle("is-inactive", !visible);
  button.disabled = !visible;
  const panel = document.getElementById(button.dataset.popup);
  if (!visible && panel.matches(":popover-open")) panel.hidePopover();
}

function positionPopup(button, panel) {
  const anchor = button.getBoundingClientRect();
  panel.style.maxHeight = "";
  const bounds = panel.getBoundingClientRect();
  let left = anchor.right + 8;
  let top = Math.max(8, Math.min(anchor.top, innerHeight - bounds.height - 8));
  if (left + bounds.width > innerWidth - 8) {
    left = Math.max(8, Math.min(anchor.right + 8, innerWidth - bounds.width - 8));
    const below = innerHeight - anchor.bottom - 16;
    const above = anchor.top - 16;
    const useBelow = below >= Math.min(bounds.height, 160) || below >= above;
    const available = Math.max(0, useBelow ? below : above);
    panel.style.maxHeight = `${available}px`;
    top = useBelow ? anchor.bottom + 8 : anchor.top - Math.min(bounds.height, available) - 8;
  }
  panel.style.left = `${left}px`;
  panel.style.top = `${top}px`;
}

const popupButtons = Array.from(document.querySelectorAll("[data-popup]"));
popupButtons.forEach(button => {
  const panel = document.getElementById(button.dataset.popup);
  button.setAttribute("popovertarget", panel.id);
  let hoverOnly = false;
  let hoverCloseTimer = 0;
  const open = () => {
    if (!panel.matches(":popover-open")) panel.showPopover();
    positionPopup(button, panel);
  };
  button.addEventListener("click", event => {
    if (hoverOnly) { event.preventDefault(); hoverOnly = false; }
  });
  if (button.classList.contains("warning-button") || button === elements.copyStatus) {
    const cancelHoverClose = () => window.clearTimeout(hoverCloseTimer);
    const closeAfterHover = () => {
      if (!hoverOnly || button === elements.separatorWarning) return;
      // Allow the pointer to cross the gap between the button and its panel.
      hoverCloseTimer = window.setTimeout(() => {
        if (hoverOnly && !panel.contains(document.activeElement)) panel.hidePopover();
      }, HOVER_CLOSE_DELAY);
    };
    button.addEventListener("pointerenter", event => {
      cancelHoverClose();
      if (event.pointerType === "mouse" && !button.disabled && !panel.matches(":popover-open")) {
        hoverOnly = true;
        open();
      }
    });
    button.addEventListener("pointerleave", closeAfterHover);
    panel.addEventListener("pointerenter", cancelHoverClose);
    panel.addEventListener("pointerleave", closeAfterHover);
  }
  panel.addEventListener("beforetoggle", event => {
    if (event.newState === "open") panel.style.visibility = "hidden";
  });
  panel.addEventListener("toggle", () => {
    const open = panel.matches(":popover-open");
    button.setAttribute("aria-expanded", String(open));
    if (open) positionPopup(button, panel);
    panel.style.visibility = "";
    if (!open) {
      window.clearTimeout(hoverCloseTimer);
      hoverOnly = false;
    }
  });
  panel.querySelector("[data-close]").addEventListener("click", () => {
    panel.hidePopover();
    button.focus();
  });
});
function repositionPopups() {
  popupButtons.forEach(button => {
    const panel = document.getElementById(button.dataset.popup);
    if (panel.matches(":popover-open")) positionPopup(button, panel);
  });
}
window.addEventListener("resize", repositionPopups);
document.addEventListener("scroll", event => {
  if (event.target instanceof Element && event.target.closest("[popover]")) return;
  repositionPopups();
}, true);
elements.versionButton.addEventListener("click", () => {
  elements.changelogDialog.showModal();
  markVersionSeen();
});
elements.changelogDialog.addEventListener("click", (event) => {
  if (event.target !== elements.changelogDialog) return;

  const bounds = elements.changelogDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right
    || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    elements.changelogDialog.close();
  }
});
elements.passphraseOutput.addEventListener("click", copyToClipboard);
elements.passphraseOutput.addEventListener("keydown", function copyPassphraseWithKeyboard(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    copyToClipboard();
  }
});
elements.settingsForm.addEventListener("submit", function preventSettingsSubmit(event) {
  event.preventDefault();
});
elements.wordCount.addEventListener("input", function updateWordCount() {
  if (elements.wordCount.value !== "") {
    render();
  }
});
elements.wordCount.addEventListener("change", () => render(false));
elements.separator.addEventListener("input", () => render(false));
document.querySelectorAll("[data-separator]").forEach(button => {
  button.addEventListener("click", () => {
    elements.separator.value = button.dataset.separator;
    render(false);
    elements.separator.focus();
  });
});
elements.capitalize.addEventListener("change", () => render(false));
elements.capitalizeAll.addEventListener("change", () => render(false));
elements.addRandomDigit.addEventListener("change", () => render(false));
elements.digitCount.addEventListener("input", () => {
  if (elements.digitCount.value !== "") render(false);
});
elements.digitCount.addEventListener("change", () => render(false));
elements.commonOnly.addEventListener("change", render);
elements.showEmojis.addEventListener("change", () => render(false));

checkVersionUpdate();
render();
