"use client";

import React, { useState } from "react";
import { LionIcon, GiraffeIcon, ElephantIcon, MonkeyIcon, PartyHatIcon } from "./AnimalIcons";

interface SplashScreenProps {
  childName: string;
  age: number;
  onOpen: () => void;
}

export function SplashScreen({ childName, age, onOpen }: SplashScreenProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-amber-100 via-amber-50 to-orange-100 transition-all duration-700 ${
        isOpen ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Decorative Floating Jungle Background Icons */}
      <div className="absolute top-10 left-8 animate-bounce" style={{ animationDuration: "3s" }}>
        <LionIcon className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>
      <div className="absolute top-12 right-8 animate-bounce" style={{ animationDuration: "3.5s" }}>
        <GiraffeIcon className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>
      <div className="absolute bottom-12 left-10 animate-bounce" style={{ animationDuration: "4s" }}>
        <ElephantIcon className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>
      <div className="absolute bottom-12 right-10 animate-bounce" style={{ animationDuration: "3.2s" }}>
        <MonkeyIcon className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>

      <div className="relative z-10 max-w-sm w-full mx-4 p-8 bg-white/90 backdrop-blur-md rounded-3xl border-4 border-amber-300 shadow-2xl text-center">
        <div className="flex justify-center mb-3">
          <div className="relative">
            <LionIcon className="w-24 h-24" />
            <div className="absolute -top-3 right-0">
              <PartyHatIcon className="w-10 h-10 transform rotate-12" />
            </div>
          </div>
        </div>

        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-2">
          Safari Birthday Party 🐾
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-amber-950 leading-tight">
          Undangan Ulang Tahun
        </h1>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-600 my-2">
          {childName}
        </h2>
        <p className="text-sm font-bold text-amber-800 mb-6">
          Ulang Tahun yang ke-{age} Tahun 🎉
        </p>

        <p className="text-xs text-amber-700/80 mb-6">
          Hai Teman-teman & Sahabat! Yuk ikut petualangan seru merayakan hari spesialku!
        </p>

        <button
          onClick={handleOpen}
          className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-base rounded-2xl shadow-lg border-2 border-amber-300 transform transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>💌 Buka Undangan</span>
          <span className="text-lg">✨</span>
        </button>
      </div>
    </div>
  );
}
