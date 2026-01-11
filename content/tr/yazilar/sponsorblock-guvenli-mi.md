---
title: "SponsorBlock Güvenli Mi?"
date: "2021-08-29"
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
  - "Güvenlik & Mahremiyet"
  - "İnternet"
  - "Uygulamalar"
tags: 
  - "SponsorBlock"

# cover:
#   image: "/assets/img/filename.webp"

aliases:
  - /sponsorblock-guvenli-mi/
---


> Bu yazı uzun zamandır güncellenmemektedir!

SponsorBlock, YouTube'daki bir videoda bulunan sponsorlu ve diğer istenmeyen kısımları atlayabilmenizi sağlayan bir yazılımdır. Genellikle tarayıcı uzantısı olarak kullanılan bu yazılım, size bir hayli zaman kazandırabilir ve videoya daha iyi odaklanabilmenizi sağlar. Bu yazıda, SponsorBlock'un ne kadar güvenli olduğundan ve mahremiyetinize ne kadar saygı duyduğundan bahsedeceğim.

## Açık Kaynak Kodlu

SponsorBlock, hem uygulama hem de sunucu taraflı olarak tamamen açık kaynak kodludur. Tarayıcı uzantısı olan uzantının kaynak kodlarına [bu](https://github.com/ajayyy/SponsorBlock) bağlantıdan, sunucu kaynak kodlarına ise [bu](https://github.com/ajayyy/SponsorBlockServer) bağlantıdan erişebilirsiniz.

## Gizlilik Politikası

**Kaynak:** [https://gist.github.com/ajayyy/aa9f8ded2b573d4f73a3ffa0ef74f796](https://gist.github.com/ajayyy/aa9f8ded2b573d4f73a3ffa0ef74f796)

Ayrıca, kullanım koşullarına (terms of use) göz atmak için de bu sayfayı ziyaret edebilirsiniz: [https://gist.github.com/ajayyy/9e8100f069348e0bc062641f34d6af12](https://gist.github.com/ajayyy/9e8100f069348e0bc062641f34d6af12)

### Log Dosyaları

Toplanan neredeyse tüm veriler, [https://sponsor.ajay.app/database](https://sponsor.ajay.app/database) adresindeki veri tabanında [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) lisansı altında herkese açık olarak bulunuyor. Oylar ve hashlenmiş IP adresleri ise özel bir veri tabanında bulunuyor.

Toplanan veriler:

1. Gönderdiğiniz bilgiler (videonun segmentleri, oylar)
2. userID'nizin hashlenmiş hali (uzantıyı ilk kurduğunuzda rastgele üretilir)
3. Gönderimi yaptığınız zaman
4. IP adresinizin hashlenmiş ve salt'lanmış hali. ([https://github.com/ajayyy/SponsorBlockServer/blob/master/src/utils/getHash.ts](https://github.com/ajayyy/SponsorBlockServer/blob/master/src/utils/getHash.ts))
5. Client adınız (uzantı, port vs.)
6. Tercihe bağlı olarak, her bir segment atladığınızda da kayıt oluşturulur. Bu, leaderboard oluşturmayı sağlıyor. Bunu kapatmak için uzantı seçeneklerinden: _Enable Skip Count Tracking > OFF_

### Uzantıyı Kullanırken Server'a Gönderilen Bilgiler

Her bir YouTube videosuna eriştiğinizde:

- Videoya ait segmentler olup olmadığını sorgulamak için bir istek gönderilir. Bu istekte, video ID'sinin hashlenmiş halinin ilk dört karakteri bulunur. Bazı durumlarda (1/11) video ID'si doğrudan da bulunabilir. ([https://github.com/ajayyy/SponsorBlock/wiki/K-Anonymity](https://github.com/ajayyy/SponsorBlock/wiki/K-Anonymity))

Her bir segmenti atladığınızda:

- "Enable Skip Count Tracking" özelliği aktif ise segmentin ID'si ile birlikte bir anonim istek gönderilir.

Her oy verdiğinizde:

- userID ve segment ID'si ile birlikte hash'lenmiş IP adresiniz gönderilir.

Her segment gönderdiğinizde:

- Video ID'si, userID'niz ve hashlenmiş IP adresiniz gönderilir.

Kullanıcı sayacı:

- IP adresi; hashlenmiş ve 48 saatte bir değişecek şekilde salt edilmiş halde bulunur. Bu veri, yalnızca hafızada (memory) tutulur. Bu veri, [istatistikler](https://sponsor.ajay.app/stats/) sayfasında kullanılır. (Detaylar: [https://github.com/ajayyy/PrivacyUserCount/#privacy-user-counter](https://github.com/ajayyy/PrivacyUserCount/#privacy-user-counter))

### Veri Erişim Ve Silme Talepleri

Bu işlem için resmi e-posta adresine talebinizi iletmeniz gerekiyor.

### YouTube API

SponsorBlock, server taraflı olarak YouTube API'ını kullanır. Bilgi almak için [Google Gizlilik Politikası](https://policies.google.com/privacy) ve [YouTube Kullanım Şartları](https://www.youtube.com/t/terms) sayfalarını ziyaret edebilirsiniz.

## SponsorBlock Resmi Bağlantıları

Resmi web site adresi: [https://sponsor.ajay.app/](https://sponsor.ajay.app/)

Tarayıcınıza ekleyin: [https://addons.mozilla.org/tr/firefox/addon/sponsorblock/](https://addons.mozilla.org/tr/firefox/addon/sponsorblock/)
