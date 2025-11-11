interface MandalaBgProps {
  className?: string;
  animate?: boolean;
}

export const MandalaBg = ({ className = "", animate = true }: MandalaBgProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] ${animate ? "animate-spin-slow" : ""}`}
        style={{ width: "150%", height: "150%", animationDuration: "120s" }}
      >
        <defs>
          <linearGradient id="mandala-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(215 65% 25%)" />
            <stop offset="50%" stopColor="hsl(185 55% 45%)" />
            <stop offset="100%" stopColor="hsl(40 90% 55%)" />
          </linearGradient>
        </defs>
        
        {/* Outer Ring */}
        <circle cx="400" cy="400" r="380" fill="none" stroke="url(#mandala-gradient)" strokeWidth="2" />
        <circle cx="400" cy="400" r="360" fill="none" stroke="url(#mandala-gradient)" strokeWidth="1" />
        
        {/* Middle Rings */}
        {[300, 240, 180, 120, 60].map((radius, i) => (
          <circle
            key={`ring-${i}`}
            cx="400"
            cy="400"
            r={radius}
            fill="none"
            stroke="url(#mandala-gradient)"
            strokeWidth="1.5"
            opacity={0.6 - i * 0.1}
          />
        ))}
        
        {/* Radial Lines */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const radians = (angle * Math.PI) / 180;
          const x1 = 400 + Math.cos(radians) * 60;
          const y1 = 400 + Math.sin(radians) * 60;
          const x2 = 400 + Math.cos(radians) * 380;
          const y2 = 400 + Math.sin(radians) * 380;
          
          return (
            <line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#mandala-gradient)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        })}
        
        {/* Petal Shapes */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const radians = (angle * Math.PI) / 180;
          const x = 400 + Math.cos(radians) * 280;
          const y = 400 + Math.sin(radians) * 280;
          
          return (
            <ellipse
              key={`petal-${i}`}
              cx={x}
              cy={y}
              rx="40"
              ry="80"
              transform={`rotate(${angle} ${x} ${y})`}
              fill="url(#mandala-gradient)"
              opacity="0.15"
            />
          );
        })}
        
        {/* Center Flower */}
        <circle cx="400" cy="400" r="50" fill="url(#mandala-gradient)" opacity="0.2" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const radians = (angle * Math.PI) / 180;
          const x = 400 + Math.cos(radians) * 35;
          const y = 400 + Math.sin(radians) * 35;
          
          return (
            <circle
              key={`center-${i}`}
              cx={x}
              cy={y}
              r="15"
              fill="url(#mandala-gradient)"
              opacity="0.25"
            />
          );
        })}
      </svg>
    </div>
  );
};
