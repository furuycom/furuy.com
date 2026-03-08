---
title: "Neden Brave Kullanıyorum?"
date: '2026-03-02'
lastmod: '2026-03-07'
translationKey: "why-i-use-brave"

# searchHidden: true
# ShowToc: false
# hideMeta: true
# robotsNoIndex: true
# sitemap:
#   disable: true
# comments: false

tags: ["Android", "Brave", "Chromium", "Linux"]

# cover:
#   image: "/assets/img/filename.webp"
---

2021 yılında ["Firefox Neden En İyi Android Web Tarayıcısı?"](/tr/firefox-neden-en-iyi-android-web-tarayicisi/) adında bir yazı yazmış olsam da, tahminen 2022 yılından beri Brave kullanıyorum. Firefox'tan soğumam için pek çok sebebim var ama şu haber, kullanıcılarına ve geliştiricilerine ne kadar değer verdiklerini tek başına özetliyor:
> [Mozilla removes uBlock Origin Lite from Addon store. Developer stops developing Lite for Firefox; "it's worrisome what could happen to uBO in the future."](https://www.reddit.com/r/firefox/comments/1fsyprb/mozilla_removes_ublock_origin_lite_from_addon/)  

Bu yazıda Chromium tabanlı diğer tarayıcılar yerine neden Brave'i tercih ettiğimi anlatacağım.

## Shields (Kalkanlar)

### Reklam Engelleme
Yıllarca uBlock Origin'i [medium mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-medium-mode) seviyesinde kullanmış, [yalnızca reklam engelleyici olmadığını](https://github.com/gorhill/uBlock/wiki/Blocking-mode) bilen deneyimli bir kullanıcı olarak, karmaşık bir uBlock Origin yapılandırmasına ihtiyaç duymuyorsanız, Brave'in reklam engelleyicisinin yeterli olacağını söyleyebilirim.

Ayrıca EasyList, Fanboy's, uBO ve AdGuard gibi popüler topluluk listelerine ek olarak, Brave'in yönettiği `Block YouTube Shorts`, `Block YouTube recommended content` ve `Paywall blocker` gibi kullanışlı filtreler de var.

### Parmak İzi Koruması
Parmak izi koruması gayet başarılı ve stabil. Bildiğim kadarıyla varsayılan olarak en iyi korumayı, gündelik kullanımda sorun çıkartmayacak şekilde veren tek tarayıcı.

## AMP Yönlendirme
Yıllardır Brave kullandığım için bu AMP saçmalığı hala yaygın bir şekilde kullanılıyor mu bilmiyorum ama eskiden beni çok rahatsız ederdi. Brave sayesinde tamamen unuttuğum bir teknoloji oldu.

## Speedreader
Bu özellik sayfayı okuma moduna çevirir; metin ve görseller haricinde hiçbir şey görmezsiniz. Hem manuel hem de otomatik çalışabiliyor. Nadiren de olsa ana sayfaları okuma moduna alma sorunu haricinde oldukça stabil.  

**Bir örnek:** Aynı [hava durumu haberi sayfasına](https://www.veryansintv.com/meteoroloji-uyardi-8-ile-sari-kod-istanbula-kar-geliyor) ait 3 farklı görsel

**Reklam engelleyicisiz - Chromium**
![Reklamlı Haber Sayfası](/assets/img/speedreader-01-chromium-raw.webp)

**Reklam engelleyicili (uBlock Origin Lite) - Chromium**
![Reklamsız Haber Sayfası - uBlock Origin Lite](/assets/img/speedreader-02-chromium-ubol.webp)

**Speedreader - Brave**
![Brave Speedreader Modu](/assets/img/speedreader-03-brave-speedreader.webp)

## Senkronizasyon
Güvenli ve anonim bir senkronizasyon özelliği var. Genel olarak stabil çalışsa da birkaç sorun var:  
- Linux'tan Android'e bağlantı gönderirken bildirim bazen gecikiyor; beklemek istemezsem tarayıcıyı yeniden başlatıyorum ya da tekrar gönderiyorum.
- Parola senkronizasyonu varsayılan aktif geliyor; bunun güvenli bir varsayılan olduğunu düşünmüyorum.

## Wayback Machine Entegrasyonu (Masaüstü)
İnternette ulaşmaya çalıştığınız bir sayfada `404`, `410`, `451` gibi hatalarla karşılaşırsanız, ekranda küçük bir uyarı çıkıp sizi en güncel Archive.org (Wayback Machine) sürümüne yönlendirmeyi teklif ediyor.
![Wayback Machine Uyarısı](/assets/img/wayback-01-popup.webp)

## Bütünleşik Tor (Masaüstü)
Tarayıcının içindeki bu özelliği erişim engellerini aşmak için VPN yerine kullanıyorum. Örneğin, Türkiye'de anlamsız bir şekilde erişime engellenen Xcancel.com (Nitter instance) gibi sitelere girmek istediğimde işime yarıyor.

> **Uyarı:** Eğer Tor'u aktif bir şekilde kullanıyorsanız ve gerçekten anonim kalmanız gerekiyorsa, kesinlikle Tor Browser kullanmalısınız.

## Boş Yeni Sekme
Gereksiz gibi görünebilir ama gün içinde belki yüzlerce kez yeni sekme açıyorum. Her seferinde ikonlar, haberler, hava durumu vs. görmek dikkat dağıtıcı oluyor.

Brave:  
![Brave Boş Yeni Sekme](/assets/img/newtab-01-brave-empty.webp)

Chromium:  
![Chromium Yeni Sekme](/assets/img/newtab-02-chrome-doodle.webp)

## Alt Gezinme Araç Çubuğu (Android)
Buradan hızlıca sekmeler arasında kaydırabiliyor, yeni sekme açabiliyor, yer imi ekleyebiliyor ve menüye erişebiliyorum. Her seferinde parmağımı ekranın tepesine uzatmak zor oluyor.

## Menü Özelleştirme (Android)
Menü özelleştirme son zamanlarda en çok beğendiğim özelliklerden biri. Chrome'un araç çubuğu menüsü tüm ekranı kaplamasına rağmen bazı öğeler ekrana sığmıyor. Brave'de ise kullanmadığınız öğeleri gizleyerek sade bir menü yaratmak mümkün. Umarım bu özellik masaüstü sürümüne de gelir.

**Brave:**
![Brave Menü](/assets/img/android-menu-01-brave-customize.webp)

**Chrome:**
![Chrome Menü](/assets/img/android-menu-02-chrome-menu.webp)

## Arka Planda Oynatma (Android)
Bazen farklı tarayıcıları deniyorum ve geçen günlerde Chrome'a bir şans vermek istedim. NextDNS ile reklamları engellememe rağmen, bir reklam engelleyici olmadığında sayfaların ne kadar rahatsız edici hale geldiğini tekrar görmüş oldum. En rahatsız edici eksiğin bu olduğunu düşünüyordum ki Kick'ten bir canlı yayın açıp, ekranı kilitleyene kadar...

Sadece ekranı kilitlerken değil, sekme değiştirdiğimde bile video anında duruyordu. Biraz araştırınca, benim için standart haline gelmiş bu özelliğin aslında büyük bir lüks olduğunu hatırladım. Bunu Firefox'ta yapabilmek için de harici bir eklenti kurmak gerekiyordu.

## Yaşadığım Sorunlar
Her şey mükemmel değil elbette:  
- Linux'ta nadiren de olsa (yılda birkaç kez), sitelerin tümünden durduk yere çıkış yapma sorunu yaşıyorum. Çerezler silinmiş görünmemesine rağmen hesaplarımdan çıkış yapılmış oluyor. Bazen tarayıcıyı ilk açtığımda, bazen de güncelleme sonrası olabiliyor; henüz bir korelasyon kuramadım.
- Android'de ise birkaç günde bir Google ve Crypt.ee hesaplarından çıkış yapıyor. Yine günün rastgele zamanlarında olabiliyor.
- Android'deki "sekmeler kapatıldığında geri alma düğmesi göster" özelliğini seviyorum ama "geri al" düğmesi ekranda çok uzun süre kalıyor. Altındaki öğelere tıklamamı engelliyor ve kaydırarak gizlemek de mümkün olmuyor.

## Şikayetler ve Brave'in Çözümü
İnternette "Brave neden kötü?" diye kısa bir araştırma yaparsanız, genelde iki başlık öne çıkıyor:  
1. Zamanında kullanıcılara haber vermeden yaptıkları satış ortaklığı linkleri ekleme skandalı. Bu gerçekten büyük bir skandaldı ve güven sarstı.  
2. Tarayıcının gereksiz görülebilen özelliklerle dolu olması.

İlk skandaldan ders aldıklarını düşünüyorum. İkinci konuda ise kullanıcılar olarak ne kadar haklıysak, Brave de kendince o kadar haklı: Bir gelir modeli oluşturmak zorundalar. Bunu kullanıcıların verilerini gizlice toplayarak değil, isteğe bağlı özellikler sunarak yapmaya çalışıyorlar.

Daha da iyisi, Brave bu geri bildirimleri dikkate almış gibi görünüyor. Kullanıcıları sevindirecek doğru bir adım atarak "Brave Origin" adında yeni bir sürüm geliştiriyorlar. [Brendan Eich'e göre](https://x.com/BrendanEich/status/2006412918783619455) bu sürüm; telemetri, kripto, cüzdan, VPN veya yapay zeka gibi eklentilerden tamamen arındırılmış, hafifletilmiş bir sürüm olacak. Linux'ta ücretsiz olarak sunulması mükemmel; umarım Android tarafında da yerel fiyatlandırma politikasıyla makul bir ücretle karşımıza çıkar.

Bir Brave debloater yapma fikrim vardı, görünüşe göre gerek kalmadı. :)

---

> *Not: Dikey sekmeler ve kenar çubuğu gibi Brave'e özel ama benim kullanmadığım özelliklere yer vermedim.*
