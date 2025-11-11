export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-krishna-blue via-peacock-teal to-krishna-blue text-sacred-white py-20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-saffron-gold" />
              <path d="M30 15 L32 22 L39 22 L33 27 L35 34 L30 29 L25 34 L27 27 L21 22 L28 22 Z" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 192 192" className="w-full h-full">
          <circle cx="96" cy="96" r="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-saffron-gold" />
          <circle cx="96" cy="96" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-sacred-white" />
          <path d="M96 16 L104 56 L144 56 L111 80 L127 120 L96 96 L65 120 L81 80 L48 56 L88 56 Z" fill="currentColor" opacity="0.4" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <ellipse cx="128" cy="128" rx="96" ry="120" fill="currentColor" className="text-peacock-teal" opacity="0.3" />
          <ellipse cx="128" cy="128" rx="60" ry="78" fill="hsl(40 90% 55%)" opacity="0.4" />
          <ellipse cx="128" cy="128" rx="30" ry="42" fill="hsl(185 55% 45%)" opacity="0.5" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-cinzel text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-saffron-gold via-temple-gold to-sacred-white bg-clip-text text-transparent">
                GIRRAJ ENCLAVE
              </h3>
              <p className="font-cinzel text-sm text-saffron-gold/80 tracking-wider">
                YOUR SPACE. YOUR PEACE.
              </p>
            </div>
            
            <p className="font-cormorant text-lg text-sacred-white/90 mb-4 leading-relaxed">
              Premium gated township on <span className="text-saffron-gold font-semibold">Mathura–Goverdhan Highway</span>. 
              125 well-planned plots with modern infrastructure, 24×7 security, and spiritual serenity.
            </p>
            
            <div className="bg-sacred-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-sacred-white/20">
              <p className="font-cormorant text-base text-sacred-white/90 mb-2">
                <span className="text-saffron-gold font-bold">Developer:</span> Shrimanohar Real Estate
              </p>
              <p className="font-cormorant text-sm text-sacred-white/70">
                Trusted name in quality real estate development with proven track record
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/shrimanohar_realestate"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-sacred-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-saffron-gold transition-all duration-300 border border-sacred-white/20 hover:border-saffron-gold hover:scale-110"
              >
                <span className="text-2xl transition-transform group-hover:scale-110">📷</span>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://shrimanoharrealestate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-sacred-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-saffron-gold transition-all duration-300 border border-sacred-white/20 hover:border-saffron-gold hover:scale-110"
              >
                <span className="text-2xl transition-transform group-hover:scale-110">🌐</span>
                <span className="sr-only">Website</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-xl font-bold mb-6 text-saffron-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="group font-cormorant text-base text-sacred-white/80 hover:text-saffron-gold transition-colors flex items-center gap-2">
                  <span className="text-saffron-gold opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                  About Project
                </a>
              </li>
              <li>
                <a href="#amenities" className="group font-cormorant text-base text-sacred-white/80 hover:text-saffron-gold transition-colors flex items-center gap-2">
                  <span className="text-saffron-gold opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                  Amenities
                </a>
              </li>
              <li>
                <a href="#investment" className="group font-cormorant text-base text-sacred-white/80 hover:text-saffron-gold transition-colors flex items-center gap-2">
                  <span className="text-saffron-gold opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                  Investment
                </a>
              </li>
              <li>
                <a href="#gallery" className="group font-cormorant text-base text-sacred-white/80 hover:text-saffron-gold transition-colors flex items-center gap-2">
                  <span className="text-saffron-gold opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#projects" className="group font-cormorant text-base text-sacred-white/80 hover:text-saffron-gold transition-colors flex items-center gap-2">
                  <span className="text-saffron-gold opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                  Completed Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-xl font-bold mb-6 text-saffron-gold">Contact Us</h4>
            <ul className="space-y-4 font-cormorant text-sacred-white/90">
              <li className="flex items-start gap-3 group">
                <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">📍</span>
                <div>
                  <p className="font-semibold text-sacred-white mb-1">Location</p>
                  <p className="text-sm text-sacred-white/80 leading-relaxed">
                    Jamuna Vata Chauraha<br />
                    Mathura-Goverdhan Highway
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">📞</span>
                <div>
                  <p className="font-semibold text-sacred-white mb-2">Phone</p>
                  <div className="flex flex-col gap-1.5">
                    <a href="tel:8445287511" className="text-sm hover:text-saffron-gold transition-colors hover:translate-x-1 inline-block">
                      +91 8445287511
                    </a>
                    <a href="tel:9027401565" className="text-sm hover:text-saffron-gold transition-colors hover:translate-x-1 inline-block">
                      +91 9027401565
                    </a>
                    <a href="tel:6395484543" className="text-sm hover:text-saffron-gold transition-colors hover:translate-x-1 inline-block">
                      +91 6395484543
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">🌐</span>
                <div>
                  <p className="font-semibold text-sacred-white mb-1">Website</p>
                  <a 
                    href="https://shrimanoharrealestate.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm hover:text-saffron-gold transition-colors underline decoration-dotted"
                  >
                    shrimanoharrealestate.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mb-12">
          <div className="relative bg-gradient-to-r from-saffron-gold/20 via-temple-gold/20 to-saffron-gold/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-saffron-gold/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saffron-gold/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
            <div className="relative text-center">
              <h4 className="font-cinzel text-2xl md:text-3xl font-bold text-saffron-gold mb-4">
                Ready to Invest in Your Dream Property?
              </h4>
              <p className="font-cormorant text-lg text-sacred-white/90 mb-6">
                Book your plot today and be part of an exclusive community
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:8445287511"
                  className="group bg-saffron-gold hover:bg-temple-gold text-krishna-blue px-8 py-3 rounded-full font-cinzel font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Call Now
                </a>
                <a 
                  href="#contact"
                  className="group bg-sacred-white/20 hover:bg-sacred-white/30 text-sacred-white px-8 py-3 rounded-full font-cinzel font-bold border-2 border-sacred-white/30 hover:border-saffron-gold transition-all duration-300 hover:scale-105"
                >
                  Get Details
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sacred-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-cormorant text-base text-sacred-white/80">
            © 2025 <span className="text-saffron-gold font-bold">Girraj Enclave</span> by Shrimanohar Real Estate. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-cormorant">
            <a href="#" className="text-sacred-white/70 hover:text-saffron-gold transition-colors">
              Privacy Policy
            </a>
            <span className="text-sacred-white/30">•</span>
            <a href="#" className="text-sacred-white/70 hover:text-saffron-gold transition-colors">
              Terms & Conditions
            </a>
            <span className="text-sacred-white/30">•</span>
            <a href="#" className="text-sacred-white/70 hover:text-saffron-gold transition-colors">
              RERA Details
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
