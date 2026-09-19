import React from 'react';
import { ShieldCheck, Flame, Coffee, Users } from 'lucide-react';
import { RESTAURANT_FEATURES } from '../data/restaurantData';

export const ExperienceFeatures: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <ShieldCheck className="w-5 h-5 text-[#D6B66B]" />;
      case 'UtensilsCrossed':
        return <Flame className="w-5 h-5 text-[#D6B66B]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#D6B66B]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#D6B66B]" />;
      default:
        return <Flame className="w-5 h-5 text-[#D6B66B]" />;
    }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#080807] relative border-t border-[#C7A35A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181714] border border-[#C7A35A]/30 text-[#D6B66B] text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            <span>THE SANGAT STANDARD</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4EFE5] tracking-tight mb-4">
            Why Discerning Diners Return
          </h2>

          <p className="text-base text-[#B7B0A4] leading-relaxed">
            More than just dining — an authentic cultural immersion in traditional Pakistani hospitality, 
            fresh butchery, and ancestral cooking rituals.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-[#11110F] border border-[#24211C] hover:border-[#C7A35A]/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Gold Icon Box */}
                <div className="w-12 h-12 rounded-lg bg-[#181714] border border-[#C7A35A]/30 flex items-center justify-center mb-6 group-hover:border-[#D6B66B] transition-colors">
                  {getIcon(feature.iconName)}
                </div>

                <div className="text-[11px] font-serif text-[#D6B66B]/80 mb-1" dir="rtl">
                  {feature.urdu}
                </div>

                <h3 className="font-serif text-xl font-normal text-[#F4EFE5] mb-3 group-hover:text-[#D6B66B] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#B7B0A4] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Subtle Gold Bottom Accent */}
              <div className="h-[2px] w-0 bg-gradient-to-r from-[#C7A35A] to-transparent group-hover:w-full transition-all duration-500 mt-6" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
