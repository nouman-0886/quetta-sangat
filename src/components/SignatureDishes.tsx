import React from 'react';
import { Sparkles, MessageCircle, Flame } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types/restaurant';

interface SignatureDishesProps {
  onSelectItem?: (item: MenuItem) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = () => {
  const signatureItems = MENU_ITEMS.filter((item) => item.isSignature);

  const handleOrderDish = (dish: MenuItem) => {
    const priceText = dish.price.single
      ? `Rs. ${dish.price.single}`
      : dish.price.half
      ? `Half: Rs. ${dish.price.half} / Full: Rs. ${dish.price.full}`
      : '';
    const text = encodeURIComponent(
      `Assalam-o-Alaikum! I want to order / inquire about "${dish.name}" (${dish.urduName}) - ${priceText} from Quetta Sangat Dunyapur.`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="signature" className="py-24 sm:py-32 bg-[#080807] relative border-t border-[#C7A35A]/10">
      {/* Subtle top decorative light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C7A35A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181714] border border-[#C7A35A]/30 text-[#D6B66B] text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3 h-3 text-[#D6B66B]" />
            <span>CHEF'S MASTER SELECTIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4EFE5] tracking-tight mb-4">
            Signature Flavors
          </h2>

          <p className="text-base sm:text-lg text-[#B7B0A4] leading-relaxed">
            The dishes that define Quetta Sangat. Handcrafted recipes prepared with fresh cuts, pure desi ghee, 
            and slow-tempered wood & charcoal fires.
          </p>
        </div>

        {/* 3 to 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureItems.slice(0, 6).map((dish) => (
            <div
              key={dish.id}
              id={`dish-card-${dish.id}`}
              className="group relative rounded-xl bg-[#11110F] border border-[#24211C] hover:border-[#C7A35A]/50 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:-translate-y-1.5"
            >
              {/* Card Image Wrapper */}
              <div className="relative h-60 w-full overflow-hidden bg-[#181714]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-transparent to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-[#080807]/80 backdrop-blur-md text-[#D6B66B] border border-[#C7A35A]/40">
                    Signature
                  </span>
                  {dish.spiceLevel === 'spicy' && (
                    <span className="px-2 py-1 rounded-md text-[10px] font-medium bg-red-950/80 text-red-300 border border-red-800/40 flex items-center gap-1">
                      <Flame className="w-2.5 h-2.5" /> Spicy
                    </span>
                  )}
                </div>

                {/* Urdu Name Badge on top right */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-serif bg-[#080807]/80 backdrop-blur-md text-[#F4EFE5] border border-white/10" dir="rtl">
                  {dish.urduName}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F4EFE5] group-hover:text-[#D6B66B] transition-colors leading-tight">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B7B0A4] leading-relaxed mb-4 line-clamp-3">
                    {dish.description}
                  </p>

                  {/* Tags */}
                  {dish.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {dish.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#181714] text-[#B7B0A4] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-[#24211C] flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] uppercase tracking-wider text-[#B7B0A4]">Price</span>
                    <div className="text-sm font-semibold text-[#D6B66B]">
                      {dish.price.single && `Rs. ${dish.price.single}`}
                      {dish.price.half && (
                        <span>
                          Half: <strong className="text-[#F4EFE5]">Rs. {dish.price.half}</strong>
                          {dish.price.full && <span className="text-xs text-[#B7B0A4] ml-1.5 font-normal">| Full: Rs. {dish.price.full}</span>}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleOrderDish(dish)}
                    id={`order-dish-btn-${dish.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#080807] bg-[#C7A35A] hover:bg-[#D6B66B] transition-colors shadow-sm cursor-pointer"
                    title="Order this dish on WhatsApp"
                  >
                    <MessageCircle className="w-3 h-3 text-[#080807]" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
