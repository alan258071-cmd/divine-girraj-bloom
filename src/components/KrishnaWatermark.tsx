interface KrishnaWatermarkProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "small" | "medium" | "large";
  opacity?: number;
}

export const KrishnaWatermark = ({ 
  position = "center", 
  size = "medium",
  opacity = 0.05 
}: KrishnaWatermarkProps) => {
  const positionClasses = {
    "top-left": "top-10 left-10",
    "top-right": "top-10 right-10",
    "bottom-left": "bottom-10 left-10",
    "bottom-right": "bottom-10 right-10",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const sizeClasses = {
    small: "w-48 h-48",
    medium: "w-64 h-64",
    large: "w-96 h-96",
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none transition-opacity duration-1000`}
      style={{ opacity }}
    >
      {/* Krishna with Flute Silhouette */}
      <svg viewBox="0 0 256 256" className="w-full h-full text-peacock-teal animate-[pulse_6s_ease-in-out_infinite]">
        {/* Krishna's Body */}
        <ellipse cx="128" cy="180" rx="40" ry="60" fill="currentColor" opacity="0.3" />
        
        {/* Krishna's Head */}
        <circle cx="128" cy="90" r="35" fill="currentColor" opacity="0.4" />
        
        {/* Peacock Feather Crown */}
        <g transform="translate(128, 50)">
          <ellipse cx="0" cy="0" rx="25" ry="35" fill="currentColor" opacity="0.5" />
          <ellipse cx="0" cy="0" rx="15" ry="22" fill="hsl(40 90% 55%)" opacity="0.3" />
          <circle cx="0" cy="0" r="8" fill="hsl(185 55% 45%)" opacity="0.4" />
        </g>
        
        {/* Flute */}
        <rect x="60" y="100" width="80" height="6" rx="3" fill="currentColor" opacity="0.4" />
        
        {/* Arms */}
        <ellipse cx="90" cy="130" rx="12" ry="45" fill="currentColor" opacity="0.35" transform="rotate(-20 90 130)" />
        <ellipse cx="166" cy="130" rx="12" ry="45" fill="currentColor" opacity="0.35" transform="rotate(20 166 130)" />
        
        {/* Om Symbol */}
        <text x="128" y="240" fontSize="32" textAnchor="middle" fill="hsl(40 90% 55%)" opacity="0.4" fontFamily="serif">ॐ</text>
      </svg>
    </div>
  );
};
