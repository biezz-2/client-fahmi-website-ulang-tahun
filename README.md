# Website Selamat Ulang Tahun Fahmi (Safari & Animal Friends) 🦁🎈

Website undangan ulang tahun interaktif untuk **Fahmi Al-Fatih** yang bertema petualangan satwa rimba ceria (*Safari & Animal Friends*). Dibangun dengan performa tinggi, responsif untuk perangkat mobile, serta ramah pengguna.

---

## 🌟 Fitur Utama

- **💌 Splash Screen Interaktif**: Layar sambutan dengan animasi satwa dan tombol *"Buka Undangan"* yang membuka pemutaran audio secara mulus.
- **🦁 Hero & Countdown Timer**: Nama lengkap, usia ulang tahun ke-5, foto berbingkai hewan safari, dan penghitung waktu mundur menuju hari-H.
- **📍 Detail Acara & Peta**: Tanggal, waktu pelaksanaan, alamat lengkap, dress code, tombol navigasi Google Maps, dan tombol simpan otomatis ke Google Calendar.
- **🎪 Rundown Acara**: Panduan alur kegiatan seru selama pesta ulang tahun berlangsung.
- **📸 Galeri Foto**: Koleksi momen ceria Fahmi dengan modal pembesar (lightbox).
- **🎁 Amplop Digital & QRIS**: Pindai QRIS (BCA, Mandiri, GoPay, OVO, Dana) dan salin nomor rekening bank dalam 1-klik dengan notifikasi status instan.
- **💌 Buku Tamu & Doa (Guestbook)**: Formulir ucapan selamat dan doa dengan pilihan avatar karakter hewan lucu serta persistensi data browser.
- **🎶 Musik & Confetti**: Backsound melodi *Happy Birthday* menggunakan Web Audio API tanpa beban file audio eksternal yang lambat, disertai taburan confetti kanvas warna-warni.
- **⚙️ Konfigurasi Mudah**: Seluruh teks, tanggal, lokasi, foto, dan rekening bank terpusat di `src/data/birthdayData.ts`.

---

## 🛠️ Teknologi

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Efek & Audio**: Native HTML5 Audio, Web Audio API, & HTML5 Canvas Confetti

---

## 🚀 Menjalankan Secara Lokal

1. **Clone repository**:
   ```bash
   git clone https://github.com/biezz-2/client-fahmi-website-ulang-tahun.git
   cd client-fahmi-website-ulang-tahun
   ```

2. **Instal dependensi**:
   ```bash
   yarn install
   # atau
   npm install
   ```

3. **Jalankan server pengembangan**:
   ```bash
   yarn dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

4. **Build untuk produksi**:
   ```bash
   yarn build
   yarn start
   ```

---

## 📝 Konfigurasi Konten

Ubah isi file `src/data/birthdayData.ts` untuk menyesuaikan:
- Nama anak & usia
- Tanggal dan jam acara
- Lokasi dan koordinat Google Maps
- Daftar rekening bank & foto QRIS
- Galeri foto kenangan

---

Co-Authored-By: claude-biezz-2 <noreply@anthropic.com>
