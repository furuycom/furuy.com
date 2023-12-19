---
title: "WordPress Yönetici Ve Giriş Güvenliği"
date: "2021-08-02"
categories: 
  - "guvenlik-mahremiyet"
  - "webmaster"
  - "wordpress"
---

> Bu yazı uzun zamandır güncellenmemektedir!

WordPress web sitenizdeki yönetici hesapları, varsayılan olarak birçok kritik yetkiye sahip olurlar. Bu hesapların güvenliği sağlanmazsa, web siteniz de tehdit altında olur. Bu yazıda, manuel olarak uygulayabileceğiniz bazı güvenlik adımlarını anlatacağım.

## 'Admin' Kullanıcı Adını Kullanmayın

Tüm brute-force kullanıcı adı listelerinin ilk sırasında yer alan, "admin" gibi yaygın ve tahmin edilebilir kullanıcı adlarını, hiçbir sisteminizde kullanmayın. Yalnızca web sitenizde kullanacağınız, tahmin edilemez ve özgün bir kullanıcı adı belirleyin.

## Kayıtları Kapatın

WordPress, varsayılan olarak web sitenize herkesin kayıt olabilmesini sağlayan özelliği kapatır. Bilinmedik kullanıcılar, çeşitli açıkları kullanarak web sitenize zarar verebilirler. İhtiyacınız yoksa, herkese açık üyelik kayıtlarını mutlaka devre dışı tutun. Kontrol edin: **Ayarlar > Genel Ayarlar > İsteyen herkes kayıt olabilsin**

Ayrıca, aynı bölümün hemen altındaki "**Yeni kullanıcının varsayılan rolü**" de mutlaka "**Abone**" olarak kalsın.

## Giriş İpuçlarını Devre Dışı Bırakın

WordPress, varsayılan olarak giriş yapma ipuçlarını gösteriyor. Bu da, özellikle de brute-force saldırılarında sizin aleyhinize kullanılıyor. Bu giriş ipuçlarını devre dışı bırakmak ve tüm hatalarda aynı mesajın görünmesini sağlamak için, temanızın **functions.php** dosyasına bu kodu ekleyin:

```
function no_wordpress_errors(){
return 'Girilen bilgiler geçersiz. Lütfen kontrol edin.';
}
add_filter( 'login_errors', 'no_wordpress_errors' );
```

![WordPress Giriş Hata İpuçlarını Devre Dışı Bırak](/assets/img/wordpress-giris-hata-ipuclarini-devre-disi-birak.jpg)

## Otomatik Çıkış Yapılandırması

Yönetici oturumunun her zaman açık kalması, özellikle de unutma gibi durumlarda tehlike yaratabilir. Bunu önlemek için temanızın **functions.php** dosyasına ekleyeceğimiz bir kod ile, giriş yapıldıktan _24 saat sonra_ otomatik olarak çıkış yapılmasını sağlayacağız:

```
add_filter('auth_cookie_expiration','stay_logged_in_for_1_day');
function stay_logged_in_for_1_day($expire){
return 86400;
}
```

## Kullanıcı Taramasını Devre Dışı Bırakın

WordPress kullanıcıları, ID numaralarına göre taranabilir. Örneğin, example.com/**?author=1** bağlantısına gidecek olursanız, sizi ID numarası 1 olan kullanıcıya yönlendirecektir. Bu da, varsayılan yönetici hesabınızı açığa çıkaracak ve web sitenizdeki kullanıcıların taranmasına imkan verecek. Bunu engellemek için, ana dizindeki **.htaccess** dosyasına bu kodu ekleyin:

```
RewriteEngine On
RewriteBase /
RewriteCond %{QUERY_STRING} (author=\d+) [NC]
RewriteRule .* - [F]
```

Artık, yazar taramaları doğrudan ana sayfaya yönlendirilecek.

## SSL Zorlaması

İnternet trafiğinin okunmasını ve dışarıdan müdahale edilmesini engelleyen HTTPS protokolü olmadan, web sitenize giriş yapmanız çok tehlikelidir. Aşağıdaki kodu wp-config.php dosyasına ekleyerek, giriş sayfasında ve yönetim panelinde (wp-admin) HTTPS kullanılmasını zorunlu kılabilirsiniz:

```
define('FORCE_SSL_ADMIN', true);
```

## WordPress Salts

WordPress giriş bilgilerinizi güvenli bir şekilde saklamak ve cookie hijacking saldırılarını önlemek için salt keyleri kullanılmaktadır. **wp-config.php** dosyasında salt keyleri bulunduğundan ve bu keyleri başkaları ile paylaşmadığınızdan emin olun. Yeni key'ler üretmek için resmi bağlantıyı ziyaret edin: [https://api.wordpress.org/secret-key/1.1/salt/](https://api.wordpress.org/secret-key/1.1/salt/)

## wp-login.php Konumunu Değiştirin

Web sitenizdeki üyelikler herkese açık değilse, başkalarının giriş yapma sayfasına erişmesine de gerek yoktur. Bu sayede, olası saldırıları engellemiş olacaksınız.

1. **wp-login.php** dosyasını indirin.
2. Dosya adını istediğiniz şekilde değiştirin. Örnek: yenigirissayfasi.php
3. Adını değiştirdiğiniz dosyayı açın ve "**wp-login.php**" yazılarını, belirlemiş olduğunuz yeni dosya adı ile değiştirip kaydedin.

Yeni güncellemelerin varsayılan olarak yarattığı wp-login.php dosyasına erişim engellemek için de aşağıdaki kodu .htaccess dosyasına ekleyin:

```
<files wp-login.php>
order allow,deny
deny from all
</files>
```

Artık, belirlemiş olduğunuz ve yalnızca sizin bildiğiniz giriş bağlantısından giriş yapabileceksiniz. Yeni güncellemelerden sonra, yeni wp-login.php dosyası üzerinde aynı işlemleri yapmanızı tavsiye ederim çünkü eski dosyada türlü açıklar olabilir.

## Varsayılan ID'yi Değiştirin

Güvenlik için varsayılan ilk kullanıcı (yönetici) ID'si olan "1"i değiştirin. Bunu nasıl yapabileceğinizle ilgili bir yazı ekleyebilirim (henüz eklenmemiş ise kendiniz araştırabilirsiniz). Bu işlemden önce yedek almayı unutmayın.

## User Nicename

WordPress için iki adet kullanıcı adı bulunuyor: giriş yaparken kullanacağınız kullanıcı adı ve ziyaretçilere gösterilecek, profil bağlantınızda yer alacak kullanıcı adı... Bu kullanıcı adları aynı olursa, giriş yaparken kullanılacak anahtarlardan bir tanesini saldırganlara vermiş oluyorsunuz. Bu iki kullanıcı adının farklı olması gerekiyor.

1. Yalnızca giriş yaparken kullanacağınız, daha önce kullanmadığınız bir kullanıcı adı seçin.
2. Belirlediğiniz bu yeni kullanıcı adını, veri tabanınıza bağlanarak yalnızca (wp\_users tablosundaki) "**user\_login**" alanında kullandığınızdan emin olun.
3. "**user\_nicename**" alanında ise, ziyaretçilere görünecek, "**user\_login**" alanındakinden farklı bir kullanıcı adı belirleyin.
4. Ardından kullanıcı profilinizi düzenleme sayfasına gidin ve giriş yaparken kullanacağınız kullanıcı adınızın başka alanlarda kullanılmadığından emin olun. Ad ve takma isim gibi diğer bölümlerde, "user\_nicename" alanında kullanmak için belirlediğiniz kullanıcı adını kullanın ve değişiklikleri kaydedin.
