"use client";

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
  time: "13:00 - Selesai",
  isoDate: "2026-10-24T13:00:00+07:00",
  locationName: "Rumah Fathan Gembol Sari",
  locationAddress: "",
  mapsUrl: "",
  heroImage: "/images/farhan-1.jpeg",
  rundownStatus: "👀 COMING SOON!",
  bankAccounts: [
    {
      bank: "BCA",
      accountNumber: "2780995389",
      accountName: "Orang Tua Fathan",
      badge: "Bank Transfer",
    },
    {
      bank: "Mandiri",
      accountNumber: "1320032762412",
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
      url: "/images/farhan-1.jpeg",
      caption: "",
      animalTag: "🦁",
    },
    {
      id: 2,
      url: "/images/Farhan-2.jpeg",
      caption: "",
      animalTag: "🦒",
    },
    {
      id: 3,
      url: "/images/farhan-3.jpeg",
      caption: "",
      animalTag: "🐘",
    },
    {
      id: 4,
      url: "/images/farhan-4.jpeg",
      caption: "",
      animalTag: "🐒",
    },
    {
      id: 5,
      url: "/images/farhan-5.jpeg",
      caption: "",
      animalTag: "🎂",
    },
  ],
  closingMessage:
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Om, Tante, dan teman-teman berkenan hadir dan memberikan doa restu untuk Fathan.",
  familyGreeting: "Keluarga Besar Muhammad Fathan Kahfi Putra",
};