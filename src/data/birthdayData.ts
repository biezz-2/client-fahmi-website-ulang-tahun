export interface BankAccount {
  bank: string;
  accountNumber: string;
  accountName: string;
  badge?: string;
}

export interface GalleryPhoto {
  id: number;
  url: string;
  caption: string;
  animalTag: string;
}

export interface BirthdayConfig {
  childName: string;
  nickName: string;
  age: number;
  theme: string;
  tagline: string;
  date: string;
  time: string;
  isoDate: string; // for countdown
  locationName: string;
  locationAddress: string;
  mapsUrl: string;
  heroImage: string;
  qrisImage: string;
  rundownStatus: string;
  bankAccounts: BankAccount[];
  gallery: GalleryPhoto[];
  closingMessage: string;
  familyGreeting: string;
}

export const birthdayData: BirthdayConfig = {
  childName: "MUHAMMAD FATHAN KAHFI PUTRA",
  nickName: "Fathan",
  age: 1,
  theme: "Safari Adventure & Animal Friends",
  tagline: "Petualangan Ceria di Rimba Satwa!",
  date: "Sabtu, 24 Oktober 2026",
  time: "10:00 WIB - Selesai",
  isoDate: "2026-10-24T10:00:00+07:00",
  locationName: "Rumah Fathan",
  locationAddress: "Gembol Sari",
  mapsUrl: "https://maps.google.com/?q=Gembol+Sari",
  heroImage: "/images/fahmi-hero.jpg",
  qrisImage: "/qris-sample.svg",
  rundownStatus: "Ke Runding Hela (Akan Segera Diumumkan)",
  bankAccounts: [
    {
      bank: "BCA",
      accountNumber: "2780995389",
      accountName: "Orang Tua Fathan",
      badge: "Bank Transfer",
    },
    {
      bank: "GoPay",
      accountNumber: "08211322021",
      accountName: "Fathan Family",
      badge: "E-Wallet",
    },
  ],
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
      caption: "Fathan tersenyum ceria bersama boneka singa",
      animalTag: "🦁 Singa Pemberani",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?w=600&auto=format&fit=crop&q=80",
      caption: "Petualangan melihat jerapah yang tinggi dan lucu",
      animalTag: "🦒 Jerapah Tinggi",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&auto=format&fit=crop&q=80",
      caption: "Sahabat setia bermain di taman safari",
      animalTag: "🐘 Gajah Baik Hati",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80",
      caption: "Tertawa riang di hari ulang tahun pertama",
      animalTag: "🐒 Monyet Lincah",
    },
  ],
  closingMessage:
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Om, Tante, dan teman-teman berkenan hadir dan memberikan doa restu untuk Fathan.",
  familyGreeting: "Keluarga Besar Muhammad Fathan Kahfi Putra",
};
