---
title: "GoDaddy & Cloudflare DNSSEC Kurulumu"
date: "2021-09-17"
categories: 
  - "Güvenlik & Mahremiyet"
  - "Webmaster"
tags: 
  - "Cloudflare"
  - "DNSSEC"
  - "GoDaddy"
---

> Bu yazı uzun zamandır güncellenmemektedir!

GoDaddy'de barınan ve Cloudflare'a bağlı bir alan adı için DNSSEC'i aktifleştirmek çok kolay. DNSSEC özelliğini, aktifleştirebildiğiniz her alan adınız için aktifleştirmenizi tavsiye ederim. Şimdi gelin, bunu nasıl yapabileceğimize bakalım.

## Cloudflare

Öncellikle, Cloudflare hesabınıza giriş yapın ve istediğiniz alan adınızı seçin. Ardından, menüde bulunan DNS'e tıklayın. Sayfanın biraz aşağısında, DNSSEC bölümünü bulacaksınız. "**Enable DNSSEC**" butonuna basın ve burada görünen "**Key Tag, Algorithm, Digest Type-2, Digest**" bilgilerini not edin ve "Confirm" butonuna tıklayarak onaylayın.![Cloudflare DNSSEC Pending](/assets/img/cloudflare-dnssec-pending.jpg)

## GoDaddy

GoDaddy hesabınıza giriş yapın ve istediğiniz alan adınızın "**DNS Yönetimi**" sayfasına gidin. Sayfanın aşağısındaki **DNSSEC** bağlantısına tıklayın. "**EKLE**" butonuna tıklayın. Alanları, not ettiğiniz bilgilerden doldurun:

_Anahtar Etiketi - Key Tag_  
_Algoritma - Algorithm_  
_Özet Türü - Digest Type-2 (SHA-256 ise 2'yi seçin)_  
_Özet - Digest_

Bilgileri doğru bir şekilde girdikten sonra güncelle butonuna tıklayın.

## Sonuç

Değişiklik gösterebilmekle birlikte, kısa bir süre bekleyin. İşlemler tamamlandığı zaman, Cloudflare panelinde bunu görebileceksiniz.![Cloudflare DNSSEC Success](/assets/img/cloudflare-dnssec-success.jpg)Ayrıca [dnssec-analyzer.verisignlabs.com](https://dnssec-analyzer.verisignlabs.com/) bağlantısından da durumunu kontrol edebilirsiniz.

![Verisign DNSSEC](/assets/img/verisign-dnssec.jpg)
