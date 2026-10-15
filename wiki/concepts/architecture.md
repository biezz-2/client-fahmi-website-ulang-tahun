# Arsitektur & Komponen

Website dirancang dengan prinsip *zero-external-bloat*: mengutamakan fitur native platform (Web Audio API, Canvas, SVG) agar performa optimal di perangkat mobile.

## Komponen Inti

- **`SplashScreen.tsx`**: Layar muka penuh. Bertindak sebagai gerbang interaksi pengguna pertama agar audio browser diizinkan berputar otomatis.
- **`AudioPlayer.tsx`**: Pemutar audio floating dengan visualizer equalizer mini. Memainkan backsound lagu "Happy Birthday" (`/birthday-song.mp3`) dengan loop otomatis dan kontrol interaktif.
- **`Confetti.tsx`**: Sistem partikel kanvas HTML5 native dengan bentuk bintang, lingkaran, dan persegi berwarna-warni.
- **`DigitalEnvelope.tsx`**: Komponen amplop digital yang memuat gambar QRIS SVG dan daftar rekening bank dengan tombol copy-to-clipboard.
- **`Guestbook.tsx`**: Fitur pesan dan doa interaktif para tamu dengan persistensi browser (`localStorage`).
- **`PhotoGallery.tsx`**: Galeri foto berbingkai hewan safari dengan modal lightbox.
