import { JaliPattern } from "./JaliPattern";

const prizes = [
  {
    title: "1st Prize",
    prize: "Toyota Fortuner 4×2 AT",
    value: "₹33.65 Lakh",
    icon: "🏆",
  },
  {
    title: "2nd Prize",
    prize: "Innova Crysta 2.4 GX 8STR",
    value: "₹18.66 Lakh",
    icon: "🥈",
  },
  {
    title: "3rd Prize",
    prize: "Mahindra Scorpio N Z4 Diesel",
    value: "₹15.29 Lakh",
    icon: "🥉",
  },
  {
    title: "4th Prize",
    prize: "XUV700 MX E 7STR Diesel",
    value: "₹14.60 Lakh",
    icon: "🚗",
  },
  {
    title: "5th Prize",
    prize: "Hyundai Creta EX Petrol",
    value: "₹11.90 Lakh",
    icon: "🚙",
  },
  {
    title: "6th-25th",
    prize: "Hyundai Aura, Punch, Wagon R & more",
    value: "Up to ₹6.75L",
    icon: "🎁",
  },
  {
    title: "26th-125th",
    prize: "Honda Activa DLX",
    value: "₹95,000",
    icon: "🛵",
  },
];

export const LuckyDrawSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-krishna-blue via-peacock-teal to-krishna-blue overflow-hidden">
      {/* Jali Pattern */}
      <JaliPattern opacity={0.08} className="text-sacred-white" />
      
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
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-6 text-sacred-white relative inline-block">
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
          <p className="font-cormorant text-xl text-sacred-white/95 max-w-3xl mx-auto">
            Pay ₹1 Lakh EOI + ₹10 Lakh within 1-20 days to enter the draw. Winners from 1st to 125th position!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {prizes.slice(0, 5).map((prize, index) => (
            <div
              key={index}
              className="prize-card group relative"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-saffron-gold via-temple-gold to-saffron-gold rounded-3xl opacity-40 group-hover:opacity-70 blur-xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-sacred-white/15 backdrop-blur-xl rounded-3xl p-12 border-2 border-sacred-white/30 transition-all duration-500 hover:scale-105 hover:border-saffron-gold/80 overflow-hidden">
                {/* Animated Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(135deg, 
                      hsl(185 55% 45% / 0.15) 0%, 
                      hsl(215 65% 35% / 0.1) 50%, 
                      hsl(40 90% 55% / 0.15) 100%)`
                  }}
                />
                
                {/* Corner Star Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-60 transition-all group-hover:rotate-180 duration-700">
                  <svg viewBox="0 0 32 32" className="w-full h-full text-saffron-gold">
                    <path d="M16 2 L18 10 L26 10 L19.5 15 L22 23 L16 18 L10 23 L12.5 15 L6 10 L14 10 Z" fill="currentColor" />
                  </svg>
                </div>

                <div className="relative">
                  <div className="text-7xl mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 filter drop-shadow-2xl">
                    {prize.icon}
                  </div>
                  <h3 className="font-cinzel text-3xl font-bold mb-3 text-saffron-gold drop-shadow-lg">
                    {prize.title}
                  </h3>
                  <p className="font-cormorant text-lg text-sacred-white/95 leading-relaxed mb-2">{prize.prize}</p>
                  <p className="font-cinzel text-xl font-bold text-temple-gold">{prize.value}</p>
                  
                  {/* Bottom Glow Line */}
                  <div className="mt-8 h-1.5 w-20 bg-gradient-to-r from-saffron-gold to-transparent rounded-full group-hover:w-full transition-all duration-500" />
                </div>

                {/* Hover Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saffron-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl animate-[shimmer_2s_ease-in-out_infinite]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group relative bg-gradient-to-br from-saffron-gold via-temple-gold to-saffron-gold text-krishna-blue px-14 py-5 rounded-full font-cinzel font-bold text-lg transition-all duration-500 hover:scale-110 shadow-[0_16px_64px_hsl(40_90%_55%/0.6)] hover:shadow-[0_24px_80px_hsl(40_90%_55%/0.8)] breathe overflow-hidden">
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
