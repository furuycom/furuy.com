---
title: "Password Aging (Parola Eskitme) ve Riskleri"
date: "2021-12-23"
categories: 
  - "guvenlik-mahremiyet"
tags: 
  - "parola-eskitme"
  - "password-aging"
cover:
  image: "/password-aging/images/password-aging.jpg"
---

**Password aging** veya Türkçe'ye "**parola eskitme**" olarak çevrilebilecek güvenlik mekanizması, kullanıcıların uzun zaman boyunca aynı parolayı kullanmalarını engeller. Sistem yöneticileri tarafından belirlenen zaman aralığında (password expiration policy), kullanıcılardan yeni bir parola oluşturmaları istenir. Bu yöntem her ne kadar güvenliği artırabiliyor olsa da, durumu tam tersine de çevirebilir. Bu yazıda, okuduğunuz özette kısaca bahsettiğim konuları biraz daha detaylandırmaya çalışacağım.

## Password Aging Neden Bir Standart Oldu?

Tahminime göre bunun en büyük nedeni, zamanında parolaların hash'lenmiş olarak değil de, plain text olarak veri tabanlarında saklanmaları idi (günümüzde bile devam ediyor maalesef). Dolayısıyla herhangi bir veri tabanı sızıntısı olduğunda, herkesin parolası apaçık ortaya çıkıyordu. O zamanın teknolojisinde göre de bu parolaların hackerlar tarafından kötü amaçlarla kullanılma süresi 90 gün olarak belirlenmiş ve standartlaşarak, üç ayda bir parolanın değiştirilmesinin iyi olabileceği düşünülmüş.

## Endişeler ve Sorunlar

### Geçerlilik

Günümüzde, ele geçirilen parolalar eskiden olduğu gibi yavaş ve manuel olarak değil; gelişmiş araçlar ve gelişmiş donanımlı sunucularda otomatik olarak taranıp, kullanılıyorlar. Bugünün araçları ile parolasını bildiğiniz bir hesapla ilişkili e-posta, sosyal medya ve diğer online hesapların bulunması yalnızca dakikalar sürüyor.

### Maliyet

Çalışanlarınızdan, örneğin her üç ayda bir parolalarını değiştirmelerini istediğinizde ortaya çıkan bir zaman ve dolayısıyla maddi maliyete inanamazsınız. İkinci kaynakta buna güzel bir örnek verilmiş.

### Güvenlik Tehlikeleri

2021 yılında bile en çok kullanılan parolanın "123456" olduğunu göz önüne alırsak, rahatlıkla söyleyebiliriz ki birçok insan parolalarının ne olduklarını önemsemiyor; insanlar, yalnızca kolayca giriş yapabilmek istiyorlar. Yani neredeyse hiç kimse, sizin için üç ayda bir benzersiz ve güvenli bir parola oluşturmayacak. Öncelikle herkes en çok kullandıkları parolaları kullanacak ve "bu parolayı daha önce kullandınız" (eski parolaları da saklayarak, hackerlar'a mükemmel bir kaynak yarattınız) hatası aldıkları zaman da ya daha kolay hatırlanabilir ya da sizin onlara önerdiğiniz "güvenli" parolayı yeni metin belgesine veya kağıda yazarak Masaüstü'ne koyacaklar.

## Neler Yapılabilir?

Çalışanlarınızı veya üyelerinizi bu konu hakkında bilgilendirin ve iki adımlı doğrulama yöntemlerini kullanmaya yönlendirin. Doğru bir şekilde parola yöneticisi ve iki adımlı doğrulama kullanmak, şu an için en iyi çözüm olarak görünüyor. Parola yöneticilerinin nasıl kullanılması gerektiği ile ilgili detaylı yazıma da göz atmayı unutmayın: [Parola Yöneticisi Güvenli Bir Şekilde Nasıl Kullanılır?](https://furuy.com/guvenli-parola-yoneticisi/)

* * *

**KAYNAKLAR**

1. [https://www.sans.org/blog/time-for-password-expiration-to-die/](https://www.sans.org/blog/time-for-password-expiration-to-die/)
2. [https://www.sans.org/blog/why-the-90-day-rule-for-password-changing/](https://www.sans.org/blog/why-the-90-day-rule-for-password-changing/)
3. https://web.archive.org/web/20160817223701/https://www.cesg.gov.uk/articles/problems-forcing-regular-password-expiryrcing-regular-password-expiry
