import type { Metadata } from "next";
import "./globals.css";
import { birthdayData } from "@/data/birthdayData";

export const metadata: Metadata = {
  title: `Undangan Ulang Tahun ${birthdayData.nickName} ke-${birthdayData.age} 🦁`,
  description: `Yuk hadiri perayaan ulang tahun ${birthdayData.childName} yang ke-${birthdayData.age}! Bertema Safari Hewan & Petualangan Rimba Ceria.`,
  openGraph: {
    title: `Undangan Ulang Tahun ${birthdayData.nickName} ke-${birthdayData.age} 🎈`,
    description: `Yuk hadiri perayaan ulang tahun ${birthdayData.childName}! Bertema Safari Hewan & Petualangan Rimba Ceria.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-[#FFF9F0] text-amber-950">
        {children}
      </body>
    </html>
  );
}
