---
title: "Parola Yöneticileri Güvenli Bir Şekilde Nasıl Kullanılır?"
date: "2021-03-30"
lastmod: "2023-07-06"
categories: 
  - "guvenlik-mahremiyet"
tags: 
  - "password-manager"
  - "sifre-yoneticisi"
cover:
  image: "/assets/img/guvenli-parola-yoneticisi.jpg"
---

Parola yönetici araçların önemi, günden güne daha iyi anlaşılmaktadır. Güvenlik amacıyla kullanılan bu araçlar, tehlikeli de olabilirler. Bu araçlar bilinçsiz veya tedbirsiz kullanılırsa, kullanıcının internetteki tüm varlığı, kötü niyetli kişilere altın tepside sunulmuş olur. Bu tür istenmeyen durumlardan kaçınmak için bu rehberi dikkatli bir şekilde okuyup, tavsiyeleri uygulamanızı ve konu hakkındaki bilgilerinizin güncel kalması için de siber güvenlik alanında yetkin kaynaklarını takip etmenizi öneririm.

Yazıya geçmeden, konu hakkında deneyimli kişilerin bile sıklıkla yaptığı bir yanlış kullanımı da düzelteyim: İnternette, giriş yaparken veya kayıt olurken yazdığınız şeye "şifre" değil, "parola" denir. Bu yüzden de "şifre yöneticisi" yerine, doğru kullanım olan "**parola yöneticisi**" sözcüğünü kullanacağım.

## Güvenli Bir Parola Yöneticisi Kullanın

Kullanacağınız parola yöneticisinin güvenli olması, dikkat etmeniz gereken ilk husustur. Bir parola yöneticisi seçerken, aşağıdaki kriterlere uygun bir seçim yapmanızı öneririm:

1. Kullanacağınız yazılımın açık kaynak kodlu olduğundan emin olun.

3. Verilerin şifrelenmiş (encrypted) olarak saklandığından emin olun.

5. E-posta hesabınızla birlikte riske girebilecek Google'ın parola yöneticisi gibi bütünleşik araçları kullanmayın.

Bu kriterler uyan Bitwarden veya KeePass yazılımlarını kullanabilirsiniz.

### Bitwarden

![Bitwarden - Parola Yöneticisi](/assets/img/bitwarden.jpg)

- Bitwarden, açık kaynak kodlu\[1\] ve yarı-ücretsiz (freemium) bir parola yöneticisidir.

- İsterseniz Bitwarden'in ücretsiz sürümünü kullanabilir, isterseniz de kendi sunucunuzda kullanabilirsiniz.

- Verileriniz, AES-256 gibi gelişmiş şifreleme yöntemleri ile şifrelenir. \[2\]

- Birçok platform için uygulaması bulunmakla birlikte, tarayıcı üzerinden de kullanılabiliyor.

- Bitwarden'in resmi web sitesini ziyaret edebilirsiniz: [https://bitwarden.com/](https://bitwarden.com/)

- Resmi indirme bağlantıları: [https://bitwarden.com/download/](https://bitwarden.com/download/)

### KeePass

![KeePass - Parola Yöneticisi](/assets/img/keepass.jpg)

- KeePass, açık kaynak kodlu ve tamamen ücretsiz bir parola yöneticisidir.

- Veriler, Bitwarden'de olduğu gibi AES-256 yöntemi ile şifrelenir.

- Bu aracın Bitwarden'den farkı, çevrim dışı olmasıdır. Yani, KeePass tarafından oluşturulan dosyayı güvenli bir şekilde saklamanız gerekiyor.

- Açık kaynak kodlu olduğu için birçok platform için farklı uygulaması bulunuyor.

- KeePass'in resmi web sitesini ziyaret edebilirsiniz: [https://keepass.info/](https://keepass.info/)

## Parola Yöneticisi İçin Güvenli Bir E-Posta Kullanın

Güvenilir bir e-posta sağlayıcısından, yalnızca parola yöneticisi üyeliğinde kullanacağınız bir e-posta adresi oluşturun. Bu e-posta adresini, başka hiçbir yerde kullanmayın ve paylaşmayın. Bu sayede, parola yöneticisi araçta kullandığınız giriş bilgilerinin tahmin edilmesi daha zor olacak. Potansiyel saldırganları hesabınızdan ne kadar uzak tutarsanız, o kadar iyidir.

## Güçlü Bir Parola Kullanın

Güçlü bir parola, güvenliğin en önemli kriterlerindendir. Aşağıdaki kriterlere uygun bir parola oluşturun:

- Ne kadar uzun olursa, o kadar güvenlidir (aşağıdaki kriterlerin tamamına uyduğunuz sürece).

- Özel karakterler içermeli.

- Büyük ve küçük harfler içermeli.

- Rakam ve/veya sayı içermeli.

- Tahmin edilemez olmalı.

- Sizi tanıyan veya bilgilerinize erişebilecek kişilerin tahmin edebileceği, doğum tarihiniz veya okuduğunuz bir okulun adı gibi bilgileri içermemeli.

- Ardışık cümle veya sayılar kullanılmamalı (qwerty, 1234).

- Başka bir yerde kullanılmamalı.

Bu parolayı, asla bilgisayarınızdaki bir not defterinde vs. bulundurmayın; Ya güvenli bir yerdeki bir kağıtta (riskli), ya da ezberinizde olmalı. Güvenli bir parola oluşturmak için Zarola yöntemini de kullanabilirsiniz. Özgür Yazılım Derneği, konu hakkında mükemmel bir kaynak hazırlamış: [https://zarola.oyd.org.tr/](https://zarola.oyd.org.tr/)

## İki Adımlı Doğrulama Kullanın

E-posta (tavsiye etmiyorum) veya kod uygulaması ile iki adımlı doğrulamayı aktif edin. Yedek kodları asla cihazınıza kaydetmeyin. İki adımlı doğrulama kullanılması sayesinde, giriş bilgileriniz ele geçirilse bile verilerinize erişilemeyecek.

**NOT 1:** SMS ile iki adımlı doğrulama veya Google Authenticator gibi özgür olmayan yazılımlar yerine; [Aegis](https://github.com/beemdevelopment/Aegis) gibi özgür yazılımlar kullanın.

**NOT 2:** Bitwarden'in ücretli sürümünde, kaydedilen hesaplar için parola ile birlikte iki adımlı doğrulama kodu oluşturabilme özelliği de bulunuyor. Bu tür özellikleri asla kullanmayın. İki adımlı doğrulama için mutlaka farklı bir araç kullanın; Tüm yumurtaları tek sepette tutmayın.

## Hesap Kurtarmayı Devre Dışı Bırakın

Hesabınız ve hesabınızda kullandığınız e-posta adresi için giriş ipuçlarını, parola hatırlatma ipuçlarını ve kurtarma yöntemlerini mutlaka devre dışı bırakın. Bunlar, bilinenin aksine [güvenlik](https://furuy.com/categories/guvenlik/) sağlamaktan ziyade, güvenliği zafiyeti yaratırlar.

## Resmi Web Sitelerini Kullanın

Olası phishing saldırılarından korunmak için yazılımı resmi web sitesinden indirin veya tarayıcı üzerinden giriş yapacaksanız, web site adresini kendiniz yazın. Doğru olduğundan emin olduğunuz giriş bağlantısını, hızlı erişim için yer imlerine ekleyebilirsiniz. Arama sonuçları ile resmi web siteye ulaşamayabilirsiniz; İlk sıralarda çıkan reklamlar yüzünden sahte web sitesine gidebilirsiniz.

![Sahte bir Bitwarden reklamı.](/assets/img/bitwarden-sahte-reklam.jpg)

Bir Reddit kullanıcısının karşılaştığı sahte bir reklam.  
Kaynak: [https://www.reddit.com/r/Bitwarden/comments/10k2aj5/google\_search\_ads\_showing\_fake\_bitwarden\_web/](https://www.reddit.com/r/Bitwarden/comments/10k2aj5/google_search_ads_showing_fake_bitwarden_web/)

![Sahte bir Bitwarden websitesi.](/assets/img/bitwarden-sahte-web-sitesi.jpg)

Bir başka sahte Bitwarden websitesi.  
Kaynak: [https://www.reddit.com/r/Bitwarden/comments/10kswt8/god\_damn\_in\_situations\_like\_this\_how\_can\_i\_detect/](https://www.reddit.com/r/Bitwarden/comments/10kswt8/god_damn_in_situations_like_this_how_can_i_detect/)

Web site adresini kontrol edin ve tarayıcınızda sayfa url'si yerine sayfa başlığını gösteren özellik aktif ise devre dışı bırakın. [Firefox](https://furuy.com/firefox-neden-en-iyi-android-web-tarayicisi/) tarayıcı kullanıyorsanız, about:config sayfasından "**network.IDN\_show\_punycode**" seçeneğini aktifleştirin.

Keepass gibi indirilebilir bir yazılım ise mutlaka hash kontrolü yapın: [https://keepass.info/integrity.html](https://keepass.info/integrity.html)

## Yazılımı Güncel Tutun

Resmi kaynaklardan indirdiğiniz yazılımın otomatik güncelleme özelliğini veya güncelleme bildirimlerini aktif etmeyi unutmayın. Bu özellikler mevcut değil ise manuel olarak güncellemeleri GitHub veya sosyal medya hesaplarından düzenli olarak kontrol etmeyi, bunlar da yoksa RSS adresini takip etmeyi unutmayın. Yazılımın eski sürümlerinde güvenlik açıkları olabilir.

## Güvenli Cihazlardan & Güvenli Ağlardan Giriş Yapın

Size ait olmayan cihazlardan veya herkese açık ağlardan asla parola yöneticisine giriş yapmayın. Güvenli olduğuna emin olduğunuz cihazlardan ve ağlardan, web sitelerin "https" sürümlerini kullanın. Çıkış yapmayı da unutmayın.

## Parola Yöneticisi Yedeğinin Güvenliği

Parola yöneticisi yedekleri, şifrelenmemiş bir metin dosyası olarak dışarıya aktarılabiliyor. Bu özelliği kullanmayın ve geri silecek olsanız bile, parolalarınızı içeren, şifrelenmemiş (encrypted) bir dosyayı cihazınıza indirmeyin. Yedek dosyasını şifrelenmemiş veya güvenli olmayan bir biçimde indirmişseniz, mutlaka "file shredder" yazılımları kullanın.

## Parola Yöneticisi Tarayıcı Eklentisini Kullanmayın

Tarayıcı eklentileri kolaylık sağlasalar da güvenli olmayabilirler. Tarayıcı uzantılarını kullanmanızı tavsiye etmiyorum. Bunun yerine, son çare olarak yazılımın "autofill" özelliğini kullanmayı düşünebilirsiniz.

## Parola Yöneticisi Hesaplarının Güvenliği

Bilinen güvenlik yöntemleri dışında, farklı yöntemler ile de güvenlik seviyesini artırmanız mümkün.

### Bilinen Kullanıcı Adlarını Yazmayın

Parola yöneticisine bir hesap kaydederken, bu hesabın giriş kullanıcı adını veya e-posta adresini yazmak zorunda değilsiniz. Örneğin, Twitter hesabınızın kullanıcı adını biliyorsanız, yalnızca parolayı kaydetmeniz yeterlidir.

Bu sayede, parola yöneticisi bilgileriniz çalınsa bile, bazı hesaplarınızı kısmen de olsa koruyabilirsiniz.

### Web Site Adresini Yazmayın

Parola yöneticisine, web sitesinin adresini kaydetmek zorunda değilsiniz. Örneğin bir Facebook hesabı kaydedecekseniz (Facebook kullanmayın), kayıt adına (başlığa) "fb" yazmanız yeterli olabilir; URL alanına "www.facebook.com" yazmanıza gerek yok. Bu ve "bilinen kullanıcı adlarını yazmayın" yöntemleri, verilerinizin çalınması halinde bazı hesaplarınızı otomatik saldırılardan koruyabilir.

### Kafanızdan Salt Yapın

Parolanın başına veya sonuna, kafanızda belirlediğiniz bir karakteri ekleyin. Örneğin bir web sitesine kayıt olurken, parola oluşturucu araçtan parolanızı alın ve onun başına veya sonuna, unutmayacağınız bir karakter ekleyin (örneğin: "xyz") ama bu karakterleri parola yöneticisine kaydetmeyin. Adım adım şu şekilde:

1. Bir web sitesine kayıt olacağız. Parola oluşturma aracı, bize bir parola oluşturdu. Örnek: "**13579qwerty**"

3. Parola yöneticisinin oluşturduğu parolayı, bu haliyle kaydedin.

5. Daha sonra, bu parolanın sonuna veya başına istediğiniz karakterleri ekleyin. Örnek: "**xc1**"

7. Parola yöneticisinin oluşturduğu parolaya, kendi karakterlerinizi ekleyin ve bu haliyle web sitesine kayıt olun. Örnek: "**xc1**13579qwerty"

9. Parola ele geçirilse bile, "13579qwerty" parolası açığa çıkacaktır. Sadece sizin bildiğiniz "**xc1**" karakteri bulunmadığı sürece, ele geçirilen parola yanlış olacaktır.

## Parola Şifreleme Algoritması (Password Iterations)

Yazılarımda birkaç kez, insanların "parola" yerine "şifre" demelerinin yanlış olduğundan bahsetmiştim. Şimdi bunu çok daha iyi anlayacaksınız.  
Güvenli bir parola yöneticisi, parolalarınızın olduğu veri tabanını şifreli olarak saklar ve bu şifreyi çözmek için de belirlediğiniz parolayı kullanmanız gerekir. Bu sayede sistem yöneticisi de dahil olmak üzere, parolanızı bilmeyen hiç kimse okuyamaz. Şifreleme (encryption) bu yüzden çok önemlidir. Parolalarınızın bulunduğu şifreli veri tabanı çalınsa bile, bu şifrenin kırılması gerekir. Burada bir önemli konu daha ortaya çıkıyor; Şeffaflık. Firmalar, hacklenme veya türevi gibi güvenlik ihlali durumlarında mutlaka kullanıcılarını bilgilendirmeliler. Bu sayede veri tabanı dosyası saldırganlar tarafından çalınsa bile, tüm parolalarınızı değiştirmeniz için zamanınız olacaktır. Bu başlıkta, bu zamanı nasıl artırabileceğinizi, veri tabanının şifresinin kırılmasını nasıl daha zor yapacağınızı öğreneceksiniz.

Parola yöneticisindeki verilerinize erişebilmeniz için kullandığınız parolanın da güvenli olması gerekir. Bunun ilk adımı, güvenli bir parola belirlemektir. Bu parola, hatırlamanız gereken ve hiçbir yerde fiziksel veya dijital olarak saklanmayan tek parolanız olmalıdır. Parolanızı bulmak isteyen kişiler, brute-force gibi saldırılar deneyeceklerdir. Bu saldırıları engellemenin en iyi yöntemlerinden birisi de, brute-force saldırılarına karşı geliştirilmiş güvenli bir parola şifreleme algoritması kullanmak. Bu sayede brute-force saldırılarının hızı kesilip, saldırının çalışma mantığını neredeyse anlamsız kılacaktır. Burada PBKDF2 öne çıksa da, OWASP, Argon2id kullanmanızı öneriyor. Bu işlemden önce yedek almayı unutmayın.  
İlgili yazı: [https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)  
Online test arası: [https://antelle.net/argon2-browser/](https://antelle.net/argon2-browser/)

## Biyometrik Doğrulama

Hesabınızın parolasını korumanın en iyi yolu, onu olabildiğince az kullanmaktır. Bu sayede potansiyel birçok tehditten kurtulmuş olacaksınız. Burada yardımınıza biyometrik kilit açma (Unlock with Biometrics) özeliği yetişiyor. Kullandığınız cihazdaki parmak izi veya yüz tanıma gibi biyometrik doğrulama yöntemlerini kullanmanız öneriliyor.

## Riskler

**Parola yöneticisi kullanılmıyor, tüm parolalar aynı:** Bir hesabınızın parolasının çalınması durumunda, çeşitli yazılımlar kullanılarak diğer web sitelerindeki üyelikleriniz de kolaylıkla ele geçirilebilir.  
**Parola yöneticisi kullanılmıyor, tüm parolalar bir dosyada saklanıyor:** Diğer verileriniz ne kadar güvende ise parolalarınız da o kadar güvenli olur.  
**Güvenli olmayan bir parola yöneticisi kullanılıyor:** Sistem yöneticileri veya saldırganlar parolalarınıza kolaylıkla erişebilir:  
**Açık kaynak kodlu olmayan bir parola yöneticisi kullanılıyor:** Kullandığınız sistemin ne kadar güvenli olduğundan asla emin olamazsınız.  
**Fazla bilinmeyen bir parola yöneticisi kullanılıyor:** Çevrim içi bir araç kullanıyorsanız, bu servisin ne zaman kapatılacağını bilemezsiniz ve olası bir durumda verilerinizi kaybedebilirsiniz. Daha az geliştirici ve daha küçük bir topluluk da, kritik güvenlik açıklarının uzun bir süre tespit edilememesine neden olabilir. Yazılıma olan desteğin kesilmesi durumunda, dışarı aktarma seçeneği veya uyumluluk desteği yoksa, parolalarınızı tek tek başka bir araca taşımanız gerekebilir.  
**Çok popüler bir parola yöneticisi kullanılıyor:** Yazılım desteği ve topluluk desteği çok iyi seviyede olur ama bir o kadar fazla saldırganın da hedefi olur.  
**Çevrim içi bir parola yöneticisi kullanılıyor:** Parolalarınızın olduğu veri tabanına her zaman erişilebilme riski var. Dolaylı olarak saldırganların sürekli hedefinde olacaksınız.  
**Çevrim dışı bir parola yöneticisi kullanılıyor:** Parolalarınızın olduğu veri tabanını korumak, güncellemeler yapmak, veri tabanının bulunduğu cihazların güvenliğini sağlamak, (kullanıyorsanız) cihazlar arasındaki senkronizasyonun güvenliğini sağlamak, veri tabanını güvenli ve düzenli bir şekilde yedeklemek tamamen sizin sorumluluğunuz altındadır.  

**Benim tavsiyem:** Makul düzeyde kullanıcısı olan, açık kaynak kodlu, batı (coğrafi olarak değil, politik olarak) ülkesi menşeli resmi bir firması olan, şeffaf, kötü bir sicili olmayan, uzun yıllardır var olan, veri tabanı şifrelemesi güçlü, yakın bir zamanda sahibi değişmemiş (satılmamış) bir parola yöneticisi kullanmanızı öneririm.

* * *

**KAYNAKLAR**

1. https://bitwarden.com/open-source/

2. https://bitwarden.com/help/what-encryption-is-used/

3. https://twitter.com/Bitwarden/status/1667216233077325829