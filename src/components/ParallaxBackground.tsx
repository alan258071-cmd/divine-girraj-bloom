import { useRef, CSSProperties } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxBackgroundProps {
  imageSrc: string;
  alt?: string;
  speed?: number;
  opacity?: number;
  className?: string;
  overlayGradient?: string;
}

export const ParallaxBackground = ({
  imageSrc,
  alt = "",
  speed = 0.5,
  opacity = 0.08,
  className = "",
  overlayGradient = "from-peacock-teal/20 via-background/90 to-saffron-gold/20"
}: ParallaxBackgroundProps) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useParallax(bgRef, { speed });

  const backgroundStyle: CSSProperties = {
    transform: `translateY(${parallaxOffset.y}px)`,
    willChange: "transform",
  };

  return (
    <div 
      ref={bgRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          ...backgroundStyle,
          top: "-20%",
          height: "140%",
        }}
      >
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${overlayGradient}`} />
    </div>
  );
};
