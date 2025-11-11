import { useEffect, useState, RefObject } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
  disabled?: boolean;
}

export const useParallax = (
  ref: RefObject<HTMLElement>,
  options: ParallaxOptions = {}
) => {
  const { speed = 0.5, direction = "vertical", disabled = false } = options;
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled || !ref.current) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      // Calculate parallax offset when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const relativeScroll = scrolled - elementTop + windowHeight;
        const parallaxOffset = relativeScroll * speed;

        if (direction === "vertical") {
          setOffset({ x: 0, y: parallaxOffset });
        } else {
          setOffset({ x: parallaxOffset, y: 0 });
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref, speed, direction, disabled]);

  return offset;
};
