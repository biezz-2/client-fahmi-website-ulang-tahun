"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
  src?: string;
}

export function AudioPlayer({
  autoPlayTrigger = false,
  src = "/birthday-song.mp3",
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startAudio = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn("Autoplay was prevented:", err);
        setIsPlaying(false);
      });
  }, []);

  const pauseAudio = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      startAudio();
    }
  }, [autoPlayTrigger, startAudio]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Jeda musik latar" : "Putar musik latar"}
        className="flex items-center gap-2.5 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-xl border-2 border-amber-300 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="text-xl">{isPlaying ? "🔊" : "🔈"}</span>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold leading-tight">
            {isPlaying ? "Musik Aktif" : "Musik Hening"}
          </span>
          <span className="text-[10px] text-amber-100 font-medium">Happy Birthday 🎶</span>
        </div>
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-4 ml-1">
            <span
              className="w-1 bg-white rounded-full animate-bounce h-2"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-1 bg-white rounded-full animate-bounce h-4"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-1 bg-white rounded-full animate-bounce h-3"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        )}
      </button>
    </div>
  );
}
