import React from "react";

export function LionIcon({
  className = "w-12 h-12",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mane */}
      <circle cx="50" cy="50" r="42" fill="#F59E0B" />
      <circle cx="50" cy="50" r="38" fill="#D97706" opacity="0.3" />
      {/* Ears */}
      <circle cx="28" cy="24" r="10" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
      <circle cx="28" cy="24" r="5" fill="#F87171" />
      <circle cx="72" cy="24" r="10" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
      <circle cx="72" cy="24" r="5" fill="#F87171" />
      {/* Face */}
      <circle cx="50" cy="54" r="28" fill="#FDE68A" />
      {/* Eyes */}
      <circle cx="40" cy="48" r="4" fill="#1F2937" />
      <circle cx="41.5" cy="46.5" r="1.5" fill="#FFFFFF" />
      <circle cx="60" cy="48" r="4" fill="#1F2937" />
      <circle cx="61.5" cy="46.5" r="1.5" fill="#FFFFFF" />
      {/* Cheeks */}
      <circle cx="34" cy="56" r="4" fill="#FCA5A5" opacity="0.7" />
      <circle cx="66" cy="56" r="4" fill="#FCA5A5" opacity="0.7" />
      {/* Snout & Nose */}
      <ellipse cx="50" cy="58" rx="10" ry="7" fill="#FEF3C7" />
      <polygon points="50,54 45,59 55,59" fill="#78350F" />
      <path d="M50 59 V64 M47 64 C47 66 50 67 50 67 C50 67 53 66 53 64" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="33" y1="58" x2="22" y2="56" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="33" y1="62" x2="23" y2="64" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="67" y1="58" x2="78" y2="56" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="67" y1="62" x2="77" y2="64" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GiraffeIcon({
  className = "w-12 h-12",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neck */}
      <path d="M42 95 L44 50 L56 50 L58 95 Z" fill="#FCD34D" />
      {/* Spots on neck */}
      <circle cx="50" cy="65" r="5" fill="#D97706" />
      <circle cx="48" cy="82" r="6" fill="#D97706" />
      {/* Horns */}
      <line x1="44" y1="30" x2="40" y2="15" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="39" cy="14" r="4" fill="#92400E" />
      <line x1="56" y1="30" x2="60" y2="15" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="61" cy="14" r="4" fill="#92400E" />
      {/* Ears */}
      <ellipse cx="32" cy="30" rx="8" ry="4" transform="rotate(-25 32 30)" fill="#FCD34D" stroke="#B45309" strokeWidth="1.5" />
      <ellipse cx="68" cy="30" rx="8" ry="4" transform="rotate(25 68 30)" fill="#FCD34D" stroke="#B45309" strokeWidth="1.5" />
      {/* Head */}
      <ellipse cx="50" cy="38" rx="18" ry="20" fill="#FCD34D" />
      {/* Snout */}
      <ellipse cx="50" cy="50" rx="14" ry="10" fill="#FEF3C7" />
      {/* Nostrils */}
      <circle cx="46" cy="48" r="2" fill="#78350F" />
      <circle cx="54" cy="48" r="2" fill="#78350F" />
      {/* Eyes */}
      <circle cx="41" cy="35" r="3.5" fill="#1F2937" />
      <circle cx="42" cy="34" r="1.2" fill="#FFFFFF" />
      <circle cx="59" cy="35" r="3.5" fill="#1F2937" />
      <circle cx="60" cy="34" r="1.2" fill="#FFFFFF" />
      {/* Cute Smile */}
      <path d="M46 54 Q50 58 54 54" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ElephantIcon({
  className = "w-12 h-12",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Big Ears */}
      <circle cx="22" cy="46" r="18" fill="#94A3B8" />
      <circle cx="22" cy="46" r="11" fill="#F472B6" opacity="0.6" />
      <circle cx="78" cy="46" r="18" fill="#94A3B8" />
      <circle cx="78" cy="46" r="11" fill="#F472B6" opacity="0.6" />
      {/* Head */}
      <circle cx="50" cy="50" r="25" fill="#CBD5E1" />
      {/* Trunk */}
      <path d="M47 56 C47 68 38 72 40 82 C42 86 52 86 51 80 C50 72 53 68 53 56 Z" fill="#94A3B8" />
      {/* Eyes */}
      <circle cx="40" cy="46" r="3.5" fill="#1E293B" />
      <circle cx="41" cy="45" r="1.2" fill="#FFFFFF" />
      <circle cx="60" cy="46" r="3.5" fill="#1E293B" />
      <circle cx="61" cy="45" r="1.2" fill="#FFFFFF" />
      {/* Cheeks */}
      <circle cx="34" cy="52" r="3.5" fill="#FDA4AF" opacity="0.7" />
      <circle cx="66" cy="52" r="3.5" fill="#FDA4AF" opacity="0.7" />
    </svg>
  );
}

export function MonkeyIcon({
  className = "w-12 h-12",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <circle cx="20" cy="50" r="12" fill="#92400E" />
      <circle cx="20" cy="50" r="7" fill="#FDE68A" />
      <circle cx="80" cy="50" r="12" fill="#92400E" />
      <circle cx="80" cy="50" r="7" fill="#FDE68A" />
      {/* Head */}
      <circle cx="50" cy="50" r="26" fill="#78350F" />
      {/* Inner Mask (Heart shape feel) */}
      <ellipse cx="42" cy="44" rx="10" ry="11" fill="#FEF3C7" />
      <ellipse cx="58" cy="44" rx="10" ry="11" fill="#FEF3C7" />
      <ellipse cx="50" cy="58" rx="16" ry="12" fill="#FEF3C7" />
      {/* Eyes */}
      <circle cx="42" cy="44" r="3.5" fill="#1F2937" />
      <circle cx="43" cy="43" r="1.2" fill="#FFFFFF" />
      <circle cx="58" cy="44" r="3.5" fill="#1F2937" />
      <circle cx="59" cy="43" r="1.2" fill="#FFFFFF" />
      {/* Snout */}
      <circle cx="47" cy="56" r="1.8" fill="#78350F" />
      <circle cx="53" cy="56" r="1.8" fill="#78350F" />
      <path d="M44 62 Q50 67 56 62" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PartyHatIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="6" r="4" fill="#F59E0B" />
      <polygon points="10,34 30,34 20,8" fill="#EF4444" />
      <path d="M12 30 L26 18 M15 34 L28 24" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="20" cy="34" rx="11" ry="3" fill="#3B82F6" />
    </svg>
  );
}

export function TropicalLeaf({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25 45 C25 45 42 35 42 18 C42 8 32 5 25 5 C18 5 8 8 8 18 C8 35 25 45 25 45 Z"
        fill="#10B981"
        opacity="0.85"
      />
      <path d="M25 45 L25 5 M25 15 L35 12 M25 24 L37 20 M25 32 L35 30 M25 15 L15 12 M25 24 L13 20 M25 32 L15 30" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
