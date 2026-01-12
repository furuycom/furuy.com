---
title: "Domain Firması Seçerken Dikkat Edilmesi Gerekenler"
date: "2025-03-10"
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
  - "Web Yönetimi"
tags:
  - "Domain"
  - "DNSSEC"
  - "WHOIS"
  - "Web Güvenliği"

# cover:
#   image: "/assets/img/filename.webp"

aliases:
  - /domain-firmasi-secimi-rehberi/
---

Yanlış bir domain firması seçimi, güvenlik açıkları, maliyet artışları ve yönetim zorluklarına yol açabilir. Bu makalede, güvenilir bir domain sağlayıcısında olması gereken kritik özellikleri paylaşacağım.

## WHOIS Gizliliği (WHOIS Privacy)

WHOIS veri tabanı, domain sahibinin iletişim bilgilerini (ad, e-posta, telefon, adres vb.) herkese açık şekilde gösterir. Bu bilgiler, domain kayıt esnasında sağlanan kişisel bilgilerden oluşur. WHOIS gizliliği özelliği, bu kişisel verilerin ifşa edilmesini önler.

**İstenen Özellikler:**

* **Otomatik WHOIS Gizliliği:** Domain kayıt esnasında otomatik olarak WHOIS bilgileri gizlenmelidir.
* **Ücretsiz WHOIS Gizliliği:** Bazı domain kayıt firmaları, WHOIS gizleme özelliğini ücretsiz olarak sunar. Ek maliyet olmaksızın sunulması tercih edilir. (İsteğe bağlı)

## DNSSEC Desteği

DNSSEC, DNS cache poisoning ve DNS spoofing gibi saldırıları önleyerek, DNS sorgularının güvenliğini sağlar ve kullanıcının doğru IP adresine yönlendirilmesini garanti eder.

**İstenen Özellikler:**

* DNSSEC'in yönetim panelinden kolayca etkinleştirilebilmesi.

## Şeffaf Fiyatlandırma ve Yenileme Politikası

Bazı firmalar ilk yıl düşük fiyat verip sonraki yıllarda ücretleri yükselterek gizli maliyetler yaratır.

**İstenen Özellikler:**

* **Açık Fiyatlandırma:** Tüm ücretlerin (ilk yıl ve yenileme ücretleri) açıkça belirtilmesi.
* **Uzatma Bildirimi:** Domain süresi dolmadan otomatik hatırlatma.

## Domain Transfer Kolaylığı

Bazı firmalar domain transferini kasıtlı olarak zorlaştırır (örneğin, Auth Code göndermeyi geciktirir).

**İstenen Özellikler:**

* Auth Code'un anında ve panel üzerinden alınabilmesi.

## Domain Kilidi (Registrar Lock)

Yetkisiz domain transferlerini önlemek için domain kilitleme mekanizması kritik öneme sahiptir.

**İstenen Özellikler:**

* **Varsayılan Kilit:** Domainin otomatik olarak kilitli tutulması.
* **Kolay Kilidi Açma:** Transfer için kilidi kaldırma işleminin basit olması.

## Güvenlik ve İki Faktörlü Kimlik Doğrulama (2FA/MFA)

Domain yönetim hesabınız için iki adımlı doğrulama desteği, ek bir güvenlik katmanı sağlar.

**İstenen Özellikler:**

* **2FA Desteği:** Google Authenticator, SMS veya e-posta ile doğrulama.
* **Anormal Aktivite Uyarıları:** Şüpheli giriş denemelerinde anında bildirim.

## ICANN Akreditasyonu ve Güvenilirlik

ICANN akreditasyonu, firmanın uluslararası standartlara uygun olduğunu gösterir.

**Nasıl Kontrol Edilir?**

[ICANN Resmi Listesi](https://www.icann.org/en/accredited-registrars) üzerinden firma adını doğrulayın.

Bir domain firması seçerken sadece fiyat odaklı davranmayın. Güvenlik, şeffaflık ve destek hizmetleri gibi kritik özellikleri mutlaka değerlendirin. Bu maddeler, doğru tercihi yapmanız için size rehberlik edecektir.
