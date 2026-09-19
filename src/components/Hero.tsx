import React from 'react';
import { Sparkles, ChevronDown, Utensils, Phone, Clock, ShieldCheck } from 'lucide-react';
import heroKarahiImg from '../assets/images/hero_karahi_luxury_1789740027870.jpg';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#080807] pt-24 pb-16"
    >
      {/* Background Image Layer with Atmospheric Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroKarahiImg}
          alt="Sizzling authentic Pakistani Chicken Karahi in traditional cast-iron wok"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.12] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered cinematic radial & linear gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-[#080807]/60 to-[#080807]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080807]/90 via-[#080807]/50 to-[#080807]/90" />
        <div className="absolute inset-0 radial-smoke opacity-70" />
        {/* Subtle warm amber light bloom over food zone */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C7A35A]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 sm:mt-10">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A35A]/40 bg-[#181714]/80 backdrop-blur-md mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D6B66B] animate-pulse"></span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D6B66B]">
            AUTHENTIC FLAVORS • SIGNATURE HOSPITALITY
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F4EFE5] tracking-tight leading-[1.08] mb-6">
          A Taste of Tradition, <br />
          <span className="italic font-light text-[#D6B66B]">Served With Character.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#B7B0A4] font-normal leading-relaxed mb-10 tracking-wide">
          Welcome to <span className="text-[#F4EFE5] font-medium">Quetta Sangat Hotel & Restaurant</span> in Dunyapur. 
          Indulge in time-honored Balochi Namkeen Rosh, sizzling cast-iron wok Karahi, live charcoal barbecue, 
          and steaming handcrafted Doodh Patti chai seared with pure desi ghee parathas.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
          <button
            onClick={() => scrollToSection('menu')}
            id="hero-explore-menu-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-[#080807] bg-gradient-to-r from-[#C7A35A] via-[#D6B66B] to-[#C7A35A] hover:from-[#D6B66B] hover:to-[#E6CA85] transition-all duration-300 shadow-xl hover:shadow-[#C7A35A]/20 cursor-pointer flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <Utensils className="w-4 h-4 text-[#080807]" />
            <span>Explore Our Menu</span>
          </button>

          <button
            onClick={onOpenReservation}
            id="hero-reserve-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-[#F4EFE5] bg-[#181714]/80 hover:bg-[#24211C] border border-[#C7A35A]/40 hover:border-[#D6B66B] transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#D6B66B]" />
            <span>Reserve Table / Inquire</span>
          </button>
        </div>

        {/* Trust & Quality Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-6 border-t border-[#C7A35A]/15 text-left">
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#11110F]/60 backdrop-blur-sm border border-white/5">
            <ShieldCheck className="w-4 h-4 text-[#D6B66B] shrink-0" />
            <div>
              <p className="text-xs font-medium text-[#F4EFE5]">100% Halal</p>
              <p className="text-[10px] text-[#B7B0A4]">Fresh Daily Livestock</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#11110F]/60 backdrop-blur-sm border border-white/5">
            <Sparkles className="w-4 h-4 text-[#D6B66B] shrink-0" />
            <div>
              <p className="text-xs font-medium text-[#F4EFE5]">Pure Desi Ghee</p>
              <p className="text-[10px] text-[#B7B0A4]">Hand-stretched Parathas</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#11110F]/60 backdrop-blur-sm border border-white/5">
            <Clock className="w-4 h-4 text-[#D6B66B] shrink-0" />
            <div>
              <p className="text-xs font-medium text-[#F4EFE5]">6:00 AM – 2:00 AM</p>
              <p className="text-[10px] text-[#B7B0A4]">Breakfast to Late Night</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#11110F]/60 backdrop-blur-sm border border-white/5">
            <Phone className="w-4 h-4 text-[#D6B66B] shrink-0" />
            <div>
              <p className="text-xs font-medium text-[#F4EFE5]">Dunyapur Delivery</p>
              <p className="text-[10px] text-[#B7B0A4]">{RESTAURANT_INFO.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={() => scrollToSection('story')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-[#B7B0A4]/70 hover:text-[#D6B66B] transition-colors group cursor-pointer"
        aria-label="Scroll to restaurant story"
      >
        <span>Discover Our Story</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C7A35A] group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  );
};
