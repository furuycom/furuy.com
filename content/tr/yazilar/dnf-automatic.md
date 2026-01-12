---
title: "DNF Automatic İle Paketleri Otomatik Güncelleyin"
date: "2022-05-26"
# lastmod: "{{ .Lastmod }}"
# translationKey:  ""

# searchHidden: true
# ShowToc: false
# hideMeta: true
# robotsNoIndex: true
# sitemap:
#   disable: true
# comments: false

categories: 
  - "GNU/Linux"
tags:
  - "Fedora"
  - "dnf"

# cover:
#   image: "/assets/img/filename.webp"

aliases:
  - /dnf-automatic/
---

**DNF Automatic** ile Fedora ve RHEL gibi DNF paket yöneticisine sahip GNU/Linux dağıtımlarındaki güncelleme işlemlerini otomatikleştirmeniz mümkün.

## DNF Automatic'i Yükleyin

Bunun için kullandığınız terminale aşağıdaki kodu yazın ve yüklemeyi onaylayarak, kurulumu tamamlayın:

```bash
sudo dnf install dnf-automatic
```

## DNF Automatic'i Yapılandırın

Otomatik güncellemeleri yapılandırmak için iki yöntem mevcut:

### /etc/dnf/automatic.conf Dosyasını Düzenleyin

Bu dosya, varsayılan yapılandırma dosyasıdır. Paketi yüklediğinizde oluşturulacaktır. Herhangi bir metin editörü ile dosyayı açın:

```bash
sudo vim /etc/dnf/automatic.conf
```


Yukarıdaki değerler, varsayılandır.

**upgrade_type:** Bu alanda "default" veya "security" seçeneklerini kullanabilirsiniz. "default" seçeneği tüm güncellemeleri, "security" seçeneği ise yalnızca güvenlik güncellemelerini seçer. Gerek sunucunuzda, gerekse masaüstünüzde en azından "security" seçeneğini seçmek çok faydalı olacaktır. Bu sayede, güvenlik güncellemelerini hızlı ve otomatik bir şekilde yükleyebilirsiniz.

**random_sleep:** Güncellemeleri indirmeden önce uygulanacak maksimum gecikme (delay). Dakika cinsinden yazmanız gerekiyor. systemd timerları zaten 1 saate kadar, rastgele bir gecikme uyguladığı için varsayılan "0" değerini değiştirmenize gerek yok.

**network_online_timeout:** Saniye cinsinden, internete bağlı olup olunmadığının kontrol edileceği süre. "0" bu kontrolü kapatır. Varsayılan olarak kalmasını tavsiye ederim.

**download_updates:** Güncelleme mevcut olduğunda, bunları otomatik olarak indirir.

**apply_updates:** Güncelleme mevcut olduğunda, bunları otomatik olarak yükler.

Bunların altındaki, "[emitters]" ile başlayan alanlar, işlemler tamamlandığında sonuçların nasıl raporlanacağını ayarlamanızı sağlar. E-posta raporlaması gibi bir ayarlama yapmayacaksanız, bu alanları varsayılan olarak bırakabilirsiniz.

Son olarak, systemctl komutu ile servisi aktifleştirin:

```bash
sudo systemctl enable --now dnf-automatic.timer
```

### systemd Timer

Yukarıdaki dosyada herhangi bir işlem yapmadan, systemd timerlarını kullanarak DNF Automatic'i yapılandırmanız da mümkün. Bunlardan birisini kullanmak, yukarıdaki yapılandırmanızı es geçer ve açıklamada belirtildiği gibi çalışacaktır. Altındaki kodu uygulamanız yeterlidir.

**dnf-automatic-notifyonly**: Güncelleme olduğunda, yalnızca bildirir.

```bash
sudo systemctl enable --now dnf-automatic-notifyonly.timer
```

**dnf-automatic-download**: Güncellemeleri indirir.

```bash
sudo systemctl enable --now dnf-automatic-download.timer
```

**dnf-automatic-install**: Güncellemeleri yükler.

```bash
sudo systemctl enable --now dnf-automatic-install.timer
```

* * *

Bu işlemlerden sonra, güncellemeleri kolaylıkla otomatikleştirebilirsiniz. systemd zamanlayıcıları kontrol etmek için aşağıdaki komutu kullanın:

```bash
sudo systemctl list-timers
```

**KAYNAKLAR**

1. [https://dnf.readthedocs.io/en/latest/automatic.html](https://dnf.readthedocs.io/en/latest/automatic.html)
2. [https://fedoraproject.org/wiki/AutoUpdates](https://fedoraproject.org/wiki/AutoUpdates)
