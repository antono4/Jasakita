# JasaKita — Jasa Pembuatan Aplikasi dan Website

![JasaKita](https://img.shields.io/badge/JasaKita-Website%20Digital-c8f542?style=for-the-badge&labelColor=0a0d0b)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Website landing page profesional untuk **jasa pembuatan aplikasi dan website** milik **JasaKita**. Dibangun dengan HTML, CSS, dan JavaScript murni — tanpa framework — dengan desain light modern bergaya glassmorphism beraksen biru yang bersih dan responsif.

---

## ✨ Fitur

- **Sticky navbar** dengan efek blur dan menu hamburger mobile
- **Hero section** — badge "Jasa Pembuatan Aplikasi dan Website", headline gradient, CTA, dan meta badges (Status, Level, Pengalaman, Lokasi)
- **Marquee layanan** berjalan (Website, Aplikasi Web, Mobile, UI/UX, E-Commerce, Maintenance)
- **6 layanan** dalam kartu glassmorphism:
  - Website Company Profile
  - Aplikasi Web
  - Aplikasi Mobile
  - Desain UI/UX
  - E-Commerce dan Marketplace
  - Maintenance dan Support
- **Keunggulan** dengan progress bar animasi (Pengembangan Web, Desain UI/UX, Aplikasi Mobile, Manajemen Proyek)
- **4 langkah proses** pengerjaan: Konsultasi → Desain → Pengembangan → Peluncuran
- **8 teknologi** pilihan dalam chip: React, Laravel, Flutter, PostgreSQL, Docker, Midtrans, Figma, GA4
- **3 testimoni** klien
- **Form kontak** dengan dropdown jenis proyek dan notifikasi toast
- **Footer** lengkap: navigasi, link perusahaan, legal, dan hak cipta
- **Glassmorphism cards**, ikon Font Awesome, radial gradient pastel latar, dan animasi reveal on-scroll
- **Fully responsive** — mobile, tablet, dan desktop

---

## 🛠️ Teknologi

| Area | Teknologi |
|---|---|
| Frontend | React · Next.js |
| Backend | Laravel · Node.js |
| Mobile | Flutter · React Native |
| Database | PostgreSQL · MySQL |
| Deploy | Docker · AWS · Vercel |
| Integrasi | Midtrans · Xendit · WhatsApp |
| Desain | Figma · Framer |
| Analitik | GA4 · Mixpanel · Hotjar |

---

## 🖼️ Screenshot

| Tampilan Hero | Tampilan Kontak |
|---|---|
| ![Hero](preview-hero.png) | ![Kontak](preview-kontak.png) |

---

## 🚀 Cara Menjalankan

### Lokal (via Python HTTP Server)

```bash
python3 -m http.server 8099
```

Lalu buka **http://localhost:8099/** di browser.

Atau cukup buka file `index.html` langsung di browser — semua aset sudah inline/terhubung lokal.

> **Catatan**: Gunakan server lokal agar file `script.js` termuat dengan benar (beberapa browser memblokir JavaScript saat dibuka via `file://`).

---

## 📁 Struktur Proyek

```text
.
├── index.html          # Halaman utama (semua CSS inline di <style>)
├── script.js            # JavaScript eksternal (interaktivitas)
├── preview-hero.png    # Screenshot tampilan hero
├── preview-kontak.png  # Screenshot tampilan kontak
├── README.md           # Dokumentasi ini
└── AGENTS.md           # Catatan teknis untuk agen AI
```

---

## 🎨 Desain

- **Tema**: Light modern dengan radial gradient pastel (hijau mint, biru, ungu, oranye) di latar
- **Aksen**: Biru `#2563eb` dan biru muda `#0ea5e9`
- **Kartu**: Glassmorphism — `rgba(255,255,255,0.6)` + `backdrop-filter: blur(12px)` + border putih + bayangan halus
- **Tipografi**: *Inter* untuk seluruh teks
- **Ikon**: Font Awesome 6.5.1
- **Detail visual**: badge/eyebrow pill, section bernomor, progress bar gradient, chip teknologi, marquee layanan

---

## ⚙️ Fitur JavaScript (`script.js`)

- Navbar berubah saat scroll (efek blur + shadow)
- Menu mobile hamburger
- Marquee layanan di-duplikasi agar loop mulus
- Animasi reveal on-scroll via IntersectionObserver
- **Progress bar animasi** saat section keunggulan terlihat di viewport
- Validasi dan toast notifikasi pada form kontak

---

## 📬 Kontak

Ingin membuat aplikasi atau website? Silakan hubungi kami via form di website atau:

- **Email**: `halo@jasakita.id`
- **WhatsApp**: `+62 812-3456-7890`
- **Kantor**: Jl. Teknologi No. 17, Bandung, Jawa Barat

---

## 📄 Lisensi

© 2026 JasaKita. Seluruh hak cipta dilindungi. Seluruh konten dan desain dalam repositori ini adalah milik **JasaKita** dan tidak boleh digunakan ulang tanpa izin tertulis.