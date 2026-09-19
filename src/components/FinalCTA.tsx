import React from 'react';
import { Utensils, MessageCircle, Phone } from 'lucide-react';
import liveBbqImg from '../assets/images/live_bbq_skewers_1789740055296.jpg';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FinalCTAProps {
  onOpenReservation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenReservation }) => {
  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Quetta Sangat! I want to inquire about dining / placing a food order.`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#080807] overflow-hidden border-t border-[#C7A35A]/20">
      {/* Background with dark luxury filter */}
      <div className="absolute inset-0 z-0">
        <img
          src={liveBbqImg}
          alt="Charcoal embers and smoking barbecue skewers"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-[#080807]/80 to-[#080807]/90" />
        <div className="absolute inset-0 radial-smoke opacity-60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181714]/90 border border-[#C7A35A]/30 text-[#D6B66B] text-[11px] font-semibold tracking-[0.25em] uppercase mb-6">
          <span>THE TABLES ARE SET</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4EFE5] leading-[1.1] mb-6">
          Your Next Great Meal <br />
          <span className="italic text-[#D6B66B]">Starts at Quetta Sangat.</span>
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#B7B0A4] leading-relaxed mb-10 font-normal">
          Whether you crave a simmering pot of Namkeen Rosh, fiery Shinwari Karahi, or simply a late-night cup 
          of Karak Doodh Patti chai with hot flaky lachha paratha, our doors in Dunyapur are open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            id="final-cta-menu-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#080807] bg-gradient-to-r from-[#C7A35A] to-[#D6B66B] hover:from-[#D6B66B] hover:to-[#E6CA85] transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#080807]" />
            <span>Explore the Full Menu</span>
          </a>

          <button
            onClick={onOpenReservation}
            id="final-cta-reserve-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#F4EFE5] bg-[#181714] hover:bg-[#24211C] border border-[#C7A35A]/40 hover:border-[#D6B66B] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Reserve Table / WhatsApp</span>
          </button>

          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#B7B0A4] hover:text-[#D6B66B] transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#C7A35A]" />
            <span>{RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
