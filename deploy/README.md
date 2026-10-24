# Sunucu dağıtımı

- Alan adı: https://assan.qmaris.com.tr
- Sunucu: 104.233.4.39
- SSH: root, port 25416 (yetkili SSH anahtarı gerekir)
- Web sunucusu: Nginx; Node.js servisi gerektirmeyen statik site
- Yayın dizini: `/var/www/assan.qmaris.com.tr/current`
- Sürümler: `/var/www/assan.qmaris.com.tr/releases/`
- Nginx: `/etc/nginx/sites-available/assan.qmaris.com.tr`

Yalnızca `assan-landing/dist/` içeriği sunucuya yüklenir. `.git` ve `.openai` yayın paketine dahil edilmez. Sunucudaki Nginx yapılandırması Certbot tarafından HTTPS için güncellenmiştir; buradaki `.nginx.conf` ilk HTTP kurulumu için örnektir ve canlı yapılandırmanın üzerine doğrudan kopyalanmamalıdır.

Sonraki güncellemelerde dosyaları yeni bir sürüm dizinine yükleyin, dosya izinlerini doğrulayın ve `current` sembolik bağlantısını yeni sürüme atomik olarak taşıyın. Yalnızca içerik değişikliklerinde Nginx yeniden yüklemesi gerekmez. Geri almak için `current` bağlantısını önceki sürüme yönlendirin.

Canlı destek widget’ı aktiftir. Teklif formu e-posta taslağı oluşturur. Tasarım önizlemesi için arama motoru indekslemesi (`noindex`) kapalı tutulmuştur.
