"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export function AudioPlayer({ autoPlayTrigger = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef<boolean>(false);

  // Synthesize cheerful birthday melody via Web Audio API (Happy Birthday pentatonic vibe)
  const playBirthdayNote = useCallback((freq: number, duration: number, timeOffset: number) => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Marimba/Music-box timbre
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + timeOffset);

    // Warm envelope
    gain.gain.setValueAtTime(0.001, ctx.currentTime + timeOffset);
    gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + timeOffset + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + timeOffset + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + timeOffset);
    osc.stop(ctx.currentTime + timeOffset + duration);
  }, []);

  const startSynthLoop = useCallback(() => {
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioContextRef.current = new AudioCtx();
    }
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }

    // Melodi "Happy Birthday to you" (C4, D4, E4, F4, G4, A4, B4, C5)
    // C4=261.6, D4=293.6, E4=329.6, F4=349.2, G4=392.0, A4=440.0, B4=493.8, C5=523.2
    const melody: Array<[number, number, number]> = [
      // freq, duration, delay
      [261.6, 0.3, 0.0],
      [261.6, 0.3, 0.4],
      [293.6, 0.6, 0.8],
      [261.6, 0.6, 1.4],
      [349.2, 0.6, 2.0],
      [329.6, 1.0, 2.6],

      [261.6, 0.3, 3.8],
      [261.6, 0.3, 4.2],
      [293.6, 0.6, 4.6],
      [261.6, 0.6, 5.2],
      [392.0, 0.6, 5.8],
      [349.2, 1.0, 6.4],

      [261.6, 0.3, 7.6],
      [261.6, 0.3, 8.0],
      [523.2, 0.6, 8.4],
      [440.0, 0.6, 9.0],
      [349.2, 0.6, 9.6],
      [329.6, 0.6, 10.2],
      [293.6, 0.8, 10.8],

      [466.1, 0.3, 11.8],
      [466.1, 0.3, 12.2],
      [440.0, 0.6, 12.6],
      [349.2, 0.6, 13.2],
      [392.0, 0.6, 13.8],
      [349.2, 1.2, 14.4],
    ];

    const loopDurationMs = 16500;

    const playSequence = () => {
      if (!isPlayingRef.current) return;
      melody.forEach(([freq, dur, delay]) => {
        playBirthdayNote(freq, dur, delay);
      });
      timerRef.current = setTimeout(playSequence, loopDurationMs);
    };

    isPlayingRef.current = true;
    setIsPlaying(true);
    playSequence();
  }, [playBirthdayNote]);

  const stopMusic = useCallback(() => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state === "running") {
      audioContextRef.current.suspend();
    }
  }, []);

  const toggleMusic = () => {
    setHasInteracted(true);
    if (isPlaying) {
      stopMusic();
    } else {
      startSynthLoop();
    }
  };

  useEffect(() => {
    if (autoPlayTrigger && !hasInteracted && !isPlayingRef.current) {
      setHasInteracted(true);
      startSynthLoop();
    }
  }, [autoPlayTrigger, hasInteracted, startSynthLoop]);

  useEffect(() => {
    return () => {
      stopMusic();
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [stopMusic]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
        className="flex items-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg border-2 border-amber-300 transition-all transform hover:scale-105 active:scale-95"
      >
        <span className="text-xl">{isPlaying ? "🔊" : "🔈"}</span>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold leading-tight">
            {isPlaying ? "Musik Aktif" : "Putar Musik"}
          </span>
          <span className="text-[10px] text-amber-100">Happy Birthday 🎶</span>
        </div>
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-4 ml-1">
            <span className="w-1 bg-white rounded-full animate-bounce h-2" style={{ animationDelay: "0ms" }} />
            <span className="w-1 bg-white rounded-full animate-bounce h-4" style={{ animationDelay: "150ms" }} />
            <span className="w-1 bg-white rounded-full animate-bounce h-3" style={{ animationDelay: "300ms" }} />
          </div>
        )}
      </button>
    </div>
  );
}
