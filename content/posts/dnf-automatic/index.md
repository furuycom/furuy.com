---
title: "DNF Automatic İle Paketleri Otomatik Güncelleyin"
date: "2022-05-26"
categories: 
  - "gnu-linux"
  - "guvenlik-mahremiyet"
tags: 
  - "dnf"
  - "dnf-automatic"
  - "fedora"
  - "rhel"
  - "rpm"
  - "systemd"
cover:
  image: "/dnf-automatic/images/dnf-automatic.jpg"
---

**DNF Automatic** ile Fedora ve RHEL gibi DNF paket yöneticisine sahip [GNU/Linux](https://furuy.com/categories/gnu-linux/) dağıtımlarındaki güncelleme işlemlerini otomatikleştirmeniz mümkün.

## DNF Automatic'i Yükleyin

Bunun için kullandığınız terminale aşağıdaki kodu yazın ve yüklemeyi onaylarak, kurulumu tamamlayın:

```
sudo dnf install dnf-automatic
```

## DNF Automatic'i Yapılandırın

Otomatik güncellemeleri yapılandırmak için iki yöntem mevcut:

### /etc/dnf/automatic.conf Dosyasını Düzenleyin

Bu dosya, varsayılan yapılandırma dosyasıdır. Paketi yüklediğinizde oluşturulacaktır. Herhangi bir metin editörü ile dosyayı açın:

```
sudo vim /etc/dnf/automatic.conf
```


Yukarıdaki değerler, varsayılandır.

**upgrade\_type:** Bu alanda "default" veya "security" seçeneklerini kullanabilirsiniz. "default" seçeneği tüm güncellemeleri, "security" seçeneği ise yalnızca güvenlik güncellemelerini seçer. Gerek sunucunuzda, gerekse masa üstünüzde en azından "security" seçeneğini seçmek çok faydalı olacaktır. Bu sayede, güvenlik güncellemelerini hızlı ve otomatik bir şekilde yükleyebilirsiniz.

**random\_sleep:** Güncellemeleri indirmeden önce uygulanacak maksimum gecikme (delay). Dakika cinsinden yazmanız gerekiyor. Systemd timer'ları zaten 1 saate kadar, rastgele bir gecikme uyguladığı için varsayılan "0" değerini değiştirmenize gerek yok.

**network\_online\_timeout:** Saniye cinsinden, internete bağlı olup olunmadığının kontrol edileceği süre. "0" bu konrolü kapatır. Varsayılan olarak kalmasını tavsiye ederim.

**download\_updates:** Güncelleme mevcut olduğunda, bunları otomatik olarak indirir.

**apply\_updates:** Güncelleme mevcut olduğunda, bunları otomatik olarak yükler.

Bunların altındaki, "\[emitters\]" ile başlayan alanlar, işlemler tamamlandığında sonuçların nasıl raporlanacağını ayarlamanızı sağlar. E-posta raporlaması gibi bir ayarlama yapmayacaksanız, bu alanları varsayılan olarak bırakabilirsiniz.

Son olarak, systemctl komutu ile servisi aktifleştirin:

```
sudo systemctl enable --now dnf-automatic.timer
```

### Systemd Timer

Yukarıdaki dosyada herhangi bir işlem yapmadan, Systemd timer'larını kullanarak DNF Automatic'i yapılandırmanız da mümkün. Bunlardan birisini kullanmak, yukarıdaki yapılandırmanızı es geçecektir ve açıklamada belirtildiği gibi çalışacaktır. Altındaki kodu uygulamanız yeterlidir.

**dnf-automatic-notifyonly**: Güncelleme olduğunda, yalnızca bildirir.

```
sudo systemctl enable --now dnf-automatic-notifyonly.timer
```

**dnf-automatic-download**: Güncellemeleri indirir.

```
sudo systemctl enable --now dnf-automatic-download.timer
```

**dnf-automatic-install**: Güncellemeleri yükler.

```
sudo systemctl enable --now dnf-automatic-install.timer
```

* * *

Bu işlemlerden sonra, güncellemeleri kolaylıkla otomatikleştirebilirsiniz. Systemd timer'larını kontrol etmek için aşağıdaki komutu kullanın:

```
sudo systemctl list-timers
```

**KAYNAKLAR**

1. [https://dnf.readthedocs.io/en/latest/automatic.html](https://dnf.readthedocs.io/en/latest/automatic.html)
2. [https://fedoraproject.org/wiki/AutoUpdates](https://fedoraproject.org/wiki/AutoUpdates)
