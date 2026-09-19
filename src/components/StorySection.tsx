import React from 'react';
import { ArrowRight, Flame, HeartHandshake, Sparkles } from 'lucide-react';
import namkeenRoshImg from '../assets/images/namkeen_rosh_dish_1789740041226.jpg';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface StorySectionProps {
  onOpenReservation: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#0C0B0A] relative overflow-hidden border-t border-[#C7A35A]/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C7A35A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Framed Visual */}
          <div className="lg:col-span-6 relative">
            {/* Decorative Gold Framing */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#C7A35A]/30 shadow-2xl bg-[#181714] group">
              <img
                src={namkeenRoshImg}
                alt="Balochi Mutton Namkeen Rosh slow cooked in earthen bowl with sea salt and garlic"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center filter contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent opacity-80" />

              {/* Floating Signature Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#11110F]/90 backdrop-blur-md border border-[#C7A35A]/30 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#D6B66B] font-semibold">Balochi Culinary Heritage</p>
                  <h4 className="font-serif text-lg text-[#F4EFE5]">Mutton Namkeen Rosh</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#B7B0A4]">Slow-Cooked</span>
                  <p className="text-sm font-semibold text-[#D6B66B]">4+ Hours</p>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-full h-full rounded-2xl border border-[#C7A35A]/15 -z-0 pointer-events-none" />
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Gold Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#C7A35A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D6B66B]">
                ANCIENT HEARTHS & TIME-HONORED FLAVORS
              </span>
            </div>

            {/* Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F4EFE5] leading-[1.15] mb-6">
              The Living Spirit of <br />
              <span className="italic text-[#D6B66B]">Quetta Hospitality</span> in Dunyapur
            </h2>

            {/* Concise Description */}
            <p className="text-base text-[#B7B0A4] leading-relaxed mb-6">
              Rooted in the rugged valleys of Balochistan and the open embers of Pashtun culinary mastery, 
              <strong className="text-[#F4EFE5] font-medium"> Quetta Sangat Hotel & Restaurant</strong> was born out of an 
              uncompromising dedication to authenticity. Located on Kehror Pakka Road in Dunyapur, we bring you 
              dishes cooked the way they were always intended: over live charcoal, in seasoned cast-iron woks, and on 
              patient clay handis.
            </p>

            <p className="text-base text-[#B7B0A4] leading-relaxed mb-8">
              We never cut corners with frozen raw meats or processed shortcuts. Every morning, 100% fresh halal meats 
              are hand-selected. Every paratha dough is kneaded with wholesome flour and seared in pure desi ghee. And 
              our legendary Karak Doodh Patti chai is simmered with dense farm-fresh buffalo milk and fragrant green cardamom 
              around the clock.
            </p>

            {/* Supporting Values Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mb-8 border-t border-[#24211C]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#181714] border border-[#C7A35A]/20 text-[#D6B66B]">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F4EFE5]">Live Wok & Charcoal</h4>
                  <p className="text-xs text-[#B7B0A4] mt-0.5">Cooked fresh on high flames upon every order.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#181714] border border-[#C7A35A]/20 text-[#D6B66B]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F4EFE5]">Sangat Hospitality</h4>
                  <p className="text-xs text-[#B7B0A4] mt-0.5">Family hall & traditional baithak floor seating.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenReservation}
                id="story-reserve-table-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#080807] bg-gradient-to-r from-[#C7A35A] to-[#D6B66B] hover:from-[#D6B66B] hover:to-[#E6CA85] transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Reserve a Table</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#080807]" />
              </button>

              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#F4EFE5] hover:text-[#D6B66B] border border-[#C7A35A]/30 hover:border-[#D6B66B] bg-[#181714]/60 transition-all cursor-pointer"
              >
                <span>Explore Full Menu</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
