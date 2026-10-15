# Overview: Website Undangan Ulang Tahun Fathan (Safari & Animal Friends)

Proyek website undangan ulang tahun interaktif untuk **Muhammad Fathan Kahfi Putra (Fathan)** bertema petualangan satwa safari (*Safari & Animal Friends*).

## Tujuan & Lingkup

- **Penerima / Tokoh Utama**: Muhammad Fathan Kahfi Putra (Ulang Tahun ke-1).
- **Format**: Single Page Application (Next.js App Router + Tailwind CSS).
- **Fitur Utama**:
  1. **Splash Screen**: Layar pembuka interaktif dengan tombol "Buka Undangan 💌" untuk mengatasi kebijakan autoplay audio browser.
  2. **Hero & Countdown**: Nama anak, usia, foto berbingkai satwa, serta countdown timer langsung ke tanggal acara (Sabtu, 24 Oktober 2026).
  3. **Waktu & Lokasi**: Informasi tanggal, jam, nama lokasi (Rumah Fathan), tautan Google Maps langsung, dan tombol simpan ke Google Calendar.
  4. **Rundown Acara**: Status rundown acara (👀 COMING SOON!).
  5. **Galeri Momen**: Grid foto responsif dengan lightbox pembesar foto.
  6. **Amplop Digital (QRIS & Bank)**: Kode QRIS standar nasional dan nomor rekening transfer (BCA: 2780995389 & GoPay: 08211322021) dengan tombol salin otomatis 1-klik.
  7. **Buku Tamu (Guestbook)**: Ucapan dan doa dari para tamu dengan pilihan avatar hewan lucu (tersimpan di `localStorage`).
  8. **Backsound Audio & Confetti**: Musik ceria (*Happy Birthday* synth via Web Audio API tanpa dependensi eksternal) dan taburan confetti kanvas.

## Arsitektur

- **Framework**: Next.js 16 (Turbopack, TypeScript).
- **Styling**: Tailwind CSS v4.
- **Audio & Visual Effects**: Native HTML5 Audio + Web Audio API & HTML5 Canvas Confetti.
- **Konfigurasi Terpusat**: Seluruh konten dapat diedit langsung di `src/data/birthdayData.ts`.
