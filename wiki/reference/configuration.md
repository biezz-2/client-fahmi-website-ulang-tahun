# Referensi Konfigurasi Konten (`birthdayData.ts`)

File konfigurasi berada di `src/data/birthdayData.ts`. Ubah isi objek berikut untuk menyesuaikan data penerima dan acara:

```typescript
export const birthdayData: BirthdayConfig = {
  childName: "MUHAMMAD FATHAN KAHFI PUTRA", // Nama lengkap
  nickName: "Fathan",                 // Panggilan
  age: 1,                            // Usia ulang tahun
  theme: "Safari Adventure & Animal Friends", // Tema pesta
  tagline: "Petualangan Ceria di Rimba Satwa!", // Slogan kecil
  date: "Sabtu, 24 Oktober 2026",    // Format teks tanggal
  time: "10:00 WIB - Selesai",       // Waktu acara
  isoDate: "2026-10-24T10:00:00+07:00", // Waktu untuk countdown
  locationName: "Rumah Fathan",       // Nama tempat
  locationAddress: "Gembol Sari",    // Alamat lengkap
  mapsUrl: "https://maps.google.com/?q=Gembol+Sari", // Link Google Maps
  heroImage: "/images/fahmi-hero.jpg", // Foto utama
  qrisImage: "/qris-sample.svg",      // Path gambar QRIS
  rundownStatus: "Ke Runding Hela (Akan Segera Diumumkan)", // Status rundown
  bankAccounts: [ ... ],             // Rekening bank & E-wallet (BCA & GoPay)
  gallery: [ ... ],                  // Koleksi foto kenangan
  closingMessage: "...",             // Pesan penutup
  familyGreeting: "..."              // Nama keluarga besar
};
```
