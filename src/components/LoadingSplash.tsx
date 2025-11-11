import { useEffect, useState } from "react";

interface LoadingSplashProps {
  onComplete: () => void;
}

export const LoadingSplash = ({ onComplete }: LoadingSplashProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-krishna-blue via-peacock-teal to-krishna-blue flex items-center justify-center">
      {/* Animated Mandala Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
          style={{ width: "120%", height: "120%", animationDuration: "60s" }}
        >
          <defs>
            <linearGradient id="splash-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(40 90% 55%)" />
              <stop offset="50%" stopColor="hsl(185 55% 45%)" />
              <stop offset="100%" stopColor="hsl(40 90% 55%)" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const radians = (angle * Math.PI) / 180;
            const x = 400 + Math.cos(radians) * 300;
            const y = 400 + Math.sin(radians) * 300;
            return (
              <ellipse
                key={i}
                cx={x}
                cy={y}
                rx="60"
                ry="120"
                transform={`rotate(${angle} ${x} ${y})`}
                fill="url(#splash-gradient)"
                opacity="0.3"
              />
            );
          })}
        </svg>
      </div>

      {/* Center Lotus Animation */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Lotus Container */}
        <div className="relative w-64 h-64 mb-8">
          {/* Opening Lotus Petals */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const delay = i * 0.1;
            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `rotate(${angle}deg)`,
                  animation: `lotus-petal-open 2s ease-out ${delay}s forwards`,
                }}
              >
                <div
                  className="w-24 h-32 rounded-full bg-gradient-to-b from-lotus-pink to-sacred-white opacity-80 blur-sm"
                  style={{
                    transformOrigin: "center bottom",
                  }}
                />
              </div>
            );
          })}

          {/* Center Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-saffron-gold to-temple-gold animate-pulse" />
            <div className="absolute w-40 h-40 rounded-full bg-saffron-gold/30 animate-ping" />
          </div>

          {/* Om Symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-sacred-white animate-pulse">
              ॐ
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="font-cinzel text-4xl font-bold text-sacred-white mb-8 animate-fade-in tracking-wider">
          GIRRAJ ENCLAVE
        </h1>

        {/* Progress Bar */}
        <div className="w-80 h-2 bg-sacred-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-saffron-gold via-temple-gold to-saffron-gold transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 font-cormorant text-lg text-sacred-white/90 animate-pulse">
          Loading divine experience...
        </p>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-saffron-gold">
          <path d="M50 10 L55 30 L75 30 L58 43 L63 63 L50 50 L37 63 L42 43 L25 30 L45 30 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-saffron-gold">
          <path d="M50 10 L55 30 L75 30 L58 43 L63 63 L50 50 L37 63 L42 43 L25 30 L45 30 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};
