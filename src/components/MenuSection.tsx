import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, Flame, Star } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types/restaurant';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.urduName.includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOrderWhatsapp = (item: MenuItem, portionText?: string) => {
    const portionStr = portionText ? ` (${portionText})` : '';
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Quetta Sangat Dunyapur! I would like to order: ${item.name}${portionStr}. Please confirm availability and delivery time.`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0C0B0A] relative border-t border-[#C7A35A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C7A35A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D6B66B]">
              THE COMPLETE REPERTOIRE
            </span>
            <span className="h-[1px] w-6 bg-[#C7A35A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4EFE5] tracking-tight mb-4">
            Our Culinary Menu
          </h2>

          <p className="text-base text-[#B7B0A4] leading-relaxed">
            Prepared fresh to order using halal cuts, freshly churned desi butter, and stone-ground Balochi spices.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#B7B0A4] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes (e.g., Rosh, Karahi, Chai)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-sm text-[#F4EFE5] placeholder-[#B7B0A4]/60 focus:outline-none transition-colors"
            />
          </div>

          {/* Clean Category Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  id={`filter-tab-${cat.id}`}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#C7A35A] text-[#080807] shadow-md'
                      : 'bg-[#181714] text-[#B7B0A4] hover:text-[#F4EFE5] hover:bg-[#24211C] border border-[#24211C]'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#B7B0A4] mb-8 pb-3 border-b border-[#24211C]">
          <span>
            Showing <strong className="text-[#D6B66B]">{filteredItems.length}</strong> specialty items
          </span>
          <span className="hidden sm:inline">
            📍 Dunyapur Branch • Dine-in & Quick Takeaway
          </span>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#11110F] rounded-xl border border-[#24211C]">
            <p className="text-[#B7B0A4] text-base mb-2">No menu items found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs uppercase tracking-wider text-[#D6B66B] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-item-${item.id}`}
                className="group p-5 rounded-xl bg-[#11110F] border border-[#24211C] hover:border-[#C7A35A]/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl"
              >
                <div>
                  {/* Top row: Name & Urdu Name */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F4EFE5] group-hover:text-[#D6B66B] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-xs text-[#B7B0A4] font-serif shrink-0 pt-1" dir="rtl">
                      {item.urduName}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#B7B0A4] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tag badging */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {item.isSignature && (
                      <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#C7A35A]/15 text-[#D6B66B] border border-[#C7A35A]/30">
                        <Star className="w-2.5 h-2.5 fill-current" /> Signature
                      </span>
                    )}
                    {item.spiceLevel === 'spicy' && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-900/40">
                        <Flame className="w-2.5 h-2.5" /> Spicy
                      </span>
                    )}
                    {item.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#181714] text-[#B7B0A4] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Price breakdown and WhatsApp action */}
                <div className="pt-3 border-t border-[#24211C] flex items-center justify-between">
                  <div>
                    {item.price.single !== undefined && (
                      <div className="text-sm font-semibold text-[#D6B66B]">
                        Rs. {item.price.single}
                      </div>
                    )}
                    {item.price.half !== undefined && (
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#F4EFE5]">
                          Half: <strong className="text-[#D6B66B]">Rs. {item.price.half}</strong>
                        </span>
                        {item.price.full !== undefined && (
                          <span className="text-[#B7B0A4]">
                            Full: <strong className="text-[#F4EFE5]">Rs. {item.price.full}</strong>
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleOrderWhatsapp(item)}
                    id={`menu-order-${item.id}`}
                    className="p-2 rounded-lg bg-[#181714] hover:bg-[#C7A35A] hover:text-[#080807] text-[#D6B66B] border border-[#C7A35A]/30 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium"
                    title="Order this dish on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
