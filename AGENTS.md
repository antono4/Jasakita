# JasaKita — Website Jasa Pembuatan Aplikasi dan Website

## Struktur
- `index.html` — halaman tunggal (semua CSS inline dalam `<style>` di `<head>`)
- `script.js` — JavaScript eksternal (custom cursor, nav scroll, menu mobile, marquee, reveal, counter, form submit)

## Catatan Proyek
- Bahasa konten: Indonesia
- Brand: **JasaKita** (logo `J`, tagline "Jasa Pembuatan Aplikasi dan Website")
- Tema desain: gelap dengan aksen hijau limau (`#c8f542`), font Unbounded + Schibsted Grotesk + JetBrains Mono
- Bagian halaman: Beranda (hero+stats), Layanan (bento 6 jasa), Proses (4 langkah), Teknologi (,stack-grid 8 item), Testimoni (,3 quote,, CTA, Kontak (,form + info kontak,, Footer

## Menjalankan
```bash
python3 -m http.server 8099 --directory /workspace/project
```
Lalu buka http://localhost:8099/

## Penting
- Karakter tersembunyi (`U+200B zero-width space`) terkadang menyusip saat penulisan file lewat alat edit — selalu jalankan pembersih karakter tak terlihat setelah mengubah file besar:
  `python3 -c "import re; p='FILE'; s=open(p).read(); open(p,'w').write(re.sub(r'[\u200b-\u200f\u2028-\u202e\u2060\u2066-\u2069\ufeff]','',s))"`
- Verifikasi JS selalu dengan `node --check script.js`