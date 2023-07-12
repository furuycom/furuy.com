---
title: "AdAway Nedir? AdAway Nasıl Kullanılır?"
date: "2021-05-16"
categories: 
  - "android"
  - "uygulamalar"
cover:
  image: "/assets/img/adaway.jpg"
---

## AdAway Nedir?

Adaway, [Android](https://furuy.com/categories/android/) için en etkili reklam engelleme uygulamalarındandır. AdAway'i diğer reklam engelleyicilerden ayıran ana özelliği, root modudur. Root modu, sistemin hosts dosyasına eklemeler yaparak, reklam türevi istenmeyen web sitelerine bağlanılmasını engeller. **AdAway rootsuz** da çalışmaktadır ancak aynı işlevi gören Netguard, AdGuard ve Blokada gibi birçok alternatifi de olduğu için bu yazıda root modu üzerine bilgi vereceğim. Root modu sayesinde, uygulamanın sürekli arka planda çalışarak pil tüketmesinin onüne geçebilir ve VPN kullanırken de reklamları engellemeye devam edebilirsiniz.

### AdAway'in Temel Özellikleri

- Özgür yazılımdır
- Ücretsizdir
- Magisk modülü ile güvenli olarak çalışır

## AdAway Magisk İle Nasıl Kullanılır?

Magisk Manager, bildiğiniz gibi, bir root yöneticisi. Bunun yanında, modül desteği gibi birçok özelliği de bulunuyor. Modüller systemlessly olduğu için sistemde kalıcı değişiklikler yapmazlar ve kaldırıldıklarında değişiklikler geri alınır. /etc/hosts gibi kritik bir sistem dosyasına doğrudan müdahale etmek önerilmediği için bu modülü kullanabilirsiniz.

Magisk Manager'da bütünleşik olarak bulunan "**Systemless hosts**" modülünü uygulama ayarlarından aktifleştirebilirsiniz. Modülün etkin olması için cihazınızı yeniden başlatmayı unutmayın. Bu sayede reklam engelleme kurallarının ekleneceği hosts dosyasını kolaylıkla orijinale çevirmeniz mümkün.

## AdAway İndir

AdAway'in resmi web sitesi: [https://adaway.org/](https://adaway.org/)

AdAway'i F-droid üzerinden indirin: [https://f-droid.org/packages/org.adaway/](https://f-droid.org/packages/org.adaway/)

## AdAway Host Kaynakları

AdAway, varsayılan olarak çok az hosts kaynağı içerir. Daha fazla engelleme yapmak için "[FilterLists İle Yeni Reklam Engelleyici Filtreleri Bulun](https://furuy.com/filterlists-com/)" isimli yazıma göz atabilirsiniz. Bu sayede, birçok faydalı filtreyi daha kullanabilirsiniz. Dikkat etmeniz gereken, reklam engelleme filtresinin hosts syntax'ında olmasıdır. Adblock Plus veya uBlock filtreleri, AdAway'de kullanılamaz.

## AdAway Nasıl Kullanılır?

**_1-_** AdAway uygulamasını, belirttiğim güvenilir kaynakların birisinden indirin ve yükleyin.

**_2-_** İlk adım olarak, Magisk Manager ayarlarından "Systemless hosts" modülünü ekleyin ve cihazınızı yeniden başlatın.

**_3-_** Uygulamayı açtıktan sonra, sizi kurulum ekranı karşılayacak. Burada, root modu veya VPN modu olarak iki seçenek bulunuyor. Root modunu seçin ve ardından root izni vererek devam edin.

![AdAway Adım 1](/assets/img/adaway-adim-1.jpg)

**_4-_** Sonraki kurulum ekranında da senkronize ve güncelleme işlemi yapılacak. Kaynakları indirme işlemini tamamlanana kadar bekleyin ve diğer adıma geçin.

![AdAway Adım 2](/assets/img/adaway-adim-2.jpg)

**_5-_** Kurulumun son sayfası olan "Support Me" sayfasını da geçerek uygulamaya devam edin.

**_6-_** Menüden "**Preferences**" sayfasını açın ve "**Root based ad blocker**" başlığına tıklayın.

![AdAway Adım 3](/assets/img/adaway-adim-3.jpg)

**_7-_** Yukarıdaki görselde de olduğu gibi, **Test web server** durumu "**Not running**" olabilir. Bunu çalışır hale getirmek için bir sertifika yüklemeniz gerekir ama bu işlemin çok tehlikeli olabileceği için güvenilir bir kaynaktan olsa bile sertifika yüklemenizi önermem. Bu özellik, yalnızca reklam engellendiği zaman uygulama donuyorsa kullanılabilir. Sonucu aşağıdaki gibi test edebilirsiniz:

![AdAway Adım 4](/assets/img/adaway-adim-4-1024x159.jpg)

![AdAway Adım 5](/assets/img/adaway-adim-5.jpg)

**_8-_** Aşağıdaki görseldeki numaralara göre açıklamalar:

![AdAway Nasıl Kullanılır](/assets/img/adaway-nasil-kullanilir.jpg)

1: Engellenen toplam domain veya IP adresi.

2: İzin verilen, engellemelerden muaf tutulan adresler.

3: Yönlendirilen adresler.

4: Hosts kaynakları ve güncellik durumları. Host kaynağı eklemek için de buraya tıklamanız gerekiyor.

5: DNS kaydı tutabileceğiniz kısım.

6: Servisi duraklatma ve devam ettirme butonu.

## Hosts Kaynağı Ekleme

Öncelikle, yukarıdaki görseldeki 4 numaralı bölüme tıklayın. Açılan **Hosts Sources** sayfasının sağ altındaki butona tıklayın.

**Label:** Filtrenin ismi (herhangi bir şey yapabilirsiniz)

**List format:** Bu listedeki alan adlarının engellenmesini istiyorsanız varsayılan olarak "block" seçili kalsın. Bir whitelist ekliyorsanız, "allow" u seçin.

**Type:** Hosts kaynağının yerel bir dosya olarak mı ekleneceği yoksa internetten mi çekileceği soruluyor.

![AdAway Add Source](/assets/img/adaway-add-source.jpg)

Gerekli bilgileri doldurun ve kaydedin.

![AdAway Host Sources](/assets/img/adaway-hosts-sources.jpg)

Host kaynağını ekledikten sonra, yukarıdaki gibi bir uyarı göreceksiniz. APPLY'a tıklayarak değişiklikleri kaydederek, hosts dosyasını güncelleyebilirsiniz. Bu işlem, kaynak dosyanın boyutuna göre kısa veya uzun zaman alabilir. Aynı güncelleme ve hosts dosyası yaratma işlemini, ana ekrandaki butonlar ile de yapabilirsiniz.

![AdAway Hosts Sources 2](/assets/img/adaway-hosts-sources-2.jpg)

İşlem tamamlandıktan sonra, kaynağın en son güncellendiği tarihi ve kaç adet kural içerdiğini görebilirsiniz. Kaynağı devre dışı bırakmak için de, soldaki kutucukları kullanabilirsiniz. Devre dışı bırakma işleminden sonra, dosyayı yeniden güncellemeniz gerekiyor.

## Bir Alan Adını Engelleme, İzin Verme, Yönlendirme

AdAway ile bir domain'e erişilmesini kısıtlayabilir, kısıtlanmış bir domain'e izin verebilir veya bir yönlendirme kuralı oluşturabilirsiniz. Bunun için uygulamanın ana ekranındaki Blocked, Allowed veya Redirected bölümlerine tıklayın. Açılan sayfanın sağ alt kısmındaki butona tıklayın ve istediğiniz kuralı ekleyin. Özellikle de yönlendirme kurallarında çok dikkatli olmanızı öneririm.

## Hosts Dosyası Nerede?

Eğer Magisk Manager'daki "Systemless Hosts" modülünü kullanıyorsanız:

/data/adb/modules/hosts/system/etc/

Varsayılan orijinal dizin kullanılıyor ise de:

/system/etc/

Bu klasörlerde bulunan "hosts" dosyasını, Root'lu bir dosya yöneticisinden görüntüleyebilirsiniz.

* * *

Eğer sizin de konu hakkında tavsiyeleriniz veya merak ettikleriniz varsa, bunu yorum bölümünden paylaşmayı unutmayın.
