import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FloatingActions: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(RESTAURANT_INFO.whatsappMessage);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Quick contact options"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Call Button */}
      <a
        href={`tel:${RESTAURANT_INFO.phoneRaw}`}
        id="floating-call-btn"
        className="w-12 h-12 rounded-full bg-[#181714] border border-[#C7A35A]/50 text-[#D6B66B] flex items-center justify-center shadow-2xl hover:bg-[#24211C] hover:scale-105 transition-all group"
        aria-label="Call Quetta Sangat Dunyapur"
        title={`Call ${RESTAURANT_INFO.phone}`}
      >
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </a>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        id="floating-whatsapp-btn"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-2xl hover:scale-105 transition-all cursor-pointer border border-emerald-400/40"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp with Quetta Sangat"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Order on WhatsApp</span>
      </button>
    </aside>
  );
};
