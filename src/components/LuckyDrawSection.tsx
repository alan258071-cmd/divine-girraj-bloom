const prizes = [
  {
    title: "Grand Prize",
    prize: "Royal Enfield Motorcycle",
    icon: "🏍️",
  },
  {
    title: "Second Prize",
    prize: "Gold Coins Worth ₹50,000",
    icon: "🪙",
  },
  {
    title: "Third Prize",
    prize: "Premium Electronics Bundle",
    icon: "📱",
  },
];

export const LuckyDrawSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-krishna-blue to-peacock-teal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-sacred-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-sacred-white rounded-full" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sacred-white relative inline-block">
            Lucky Draw Bonanza
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-saffron-gold to-transparent" />
          </h2>
          <p className="text-lg text-sacred-white/90 max-w-2xl mx-auto">
            Book your plot and stand a chance to win exciting prizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="prize-card group relative bg-sacred-white/10 backdrop-blur-md rounded-2xl p-8 border border-sacred-white/20 transition-all duration-300 hover:scale-105 hover:bg-sacred-white/15 hover:border-saffron-gold/50"
              style={{
                background: `linear-gradient(120deg, 
                  hsl(185 55% 45% / 0.1) 0%, 
                  hsl(215 65% 35% / 0.1) 50%, 
                  hsl(185 60% 50% / 0.1) 100%)`,
              }}
            >
              <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {prize.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-saffron-gold">
                {prize.title}
              </h3>
              <p className="text-lg text-sacred-white/90">{prize.prize}</p>

              {/* Hover Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saffron-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-saffron-gold text-krishna-blue px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_hsl(40_90%_55%/0.6)] breathe">
            Register for Lucky Draw
          </button>
        </div>
      </div>
    </section>
  );
};
