import { useRef, CSSProperties } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxDecorationProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: "vertical" | "horizontal";
}

export const ParallaxDecoration = ({
  children,
  speed = 0.3,
  className = "",
  direction = "vertical"
}: ParallaxDecorationProps) => {
  const decorationRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useParallax(decorationRef, { speed, direction });

  const decorationStyle: CSSProperties = {
    transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
    willChange: "transform",
  };

  return (
    <div 
      ref={decorationRef}
      className={className}
      style={decorationStyle}
    >
      {children}
    </div>
  );
};
