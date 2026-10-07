# Ajan kuralları

- `docs/` otomatik üretilen yayın çıktısıdır. İçindeki dosyaları asla doğrudan düzenleme; gerekli değişiklikleri kaynaklarda yap ve Hugo ile yeniden üret.
- PaperMod'u mümkün olduğunca orijinal hâliyle kullan. Tema dosyalarını değiştirme; tema davranışını değiştiren yerel `layouts/` kopyaları, özellikler veya uyumluluk yamaları ekleme. Bu geliştirmeleri resmi temaya bırak.
- PaperMod'u resmi Git alt modülü üzerinden güncelle. Derlemeyi engellemeyen tema uyarıları için yerel yama ekleme; resmi tema düzeltmesini bekle. Derleme başarısız olursa sorunu bildir, kendiliğinden tema özelleştirmesi yapma.
- Mevcut `layouts/` özelleştirmelerini koru; açıkça istenmedikçe değiştirme.
- Yalnızca gerekli değişiklikleri yap. İstenmeyen yeniden düzenleme, metin değişikliği veya bakım yükü ekleme.
- Araç metinlerini ve değişiklik geçmişini kısa, sade ve doğal tut; gereksiz ayrıntı ekleme. Sürüm notlarında önemli yenilikleri önce yaz.
- `content/araclar/_index.md` içindeki CrowdName metinleri İngilizce kalmalı; Türkçeleştirme.
- GitHub release'lerini yalnızca kullanıcı açıkça istediğinde oluştur veya yayımla; commit/push isteği release izni değildir. Release otomasyonu kurma.
- Site release başlığı ve etiketi `YYYY-MM-DD` biçiminde tarih olmalı; araçların kendi sürüm numaraları ayrı kalır. Açıklama GitHub'ın `Generate release notes` özelliğiyle hazırlanabilir; Türkçe olması zorunlu değildir. Notların ilgili yayındaki gerçek değişikliklerle uyumunu kontrol et.

## Parola aracı

- Parola kelime etiketleri `static/araclar/parola-cumlesi-olusturucu/kelime-etiketleri.js` içindedir. Ana kelime listesinin yazımını ve sırasını değiştirme; geçici çalışma dosyalarını iş bitince kaldır.
- Sayfa yüklendikten sonra çevrimdışı çalışmayı koru; dış kaynak, analiz servisi veya parola gönderen ağ isteği ekleme.
- Parolaları ve parola geçmişini tarayıcı depolamasına yazma. Yalnızca sürüm bildirimi için görülen sürümü sakla.
- Güvenli ve eşit olasılıklı rastgele üretimi koru. Entropiyi gerçek kelime havuzundan ve rastgele seçimlerden hesapla; emoji, sabit ayraç ve harf büyütmeye katkı verme.
- Yaygınlığı gündelik tanınırlığa göre değerlendir; ölçülmüş kullanım sıklığı gibi sunma. Emoji ipuçları bilinen anlamla veya açık bir çağrışımla ilişkili olmalı.
- Görünüm ve biçimlendirme ayarları değişince mevcut kelimeleri yeniden üretme.
- Ctrl+P davranışına müdahale etme. İndirmelerde uyarı ve onayı, ilk satırda mevcut parolayı koru.
