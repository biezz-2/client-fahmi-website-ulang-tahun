"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BankAccount } from "@/data/birthdayData";

interface DigitalEnvelopeProps {
  qrisImage: string;
  accounts: BankAccount[];
  childName?: string;
}

export function DigitalEnvelope({ qrisImage, accounts, childName = "Fathan" }: DigitalEnvelopeProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showQrisModal, setShowQrisModal] = useState<boolean>(false);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-3xl pt-10 pb-6 px-6 sm:pt-12 sm:pb-8 sm:px-8 border-4 border-amber-200 shadow-xl relative">
      {/* Decorative badge with proper clearance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-xs font-bold px-6 py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap z-10">
        🎁 Amplop Digital & Kado
      </div>

      <div className="text-center mt-2 mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-amber-900 leading-snug">
          Kado & Tanda Kasih Untuk {childName}
        </h3>
        <p className="text-sm text-amber-700/80 mt-1.5 max-w-sm mx-auto">
          Doa restu Om, Tante, dan teman-teman adalah kado terindah. Jika ingin memberikan tanda kasih secara digital, silakan gunakan QRIS atau transfer berikut:
        </p>
      </div>

      {/* QRIS Card */}
      <div className="bg-amber-50/70 rounded-2xl p-5 border-2 border-dashed border-amber-300 text-center flex flex-col items-center mb-6">
        <div className="flex items-center gap-2 mb-2 font-bold text-amber-900 text-sm">
          <span>📱</span> Pindai QRIS (Semua Bank / E-Wallet)
        </div>
        <div
          onClick={() => setShowQrisModal(true)}
          className="cursor-pointer group relative bg-white p-3 rounded-2xl shadow-sm border border-amber-200 hover:scale-105 transition-transform"
        >
          <Image
            src={qrisImage}
            alt={`QRIS ${childName}`}
            width={200}
            height={240}
            className="w-48 h-auto object-contain rounded-lg"
          />
          <span className="block mt-1 text-[11px] text-amber-600 font-semibold group-hover:underline">
            🔍 Ketuk untuk memperbesar
          </span>
        </div>
      </div>

      {/* Bank & E-Wallet List */}
      <div className="space-y-3">
        {accounts.map((acc, index) => {
          const isCopied = copiedIndex === index;
          return (
            <div
              key={acc.accountNumber}
              className="flex items-center justify-between p-4 bg-amber-50/60 hover:bg-amber-100/60 rounded-2xl border border-amber-200 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-amber-900 text-base">{acc.bank}</span>
                  {acc.badge && (
                    <span className="text-[10px] bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                      {acc.badge}
                    </span>
                  )}
                </div>
                <div className="font-mono text-base font-bold text-amber-950 mt-0.5">
                  {acc.accountNumber}
                </div>
                <div className="text-xs text-amber-700">a.n. {acc.accountName}</div>
              </div>

              <button
                onClick={() => handleCopy(acc.accountNumber, index)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1 ${
                  isCopied
                    ? "bg-emerald-600 text-white"
                    : "bg-amber-500 hover:bg-amber-600 active:scale-95 text-white"
                }`}
              >
                {isCopied ? "✓ Tersalin!" : "📋 Salin"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal QRIS Viewer */}
      {showQrisModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setShowQrisModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 max-w-sm w-full text-center relative border-4 border-amber-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQrisModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center font-bold"
            >
              ✕
            </button>
            <h4 className="text-lg font-black text-amber-900 mb-3">QRIS Pembayaran</h4>
            <div className="flex justify-center mb-3">
              <Image
                src={qrisImage}
                alt="QRIS Detail"
                width={300}
                height={360}
                className="w-full max-w-[280px] h-auto rounded-xl shadow-inner border border-amber-200"
              />
            </div>
            <p className="text-xs text-amber-700 mb-4">
              Buka aplikasi m-Banking atau e-wallet Anda, lalu pindai kode QR di atas.
            </p>
            <button
              onClick={() => setShowQrisModal(false)}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-sm"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
