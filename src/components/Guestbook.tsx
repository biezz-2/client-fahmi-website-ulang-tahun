"use client";

import React, { useState, useEffect } from "react";

interface Wish {
  id: string;
  name: string;
  message: string;
  avatar: string;
  time: string;
}

interface GuestbookProps {
  childName?: string;
  age?: number;
}

const DEFAULT_WISHES: Wish[] = [
  {
    id: "dummy-1",
    name: "Tante Sarah & Om Budi",
    message: "Selamat ulang tahun pertama Fathan sayang! Semoga tumbuh jadi anak sholeh, cerdas, dan pemberani seperti singa! 🦁",
    avatar: "🦁",
    time: "Baru saja",
  },
  {
    id: "dummy-2",
    name: "Kakak Alif & Dafa",
    message: "HBD adik Fathan! Semoga sehat selalu, cepat jalan dan makin pintar! 🦒🚀",
    avatar: "🦒",
    time: "1 jam lalu",
  },
  {
    id: "dummy-3",
    name: "Keluarga Om Danu",
    message: "Barakallah fii umrik Fathan yang ke-1! Sehat selalu dan jadi kebanggaan orang tua ya 🐘🎉",
    avatar: "🐘",
    time: "2 jam lalu",
  },
];

const ANIMAL_AVATARS = ["🦁", "🦒", "🐘", "🐒", "🦉", "🦓", "🐼", "🦊"];

export function Guestbook({ childName = "Fathan", age = 1 }: GuestbookProps) {
  const [userWishes, setUserWishes] = useState<Wish[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [avatar, setAvatar] = useState("🦁");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const saved =
        localStorage.getItem("fathan_birthday_wishes") ||
        localStorage.getItem("fahmi_birthday_wishes");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setUserWishes(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      avatar,
      time: "Baru saja",
    };

    // Item #3: Dummy completely disappears once real users submit!
    const updated = [newWish, ...userWishes];
    setUserWishes(updated);
    try {
      localStorage.setItem("fathan_birthday_wishes", JSON.stringify(updated));
    } catch {
      // ignore
    }

    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  // If there are real user wishes, show ONLY real wishes. Otherwise, show dummy wishes as preview.
  const hasUserWishes = isClient && userWishes.length > 0;
  const displayedWishes = hasUserWishes ? userWishes : DEFAULT_WISHES;

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border-4 border-amber-200 shadow-xl">
      <div className="text-center mb-6">
        <span className="text-3xl">💌</span>
        <h3 className="text-xl sm:text-2xl font-black text-amber-950 mt-1">
          Buku Tamu & Ucapan Doa
        </h3>
        <p className="text-xs sm:text-sm text-amber-800/80">
          Tinggalkan pesan hangat dan doa manis untuk ulang tahun {childName}!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block text-xs font-bold text-amber-900 mb-1">
            Pilih Karakter Satwa Anda:
          </label>
          <div className="flex gap-2 flex-wrap">
            {ANIMAL_AVATARS.map((emoji) => (
              <button
                type="button"
                key={emoji}
                onClick={() => setAvatar(emoji)}
                className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center border-2 transition-transform ${
                  avatar === emoji
                    ? "border-amber-500 bg-amber-100 scale-110 shadow-sm"
                    : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-amber-900 mb-1">Nama Anda:</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: Om Danu / Tante Lina"
            className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none text-sm text-amber-950 bg-amber-50/40"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-amber-900 mb-1">Ucapan & Doa:</label>
          <textarea
            required
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Tulis ucapan selamat dan doa untuk ${childName}...`}
            className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none text-sm text-amber-950 bg-amber-50/40 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-amber-500 hover:bg-amber-600 active:scale-98 text-white font-bold rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Kirim Ucapan</span> 🚀
        </button>

        {submitted && (
          <p className="text-center text-xs font-bold text-emerald-600 animate-in fade-in">
            ✓ Terima kasih! Ucapan Anda telah berhasil ditambahkan!
          </p>
        )}
      </form>

      {/* List Header indicator */}
      <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-3 px-1">
        <span>{hasUserWishes ? "Daftar Ucapan Tamu:" : "Contoh Ucapan:"}</span>
        <span
          className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
            hasUserWishes
              ? "bg-emerald-100 text-emerald-800"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {hasUserWishes ? `${userWishes.length} Ucapan` : "Belum ada ucapan"}
        </span>
      </div>

      {/* List of Wishes */}
      <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
        {displayedWishes.map((w) => (
          <div
            key={w.id}
            className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200 flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-200/80 flex items-center justify-center text-xl shrink-0">
              {w.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-950 text-xs sm:text-sm truncate">
                  {w.name}
                </span>
                <span className="text-[10px] text-amber-600 shrink-0">{w.time}</span>
              </div>
              <p className="text-xs text-amber-900/90 mt-1 leading-relaxed break-words">
                {w.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
