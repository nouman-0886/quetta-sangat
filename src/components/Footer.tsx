import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer className="bg-[#060505] border-t border-[#24211C] text-[#B7B0A4] pt-20 pb-12 relative overflow-hidden">
      {/* Decorative hairline gold top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C7A35A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#181714]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#C7A35A]/40 bg-[#181714] flex items-center justify-center text-[#D6B66B] font-serif font-bold text-xl">
                Q
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-[#F4EFE5]">
                  QUETTA SANGAT
                </span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D6B66B]">
                  Hotel & Restaurant
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B7B0A4] leading-relaxed mb-6 max-w-sm">
              Authentic Balochi Namkeen Rosh, fiery cast-iron wok Karahi, live charcoal barbecue, and 
              legendary Karak Doodh Patti chai. Serving travelers and families with warm Pakistani hospitality 
              on Kehror Pakka Road in Dunyapur.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#F4EFE5]">
              <span className="px-3 py-1 rounded bg-[#181714] border border-[#C7A35A]/30 text-[#D6B66B]">
                100% Halal Certified
              </span>
              <span className="px-3 py-1 rounded bg-[#181714] border border-[#C7A35A]/30 text-[#D6B66B]">
                Dedicated Family Hall
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base text-[#F4EFE5] tracking-wide mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A35A]" />
              <span>Explore</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-[#D6B66B] transition-colors">Home Experience</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#D6B66B] transition-colors">Balochi Culinary Story</a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#D6B66B] transition-colors">Chef's Signature Dishes</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D6B66B] transition-colors">Full Food & Chai Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D6B66B] transition-colors">Atmosphere Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D6B66B] transition-colors">Guest Experiences</a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-[#D6B66B] transition-colors text-left cursor-pointer"
                >
                  Table Reservations
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-base text-[#F4EFE5] tracking-wide mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A35A]" />
              <span>Dunyapur Location</span>
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C7A35A] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C7A35A] shrink-0" />
                <span>{RESTAURANT_INFO.openingHours}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C7A35A] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-[#F4EFE5] hover:text-[#D6B66B] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp Instant Ordering (0300-0607222)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom credits & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B7B0A4]/70 gap-4">
          <p>© {new Date().getFullYear()} Quetta Sangat Hotel & Restaurant. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with authentic tradition & hospitality for Dunyapur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
