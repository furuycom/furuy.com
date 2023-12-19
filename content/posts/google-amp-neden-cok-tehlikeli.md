---
title: "Google AMP Neden Çok Tehlikeli?"
date: "2021-07-22"
categories: 
  - "guvenlik-mahremiyet"
  - "internet"
  - "webmaster"
tags: 
  - "accelerated-mobile-pages"
---

> Bu yazı uzun zamandır güncellenmemektedir!

Google, mobil web deneyimini geliştirmek ve sayfaların mobilde daha hızlı yüklenmelerini sağlamak amacıyla, 2015 yılında AMP'i duyurmuştu. Şubat 2016 tarihinden itibaren de, mobil arama sonuçlarında AMP sayfaları görünmeye başlamıştı. Kısa bir zaman içerisinde AMP, standart haline gelmeye başladı bile. Bunun en temel nedenleri; mobil internet kullanıcı sayısının fazla olması, birçok kişinin Google arama motorunu kullanması ve web site yöneticilerinin, "SEO kuralları" adı altındaki Google'ın her dayatmasını kabul etmeleri...

## Bir Google Rüyası: AMP

AMP, çok faydalı bir yenilik olarak görülebilir. Peki ya bundan Google'ın kazancı ne?

### Elveda W3C Standartları, Merhaba Google Standartları

AMP'in kendi standartları olduğu için, artık HTML standartları kullanmayacaksınız.

HTML görsel etiketi:

```
<img src="gorsel.jpg" alt="görsel">
```

AMP görsel etiketi:

```
<amp-img src="gorsel.jpg" width="100" height="100" layout="responsive"></amp-img>
```

Yalnızca AMP etiketlerini kullanacağınız için de, web sitenize şu anki kadar yetkin olamayacaksınız. Web siteniz üzerindeki kontrolünüz, subdomain olarak ücretsiz blog açmanıza imkan veren web sitelerindeki kontrol alanınız kadar olacak.

### Googlebot'un Anladığı Dilden Konuşun

Google nedir? Google, bir arama motorudur. Arama motorlarının amacı nedir? Web'i olabildiğince etkili bir şekilde taramak... Yani Google, kendisini geliştirmek zorunda; Sizin web siteniz, kendisini Google'a daha iyi anlatmak zorunda değil. Google'ın, kendi koyduğu kurallar ile inşa edilmiş bir Web'i crawl etmesi çok daha kolay olacak. Bu da, Google'ın tekelinin yıkılmasını neredeyse imkansız hale getirecek.

### Google AMP Cache: Bir Domain Değil, Kullanıcı Adı Seçin

Hem web siteler daha hızlı yükleniyor, hem de Google arama sonuçlarında ön sıralarda çıkıyoruz. Herkes memnun. Sorun nerede? Şimdi olayın, "by Google" kısmına gelelim. Basın özgürlüğünde, 180 ülke içerisinde 153. sırada olan ülkemizde, yasaklı bir haber sitesinin AMP versiyonuna erişebildiğinizi fark ettiniz mi? Domainin Türkiye'de engelli olmasına rağmen, o web sitesine nasıl eriştiniz? Aslında, o web sitesine değil, "_www.google.com_/amp/s/**example.com**" veya "**example-com**.cdn._ampproject.org_" adreslerine eriştiniz. Yani artık, web siteye direkt olarak erişmiyorsunuz. Bunun, Facebook'ta veya Blogspot'ta gönderi yayınlamaktan ne farkı var? Google, sosyal medya ağı ve alan adımız da kullanıcı adımız mı olacak?

### Dayatmalar

Google, News ağına alacağı web sitelerin AMP kullanmalarını zorunlu kılıyor. Google News de, daha çok ziyaretçiye ulaşabilmenizi sağlıyor. Bunun yanında, AMP sayfaların mobil arama sonuçlarında daha üst sıralarda çıktığı da biliniyor. Hâl böyle olunca, birçok web sitesi AMP kullanmak zorunda kalıyor.

## Neler Yapılabilir?

### Web Sitenizi Optimize Edin

Google AMP, web sitenizin daha hızlı yüklenmesini sağlar ama bunu yapmanın tek yolu, AMP kullanmak değildir. Özellikle de [WordPress](https://furuy.com/categories/wordpress/) gibi popüler bir CMS kullanıyorsanız, web sitenizin daha hızlı yüklenmesini sağlayacak birçok eklenti, birçok rehber ve Cloudflare CDN gibi ücretsiz hizmetler mevcut. Web sitenizi nasıl optimize edebileceğinizi öğrenin.

### WWW, GWW Değil!

World Wide Web'in, Google Wide Web olmasına izin vermeyin. Web sitenizi Google için değil, ziyaretçileriniz için tasarlayın. Açık kaynak kodlu, hafif, güvenli ve kullanıcı dostu yazılımları/tasarımları tercih edin. Web sitenize erişen ziyaretçileri, okumayı zorlaştıran reklamlarla, newsletter kutucuklarıyla, paylaş butonlarıyla, yukarı çık düğmesiyle, bildirimlere abone ol uyarısıyla, otomatik oynatılan medyalarla ve diğer rahatsız edici ögeler ile boğmayın.

### Google'ın Alternatiflerine Şans Verin

Google'a alternatif olan, [DucDuckGo](https://duckduckgo.com/) ve yeni çıkan [Brave Search](https://search.brave.com/) gibi birçok arama motoru var. Bu arama motorlarına bir şans verin. Google'ın arama sonuçlarından vazgeçemiyorsanız, Searx gibi alternatifleri deneyin.
