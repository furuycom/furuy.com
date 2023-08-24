---
title: "Brave Tarayıcısı İle İstediğiniz Reklamı Engelleyin"
date: "2021-04-16"
categories: 
  - "uygulamalar"
tags: 
  - "brave-browser"
---

Brave Browser, reklam engelleme ve diğer birçok özelliği ile tavsiye edilen bir tarayıcı. Brave Browser'ın güzel özelliklerinden bazıları şunlar:

- Açık kaynak kodlu
- Fingerprint koruması
- HTTPS Everywhere
- Reklam engelleme
- Takipçi engelleme
- Çerezler denetimi

Brave Browser, Google Chrome tarayıcısının güzel bir alternatifi olarak karşımıza çıkıyor ama yine de kullanmanızı tavsiye etmiyorum. Firefox tarayıcısını beğenmediyseniz, son çare olarak deneyebilirsiniz ama Chromium tabanlı olduğu için Google'dan bağımsız kalması mümkün değil. Firefox'a mutlaka bir şans verin.

## Brave Reklam Engelleme Özelliği

Google politikaları nedeniyle reklam engelleyici uygulamalar, kısıtlı bir reklam engelleme özelliği sunabiliyorlar; bu politikalara uymayan Adaway ve Adguard gibi uygulamalar, Play Store'da yer alamıyorlar. (Adguard'ın tam sürümünü, resmi web sitesinden .apk olarak indirmeniz gerekiyor; Google Play Store'daki sürümü tam işlevli değildir.)

Bu politikalar elbette Brave tarayıcısını da etkilemiş olacak ki, varsayılan olarak her reklam engellenmiyor. Burada yardımımıza, Brave'in özel filtreler özelliği yetişiyor. (Firefox'un uBlock Origin eklentisini destekleyen Android tarayıcısının yanında çok yetersiz kalsa da, Chrome tarayıcısından çok daha iyi.)

## Brave Browser - Özel Filtreler

Özel filtreler ekleyebileceğiniz sayfaya ulaşmak için, adres çubuğuna "**brave://adblock**" yazın.

![brave://adblock](/assets/img/brave-adblock.jpg)

Bu sayfada, gerekli olan filtreleri aktifleştirebilirsiniz ama yalnızca gerekli olanları aktifleştirin çünkü birçok filtre, isimlerinden de görebileceğiniz üzere ülke bazlı oluşturulmuş ve çok fazla filtre kullanmak, tarayıcınızı yavaşlatabilir. Benim seçtiğim filtreleri seçmeniz yeterli olabilir.

Ayrıca yeni özellik ile, istediğiniz filtreler abone olabiliyorsunuz.

## Farklı Filtreler Bulmak Ve Brave'e Eklemek

Farklı filtreler kullanarak, daha fazla reklamı engelleyebilir ve tarayıcı deneyiminizi artırabilirsiniz.

Burada dikkat çekmek istediğim bir nokta var: Bazı filtreler, hem Adblock Plus, hem de Adaway uyumlu olabiliyor. Adaway ile hosts filtrelemesi yapmak varken, bunları tarayıcınıza eklemeyin. Bu sayede hem tarayıcınız yavaşlamaz, hem de o web sitesine bağlantıyı tamamen engellemiş olursunuz. 

Özel filtrelerin kategorik ve açıklamalı bir şekilde yer aldığı, [FilterLists](https://filterlists.com/) isimli bir web sitesi var. Bu web sitesinden, ihtiyacınızı karşılayacak filtreleri kolaylıkla bulabilirsiniz. FilterLists hakkında detaylı bilgi almak isterseniz, [FilterLists İle Yeni Reklam Engelleyici Filtreleri Bulun](https://furuy.com/filterlists-com/) isimli yazımı okumanızı öneririm.

![FilterLists.com](/assets/img/filterlists.jpg)

Burada önemli olan, "Syntaxes" kısmından, yalnızca "Adblock Plus" seçeneğini işaretlemek çünkü bir üst görselde de görebileceğiniz gibi, Brave tarayıcısının  reklam engelleme aracında yalnızca Adblock Plus syntax'ı destekleniyor.

![FilterLists Custom Filter](/assets/img/filterlists-custom-filter.jpg)

Kullanmak istediğiniz filtrenin solundaki mavi butona tıklayın ve açılan pencerede View'e tıklayın. Açılacak yeni penceredeki her şeyi kopyalayın, "brave://adblock" sayfasının alt kısmına yapıştırın ve tarayıcıyı yeniden başlatın. **Yeni yöntem:** Buna alternatif olarak, bir filtreye abone olmak için View butonundaki bağlantıyı kopyalayın ve "brave://adblock" sayfasındaki "Subscribe to filter lists" bölümüne bu bağlantıyı ekleyin.. Bu yöntemler ile istediğiniz bir reklam engelleme filtresini kullanabilirsiniz.

## Brave İle İstediğiniz Reklamı Engelleme

Reklam engellemek için Adblock Plus syntax'ı kullanıldığını öğrendik. Artık, buna göre istediğimiz reklamı engelleyebiliriz. Adblock Plus syntaxını öğrenmek için bu sayfayı ziyaret edebilirsiniz:

[How to write filters | Adblock Plus Help Center](https://help.eyeo.com/adblockplus/how-to-write-filters)

Şimdi, anlattığımız şekilde, bir reklamı engelleyelim (mobil tarayıcıdan yapıyorum). Bir web sitesinde, aşağıdaki gibi bir reklam var (Bu makaleyi yazarken, aşağıdaki firma henüz şu anki durumda değildi. Bu bir reklam değildir, ilgili görseldeki web siteyi ziyaret etmenizi kesinlikle tavsiye etmiyorum.):

![Brave Reklam Engelleme - Adım 1](/assets/img/brave-reklam-engelleme-adim-1.jpg)

Öncelikle, bu reklam görselini engelleyelim (bu kodu brave://adblock sayfasına ekliyoruz):

```
https://example.com/thd/thodex1.gif
```

Sonuç:

![Brave Reklam Engelleme - Adım 2](/assets/img/brave-reklam-engelleme-adim-2.jpg)

Görsel yüklenmediği için kötü göründü.

Bundan sonra, geriye iki yöntem kalıyor.

### Bir bağlantıya yönlendiren elementleri kaldırmak

```
##a[href^="https://www.example.com/"]
```

Bu kod ile, belirttiğimiz adrese bağlantı veren tüm elementler engellenir.

### Div class ile engellemek

Sayfa kaynağından görebileceğiniz, elementin div class'ını bulun. Ardından kodu ekleyin:

```
##.reklam
```

### Sonuç

![Brave Reklam Engelleme - Adim 3](/assets/img/brave-reklam-engelleme-adim-3.jpg)

Gördüğünüz gibi, reklamı tamamen kaldırmış olduk.

**EKLEME (9 Şubat 2022):** Brave'in Android tarayıcısına, reklam engelleme filtrelerine abone olma desteği gelmiş. Ayrıca, tarayıcıya eklenen kripto cüzdan gibi özellikler ve okuduğum çeşitli yazılar nedeniyle, artık şüpheyle bakıyorum. Android için şu anki tarayıcı tavsiyelerim, Firefox veya Bromite olur.
