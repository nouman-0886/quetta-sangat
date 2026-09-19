import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types/restaurant';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleOpenLightbox = (item: GalleryItem, index: number) => {
    setActiveItem(item);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
    setCurrentIndex(nextIdx);
    setActiveItem(GALLERY_ITEMS[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setCurrentIndex(prevIdx);
    setActiveItem(GALLERY_ITEMS[prevIdx]);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0C0B0A] relative border-t border-[#C7A35A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181714] border border-[#C7A35A]/30 text-[#D6B66B] text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3 h-3 text-[#D6B66B]" />
            <span>VISUAL CHRONICLES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4EFE5] tracking-tight mb-4">
            The Culinary Atmosphere
          </h2>

          <p className="text-base text-[#B7B0A4] leading-relaxed">
            Glimpses into our live kitchens, smoking coals, bubbling woks, and warm gathering spaces.
          </p>
        </div>

        {/* Editorial Responsive Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Featured Card 1 */}
          <div
            onClick={() => handleOpenLightbox(GALLERY_ITEMS[0], 0)}
            className="md:col-span-8 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden group cursor-pointer border border-[#24211C] hover:border-[#C7A35A]/50 transition-all shadow-xl bg-[#11110F]"
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-0 bg-[#080807]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="p-3 rounded-full bg-[#080807]/80 text-[#D6B66B] border border-[#C7A35A]/50">
                <Eye className="w-6 h-6" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D6B66B] font-semibold">
                {GALLERY_ITEMS[0].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EFE5] mt-1">
                {GALLERY_ITEMS[0].title}
              </h3>
              <p className="text-xs text-[#B7B0A4] mt-1 hidden sm:block">
                {GALLERY_ITEMS[0].description}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => handleOpenLightbox(GALLERY_ITEMS[1], 1)}
            className="md:col-span-4 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden group cursor-pointer border border-[#24211C] hover:border-[#C7A35A]/50 transition-all shadow-xl bg-[#11110F]"
          >
            <img
              src={GALLERY_ITEMS[1].image}
              alt={GALLERY_ITEMS[1].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-0 bg-[#080807]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="p-3 rounded-full bg-[#080807]/80 text-[#D6B66B] border border-[#C7A35A]/50">
                <Eye className="w-6 h-6" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D6B66B] font-semibold">
                {GALLERY_ITEMS[1].category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F4EFE5] mt-1">
                {GALLERY_ITEMS[1].title}
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => handleOpenLightbox(GALLERY_ITEMS[2], 2)}
            className="md:col-span-4 relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden group cursor-pointer border border-[#24211C] hover:border-[#C7A35A]/50 transition-all shadow-xl bg-[#11110F]"
          >
            <img
              src={GALLERY_ITEMS[2].image}
              alt={GALLERY_ITEMS[2].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-0 bg-[#080807]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="p-3 rounded-full bg-[#080807]/80 text-[#D6B66B] border border-[#C7A35A]/50">
                <Eye className="w-6 h-6" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D6B66B] font-semibold">
                {GALLERY_ITEMS[2].category}
              </span>
              <h3 className="font-serif text-xl text-[#F4EFE5] mt-1">
                {GALLERY_ITEMS[2].title}
              </h3>
            </div>
          </div>

          {/* Card 4 */}
          <div
            onClick={() => handleOpenLightbox(GALLERY_ITEMS[3], 3)}
            className="md:col-span-4 relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden group cursor-pointer border border-[#24211C] hover:border-[#C7A35A]/50 transition-all shadow-xl bg-[#11110F]"
          >
            <img
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-0 bg-[#080807]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="p-3 rounded-full bg-[#080807]/80 text-[#D6B66B] border border-[#C7A35A]/50">
                <Eye className="w-6 h-6" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D6B66B] font-semibold">
                {GALLERY_ITEMS[3].category}
              </span>
              <h3 className="font-serif text-xl text-[#F4EFE5] mt-1">
                {GALLERY_ITEMS[3].title}
              </h3>
            </div>
          </div>

          {/* Card 5 */}
          <div
            onClick={() => handleOpenLightbox(GALLERY_ITEMS[4], 4)}
            className="md:col-span-4 relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden group cursor-pointer border border-[#24211C] hover:border-[#C7A35A]/50 transition-all shadow-xl bg-[#11110F]"
          >
            <img
              src={GALLERY_ITEMS[4].image}
              alt={GALLERY_ITEMS[4].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-0 bg-[#080807]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="p-3 rounded-full bg-[#080807]/80 text-[#D6B66B] border border-[#C7A35A]/50">
                <Eye className="w-6 h-6" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D6B66B] font-semibold">
                {GALLERY_ITEMS[4].category}
              </span>
              <h3 className="font-serif text-xl text-[#F4EFE5] mt-1">
                {GALLERY_ITEMS[4].title}
              </h3>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#080807]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-[#181714] text-[#F4EFE5] hover:text-[#D6B66B] border border-[#C7A35A]/30 transition-colors cursor-pointer z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#181714]/80 text-[#F4EFE5] hover:text-[#D6B66B] border border-white/10 hover:border-[#C7A35A] transition-all cursor-pointer z-20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#181714]/80 text-[#F4EFE5] hover:text-[#D6B66B] border border-white/10 hover:border-[#C7A35A] transition-all cursor-pointer z-20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full max-h-[65vh] rounded-xl overflow-hidden border border-[#C7A35A]/30 shadow-2xl flex items-center justify-center bg-black">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>

            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D6B66B] font-medium">
                {activeItem.category}
              </span>
              <h3 className="font-serif text-2xl text-[#F4EFE5] mt-1">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#B7B0A4] mt-1">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
