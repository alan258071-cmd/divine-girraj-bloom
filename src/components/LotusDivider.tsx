interface LotusDividerProps {
  variant?: "gold" | "peacock" | "gradient";
  className?: string;
}

export const LotusDivider = ({ variant = "gold", className = "" }: LotusDividerProps) => {
  const colors = {
    gold: "text-temple-gold",
    peacock: "text-peacock-teal",
    gradient: "text-peacock-teal",
  };

  return (
    <div className={`relative w-full h-24 flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className={`w-full h-px ${variant === "gradient" ? "bg-gradient-to-r from-transparent via-temple-gold to-transparent" : `bg-current ${colors[variant]}`}`} />
      </div>
      
      <div className="relative bg-background px-6">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${variant === "gradient" ? "" : colors[variant]} opacity-40`}
        >
          <defs>
            {variant === "gradient" && (
              <linearGradient id="lotus-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(185 55% 45%)" />
                <stop offset="50%" stopColor="hsl(40 90% 55%)" />
                <stop offset="100%" stopColor="hsl(185 55% 45%)" />
              </linearGradient>
            )}
          </defs>
          
          {/* Center Circle */}
          <circle cx="40" cy="40" r="8" fill={variant === "gradient" ? "url(#lotus-gradient)" : "currentColor"} opacity="0.6" />
          
          {/* Lotus Petals - 8 petals arranged in circle */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const radians = (angle * Math.PI) / 180;
            const x = 40 + Math.cos(radians) * 20;
            const y = 40 + Math.sin(radians) * 20;
            const x2 = 40 + Math.cos(radians) * 32;
            const y2 = 40 + Math.sin(radians) * 32;
            
            return (
              <path
                key={i}
                d={`M ${x} ${y} Q ${x2} ${y2} ${40 + Math.cos(radians + 0.3) * 20} ${40 + Math.sin(radians + 0.3) * 20}`}
                fill={variant === "gradient" ? "url(#lotus-gradient)" : "currentColor"}
                opacity="0.5"
              />
            );
          })}
          
          {/* Outer Petals */}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => {
            const radians = (angle * Math.PI) / 180;
            const x = 40 + Math.cos(radians) * 28;
            const y = 40 + Math.sin(radians) * 28;
            const x2 = 40 + Math.cos(radians) * 38;
            const y2 = 40 + Math.sin(radians) * 38;
            
            return (
              <ellipse
                key={`outer-${i}`}
                cx={x}
                cy={y}
                rx="6"
                ry="10"
                transform={`rotate(${angle} ${x} ${y})`}
                fill={variant === "gradient" ? "url(#lotus-gradient)" : "currentColor"}
                opacity="0.35"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};
