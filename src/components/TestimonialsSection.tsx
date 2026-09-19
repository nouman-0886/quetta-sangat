import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#080807] relative border-t border-[#C7A35A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181714] border border-[#C7A35A]/30 text-[#D6B66B] text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            <span>GUEST EXPERIENCES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4EFE5] tracking-tight mb-4">
            Words From Our Tables
          </h2>

          <p className="text-base text-[#B7B0A4] leading-relaxed">
            Honest reflections from travelers, food enthusiasts, and local patrons savoring Quetta Sangat in Dunyapur.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-xl bg-[#11110F] border border-[#24211C] hover:border-[#C7A35A]/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Giant subtle quotation mark */}
              <div className="absolute top-6 right-6 text-[#C7A35A]/15 group-hover:text-[#C7A35A]/25 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6 text-[#D6B66B]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote body in serif */}
                <blockquote className="font-serif text-lg sm:text-xl text-[#F4EFE5] leading-relaxed mb-6 italic">
                  "{review.quote}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#24211C] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#F4EFE5]">{review.author}</h4>
                  <p className="text-xs text-[#B7B0A4]">{review.location}</p>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded bg-[#181714] text-[#D6B66B] border border-[#C7A35A]/20">
                  {review.highlightDish}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
