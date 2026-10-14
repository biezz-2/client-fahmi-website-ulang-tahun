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
  bankAccounts: BankAccount[];
  gallery: GalleryPhoto[];
  closingMessage: string;
  familyGreeting: string;
}

export const birthdayData: BirthdayConfig = {
  childName: "Fahmi Al-Fatih",
  nickName: "Fahmi",
  age: 5,
  theme: "Safari Adventure & Animal Friends",
  tagline: "Petualangan Seru di Rimba Satwa!",
  date: "Minggu, 25 Oktober 2026",
  time: "10:00 - 13:00 WIB",
  isoDate: "2026-10-25T10:00:00+07:00",
  locationName: "Rumah Fahmi (Safari House)",
  locationAddress: "Jl. Cendrawasih No. 24, Kebayoran Baru, Jakarta Selatan",
  mapsUrl: "https://maps.google.com/?q=Jakarta+Selatan",
  heroImage: "/images/fahmi-hero.jpg",
  qrisImage: "/qris-sample.svg",
  bankAccounts: [
    {
      bank: "BCA",
      accountNumber: "8415291048",
      accountName: "Ahmad / Orang Tua Fahmi",
      badge: "Bank Transfer",
    },
    {
      bank: "Mandiri",
      accountNumber: "1270009841235",
      accountName: "Ahmad / Orang Tua Fahmi",
      badge: "Bank Transfer",
    },
    {
      bank: "GoPay / DANA",
      accountNumber: "081298765432",
      accountName: "Fahmi Family",
      badge: "E-Wallet",
    },
  ],
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
      caption: "Fahmi tersenyum ceria bersama boneka singa",
      animalTag: "🦁 Singa Pemberani",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?w=600&auto=format&fit=crop&q=80",
      caption: "Petualangan pertama melihat jerapah di kebun binatang",
      animalTag: "🦒 Jerapah Tinggi",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&auto=format&fit=crop&q=80",
      caption: "Sahabat setia bermain di taman",
      animalTag: "🐘 Gajah Baik Hati",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80",
      caption: "Tertawa riang bersama teman-teman",
      animalTag: "🐒 Monyet Lincah",
    },
  ],
  closingMessage:
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Om, Tante, dan teman-teman berkenan hadir dan memberikan doa restu untuk Fahmi.",
  familyGreeting: "Keluarga Besar Fahmi Al-Fatih",
};
