---
title: "Erişim Engellerinin Ulusal Siber Güvenliğe Zararları"
date: "2025-02-21"
lastmod: "2025-02-21"
# translationKey:  ""

# searchHidden: true
# ShowToc: false
# hideMeta: true
# robotsNoIndex: true
# sitemap:
#   disable: true
# comments: false

categories: 
  - "İnternet"
# tags: ["..."]

# cover:
#   image: "/assets/img/filename.webp"

aliases:
  - /erisim-engellerinin-zararlari/
---


Günümüzde internet, bilgiye erişim, iletişim ve ifade özgürlüğü gibi temel hakların vazgeçilmez bir parçası haline gelmiştir. Ancak, son zamanlarda Instagram ve Discord gibi popüler platformlara uygulanan erişim engelleri, dijital özgürlükleri kısıtlamanın yanı sıra ulusal siber güvenliği de ciddi şekilde tehdit etmektedir. Bu tür engeller, kullanıcıları alternatif ve genellikle daha az güvenli yöntemlere yönelterek siber güvenlik risklerini artırmaktadır. Bu makalede, erişim engellerinin yarattığı siber güvenlik açıklarını ve çözüm önerilerini detaylı bir şekilde ele alacağım.

  

1\. Erişim Engellerini Aşma Yöntemleri ve Riskleri
--------------------------------------------------

Erişim engellerini aşmak için kullanıcılar genellikle DNS değiştirme, VPN ve Proxy gibi yöntemlere başvurmaktadır. Ancak, bu yöntemlerin her biri beraberinde çeşitli riskler taşımaktadır.

### a. DNS Değiştirme

Türkiye'de kullanıcılar genellikle yerel İnternet Servis Sağlayıcıları (ISS) tarafından sağlanan DNS sunucularını (örneğin, Türk Telekom DNS) kullanır. Ancak, erişim engellerini aşmak için Google (8.8.8.8) veya Cloudflare (1.1.1.1) gibi yabancı DNS sunucularına yönelmek yaygınlaşmıştır.

**Riskler:**

*   **Veri İzleme:** Yabancı DNS sunucuları, ABD'de uygulanan FISA 702 yasası gibi düzenlemeler kapsamında kullanıcı trafiğini kaydedebilir ve hatta üçüncü taraflarla paylaşabilir. Bu durum, kişisel verilerin gizliliğini ve güvenliğini tehlikeye atar.
*   **Ortadaki Adam (MITM) Saldırıları:** Şifrelenmemiş DNS sorguları, saldırganlar tarafından ele geçirilebilir ve kullanıcılar kötü niyetli web sitelerine yönlendirilebilir.
*   **Ulusal Veri Egemenliğinin Zayıflaması:** Yerel ISS'lerin DNS sunucuları Türkiye Cumhuriyeti kanunlarına tabi iken, yabancı sunucular üzerinden yapılan sorgularda veriler yurt dışına aktarılır. Bu durum, ulusal veri egemenliğini zayıflatır ve devletin yerel güvenlik politikalarını uygulamasını zorlaştırır.
*   **Güvenlik Katmanlarının Kaybı:** Yerel ISS'lerin kullandığı USOM Zararlı Bağlantılar filtresi gibi çeşitli güvenlik filtreleri, yabancı DNS kullanıldığında devre dışı kalır. Bu durum, kullanıcıları çeşitli siber tehditlere karşı savunmasız bırakır.

Türk Telekom'un Derin Paket İnceleme (DPI) uygulamaları ve Vodafone'un NextDNS'i anlamsız bir şekilde engellemesi gibi nedenlerle, DNS değiştirme yöntemi artık VPN kadar yaygın kullanılmamaktadır. Ancak, bu durum kullanıcıları daha büyük riskler taşıyan alternatif yöntemlere yöneltmektedir.

### b. VPN Kullanımı

Sanal Özel Ağ (VPN) teknolojisi, internet trafiğini şifreleyerek farklı bir sunucu üzerinden yönlendirir ve böylece erişim engellerinin aşılmasını sağlar. Ancak, VPN kullanımının da beraberinde getirdiği riskler bulunmaktadır.

**Riskler:**

*   **Güvenilir Olmayan VPN Uygulamaları:** Ücretsiz veya kötü yapılandırılmış VPN uygulamaları, kullanıcı trafiğini izleyebilir, verileri üçüncü taraflarla paylaşabilir veya kötü amaçlı yazılım bulaştırabilir. Bu tür uygulamalar, kullanıcıların güvenliğini ve gizliliğini ciddi şekilde tehlikeye atar.
*   **VPN Yazılımı Açıkları:** Güvenilir gibi görünen VPN yazılımlarında bile güvenlik açıkları bulunabilir. Bu açıkları kullanarak saldırganlar, kullanıcı trafiğini ve hatta cihazlarını ele geçirebilir.
*   **Geniş Saldırı Yüzeyi:** Erişim engellerini aşmak için kullanılan VPN'ler, paradoksal olarak daha geniş bir siber saldırı yüzeyi oluşturabilir. Özellikle güvenilir olmayan VPN sağlayıcıları, kullanıcı verilerini hedefli saldırılar için bir zemin hazırlayabilir.

### c. Proxy Yöntemleri

Proxy sunucuları, kullanıcı trafiğini bir ara sunucu üzerinden yönlendirerek erişim engellerinin aşılmasına yardımcı olur. Ancak, proxy'ler genellikle DNS ve VPN yöntemlerine göre daha az güvenli kabul edilir.

**Riskler:**

*   **Güvenlik Riski:** Proxy'ler, VPN'lere kıyasla genellikle şifreleme sağlamaz. Bu nedenle, verilerin izlenme, ele geçirilme ve müdahale riski daha yüksektir.
*   **Gizlilik ve İzlenebilirlik:** Güvenilir olmayan proxy sağlayıcıları, kullanıcı trafiğini kaydedebilir veya manipüle edebilir. Proxy kullanımı, VPN'e göre daha düşük düzeyde anonimlik sunar.

  

2\. Ulusal Siber Güvenliğe Etkileri
-----------------------------------

Kullanıcıların erişim engellerini aşmak için yabancı DNS, VPN ve proxy hizmetlerine yönelmesi, ulusal veri egemenliğini zayıflatabilir ve siber saldırı risklerini artırabilir.

### a. Veri Egemenliğinin Kaybı

**Yabancı Yasalara Tabi Olma:** Türk kullanıcıların DNS sorguları ve VPN trafiğinin yabancı sunucular üzerinden yönlendirilmesi, verilerin ABD'nin FISA 702 veya Avrupa'nın GDPR düzenlemelerine tabi olmasına yol açar. Bu durum, ulusal veri egemenliğini zayıflatır ve devletin yerel güvenlik politikalarını uygulama kapasitesini azaltır.

**İstihbarat Riskleri:** Yabancı devletler, DNS ve VPN trafiği üzerinden Türkiye'deki sosyal ve ekonomik hareketleri analiz edebilir.

### b. Siber Saldırıların Artışı

Erişim engellerini aşmak için kullanılan yöntemler, kullanıcıları çeşitli siber saldırı türlerine karşı daha savunmasız hale getirebilir. Özellikle güvenilir olmayan VPN ve proxy hizmetleri, kullanıcı verilerini hedefli saldırılar için bir zemin hazırlayabilir. Ayrıca, kamu kurumlarında çalışanların güvenilmez VPN kullanması, devlet ağlarına sızma riskini artırabilir ve kritik altyapıları tehlikeye atabilir.

Örneğin, Instagram'a erişim engellendiği zaman kamu kurumlarında çalışanlar Instagram kullanmayı bıraktılar mı yoksa uygulama mağazalarına "VPN" yazıp, önlerine çıkan ilk (muhtelemen de reklam olan) ücretsiz uygulamayı indirdiler mi? Erişim engeli kalktıktan sonra da hepsi uygulamayı kaldırdı mı?

3\. Çözüm Önerileri
-------------------

### a. Hükümete Yönelik Öneriler

*   **Şeffaf ve Yerel Çözümler:** İnternet erişim engelleme politikaları yerine, şeffaf ve açık internet erişimi sağlanmalıdır. Erişim engelleri, ancak yargı kararıyla uygulanmalıdır. Yerel ISS'lerin, DoH/DoT protokollerini kullanarak şifreli DNS hizmetleri sunması teşvik edilmelidir.
*   **Ulusal Güvenlik Altyapısının Güçlendirilmesi:** Yerli ve güvenilir VPN ve DNS çözümleri desteklenmeli; böylece kullanıcılar yabancı ve potansiyel olarak daha güvensiz hizmetlere yönelmekten kaçınabilir.
*   **Siber Güvenlik Eğitimi:** Hem kamu kurumları hem de bireysel kullanıcılar için siber güvenlik farkındalığı artırılmalı ve güvenli internet kullanımı konusunda eğitimler düzenlenmelidir.
*   **Veri Yerelleştirme Zorunluluğu:** Discord gibi platformların Türkiye'de veri merkezi kurması sağlanmalı ve kullanıcı verilerinin ülke içinde kalması sağlanmalıdır.
*   **Aile Profili Esnekliği:** Kullanıcılar, yetişkin içeriğe erişmek için aile profilinden çıkış yapabilmeli ve bu işlem kolay ve hızlı bir şekilde gerçekleştirilebilmeli.

### b. Bireysel Kullanıcılara Yönelik Öneriler

*   **Güvenilir Hizmet Seçimi:** DNS, VPN ve proxy hizmetlerini seçerken, sağlayıcının güvenlik önlemleri, şifreleme protokolleri ve gizlilik politikaları dikkatlice incelenmelidir. Proton, Mullvad ve IVPN gibi güvenilir sağlayıcılar tercih edilmelidir.
*   **Düzenli Güncellemeler ve Testler:** Kullanılan araçların ve yazılımların güncel tutulması, DNS sızıntısı ve diğer güvenlik testlerinin düzenli yapılması önemlidir.
*   **Ek Güvenlik Önlemleri:** Proxy gibi yöntemler kullanılıyorsa, ek antivirüs ve güvenlik yazılımları ile desteklenmeli ve mümkünse VPN gibi daha sağlam şifreleme yöntemleri ile kombine edilmelidir.

Sonuç
-----

Erişim engelleri, kullanıcıları güvenli olmayan yöntemlere iterek ulusal siber güvenliği **paradoksal bir şekilde zayıflatmaktadır.**

Çözüm, sansürün artırılması yerine; şeffaf, yerel ve kullanıcı güvenliğini ön planda tutan politikalar geliştirilmesi, yerli teknolojilerin desteklenmesi ve siber güvenlik eğitiminin yaygınlaştırılmasıdır. Hem devlet politikalarında hem de bireysel kullanıcı tercihlerinde alınacak önlemler, ulusal siber güvenliğin korunması açısından hayati öneme sahiptir.
