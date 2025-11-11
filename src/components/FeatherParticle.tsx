import { useEffect, useState } from "react";

interface FeatherParticleProps {
  index: number;
}

export const FeatherParticle = ({ index }: FeatherParticleProps) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    // Generate random positions and delays
    const left = Math.random() * 100;
    const animationDelay = Math.random() * 10;
    const animationDuration = 10 + Math.random() * 5;
    const opacity = 0.12 + Math.random() * 0.1;

    setStyle({
      left: `${left}%`,
      animationDelay: `${animationDelay}s`,
      animationDuration: `${animationDuration}s`,
      opacity,
    });
  }, []);

  return (
    <div
      className="absolute w-16 h-24 feather-float pointer-events-none"
      style={style}
    >
      <svg
        viewBox="0 0 64 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={`peacock-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(185 55% 45%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(215 65% 35%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(185 60% 50%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Peacock feather eye-spot */}
        <ellipse cx="32" cy="24" rx="16" ry="20" fill={`url(#peacock-gradient-${index})`} />
        <ellipse cx="32" cy="24" rx="10" ry="13" fill="hsl(215 65% 25%)" opacity="0.2" />
        <ellipse cx="32" cy="24" rx="5" ry="7" fill="hsl(185 55% 45%)" opacity="0.15" />
        {/* Feather stem */}
        <path
          d="M32 40 Q30 55 28 70 Q27 82 32 96"
          stroke={`url(#peacock-gradient-${index})`}
          strokeWidth="2"
          fill="none"
        />
        {/* Barbs */}
        <path
          d="M32 50 Q20 48 10 50"
          stroke={`url(#peacock-gradient-${index})`}
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M32 50 Q44 48 54 50"
          stroke={`url(#peacock-gradient-${index})`}
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M32 65 Q22 64 14 66"
          stroke={`url(#peacock-gradient-${index})`}
          strokeWidth="1"
          fill="none"
          opacity="0.25"
        />
        <path
          d="M32 65 Q42 64 50 66"
          stroke={`url(#peacock-gradient-${index})`}
          strokeWidth="1"
          fill="none"
          opacity="0.25"
        />
      </svg>
    </div>
  );
};
