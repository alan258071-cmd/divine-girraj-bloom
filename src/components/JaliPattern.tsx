interface JaliPatternProps {
  opacity?: number;
  className?: string;
}

export const JaliPattern = ({ opacity = 0.08, className = "" }: JaliPatternProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="jali-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Temple Arch Shape */}
            <path
              d="M60 10 Q75 10 75 25 L75 45 Q75 55 65 55 L55 55 Q45 55 45 45 L45 25 Q45 10 60 10 Z"
              fill="currentColor"
              opacity="0.3"
            />
            
            {/* Peacock Eye Motifs */}
            <circle cx="30" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <circle cx="30" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.6" />
            
            <circle cx="90" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <circle cx="90" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <circle cx="90" cy="30" r="2" fill="currentColor" opacity="0.6" />
            
            {/* Lotus Petals */}
            <path
              d="M60 80 Q55 85 60 90 Q65 85 60 80 Z"
              fill="currentColor"
              opacity="0.35"
            />
            <path
              d="M55 82 Q50 87 55 92 Q60 87 55 82 Z"
              fill="currentColor"
              opacity="0.3"
            />
            <path
              d="M65 82 Q60 87 65 92 Q70 87 65 82 Z"
              fill="currentColor"
              opacity="0.3"
            />
            
            {/* Geometric Stars */}
            <path
              d="M30 90 L32 96 L38 96 L33 100 L35 106 L30 102 L25 106 L27 100 L22 96 L28 96 Z"
              fill="currentColor"
              opacity="0.25"
            />
            <path
              d="M90 90 L92 96 L98 96 L93 100 L95 106 L90 102 L85 106 L87 100 L82 96 L88 96 Z"
              fill="currentColor"
              opacity="0.25"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jali-pattern)" className="text-krishna-blue" />
      </svg>
    </div>
  );
};
