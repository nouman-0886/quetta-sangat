import React from 'react';
import { Sparkles, Phone } from 'lucide-react';
import ambianceImg from '../assets/images/restaurant_ambiance_1789740085966.jpg';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CinematicBreakProps {
  onOpenReservation: () => void;
}

export const CinematicBreak: React.FC<CinematicBreakProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#080807] overflow-hidden">
      {/* Background Image with Layered Dark Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={ambianceImg}
          alt="Warm authentic restaurant ambiance with lantern light and banquet hospitality"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080807] via-[#080807]/60 to-[#080807]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-[#080807]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gold Emblem */}
        <div className="w-12 h-12 rounded-full border border-[#C7A35A]/40 bg-[#181714]/80 backdrop-blur-md mx-auto mb-6 flex items-center justify-center text-[#D6B66B]">
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Large Serif Statement */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#D6B66B] font-semibold mb-4">
          AN UNFORGETTABLE EVENING
        </p>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4EFE5] leading-tight mb-6">
          “Where Tradition Meets the Table, <br className="hidden sm:block" />
          <span className="italic text-[#D6B66B]">Every Gathering Becomes a Memory.”</span>
        </h2>

        <p className="text-sm sm:text-base text-[#B7B0A4] max-w-xl mx-auto mb-10 leading-relaxed">
          From quiet family evenings to celebratory road-trip stops along Kehror Pakka Road, 
          experience our dedicated family hall and authentic baithak seating.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenReservation}
            id="cinematic-reserve-btn"
            className="px-8 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#080807] bg-gradient-to-r from-[#C7A35A] to-[#D6B66B] hover:from-[#D6B66B] hover:to-[#E6CA85] transition-all shadow-xl cursor-pointer"
          >
            Reserve a Table
          </button>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="px-8 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#F4EFE5] bg-[#181714]/80 hover:bg-[#24211C] border border-[#C7A35A]/30 hover:border-[#D6B66B] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#C7A35A]" />
            <span>Call: {RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
