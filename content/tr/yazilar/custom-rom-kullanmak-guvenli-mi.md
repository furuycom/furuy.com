---
title: "Custom ROM Kullanmak Güvenli Mi?"
date: "2021-07-26"
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
  - "Android"
  - "Güvenlik & Mahremiyet"
tags: 
  - "Custom ROM"
  - "GrapheneOS"
  - "XDA"

# cover:
#   image: "/assets/img/filename.webp"

aliases:
  - /custom-rom-kullanmak-guvenli-mi/
---


> Bu yazı uzun zamandır güncellenmemektedir!

Custom ROM'lar, birçok olumlu getirileri ile Android kullanıcıları tarafından tercih edilebiliyorlar. Bu getirilerden bazıları şunlar:

- Mahremiyetinizi (yanlış bilinen tabiriyle gizliliğinizi) korumak için daha iyi bir tercihtir.

- Gereksiz sistem uygulamaları olmaz veya daha az olur.

- Daha fazla özelleştirme ve kişiselleştirme imkanı sunar.

- Daha hafif olurlar. Bu nedenle de, pil ve RAM kullanımı daha az olur.

Kısacası insanlar, haklı olarak, satın aldıkları ürünlerden tam verimi alabilmek için Custom ROM kullanıyorlar. Peki ya bu Custom ROM'lar ne kadar güvenli? Bu yazıda, bir Custom ROM kullanmadan önce dikkat etmeniz gereken [güvenlik](https://furuy.com/categories/Güvenlik & Mahremiyet/) kriterlerinden bahsedeceğim.

**NOT:** Android, iOS'un aksine açık kaynak kodlu olduğu ve kullanıcılarına daha fazla özgürlük verdiği için güvenlik konusunda eksik görülebiliyor. Aslında bu durumun asıl nedeni, Android cihaz üreticilerinin hataları idi ama Google, yeni Android sürümleri ile güvenlik alanında çok fazla gelişme kat ederek, bir standart yaratmaya devam ediyor ve bunu, Apple'ın aksine hâlâ açık kaynak kodlu kalarak ve özellikleri kısıtlamadan yapıyor. Güvenlik, önemli özellikleri kısıtlayarak sağlanmaz. İnternete bağlanabilen her cihaz tehdit altındadır ama bu cihazın güvenliğini, onun internete erişimini engelleyerek yapamazsınız çünkü buna güvenli cihaz değil, kısıtlı cihaz denir. _Özet: Android'in güvenli olduğunu bilmek ile iOS'a güvenmek arasında çok fark var._

## Geliştiricisi Kim?

Nasıl ki bilgisayarınıza, herhangi bir web sitesinden indirdiğiniz ISO dosyasından işletim sistemi kurmuyorsanız -umarım yapmıyorsunuzdur-, sürekli yanınızda taşıdığınız akıllı telefonunuza da rastgele bir işletim sistemi kurmamalısınız. Neden mi? Kendinizi, telefonunuzun yerine koyun; Ekranınızı sürekli izleyebildiğinizi, mikrofon ile ortamı sürekli dinleyebildiğinizi ve ön/arka kameralar ile her yeri izleyebildiğinizi hatırlayın. Sanırım bu yeterli olmuştur.

- Kullanacağınız ROM'un geliştiricilerinin kim olduğunu araştırın.

- Yalnızca official ve stable ROM'ların, en güncel sürümlerini kullanın.

- ROM'u yalnızca resmi kaynağından indirin ve indirdikten sonra hash kontrolü yapın.

- ROM hakkında, resmi kaynağın dışındaki web sitelerinden ve Reddit topluluklarından araştırma yapın.

- ROM'un GitHub sayfasını kontrol edin.

## Android Sürümü Ve Güncellemeler

Her yazılım, güncel olmalıdır çünkü güncel olmayan sürümler güvenlik açıkları barındırır. Bu açıklar ve potansiyel riskler de, güncellemeler ile kapatılır. Kullandığınız Android sürümünün güncel olması, güvenliğinizi sağlayacak en temel kriterlerden bir tanesidir. Bu nedenle, satın alacağınız cihazın kaç sürüm Android güncellemesi ve kaç yıl güvenlik güncellemesi alacağını araştırın. Güncelleme desteği konusundaki en iyi cihaz, Android'in de yaratıcısı ve geliştirici olan Google'a ait cihazlar. Google, Pixel 6 cihazların en az 5 yıl boyunca Android ve güvenlik güncellemeleri alacağının garantisini veriyor. \[1\] Google'dan sonra bu konuda en iyi firma, şu an için Samsung.

Evet, yalnızca [Android](https://furuy.com/categories/android/) sürümünün güncel olması da yeterli değil. Google, her ay Android için güvenlik güncellemeleri yayınlıyor. Kullanacağınız ROM'un bu güncellemeleri düzenli olarak aldığından emin olun. (Detaylı bilgi için: [Bağlantı 1](https://support.google.com/android/answer/7680439?hl=tr) - [Bağlantı 2](https://source.android.com/security/bulletin))

## Verified Boot

TWRP'de, değiştirilmiş bir stock ROM kurarken veya Magisk yüklerken işaretleyerek kaldırdığınız **dm-verity** ile tanışın. Bu özelliği kapatmayı unutursanız, cihazınız açılış ekranında kalır (bootloop). Peki ama neden?

Türkçe'ye "Doğrulanmış Önyükleme" olarak çevrilen bu özelliğin ne işe yaradığını adından da anlayabiliriz. Cihazın başlatılırken yapılan bu doğrulama ile "system, vendor, oem" alanlarına müdahale edilmesi engellenir. Ayrıca, "Rollback protection" adında "downgrade" yapılmasını engelleyen bir koruma da vardır. Bu sayede, güvenlik açıkları içerebilecek önceki sürümün yüklenmesi engellenmiş olur. Verified Boot'u, BIOS'taki Secure Boot özelliği gibi düşünebilirsiniz.

**UYARI:** Cihazın bootloader kilidini açmak bile Verified Boot özelliğini kapatır!

Kullanacağınız ROM'un verified boot desteklediğinden, bootloader kilidinin kapatılabilir olduğundan emin olun ve cihazınızı rootlamayın.

İleri okuma: [https://source.android.com/security/verifiedboot](https://source.android.com/security/verifiedboot)

## SELinux Policy

SELinux, kilit güvenlik adımlarındandır. Hakkında birçok makale olduğu ve bilinen bir güvenlik protokolü olduğu için detaylandırmayacağım. Google'ın resmi geliştirici web sitesinden Türkçe olarak bilgi alabilirsiniz:  
[https://source.android.com/docs/security/features/selinux](https://source.android.com/docs/security/features/selinux)

**Özet:** Kullanacağınız ROM'un SELinux durumunun **enforcing** olmasına kesinlikle dikkat edin!

Magisk'in geliştiricisinin, konu hakkındaki Tweet'i:  
[https://twitter.com/topjohnwu/status/1359054106019565571](https://twitter.com/topjohnwu/status/1359054106019565571)

## Signature Spoofing

Android, başka uygulamaları taklit eden sahte package name'li uygulamaların yüklenmesini engelleyen bir güvenlik özelliğine sahiptir. Örneğin, farklı bir uygulamaya Google Play Hizmetleri uygulamasının package name'ini (com.google.android.gms) verseniz bile, bu uygulamayı yükleyemezsiniz; Signature Spoofing işlemi, tam olarak da bu güvenlik özelliğini devre dışı bırakır. Bunun ne kadar tehlikeli olduğunu anlamak zor olmamalı.

## Data Encryption

Veri şifreleme, artık bir standart haline geldi. Bu sayede, dosyalarınızı yetkisiz erişimden koruyabiliyorsunuz. Bazı ROM'lar, ne yazık ki bu hâlâ bu güvenlik standardını desteklemiyorlar. Data Encryption'ı desteklemeyen ROMları kesinlikle kullanmayın ve kullanabildiğiniz her yerde bu özelliği kullanın.

## Sonuç Ve Tavsiye

Edward Snowden'ın tavsiyesi: [https://twitter.com/Snowden/status/1175430722733129729](https://twitter.com/Snowden/status/1175430722733129729)

Mahremiyet odaklı düşünürseniz, kesinlikle bir Custom ROM kullanmanız gerektiği kanaatine varacaksınız. Peki ya hangi Custom ROM kullanılmalı? Benim ilk tavsiyem **GrapheneOS**. ([https://grapheneos.org)](https://grapheneos.org)

Eğer GrapheneOS destekleyen bir cihazınız yoksa, LineageOS veya crDroid gibi bilinen, aktif olarak geliştirilen, official bir ROM kullanmanızı öneririm. Official (resmi) olmayan, Telegram'daki herhangi bir kişinin yaptığı, varsayılan olarak Dolby Atmos, Google Camera gibi açık kaynak kodlu olmayan uygulamalar içeren ROM'ları kesinlikle kullanmayın. 

* * *

**KAYNAKLAR**

1. [https://support.google.com/pixelphone/answer/4457705?hl=en#zippy=%2Cpixel-phones](https://support.google.com/pixelphone/answer/4457705?hl=en#zippy=%2Cpixel-phones)
