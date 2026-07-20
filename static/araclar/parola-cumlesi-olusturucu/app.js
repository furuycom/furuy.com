"use strict";

const MIN_WORD_COUNT = 1;
const DEFAULT_WORD_COUNT = 5;
const UINT32_RANGE = 2 ** 32;
const CLEAN_WORD_PATTERN = /^[A-Za-zÇĞİÖŞÜçğıöşü]+$/;
const EXCLUDED_LETTER_PATTERN = /[qQwWxX]/;
const VOWEL_PATTERN = /[aeıioöuüAEIİOÖUÜ]/;

const elements = {
  errorBox: document.getElementById("errorBox"),
  passphraseOutput: document.getElementById("passphraseOutput"),
  refreshButton: document.getElementById("refreshButton"),
  copyButton: document.getElementById("copyButton"),
  copyStatus: document.getElementById("copyStatus"),
  copyButtonIcon: document.querySelector("#copyButton span"),
  settingsForm: document.getElementById("settingsForm"),
  wordCount: document.getElementById("wordCount"),
  separator: document.getElementById("separator"),
  capitalize: document.getElementById("capitalize"),
  addRandomDigit: document.getElementById("addRandomDigit"),
  listSize: document.getElementById("listSize")
};

let currentPassphrase = "";
let statusTimer = 0;
let copyIconTimer = 0;
let currentInfoMessage = "";
let currentInfoClass = "";

function getWordList() {
  const wordList = window.PASSPHRASE_TR_WORDLIST;

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

  return wordList;
}

function isCleanWord(word) {
  return typeof word === "string"
    && Array.from(word).length > 2
    && CLEAN_WORD_PATTERN.test(word)
    && !EXCLUDED_LETTER_PATTERN.test(word)
    && VOWEL_PATTERN.test(word);
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

function generatePassphrase(options) {
  const wordList = getWordList();
  const words = [];

  for (let index = 0; index < options.wordCount; index += 1) {
    const word = wordList[secureRandomInt(wordList.length)];
    words.push(options.capitalize ? capitalizeWord(word) : word);
  }

  if (options.addRandomDigit) {
    const digitIndex = secureRandomInt(options.wordCount);
    const digit = secureRandomInt(10);
    words[digitIndex] += String(digit);
  }

  return {
    text: words.join(options.separator),
    words
  };
}

function capitalizeWord(word) {
  const characters = Array.from(String(word));

  if (characters.length === 0) {
    return "";
  }

  characters[0] = characters[0].toLocaleUpperCase("tr-TR");
  return characters.join("");
}

function calculateEntropy(options, wordListLength) {
  let entropy = options.wordCount * Math.log2(wordListLength);

  if (options.addRandomDigit) {
    entropy += Math.log2(options.wordCount * 10);
  }

  return entropy;
}

function render() {
  const options = readOptions();

  clearStatus({ keepTimer: false });
  updateControls(options);

  try {
    const wordList = getWordList();
    const passphrase = generatePassphrase(options);
    const entropy = calculateEntropy(options, wordList.length);

    currentPassphrase = passphrase.text;
    renderPassphraseOutput(passphrase.words, options.separator);
    elements.passphraseOutput.title = "Kopyalamak için tıklayın";
    elements.passphraseOutput.setAttribute("aria-label", "Üretilen parola cümlesi. Kopyalamak için tıklayın.");
    resetCopyIcon();
    elements.copyButton.disabled = false;
    elements.refreshButton.disabled = false;
    setError("");
    updateInfo(entropy, wordList.length, options.wordCount);
  } catch (error) {
    currentPassphrase = "";
    elements.passphraseOutput.textContent = "";
    updatePassphraseOutputSize("");
    elements.passphraseOutput.title = "";
    elements.passphraseOutput.removeAttribute("aria-label");
    resetCopyIcon();
    elements.copyButton.disabled = true;
    elements.refreshButton.disabled = true;
    setError(error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu.");
    updateInfo(null, getLoadedWordListSize(), options.wordCount);
  }
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

  try {
    await navigator.clipboard.writeText(currentPassphrase);
    clearStatus({ keepTimer: false });
    showCopySuccessIcon();
  } catch (error) {
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
    addRandomDigit: elements.addRandomDigit.checked
  };
}

function clampWordCount(value) {
  if (!Number.isInteger(value) || value < MIN_WORD_COUNT) {
    return DEFAULT_WORD_COUNT;
  }

  return value;
}

function readSeparator(value) {
  return String(value) || " ";
}

function updateControls(options) {
  elements.wordCount.value = String(options.wordCount);
}

function updateInfo(entropy, listSize, wordCount) {
  const message = entropy === null ? "Entropi hesaplanamadı" : `≈ ${entropy.toFixed(1)} bit entropi`;
  const className = entropy === null ? "status-error" : `entropy-${Math.min(wordCount, 6)}`;

  currentInfoMessage = message;
  currentInfoClass = className;
  elements.listSize.textContent = `(${listSize})`;
  elements.copyStatus.textContent = message;
  elements.copyStatus.className = `status ${className}`;
}

function renderPassphraseOutput(words, separator) {
  const fragment = document.createDocumentFragment();

  words.forEach(function appendWord(word, index) {
    const tokenElement = document.createElement("span");
    const wordElement = document.createElement("span");

    tokenElement.className = "passphrase-token";
    wordElement.className = "passphrase-word";
    appendHighlightedWord(wordElement, word);
    tokenElement.appendChild(wordElement);

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

function setStatus(message, type) {
  window.clearTimeout(statusTimer);
  statusTimer = 0;
  elements.copyStatus.textContent = message;
  elements.copyStatus.className = `status status-${type}`;

  if (message) {
    statusTimer = window.setTimeout(function hideStatus() {
      clearStatus({ keepTimer: true });
    }, 5000);
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
  elements.copyButtonIcon.textContent = "✓";
  elements.copyButton.classList.add("button-copied");

  copyIconTimer = window.setTimeout(resetCopyIcon, 500);
}

function resetCopyIcon() {
  window.clearTimeout(copyIconTimer);
  copyIconTimer = 0;

  if (!elements.copyButtonIcon) {
    return;
  }

  elements.copyButtonIcon.textContent = "⧉";
  elements.copyButton.classList.remove("button-copied");
}

function getLoadedWordListSize() {
  return Array.isArray(window.PASSPHRASE_TR_WORDLIST) ? window.PASSPHRASE_TR_WORDLIST.length : 0;
}


elements.refreshButton.addEventListener("click", function refreshPassphrase() {
  elements.refreshButton.classList.remove("is-spinning");
  void elements.refreshButton.offsetWidth;
  elements.refreshButton.classList.add("is-spinning");
  render();
});
elements.copyButton.addEventListener("click", copyToClipboard);
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
elements.wordCount.addEventListener("change", render);
elements.separator.addEventListener("input", render);
elements.capitalize.addEventListener("change", render);
elements.addRandomDigit.addEventListener("change", render);

render();
