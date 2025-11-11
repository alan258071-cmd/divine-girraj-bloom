interface TempleBellsProps {
  className?: string;
}

export const TempleBells = ({ className = "" }: TempleBellsProps) => {
  return (
    <div className={`flex items-center justify-center gap-8 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="relative"
          style={{
            animation: `bell-swing 3s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            transformOrigin: "top center",
          }}
        >
          {/* Bell */}
          <svg
            width="40"
            height="48"
            viewBox="0 0 40 48"
            className="filter drop-shadow-lg"
          >
            <defs>
              <linearGradient id={`bell-gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(40 90% 65%)" />
                <stop offset="100%" stopColor="hsl(40 80% 45%)" />
              </linearGradient>
            </defs>
            
            {/* Hanger */}
            <rect x="17" y="2" width="6" height="8" rx="3" fill={`url(#bell-gradient-${i})`} />
            
            {/* Bell Body */}
            <path
              d="M8 10 Q8 10 12 12 L12 32 Q12 38 20 40 Q28 38 28 32 L28 12 Q32 10 32 10 Q32 8 20 8 Q8 8 8 10 Z"
              fill={`url(#bell-gradient-${i})`}
            />
            
            {/* Bell Rim */}
            <ellipse cx="20" cy="40" rx="12" ry="3" fill="hsl(40 85% 50%)" />
            
            {/* Clapper */}
            <circle
              cx="20"
              cy="42"
              r="2"
              fill="hsl(40 70% 40%)"
              className="animate-pulse"
            />
          </svg>

          {/* Sound Waves */}
          <div className="absolute -inset-4 pointer-events-none">
            {[1, 2, 3].map((wave) => (
              <div
                key={wave}
                className="absolute inset-0 border-2 border-saffron-gold rounded-full opacity-0"
                style={{
                  animation: `sound-wave 2s ease-out infinite`,
                  animationDelay: `${i * 0.3 + wave * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
