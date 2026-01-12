---
title: "Güvenli Android Doğrulama Yöntemleri (Parola, Biyometrik vs.)"
date: "2023-07-13"
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
  - "Güvenlik"
tags:
  - "Kimlik Doğrulama"
  - "Biyometrik"
  - "Parola Güvenliği"
  - "Android"

# cover:
#   image: "/assets/img/filename.webp"

aliases:
  - /guvenli-android-dogrulama-yontemleri/
---


Bu yazıda, Android cihazlardaki giriş/doğrulama yöntemlerinin ne kadar güvenli olduğundan ve güncel bilgiler ışığında nasıl bir tercih yapmanız gerektiğinden bahsedeceğim.

## Ekran Kilidi Belirleyin
Öncelikle, mutlaka bir ekran kilidi belirlemeniz ve bunlardan da en güvenlisini seçmeniz gerekiyor. 

### PIN ve Desen Kilidi Kullanmayın
PIN ve desen (pattern) kilidi yöntemlerini güvenli olmadıkları için eliyoruz. Bunları kullanmanız kesinlikle önerilmiyor.

### Biyometrik Ekran Kilidi Yöntemleri Neden Kullanılmamalı?
Yüz tanıma kilidi, hâlâ en güvensiz yöntemlerden birisi. Bugün bile birçok akıllı telefon markası, müşterilerine genellikle de kurulum sırasında yüz tanıma kilidinin diğer yöntemlerden daha güvensiz olduğunu vurguluyor.[1] Dolayısıyla yüz tanıma kilidi kullanmanız da önerilmiyor.

Parmak izi doğrulaması yöntemini de kilit ekranında kullanmayacağız. Bunun birkaç sebebi var:
1. Parmak izi doğrulamasını, destekleyen uygulamalarda ve uygulama kilidinde kullanacağız.
2. Parolanın aksine parmak iziniz, devlet kurumları başta olmak üzere, özel firmalarda ve belki de diğer üçüncü taraflarda zaten mevcut. Dolayısıyla parmak izinizi, "123456" gibi brute-force listelerinin neredeyse tamamında var olan bir parolayı kullanmak gibi düşünmelisiniz.
3. İkinci maddede örneklendirdiğimiz gibi parmak iziniz, sizin bilginiz dışında kolaylıkla kullanılabilmektedir. Kameralar da geliştikçe, başkalarının çektiği ve haberinizin bile olmadığı fotoğraflardan parmak iziniz rahatlıkla alınabilir. Bu yazıyı yazarken fark ettim ki, belki de kameralar veya bu yöntemde kullanılan kriminal teknolojiler yeterince gelişmiş olabilir çünkü 2018 yılına ait bir BBC haberinde polisin, parmak izlerinin çok az göründüğü bir WhatsApp fotoğrafından (fotoğrafın otomatik olarak sıkıştırıldığını da unutmayın) uyuşturucu satıcılarını yakaladığı yazıyor.[2]
Bir kişi gerçekten isterse, sizden habersiz veya zorla parmak izinizi alabilir ama ezberlemiş olduğunuz bir parolayı siz söylemedikçe, öğrenemez (en azından şimdilik!).
4. Parmak iziniz, parolanızın aksine değiştirilmezdir. Hacklenen ve satılan kullanıcı adı/parola bilgileri haberini sıkça duyuyoruz; İleride bu listelerde parolanız yerine benzersiz olan parmak izinizin paylaşıldığını düşünün. Evet, korkutucu. 
5. Parola, yazılımsal bir doğrulama yöntemi olduğu için yazılımınızı güncel tuttuğunuz ve yeni güvenlik özelliklerine sahip olduğunuz sürece büyük oranda güvende olursunuz. Cihazınızın parmak izi doğrulamasını yapan fiziksel cihazı ise sürekli güncelleyemezsiniz ve fiziksel bir araç oldukları için de hacklenmeleri nispeten daha kolay olacaktır. 
6. Birçok kullanıcı, parmak izi eşleşmesini daha kolay tamamlayabilmek için farklı parmaklarını ve bu parmaklarının da birden fazla kaydını yani parmağının farklı bölgelerini ekliyor. Zaten parmak izi kilidi kurarken de sizden tam olarak bu istiyor. Bunu, bir hesabınıza 30 farklı parola eklemek gibi düşünebilirsiniz ve kilidi açmak için bir parolayı tahmin etmek yeterli! Çok fazla parmak izi ekleyerek saldırı yüzeyini artıracağınız için kilit ekranında parmak izi kilidi kullanmamalısınız.
7. Parmak izinizin sürekli sizde kalacağına dair bir garanti yok. Parmağınızı kaybetmeniz veya parmak izinizi bozacak ufak yaralanmalar yaşamanız durumunda bile cihazınıza tüm erişiminizi kaybedebilirsiniz. (Tıpkı yedek almamak gibi ancak gerçekten ihtiyaç duyulması durumunda değeri anlaşılabilecek bir hatırlatma.)

### Parola Kullanın
Evet, her zaman olduğu gibi yine en doğru yol, en sıkıcı ve en zor olanı maalesef. Burada önemli olan, tahmin edilmesi zor ve çok da kısa olmayan bir parola seçmek. Örneğin bir şarkı sözündeki A harflerini 4 rakamıyla değiştirerek, fazlasıyla güvenli bir parola yaratabilirsiniz. Çok daha güvenli bir parola üretmek isterseniz, Özgür Yazılım Derneğinin [Nasıl zarola oluşturabilirim?](https://zarola.oyd.org.tr/belgeler/nasil-zarola-olusturabilirim/) başlıklı yazısını okuyabilir veya Uğur Arıcı'nın bu konudaki [418 | 🎲 Güvenli Parola Oluşturma Yöntemi: Zarola"](https://www.youtube.com/watch?v=FFz5Qr4BQAU) videosunu izleyebilirsiniz. Ayrıca bunun hakkında İngilizce olarak araştırma yapmak isterseniz de "Diceware passphrases" aratması yapabilirsiniz. Bu kısmı fazla uzun tutmak istemiyorum çünkü bununla ilgili yeterince Türkçe kaynak da mevcut.

#### Parolanızı Koruyun
1. Parolanızın tahmin edilemez olduğundan emin olun.
2. Parolanızı yalnızca ezberinizde tutun; Ne dijital, ne de fiziksel olarak hiçbir yerde barındırmayın. Örneğin parolanızı bir kez bile yanlışlıkla tarayıcınızın adres çubuğuna yazarsanız, parolanızı hemen değiştirin çünkü parolanızı artık arama motoru da biliyor. Parolanızı oluştururken kalem ve kağıt kullanın, kağıttan parolayı ezberledikten ve hiç kimsenin de görmediğinden emin olduktan sonra da kağıdı geri dönüştürülemez bir biçimde imha edin.
3. İnsanların neredeyse tamamı, güvenlikleri için özgürlüklerinden feragat etmeye hazır ve buna hevesli oldukları için herkesin potansiyel şüpheli olduğu, her yerde kamera dolu olan bir distopyada yaşıyoruz. Bunun asıl nedeni ise sosyal devlet saçmalığının insanların bireysel tercihlerine dayanan, sorumluluk alma duygularını fazlasıyla zedelemiş olması. Herkes, her şeyi devletin çözmesini istiyor, devletler de insanların yalnızca vergi verip başka hiçbir şeye karışmamalarını istiyor. Dolayısıyla sokaktaki bir insanın, devletin "güvenli" bandrolüne sahip olduğuna inanmak istiyoruz ama haberlerden bunun da mümkün olmadığını görüyoruz. Bu da, sokaklarda su içen ceylanlar gibi kulaklarımızı dikerek yürümemize, bu tedirginliği yaşamamak için de bizi koruyacakların vaat eden sırtların şartlarına boyun eğip, doğal güzelliklerden uzakta, sırtların koruması altında "güvende yaşamamıza" ve sıra bize gelmediği sürece aramızdan her gün bir kurban bedeli almalarına razı olmamıza neden oluyor. Ne mutlu ki fazlasıyla güvendeyiz; En az vahşi doğada av olmaktan koruduğumuz parmaklıklar arkasındaki hayvanat bahçesi hayvanları kadar...
Biraz içimi döktükten sonra devam edeyim. Parolalarınızı, kameralardan veya diğer kişilerin bakışlarından korumanız fazlasıyla önemli. Maalesef ki parolanın zayıf yönü de bu. Parolanızın doğrudan görülmesinden ziyade, parmak hareketlerinizin kayıt altına alınması bile eminim ki parolanın bulunması için fazlasıyla yeterlidir. Biraz daha ileriye giderek parmaklarınızın hareketini de saklar mısınız bilmiyorum ama ekranınızı meraklı gözlerden korumak büyük ölçüde engellemek mümkün. İngilizcede "privacy screen" olarak, Türkçede ise "hayalet ekran" olarak bilinen, gizlilik filtresine sahip olan camları telefonlarınızda ve hatta bilgisayar monitörlerinde kullanarak, ekranınızın "dikizlenmesini" büyük ölçüde engelleyebilirsiniz. 

## Uygulamalarda Parmak İzi Kullanın

Ekran kilidi parolanız bulunduktan sonra, ADB moduna erişme de dahil, cihazınızda her işlemi yapabiliyorsunuz. Bunu engellemek için fazladan bir güvenlik katmanı daha eklememiz iyi olacaktır. Bunun için de parmak izi doğrulamasını kullanacağız.

Günümüzde WhatsApp, Telegram, Tutamail, Proton Mail ve bankacılık uygulamaları gibi kritik bilgiler içeren birçok uygulamanın tümleşik parmak izi kilidi özelliği bulunuyor. Eğer uygulamanın bu özelliği varsa, öncelikli olarak bunu kullanın.
[Parola Yöneticileri Güvenli Bir Şekilde Nasıl Kullanılır?](/guvenli-parola-yoneticisi/#biyometrik-do%c4%9frulama) İsimli blog yazımda da anlattığım gibi, örneğin Bitwarden için mutlaka biyometrik doğrulama kullanmanızı öneriyorum çünkü parola yöneticisi, iki faktörlü doğrulama ve bankacılık gibi kritik bilgilerimizi içeren uygulamalarda sürekli parolamızı yazarak, saldırı yüzeyini artırmamalıyız. Parolanızı korumanın en iyi yollarından birisinin, onu olabildiğince az kullanmak olduğunu unutmayın.

Tümleşik parmak izi kilidi özelliği bulunmayan ve Ayarlar gibi kritik uygulamaları kilitlemek için ise kullandığınız ROM'un uygulama kilidi özelliğini kullanabilirsiniz. Örneğin birçok LineageOS tabanlı crDroid gibi Custom ROM'larda ve bazı stock ROM'larda (MIUI vs.) bu özellik mevcut. Eğer bu özelliğe sahip bir ROM kullanmıyorsanız, bunu destekleyen LineageOS veya crDroid gibi bir ROM kullanmanızı öneririm çünkü üçüncü parti kilit uygulamaları yeterince güvenli olmayacaktır. Burada, uygulama kilidinin parola kullanılarak kaldırılabilmesi açığı da var; Dolayısıyla yapabiliyorsanız bunu da devre dışı bırakın çünkü parolanıza sahip birisi, uygulama kilidini kolaylıkla devre dışı bırakabilir.

## Kilit Ekranında Parmak İzini Devre Dışı Bırakın

1. Birçok ROM, bir kez parmak izi kilidi eklediğinizde, bunu ekran kilidini açmak için de kullanıyor ve kullanıcıya bunu devre dışı bırakma seçeneği sunmuyor. "[How to lock apps on your Android phone to prevent unauthorized access](https://www.xda-developers.com/how-to-lock-apps-on-your-android-phone/#how-to-lock-apps-using-the-built-in-app-lock-on-your-smartphone)" İsimli XDA Blog yazısına da göz atarak, kullandığınız OEM'in bu özelliği destekleyip desteklemediğini öğrenebilirsiniz. Eğer OEM veya kullandığınız ROM, kilit ekranında parmak izi doğrulamasını devre dışı bırakma seçeneği sunuyorsa, devre dışı bırakın.

2. Android'de "Lockdown mode" adı verilen bir özellik bulunuyor. Bunu aktifleştirdiğinizde, kilit ekranında biyometrik doğrulama yöntemleri çalışmayacaktır. Yalnız bu mod, ekran kilidini açar açmaz devre dışı bırakılacaktır yani tek seferlik kullanım için tasarlanmış. (Örneğin uyumadan önce cihazınızı bu şekilde kilitlemeniz için.) Telefonunuzun ekranını her kapatacağınızda güç menüsünden bu modu aktifleştirmeyeceğinize göre, bunu da es geçiyoruz. Yine de aklınızda bulunsun.

3. AdminControl isimli bir Android uygulaması (FOSS), tam da bizim istediğimiz gibi kilit ekranında parmak izi doğrulamasını kalıcı olarak devre dışı bırakma imkanı sunuyor. Bunun için uygulamayı kurmalı ve cihaz yöneticisi (device admin) izni vermeniz gerekiyor. Uygulama uzun süredir güncellenmiyor ama Android 13'te hâlâ çalışıyor.
Uygulama bağlantıları: [GitHub](https://github.com/linux-colonel/AdminControl) & [F-Droid](https://f-droid.org/packages/com.davidshewitt.admincontrol/)

**NOT:** Android'in kimlik doğrulama (authentication) yöntemleri sürekli güncellenerek, daha güvenli hale getirilmektedir. Bu yüzden kullandığınız Android sürümünün sürekli en günceli olduğundan ve aylık güvenlik güncellemelerini aldığınızdan emin olun. Bunun için [Samsung'un 5 yıl güvenlik güncellemesi veren cihazlarını](https://www.epey.com/akilli-telefonlar/servis-ve-uygulamalar/5-yil-guvenlik-guncellemesi-garantisi/) veya aylık güncelleme veren LineageOS tabanlı official custom ROM’ları tercih edebilirsiniz. (Google Pixel bu konuda en iyisi ama henüz ülkemizde satışı yok maalesef. Google Pixel bir cihazınız varsa zaten düzenli güncellemeleri bizzat Google'dan alabilir veya GrapheneOS kullanabilirsiniz.)

**KAYNAKLAR**

1. https://www.which.co.uk/news/article/face-recognition-mobile-phones-axNDM2P9VvyO
2. https://www.bbc.com/news/uk-wales-43711477
3. https://source.android.com/docs/security/features/authentication
