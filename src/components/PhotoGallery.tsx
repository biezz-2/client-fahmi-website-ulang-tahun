"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GalleryPhoto } from "@/data/birthdayData";

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group cursor-pointer bg-white rounded-3xl p-3 border-4 border-amber-200 shadow-md hover:shadow-xl hover:border-amber-400 transition-all transform hover:-translate-y-1 relative flex flex-col"
          >
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-amber-100">
              <Image
                src={photo.url}
                alt={photo.caption}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2 bg-amber-900/70 text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
                {photo.animalTag}
              </div>
            </div>
            <div className="p-2 text-center">
              <p className="text-xs font-medium text-amber-950 line-clamp-2">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-3xl p-4 sm:p-6 max-w-lg w-full relative border-4 border-amber-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-3 -right-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold shadow-lg"
            >
              ✕
            </button>
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden mb-3 bg-amber-50">
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-1">
                {selectedPhoto.animalTag}
              </span>
              <p className="text-sm font-semibold text-amber-950 mt-1">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
