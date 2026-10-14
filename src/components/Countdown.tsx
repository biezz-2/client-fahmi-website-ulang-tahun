"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.isPast) {
    return (
      <div className="bg-amber-100 border-2 border-amber-300 rounded-2xl p-4 text-center text-amber-900 font-bold text-lg shadow-sm">
        🎉 Acara Sedang Berlangsung / Telah Selesai! Terima kasih atas kehadiran dan doanya!
      </div>
    );
  }

  const items = [
    { label: "Hari", value: timeLeft.days, emoji: "🦒" },
    { label: "Jam", value: timeLeft.hours, emoji: "🦁" },
    { label: "Menit", value: timeLeft.minutes, emoji: "🐘" },
    { label: "Detik", value: timeLeft.seconds, emoji: "🐒" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-md">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center p-3 sm:p-4 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-md text-amber-950 transition-transform transform hover:-translate-y-1"
          >
            <span className="text-xs sm:text-sm">{item.emoji}</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-700 tracking-tight">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-amber-800 uppercase tracking-wider">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
