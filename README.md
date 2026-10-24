# AŞSAN landing page

## Yerelde çalıştırma

Node.js 18 veya üzeri gerekir. Proje ana klasöründe:

```sh
npm run dev
```

Tarayıcıda http://127.0.0.1:5173 adresini açın. Paket kurulumu ve derleme gerekmez. Sunucuyu durdurmak için `Ctrl+C` kullanın.

Port doluysa sunucu otomatik olarak sonraki boş portu dener ve adresi terminalde gösterir. Başlangıç portunu kendiniz seçmek için:

```sh
PORT=5174 npm run dev
```

## Düzenleme

- `assan-landing/dist/index.html`: Sayfa içeriği
- `assan-landing/dist/style.css`: Tasarım ve mobil düzen
- `assan-landing/dist/app.js`: Menü, hizmet detayları ve teklif formu
- `assan-landing/dist/assets/`: Yerel görseller

Değişikliklerden sonra tarayıcıyı yenileyin. Google Fonts için internet bağlantısı kullanılır; bağlantı yoksa sistem yazı tipleri gösterilir. Form e-posta uygulamasında taslak açar; sunucuya veri kaydetmez.

Bu yerel çalışma düzeni herhangi bir yükleme veya yayınlama işlemi içermez.
# assan
