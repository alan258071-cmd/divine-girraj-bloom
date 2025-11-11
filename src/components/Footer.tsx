export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-krishna-blue text-sacred-white py-16 overflow-hidden">
      {/* Peacock Eye-Spot Watermark */}
      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <ellipse cx="128" cy="128" rx="96" ry="120" fill="currentColor" />
          <ellipse cx="128" cy="128" rx="60" ry="78" fill="hsl(40 90% 55%)" opacity="0.3" />
          <ellipse cx="128" cy="128" rx="30" ry="42" fill="hsl(185 55% 45%)" opacity="0.5" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-cinzel text-3xl font-bold mb-4">GIRRAJ ENCLAVE</h3>
            <p className="font-cormorant text-lg text-sacred-white/80 mb-4 leading-relaxed">
              Premium gated township on Mathura–Goverdhan Highway. 125 well-planned plots with modern infrastructure, 
              24×7 security, and spiritual serenity. MVDA approval in process.
            </p>
            <p className="font-cormorant text-base text-sacred-white/70 mb-6">
              <strong>Developer:</strong> Shrimanohar Real Estate
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/shrimanohar_realestate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-sacred-white/10 rounded-full flex items-center justify-center hover:bg-peacock-teal transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a
                href="https://shrimanoharrealestate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-sacred-white/10 rounded-full flex items-center justify-center hover:bg-peacock-teal transition-colors duration-300"
              >
                <span className="sr-only">Website</span>
                🌐
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#amenities" className="devotional-link text-sacred-white/80">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#investment" className="devotional-link text-sacred-white/80">
                  Investment
                </a>
              </li>
              <li>
                <a href="#gallery" className="devotional-link text-sacred-white/80">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#projects" className="devotional-link text-sacred-white/80">
                  Completed Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 font-cormorant text-sacred-white/80">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Jamuna Vata Chauraha, Mathura-Goverdhan Highway</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:8445287511" className="hover:text-saffron-gold transition-colors">8445287511</a>
                  <a href="tel:9027401565" className="hover:text-saffron-gold transition-colors">9027401565</a>
                  <a href="tel:6395484543" className="hover:text-saffron-gold transition-colors">6395484543</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>🌐</span>
                <a href="https://shrimanoharrealestate.com" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-gold transition-colors">
                  shrimanoharrealestate.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sacred-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-cormorant text-sm text-sacred-white/60">
            © 2025 Girraj Enclave by Shrimanohar Real Estate. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-cormorant">
            <a href="#" className="devotional-link text-sacred-white/60">
              Privacy Policy
            </a>
            <a href="#" className="devotional-link text-sacred-white/60">
              Terms & Conditions
            </a>
            <a href="#" className="devotional-link text-sacred-white/60">
              RERA Details
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
