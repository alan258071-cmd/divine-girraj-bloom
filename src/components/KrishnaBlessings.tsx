export const KrishnaBlessings = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      {/* Krishna's Flute - Top Right */}
      <div className="absolute top-20 right-10 w-64 h-64 animate-pulse">
        <svg viewBox="0 0 200 200" className="w-full h-full text-peacock-teal">
          <defs>
            <linearGradient id="flute-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(40 80% 50%)" />
              <stop offset="100%" stopColor="hsl(40 90% 60%)" />
            </linearGradient>
          </defs>
          
          {/* Flute Body */}
          <rect x="30" y="95" width="140" height="10" rx="5" fill="url(#flute-gradient)" />
          
          {/* Holes */}
          {[50, 70, 90, 110, 130, 150].map((x, i) => (
            <circle key={i} cx={x} cy="100" r="3" fill="hsl(40 50% 30%)" />
          ))}
          
          {/* Musical Notes */}
          <g className="animate-pulse">
            <text x="180" y="80" fontSize="24" fill="currentColor">♪</text>
            <text x="190" y="60" fontSize="20" fill="currentColor">♫</text>
            <text x="175" y="50" fontSize="18" fill="currentColor">♪</text>
          </g>
        </svg>
      </div>

      {/* Peacock Feather - Top Left */}
      <div className="absolute top-32 left-10 w-48 h-64" style={{ animation: "feather-float 12s ease-in-out infinite" }}>
        <svg viewBox="0 0 100 150" className="w-full h-full">
          <defs>
            <radialGradient id="feather-eye">
              <stop offset="0%" stopColor="hsl(185 60% 50%)" />
              <stop offset="40%" stopColor="hsl(215 65% 35%)" />
              <stop offset="70%" stopColor="hsl(185 55% 45%)" />
              <stop offset="100%" stopColor="hsl(40 90% 55%)" />
            </radialGradient>
          </defs>
          
          {/* Eye spot */}
          <ellipse cx="50" cy="40" rx="30" ry="35" fill="url(#feather-eye)" opacity="0.6" />
          <ellipse cx="50" cy="40" rx="20" ry="25" fill="hsl(215 65% 25%)" opacity="0.4" />
          <ellipse cx="50" cy="40" rx="10" ry="15" fill="hsl(185 55% 45%)" opacity="0.5" />
          <circle cx="50" cy="40" r="5" fill="hsl(40 90% 55%)" opacity="0.6" />
          
          {/* Stem */}
          <path d="M50 70 Q48 100 50 140" stroke="hsl(40 80% 50%)" strokeWidth="3" fill="none" opacity="0.5" />
          
          {/* Barbs */}
          {[80, 95, 110, 125].map((y, i) => (
            <g key={i} opacity="0.4">
              <path d={`M50 ${y} Q35 ${y - 3} 25 ${y + 2}`} stroke="hsl(185 55% 45%)" strokeWidth="1.5" fill="none" />
              <path d={`M50 ${y} Q65 ${y - 3} 75 ${y + 2}`} stroke="hsl(185 55% 45%)" strokeWidth="1.5" fill="none" />
            </g>
          ))}
        </svg>
      </div>

      {/* Sacred Cow Silhouette - Bottom Left */}
      <div className="absolute bottom-10 left-5 w-56 h-40 opacity-30">
        <svg viewBox="0 0 200 120" className="w-full h-full text-krishna-blue">
          <path d="M30 60 Q30 45 45 45 L55 45 Q55 35 65 35 L75 35 Q75 30 85 30 Q95 30 95 35 L105 35 Q105 35 115 40 L125 40 Q135 40 140 45 Q145 50 145 60 L145 80 Q145 90 135 90 L130 90 L130 100 Q130 105 125 105 Q120 105 120 100 L120 90 L90 90 L90 100 Q90 105 85 105 Q80 105 80 100 L80 90 L50 90 L50 100 Q50 105 45 105 Q40 105 40 100 L40 90 L35 90 Q25 90 25 80 L25 60 Q25 55 30 60 Z" fill="currentColor" />
          {/* Horns */}
          <path d="M75 30 Q70 20 65 25" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M85 30 Q90 20 95 25" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Lotus Flowers - Bottom Right */}
      <div className="absolute bottom-20 right-10 flex gap-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-20 h-20"
            style={{
              animation: `lotus-bloom 4s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <svg viewBox="0 0 80 80" className="w-full h-full">
              <defs>
                <radialGradient id={`lotus-grad-${i}`}>
                  <stop offset="0%" stopColor="hsl(340 60% 85%)" />
                  <stop offset="100%" stopColor="hsl(340 50% 75%)" />
                </radialGradient>
              </defs>
              
              {/* Center */}
              <circle cx="40" cy="40" r="8" fill="hsl(40 90% 60%)" opacity="0.6" />
              
              {/* Petals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                const rad = (angle * Math.PI) / 180;
                const x = 40 + Math.cos(rad) * 20;
                const y = 40 + Math.sin(rad) * 20;
                return (
                  <ellipse
                    key={idx}
                    cx={x}
                    cy={y}
                    rx="8"
                    ry="14"
                    transform={`rotate(${angle} ${x} ${y})`}
                    fill={`url(#lotus-grad-${i})`}
                    opacity="0.5"
                  />
                );
              })}
            </svg>
          </div>
        ))}
      </div>

      {/* Sanskrit Om in corners */}
      <div className="absolute top-10 left-1/4 text-6xl text-saffron-gold opacity-20 animate-pulse font-bold">
        ॐ
      </div>
      <div className="absolute bottom-32 right-1/4 text-6xl text-peacock-teal opacity-20 animate-pulse font-bold" style={{ animationDelay: "1s" }}>
        ॐ
      </div>
    </div>
  );
};
