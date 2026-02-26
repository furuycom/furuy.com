---

title: "Change Chromium-Based Browser Language on Linux"
date: '2026-02-26'
lastmod: '2026-02-26'
translationKey: "chromium-browser-language-linux"

# searchHidden: true

# ShowToc: false

# hideMeta: true

# robotsNoIndex: true

# sitemap:

# disable: true

# comments: false

# categories: ["..."]

# tags: ["..."]

# cover:

# image: "/assets/img/filename.webp"

---

Chromium-based browsers on Linux (Chrome, Brave, etc.) don't have a built-in UI language setting, but you can still change it manually.

---

## 1) One-time: CLI

The simplest way is to pass the `LANGUAGE` environment variable when launching the browser.

🇺🇸 **English (EN)**

```bash
LANGUAGE=en_US:en chromium-browser
```

🇹🇷 **Turkish (TR)**

```bash
LANGUAGE=tr_TR:tr chromium-browser
```

The command name may differ depending on your distro. Examples:

* `chromium-browser`
* `chromium`
* or full path: `/usr/bin/chromium-browser`

Generic format:

```bash
LANGUAGE=target_lang /path/to/browser
```

### Do you need `LC_ALL`?

Usually no. If parts of the UI still show the old language/format, you can use a stronger override:

🇺🇸 **English (EN)**

```bash
LANGUAGE=en_US:en LC_ALL=en_US.UTF-8 chromium-browser
```

🇹🇷 **Turkish (TR)**

```bash
LANGUAGE=tr_TR:tr LC_ALL=tr_TR.UTF-8 chromium-browser
```

---

## 2) Permanent: GUI

To make it permanent, add `env LANGUAGE=...` at the start of the `Exec=` line in the app's `.desktop` launcher.

Instead of editing the system `.desktop` file directly, the cleanest approach is:

1. Find the `.desktop` file (usually under `/usr/share/applications/`).
2. Copy it to `~/.local/share/applications/`.
3. Edit the copied file's `Exec=` line.

Example transformation:

* Before:
  `Exec=chromium-browser %U`

* After (🇺🇸 EN):
  `Exec=env` `LANGUAGE=en_US:en` `chromium-browser %U`

* After (🇹🇷 TR):
  `Exec=env` `LANGUAGE=tr_TR:tr` `chromium-browser %U`

---

## 3) Flatpak

### One-time

🇺🇸 **English (EN)**

```bash
flatpak run --env=LANGUAGE=en_US:en org.chromium.Chromium
```

🇹🇷 **Turkish (TR)**

```bash
flatpak run --env=LANGUAGE=tr_TR:tr org.chromium.Chromium
```

### Permanent

🇺🇸 **English (EN)**

```bash
flatpak override --user --env=LANGUAGE=en_US:en org.chromium.Chromium
```

🇹🇷 **Turkish (TR)**

```bash
flatpak override --user --env=LANGUAGE=tr_TR:tr org.chromium.Chromium
```

To revert:

```bash
flatpak override --user --unset-env=LANGUAGE org.chromium.Chromium
```

---

**Tip:** Run `locale -a` to list the available languages on your system. To browse the exact language codes, check the [List of ISO 639 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes).
