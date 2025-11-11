import { useEffect, useState } from "react";

interface Diya {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export const FloatingDiyas = () => {
  const [diyas, setDiyas] = useState<Diya[]>([]);

  useEffect(() => {
    const newDiyas: Diya[] = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      left: 15 + i * 23,
      delay: i * 0.8,
      duration: 8 + Math.random() * 4,
    }));
    setDiyas(newDiyas);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {diyas.map((diya) => (
        <div
          key={diya.id}
          className="absolute"
          style={{
            left: `${diya.left}%`,
            top: "50%",
            animation: `diya-float ${diya.duration}s ease-in-out infinite`,
            animationDelay: `${diya.delay}s`,
          }}
        >
          {/* Diya Lamp */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="filter drop-shadow-lg"
          >
            <defs>
              <linearGradient id={`diya-gradient-${diya.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(40 90% 55%)" />
                <stop offset="100%" stopColor="hsl(40 80% 45%)" />
              </linearGradient>
              <radialGradient id={`flame-gradient-${diya.id}`}>
                <stop offset="0%" stopColor="hsl(40 100% 70%)" />
                <stop offset="50%" stopColor="hsl(30 100% 60%)" />
                <stop offset="100%" stopColor="hsl(15 100% 50%)" />
              </radialGradient>
            </defs>
            
            {/* Diya Base */}
            <ellipse
              cx="24"
              cy="32"
              rx="18"
              ry="8"
              fill={`url(#diya-gradient-${diya.id})`}
            />
            <path
              d="M6 32 Q6 28 24 28 Q42 28 42 32"
              fill="hsl(40 85% 50%)"
            />
            
            {/* Flame */}
            <g className="animate-pulse" style={{ transformOrigin: "24px 20px" }}>
              <ellipse
                cx="24"
                cy="20"
                rx="5"
                ry="10"
                fill={`url(#flame-gradient-${diya.id})`}
              />
              <ellipse
                cx="24"
                cy="18"
                rx="3"
                ry="6"
                fill="hsl(60 100% 80%)"
                opacity="0.8"
              />
            </g>
            
            {/* Glow */}
            <circle
              cx="24"
              cy="20"
              r="12"
              fill="hsl(40 100% 60%)"
              opacity="0.2"
              className="animate-pulse"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
