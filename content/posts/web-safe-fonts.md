---
title: "Web Safe Fonts Nedir & Nasıl Kullanılır?"
date: "2021-09-08"
lastmod: "2023-12-18"
categories: 
  - "webmaster"
tags: 
  - "web-safe-fonts"
---

Birçok web sitesi, kullanıcı arayüzünü (User Interface) geliştirmek için yazı tipleri (font) kullanır. Bu yazı tipleri de genellikle, WOFF/WOFF2 dosyaları çağrılarak veya Google Fonts kullanılarak yapılır. Her iki yöntem de harici bir istek yaratır ve bu isteklerin boyutu da, web sitenizdeki diğer isteklere oranla bir hayli fazladır.

![Reuters Google PageSpeed Insights](/assets/img/reuters-google-pagespeed-insights.jpg)

Örnek olarak, Reuters'ın bir haber sayfasındaki toplam kaynağın yaklaşık %11'i yazı tipleri için kullanılıyor.

## Web Safe Fonts Nedir?

Her işletim sistemi ve bazı tarayıcılar, varsayılan olarak belirli yazı tipleri barındırır; Web Safe Fonts, işte bu yazı tipleridir. Bu sayede kullanacağınız yazı tipini web sitenize yüklemenize veya harici bir kaynağa istekte bulunmanıza gerek yoktur. Ziyaretçinin kullandığı tarayıcı ve internet hızı gibi değişkenlerin sorun çıkarmalarını engelleyerek, herkes için bir standart yaratmanızı sağlar.

## Neden Web Safe Fonts Kullanılır?

1. **Performans:** Örnek görselde de görebileceğiniz gibi, harici yazı tipleri web sitenize ekstra yük yükler ve bu da, web sitenizin daha yavaş açılmasına neden olur.
2. **Mahremiyet:** Harici bir kaynaktan herhangi bir dosya çağırmanız durumunda, kaynağın gizlilik politikasını da göz önünde bulundurmanız gerekiyor. Google Fonts API kullanıyorsanız, ziyaretçilerinizin türlü bilgilerini Google ile paylaştığınızı da bilmeniz ve bunu belirtmeniz gerekiyor. SSS sayfasındaki bu başlığa göz atabilirsiniz: [What does using the Google Fonts API mean for the privacy of my users?](https://developers.google.com/fonts/faq2#what_does_using_the_google_fonts_api_mean_for_the_privacy_of_my_users)

## En İyi Web Safe Font'lar

Araştırdığım kadarıyla, en çok kullanılan ve neredeyse her işletim sisteminde mevcut olan beş yazı tipi şu şekilde:

- Arial (Sans-serif)
- Verdana (Sans-serif)
- Georgia (Serif)
- Times New Roman (Serif)
- Courier New (Monospaced)

Web Safe Fonts uyumluluklarını görmek için ziyaret edebilirsiniz (Windows & Mac): [https://www.cssfontstack.com/](https://www.cssfontstack.com/)

## Kullanımı Ve Yedek Font'lar

Aşağıdaki gibi basit bir kod ile, istediğiniz yazı tipini kullanmanız mümkün:
```
p {font-family: Arial, sans-serif;}
```
Web Safe Font'lar her cihazda olamayacağından dolayı, yedek font'lar (**font fallbacks**) da belirlemeniz mümkün. Soldan sağa doğru öncelik ile kodu aşağıdaki gibi düzenleyebilirsiniz:
```
p {font-family: Arial, Verdana, sans-serif;}
```
Bu sayede, eğer Arial yazı tipi bulunmaz ise Verdana yazı tipi kullanılır. Bu yazı tiplerini çoğaltabilirsiniz. Belirtmiş olduğunuz hiçbir yazı tipi bulunamaz ise de, sans-serif ailesinden bir yazı tipi kullanılır.

* * *

**KAYNAKLAR**

1. [https://www.w3schools.com/css/css\_font\_websafe.asp](https://www.w3schools.com/css/css_font_websafe.asp)
2. [https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling\_text/Fundamentals#web\_safe\_fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts)
