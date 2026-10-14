# Panduan Menjalankan & Deployment

## 1. Menjalankan di Komputer Lokal

```bash
cd /home/biezz/Documents/project/pesenan/Fahmi
yarn dev
```
Buka peramban di `http://localhost:3000`.

## 2. Membangun Kode Produksi

```bash
yarn build
yarn start
```

## 3. Deploy ke Vercel (Gratis)

1. Buat repositori Git:
   ```bash
   git init
   git add .
   git commit -m "feat: website ulang tahun Fahmi bertema safari"
   ```
2. Hubungkan ke akun GitHub / Vercel CLI:
   ```bash
   npx vercel
   ```
3. Website siap dibagikan melalui WhatsApp ke seluruh tamu undangan.
