---
title: "Linux'ta Chromium Tabanlı Tarayıcı Dilini Değiştirme"
date: '2026-02-26'
lastmod: '2026-02-26'

translationKey: "chromium-browser-language-linux"

# searchHidden: true
# ShowToc: false
# hideMeta: true
# robotsNoIndex: true
# sitemap:
#   disable: true
# comments: false

tags: ["Linux", "Chromium", "Brave", "Flatpak"]

# cover:
#   image: "/assets/img/filename.webp"
---

Linux'ta Chromium tabanlı tarayıcılarda (Chrome, Brave vb.) tarayıcının arayüz dilini değiştirme seçeneği olmasa da bunu yapmak mümkün. 

---

## 1) Tek seferlik: CLI

En pratik yöntem, tarayıcıyı çalıştırırken `LANGUAGE` değişkenini vermek.

🇹🇷 **Türkçe (TR)**

```bash
LANGUAGE=tr_TR:tr chromium-browser
```

🇺🇸 **English (EN)**

```bash
LANGUAGE=en_US:en chromium-browser
```

Sisteme göre komut adı farklı olabilir. Örnekler:

* `chromium-browser`
* `chromium`
* veya tam yol ile: `/usr/bin/chromium-browser`

Genel format:

```bash
LANGUAGE=hedef_dil /path/to/browser
```

### `LC_ALL` gerekli mi?

Çoğu durumda gerekli değil. Eğer arayüzün bir kısmı eski dilde veya formatta kalıyorsa deneyebilirsiniz:

🇹🇷 **Türkçe (TR)**

```bash
LANGUAGE=tr_TR:tr LC_ALL=tr_TR.UTF-8 chromium-browser
```

🇺🇸 **English (EN)**

```bash
LANGUAGE=en_US:en LC_ALL=en_US.UTF-8 chromium-browser
```

---

## 2) Kalıcı çözüm: GUI

Kalıcı yapmak için `.desktop` kısayolundaki `Exec=` satırına komutun başına `env LANGUAGE=...` eklenir.

Sistem dizinindeki `.desktop` dosyasını doğrudan düzenlemek yerine en temiz yöntem:

1. `.desktop` dosyasını (genelde `/usr/share/applications/` klasöründedir) bulun.
2. `~/.local/share/applications/` altına kopyalayın.
3. Kopyadaki `Exec=` satırını düzenleyin.

Örnek dönüşüm:

* Önce:
  `Exec=chromium-browser %U`

* Sonra (🇹🇷 TR):
  `Exec=env` `LANGUAGE=tr_TR:tr` `chromium-browser %U`

* Sonra (🇺🇸 EN):
  `Exec=env` `LANGUAGE=en_US:en` `chromium-browser %U`

---

## 3) Flatpak

### Tek seferlik

🇹🇷 **Türkçe (TR)**

```bash
flatpak run --env=LANGUAGE=tr_TR:tr org.chromium.Chromium
```

🇺🇸 **English (EN)**

```bash
flatpak run --env=LANGUAGE=en_US:en org.chromium.Chromium
```

### Kalıcı

🇹🇷 **Türkçe (TR)**

```bash
flatpak override --user --env=LANGUAGE=tr_TR:tr org.chromium.Chromium
```

🇺🇸 **English (EN)**

```bash
flatpak override --user --env=LANGUAGE=en_US:en org.chromium.Chromium
```

Geri almak için:

```bash
flatpak override --user --unset-env=LANGUAGE org.chromium.Chromium
```

---

**İpucu:** Sisteminizde kurulu olan dilleri listelemek için `locale -a` komutunu çalıştırabilirsiniz. Tüm dil kodlarına göz atmak için [ISO 639 dil kodları listesine](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) bakabilirsiniz.
