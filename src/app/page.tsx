"use client";

import React, { useState } from "react";
import Image from "next/image";
import { birthdayData } from "@/data/birthdayData";
import { LionIcon, GiraffeIcon, ElephantIcon, MonkeyIcon, TropicalLeaf, PartyHatIcon } from "@/components/AnimalIcons";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Confetti } from "@/components/Confetti";
import { Countdown } from "@/components/Countdown";
import { DigitalEnvelope } from "@/components/DigitalEnvelope";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Guestbook } from "@/components/Guestbook";
import { SplashScreen } from "@/components/SplashScreen";

export default function BirthdayPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setConfettiActive(true);
  };

  const triggerManualConfetti = () => {
    setConfettiActive(false);
    setTimeout(() => setConfettiActive(true), 50);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `Ulang Tahun ${birthdayData.childName} ke-${birthdayData.age}`
  )}&dates=20261024T030000Z/20261024T060000Z&details=${encodeURIComponent(
    `Perayaan Ulang Tahun ${birthdayData.childName} yang ke-${birthdayData.age} bertema Safari Hewan.`
  )}&location=${encodeURIComponent(birthdayData.locationAddress)}`;

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-amber-950 font-sans selection:bg-amber-200 relative overflow-x-hidden">
      {/* Splash Screen Overlay */}
      {!isOpened && (
        <SplashScreen
          childName={birthdayData.nickName}
          age={birthdayData.age}
          onOpen={handleOpenInvitation}
        />
      )}

      {/* Confetti Generator */}
      <Confetti trigger={confettiActive} />

      {/* Floating Audio Player */}
      <AudioPlayer autoPlayTrigger={isOpened} />

      {/* Background Decorative Tropical Leaves */}
      <div className="fixed top-0 left-0 -translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-20 z-0">
        <TropicalLeaf className="w-96 h-96" />
      </div>
      <div className="fixed bottom-0 right-0 translate-x-1/3 translate-y-1/3 pointer-events-none opacity-20 z-0">
        <TropicalLeaf className="w-96 h-96" />
      </div>

      {/* HERO SECTION */}
      <header className="relative z-10 pt-12 pb-16 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold text-amber-800 mb-6 shadow-xs">
          <span>🌿</span> {birthdayData.tagline} <span>🐾</span>
        </div>

        {/* Animal Badge Garland */}
        <div className="flex justify-center items-center gap-3 sm:gap-6 mb-6">
          <LionIcon className="w-12 h-12 sm:w-16 sm:h-16 transform -rotate-6 hover:rotate-0 transition-transform" />
          <GiraffeIcon className="w-12 h-12 sm:w-16 sm:h-16 transform rotate-3 hover:rotate-0 transition-transform" />
          <ElephantIcon className="w-12 h-12 sm:w-16 sm:h-16 transform -rotate-3 hover:rotate-0 transition-transform" />
          <MonkeyIcon className="w-12 h-12 sm:w-16 sm:h-16 transform rotate-6 hover:rotate-0 transition-transform" />
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-amber-950 tracking-tight mb-2">
          Selamat Ulang Tahun!
        </h1>
        <h2 className="text-4xl sm:text-6xl font-black text-amber-600 tracking-tight mb-4 drop-shadow-sm">
          {birthdayData.childName}
        </h2>
        <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold px-6 py-2 rounded-full text-sm sm:text-lg shadow-md mb-8">
          🎂 Ulang Tahun ke-{birthdayData.age} Tahun 🎈
        </div>

        {/* Hero Photo Card */}
        <div className="relative max-w-xs mx-auto mb-10">
          <div className="relative aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-amber-200">
            <Image
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80"
              alt={birthdayData.childName}
              fill
              priority
              className="object-cover"
            />
            {/* Party Hat on corner */}
            <div className="absolute top-2 right-2">
              <PartyHatIcon className="w-12 h-12 transform rotate-12" />
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-900 text-amber-100 text-xs font-bold px-4 py-1 rounded-full shadow whitespace-nowrap">
            🦁 Si Pemberani Ceria
          </div>
        </div>

        {/* Countdown Section */}
        <div className="mt-8 mb-4">
          <p className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-widest mb-3">
            ⏳ Menghitung Hari Menuju Pesta Safari:
          </p>
          <Countdown targetDate={birthdayData.isoDate} />
        </div>

        {/* Confetti Burst Button */}
        <div className="mt-6">
          <button
            onClick={triggerManualConfetti}
            className="text-xs font-bold text-amber-700 bg-amber-200/80 hover:bg-amber-300 px-4 py-2 rounded-full transition-colors cursor-pointer"
          >
            🎉 Taburkan Confetti Lagi!
          </button>
        </div>
      </header>

      {/* EVENT DETAILS SECTION */}
      <section className="relative z-10 py-12 px-4 bg-white/70 backdrop-blur-xs border-y border-amber-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-black tracking-widest text-amber-600 uppercase">
              Waktu & Tempat
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-amber-950 mt-1">
              Jadwal Pesta Ulang Tahun
            </h3>
            <p className="text-sm text-amber-800/80 mt-1">
              Catat tanggal dan tempatnya agar tidak ketinggalan keseruannya ya!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Waktu */}
            <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-200 rounded-2xl flex items-center justify-center text-2xl mb-4">
                  📅
                </div>
                <h4 className="text-lg font-black text-amber-950 mb-2">Hari & Tanggal</h4>
                <p className="text-xl font-bold text-amber-700">{birthdayData.date}</p>
                <p className="text-sm font-semibold text-amber-900 mt-1">Pukul: {birthdayData.time}</p>
                <div className="mt-4 p-3 bg-white rounded-xl border border-amber-200 text-xs text-amber-800">
                  <span className="font-bold">👔 Dresscode:</span> Safari Adventure / Pakaian Kasual Ceria (Khaki, Kuning, Cokelat, atau Hijau)
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <span>📅 Simpan ke Google Calendar</span>
                </a>
              </div>
            </div>

            {/* Card Lokasi */}
            <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-200 rounded-2xl flex items-center justify-center text-2xl mb-4">
                  📍
                </div>
                <h4 className="text-lg font-black text-amber-950 mb-2">Lokasi Pesta</h4>
                <p className="text-lg font-bold text-amber-800">{birthdayData.locationName}</p>
                <p className="text-sm text-amber-900/80 mt-2 leading-relaxed">
                  {birthdayData.locationAddress}
                </p>
                <div className="mt-4 p-3 bg-white rounded-xl border border-amber-200 text-xs text-amber-800">
                  <span className="font-bold">🚗 Catatan Akses:</span> Tersedia area parkir untuk mobil dan motor di halaman samping rumah.
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={birthdayData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <span>🗺️ Buka di Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Rundown Pesta */}
          <div className="mt-10 bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-md text-center">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3">
              🎪
            </div>
            <h4 className="text-lg font-black text-amber-950 mb-2">
              Rundown Acara
            </h4>
            <div className="inline-block bg-amber-100 text-amber-900 border border-amber-300 font-bold px-5 py-2 rounded-2xl text-sm shadow-xs">
              🕒 {birthdayData.rundownStatus}
            </div>
            <p className="text-xs sm:text-sm text-amber-800/80 mt-3 max-w-md mx-auto leading-relaxed">
              Susunan kegiatan dan keseruan pesta ulang tahun {birthdayData.nickName} sedang dimusyawarahkan (ke runding hela). Informasi detail akan diumumkan menjelang hari pelaksanaan!
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY SECTION */}
      <section className="relative z-10 py-14 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-black tracking-widest text-amber-600 uppercase">
            Momen Berharga
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-amber-950 mt-1">
            Galeri Petualangan {birthdayData.nickName}
          </h3>
          <p className="text-sm text-amber-800/80 mt-1">
            Potret senyuman manis dan petualangan ceria {birthdayData.nickName}!
          </p>
        </div>

        <PhotoGallery photos={birthdayData.gallery} />
      </section>

      {/* DIGITAL ENVELOPE / QRIS SECTION */}
      <section className="relative z-10 py-12 px-4 bg-amber-100/50 border-y border-amber-200">
        <DigitalEnvelope
          qrisImage={birthdayData.qrisImage}
          accounts={birthdayData.bankAccounts}
          childName={birthdayData.nickName}
        />
      </section>

      {/* GUESTBOOK SECTION */}
      <section className="relative z-10 py-14 px-4 max-w-4xl mx-auto">
        <Guestbook childName={birthdayData.nickName} age={birthdayData.age} />
      </section>

      {/* CLOSING SECTION */}
      <footer className="relative z-10 py-16 px-4 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-4">
          <LionIcon className="w-16 h-16 animate-bounce" style={{ animationDuration: "2.5s" }} />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-amber-950 mb-3">
          Sampai Jumpa di Pesta Safari!
        </h3>
        <p className="text-sm text-amber-800 leading-relaxed mb-6">
          {birthdayData.closingMessage}
        </p>
        <p className="text-base font-extrabold text-amber-700">
          Salam hangat penuh kasih,
        </p>
        <p className="text-lg font-black text-amber-950 mt-1">
          {birthdayData.familyGreeting}
        </p>

        <div className="mt-12 pt-6 border-t border-amber-200 text-xs text-amber-700/80">
          Made By:{" "}
          <a
            href="https://github.com/biezz-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-amber-900 underline hover:text-amber-700 transition-colors"
          >
            biezz-2
          </a>
        </div>
      </footer>
    </div>
  );
}
