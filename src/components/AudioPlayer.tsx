"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export function AudioPlayer({ autoPlayTrigger = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const activeOscillatorsRef = useRef<Set<OscillatorNode>>(new Set());
  const isPlayingRef = useRef<boolean>(false);

  // Initialize or get running AudioContext
  const getOrCreateAudioContext = useCallback(() => {
    if (!audioContextRef.current || audioContextRef.current.state === "closed") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.9, ctx.currentTime); // Louder volume (Item #2)
      master.connect(ctx.destination);

      audioContextRef.current = ctx;
      masterGainRef.current = master;
    }
    return audioContextRef.current;
  }, []);

  // Stop all actively scheduled oscillators to prevent overlapping/doubling (Item #6)
  const stopAllScheduledNotes = useCallback(() => {
    activeOscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // already stopped
      }
    });
    activeOscillatorsRef.current.clear();

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Play a single cheerful note with music-box/marimba tone & higher volume
  const playBirthdayNote = useCallback(
    (freq: number, duration: number, timeOffset: number) => {
      const ctx = audioContextRef.current;
      const master = masterGainRef.current;
      if (!ctx || !master || ctx.state === "closed") return;

      const startTime = ctx.currentTime + timeOffset;
      const stopTime = startTime + duration;

      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      // Triangle wave gives a richer, warmer, and more audible presence than pure sine
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, startTime);

      // Volume envelope - raised to 0.35 peak for louder, clear sound
      noteGain.gain.setValueAtTime(0.001, startTime);
      noteGain.gain.linearRampToValueAtTime(0.35, startTime + 0.03);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, stopTime);

      osc.connect(noteGain);
      noteGain.connect(master);

      activeOscillatorsRef.current.add(osc);
      osc.onended = () => {
        activeOscillatorsRef.current.delete(osc);
      };

      osc.start(startTime);
      osc.stop(stopTime);
    },
    []
  );

  const startSynthLoop = useCallback(() => {
    // 1. Clear any running notes first so sounds NEVER double/overlap
    stopAllScheduledNotes();

    const ctx = getOrCreateAudioContext();
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    // Melodi "Happy Birthday to you" (C4=261.6, D4=293.6, E4=329.6, F4=349.2, G4=392.0, A4=440.0, B4=493.8, C5=523.2)
    const melody: Array<[number, number, number]> = [
      [261.6, 0.35, 0.0],
      [261.6, 0.35, 0.45],
      [293.6, 0.65, 0.9],
      [261.6, 0.65, 1.55],
      [349.2, 0.65, 2.2],
      [329.6, 1.1, 2.85],

      [261.6, 0.35, 4.15],
      [261.6, 0.35, 4.6],
      [293.6, 0.65, 5.05],
      [261.6, 0.65, 5.7],
      [392.0, 0.65, 6.35],
      [349.2, 1.1, 7.0],

      [261.6, 0.35, 8.3],
      [261.6, 0.35, 8.75],
      [523.2, 0.65, 9.2],
      [440.0, 0.65, 9.85],
      [349.2, 0.65, 10.5],
      [329.6, 0.65, 11.15],
      [293.6, 0.85, 11.8],

      [466.1, 0.35, 12.85],
      [466.1, 0.35, 13.3],
      [440.0, 0.65, 13.75],
      [349.2, 0.65, 14.4],
      [392.0, 0.65, 15.05],
      [349.2, 1.3, 15.7],
    ];

    const loopDurationMs = 17500;

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
  }, [getOrCreateAudioContext, playBirthdayNote, stopAllScheduledNotes]);

  const stopMusic = useCallback(() => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    stopAllScheduledNotes();
  }, [stopAllScheduledNotes]);

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
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [stopMusic]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Jeda musik latar" : "Putar musik latar"}
        className="flex items-center gap-2.5 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-xl border-2 border-amber-300 transition-all transform hover:scale-105 active:scale-95"
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
