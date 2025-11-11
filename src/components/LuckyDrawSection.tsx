import { useState, useEffect, useRef } from "react";
import { JaliPattern } from "./JaliPattern";
import { KrishnaWatermark } from "./KrishnaWatermark";
import fortunerImg from "@/assets/prizes/fortuner.jpg";
import innovaImg from "@/assets/prizes/innova.jpg";
import scorpioImg from "@/assets/prizes/scorpio.jpg";
import xuv700Img from "@/assets/prizes/xuv700.jpg";
import cretaImg from "@/assets/prizes/creta.jpg";
import multipleCarsImg from "@/assets/prizes/multiple-cars.jpg";
import activaImg from "@/assets/prizes/activa.jpg";

const prizes = [
  {
    title: "1st Prize",
    prize: "Toyota Fortuner 4×2 AT",
    value: "₹33.65 Lakh",
    image: fortunerImg,
  },
  {
    title: "2nd Prize",
    prize: "Innova Crysta 2.4 GX 8STR",
    value: "₹18.66 Lakh",
    image: innovaImg,
  },
  {
    title: "3rd Prize",
    prize: "Mahindra Scorpio N Z4 Diesel",
    value: "₹15.29 Lakh",
    image: scorpioImg,
  },
  {
    title: "4th Prize",
    prize: "XUV700 MX E 7STR Diesel",
    value: "₹14.60 Lakh",
    image: xuv700Img,
  },
  {
    title: "5th Prize",
    prize: "Hyundai Creta EX Petrol",
    value: "₹11.90 Lakh",
    image: cretaImg,
  },
  {
    title: "6th-25th",
    prize: "Hyundai Aura, Punch, Wagon R & more",
    value: "Up to ₹6.75L",
    image: multipleCarsImg,
  },
  {
    title: "26th-125th",
    prize: "Honda Activa DLX",
    value: "₹95,000",
    image: activaImg,
  },
];

export const LuckyDrawSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-br from-krishna-blue via-peacock-teal to-krishna-blue overflow-hidden">
      {/* Jali Pattern */}
      <JaliPattern opacity={0.08} className="text-sacred-white" />
      
      {/* Krishna Watermarks */}
      <KrishnaWatermark position="top-left" size="large" opacity={0.08} />
      <KrishnaWatermark position="bottom-right" size="medium" opacity={0.06} />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-48 h-48">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" className="text-saffron-gold" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" className="text-sacred-white" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" className="text-saffron-gold" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-56 h-56">
          <svg viewBox="0 0 200 200" className="w-full h-full rotate-45">
            <path d="M100 10 L115 60 L165 60 L120 95 L135 145 L100 110 L65 145 L80 95 L35 60 L85 60 Z" fill="currentColor" className="text-saffron-gold" opacity="0.3" />
          </svg>
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className={`font-cinzel text-5xl md:text-6xl font-bold mb-6 text-sacred-white relative inline-block ${isVisible ? "scroll-reveal-scale" : "opacity-0"}`}>
            Lucky Draw — Win Big!
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-saffron-gold" />
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-saffron-gold">
                <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.4" />
                <circle cx="10" cy="10" r="5" fill="currentColor" />
              </svg>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-saffron-gold" />
            </div>
          </h2>
          <p className={`font-cormorant text-xl text-sacred-white/95 max-w-3xl mx-auto ${isVisible ? "scroll-reveal" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
            Pay ₹1 Lakh EOI + ₹10 Lakh within 1-20 days to enter the draw. Winners from 1st to 125th position!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`prize-card group relative ${isVisible ? "scroll-reveal-rotate" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 80}ms` }}
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-saffron-gold via-temple-gold to-saffron-gold rounded-3xl opacity-40 group-hover:opacity-70 blur-xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-sacred-white/15 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-sacred-white/30 transition-all duration-500 hover:scale-105 hover:border-saffron-gold/80 hover:shadow-[0_32px_96px_hsl(40_90%_55%/0.4)]">
                {/* Car Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-sacred-white/20 to-sacred-white/10">
                  <img 
                    src={prize.image} 
                    alt={prize.prize}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-krishna-blue/60 to-transparent" />
                  
                  {/* Trophy Badge */}
                  <div className="absolute top-4 left-4 bg-saffron-gold/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-sacred-white/50">
                    <span className="font-cinzel text-sm font-bold text-krishna-blue">{prize.title}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3 className="font-cinzel text-xl font-bold mb-2 text-saffron-gold drop-shadow-lg">
                    {prize.prize}
                  </h3>
                  <p className="font-cinzel text-2xl font-bold text-temple-gold mb-4">{prize.value}</p>
                  
                  {/* Bottom Glow Line */}
                  <div className="h-1.5 w-20 bg-gradient-to-r from-saffron-gold to-transparent rounded-full group-hover:w-full transition-all duration-500" />
                </div>

                {/* Hover Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saffron-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-[shimmer_2s_ease-in-out_infinite]" />
                
                {/* Corner Star Accent */}
                <div className="absolute top-2 right-2 w-8 h-8 opacity-30 group-hover:opacity-60 transition-all group-hover:rotate-180 duration-700">
                  <svg viewBox="0 0 32 32" className="w-full h-full text-saffron-gold drop-shadow-lg">
                    <path d="M16 2 L18 10 L26 10 L19.5 15 L22 23 L16 18 L10 23 L12.5 15 L6 10 L14 10 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className={`group relative bg-gradient-to-br from-saffron-gold via-temple-gold to-saffron-gold text-krishna-blue px-14 py-5 rounded-full font-cinzel font-bold text-lg transition-all duration-500 hover:scale-110 shadow-[0_16px_64px_hsl(40_90%_55%/0.6)] hover:shadow-[0_24px_80px_hsl(40_90%_55%/0.8)] breathe overflow-hidden ${isVisible ? "scroll-reveal-scale" : "opacity-0"}`} style={{ animationDelay: "600ms" }}>
            <span className="relative z-10 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z" />
              </svg>
              Register for Lucky Draw
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-temple-gold to-saffron-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
