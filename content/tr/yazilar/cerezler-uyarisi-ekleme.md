---
title: "Web Sitenize Çerezler Uyarısı Ekleyin (1 KB)"
date: "2021-05-09"
lastmod: "2023-12-19"
# translationKey:  ""

# searchHidden: true
# ShowToc: false
# hideMeta: true
# robotsNoIndex: true
# sitemap:
#   disable: true
# comments: false

categories: 
  - "Webmaster"
  - "WordPress"
# tags: ["..."]

# cover:
#   image: "/assets/img/filename.webp"

aliases:
  - /cerezler-uyarisi-ekleme/
---


## Çerezler Uyarısı Nedir?

Çerezler uyarısı, [GDPR](https://tr.m.wikipedia.org/wiki/Genel_Veri_Koruma_Y%C3%B6netmeli%C4%9Fi) standartları kapsamında, bir yasal zorunluluk haline geldi; Web siteniz AB'de barınmasa bile, AB konumlu ziyaretçiler için bu bildirimi eklemek zorundasınız. Bu uygulama ile kişisel verilerin korunmasının geliştirilmesi amaçlanıyor. Bu uygulama ile birlikte de, kişisel veri toplayan taraflara bazı sorumluluklar düşüyor.

Web sitenizde birçok birinci parti veya üçüncü parti çerezler kullanılıyor olabilir. Örnekler:

- Web sitenizde Cloudflare kullanıyorsanız, Cloudflare'nin çerezleri kullandığını bilmeniz gerekiyor. Örneğin "Always online" ve ziyaretçilerin güvenilir olup olmadığını öğrenmek için türlü çerezler kullanılır. Detayları öğrenin: [https://support.cloudflare.com/hc/en-us/articles/200170156-Understanding-the-Cloudflare-Cookies](https://support.cloudflare.com/hc/en-us/articles/200170156-Understanding-the-Cloudflare-Cookies)
- WordPress web sitenizde, varsayılan olarak ziyaretçilerin yorum yaptığı isimleri hatırlamak için çerezler kullanılır.
- Web sitenizde Google Analytics kullanıyorsanız, çerezlerin yine çok kapsamlı bir şekilde kullanıldığını hatırlatmak gerek.

Bu gibi çerez kullanım durumlarında, ziyaretçilerin kişisel verilerini toplamış oluyorsunuz ve GDPR kapsamında, bunu ziyaretçilerinize bildirmeniz gerekiyor.

## Çerezler uyarısı nasıl kullanılmalı? Eklemek şart mı?

GDPR'a uygun bir şekilde çerezler uyarısı için bu yazıda paylaşacağım kodu web sitenize eklemeniz yeterli olmayabilir. Ziyaretçilerinize, hangi çerezleri kullandığınızı bildirmek zorundasınız. Çerez kullanımlarımız için bir gizlilik politikası ve çerezler politikası sayfası da eklemeniz ve bu sayfaların bağlantılarını çerezler uyarısına ve bir menüye eklemelisiniz. Kullanılan çerezlerin açıklandığı sayfaya, üçüncü taraf çerezlerin gizlilik politikalarını eklemeyi de unutmayın.

Özellikle de daha büyük web sitelerinde, ziyaretçilerin kişisel verileri gösterdiğiniz saygıyı belirtmek adına, tercihe bağlı çerezler bölümü eklemeyi düşünebilirsiniz. Bu sayede ziyaretçi, gerekli olmayan çerezlerin kullanılmamasını seçerek, kendisi hakkında daha az kişisel veri toplanmasını sağlayabilir. Son düzenlemeleri takip etmenizde fayda var. Burada yer alan bilgiler güncel olmayabilir.

## Çerezler Uyarısı Ekleme Kodu

Kullanacağımız kodun özellikleri:

- Responsive
- Yaklaşık 1 KB boyutunda
- Hiçbir harici kaynak gerekmez
- Tüm kodlar inline'dir
- jQuery gerekmez
- Database sorguları yapmaz
- Özelleştirilebilir

Kod:

```
<p id="cookie-notice">Bu web sitesi, en iyi deneyimi sağlamak için çerezleri kullanır. Daha fazla bilgi için lütfen <a href="#" style="text-decoration: none; font-weight: bold; color:#fff;">Gizlilik Politikamızı</a> okuyun.<br><button onclick="acceptCookie();">Kapat</button></p>

<style>#cookie-notice{color:#fff;font-family:inherit;background:#596cd5;padding:20px;position:fixed;bottom:10px;left:10px;width:100%;max-width:300px;box-shadow:0 10px 20px rgba(0,0,0,.2);border-radius:5px;margin:0px;visibility:hidden;z-index:1000000;box-sizing:border-box}#cookie-notice button{color:inherit;background:#3842c7;border:0;padding:10px;margin-top:10px;width:100%;cursor:pointer}@media only screen and (max-width:600px){#cookie-notice{max-width:100%;bottom:0;left:0;border-radius:0}}</style>

<script>function acceptCookie(){document.cookie="cookieaccepted=1; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/",document.getElementById("cookie-notice").style.visibility="hidden"}document.cookie.indexOf("cookieaccepted")<0&&(document.getElementById("cookie-notice").style.visibility="visible");</script>
```

## WordPress Çerez Uyarısı Ekleme

Bu kod sayesinde, çerez uyarısı göstermek için eklenti kullanmanıza gerek kalmıyor. Aynı işlevi gören eklentilerin neredeyse tamamı, web sitenizi yavaşlatır. Tek yapmanız gereken, yukarıdaki kodu eklemek. Bunun için aşağıdaki adımları takip edebilirsiniz.

1. WordPress yönetim paneline giriş yapın.
2. Soldaki menüden **Görünüm** > **Tema Düzenleyici** bağlantısına tıklayın.
4. **Tema dosyaları** kısmından **footer.php** dosyasını seçin.
5. Yukarıdaki kodu, **</body>** kodunun önüne ekleyin.
6. Kaydedin ve değişikliklerin görünebilmesi için önbelleği temizleyin.

## Sonuç

![Çerezler Uyarısı - WordPress](/assets/img/cerezler-uyarisi.webp)

* * *

Kaynak: [https://wpspeedmatters.com/fastest-cookie-consent-wordpress-plugin/](https://wpspeedmatters.com/fastest-cookie-consent-wordpress-plugin/)
