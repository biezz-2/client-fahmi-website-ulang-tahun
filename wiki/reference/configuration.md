# Referensi Konfigurasi Konten (`birthdayData.ts`)

File konfigurasi berada di `src/data/birthdayData.ts`. Ubah isi objek berikut untuk menyesuaikan data penerima dan acara:

```typescript
export const birthdayData: BirthdayConfig = {
  childName: "Fahmi Al-Fatih",       // Nama lengkap
  nickName: "Fahmi",                 // Panggilan
  age: 5,                            // Usia ulang tahun
  theme: "Safari Adventure",         // Tema pesta
  tagline: "Petualangan Seru...",    // Slogan kecil
  date: "Minggu, 25 Oktober 2026",   // Format teks tanggal
  time: "10:00 - 13:00 WIB",         // Waktu acara
  isoDate: "2026-10-25T10:00:00+07:00", // Waktu untuk countdown
  locationName: "Rumah Fahmi",       // Nama tempat
  locationAddress: "Jl. Cendrawasih...", // Alamat lengkap
  mapsUrl: "https://maps.google.com/...", // Link Google Maps
  heroImage: "/images/fahmi-hero.jpg",    // Foto utama
  qrisImage: "/qris-sample.svg",          // Path gambar QRIS
  bankAccounts: [ ... ],             // Rekening bank & E-wallet
  gallery: [ ... ],                  // Koleksi foto kenangan
  closingMessage: "...",             // Pesan penutup
  familyGreeting: "..."              // Nama keluarga besar
};
```
