import { useEffect, useState } from "react";

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    calculateScrollProgress();
    window.addEventListener("scroll", calculateScrollProgress);
    
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-peacock-teal via-saffron-gold to-temple-gold transition-all duration-200 ease-out shadow-[0_0_10px_hsl(40_90%_55%/0.6)]"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};
