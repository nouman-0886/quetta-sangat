import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Signature Dishes', href: '#signature' },
    { label: 'Full Menu', href: '#menu' },
    { label: 'The Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(RESTAURANT_INFO.whatsappMessage);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080807]/95 backdrop-blur-md py-3 border-b border-[#C7A35A]/20 shadow-2xl'
          : 'bg-gradient-to-b from-[#080807]/90 via-[#080807]/50 to-transparent py-5 border-b border-white/5'
      }`}
    >
      {/* Top micro info banner on large screens when at top */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-[#C7A35A]/15 pb-2.5 mb-3 text-xs text-[#B7B0A4]">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C7A35A]" />
                <strong className="text-[#F4EFE5]">Hours:</strong> {RESTAURANT_INFO.openingHours}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C7A35A]" />
                <span>Adda Lunda Minor, Kehror Pakka Road, Dunyapur</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-[#C7A35A]/10 text-[#D6B66B] border border-[#C7A35A]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for Dining & Takeaway
              </span>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="hover:text-[#D6B66B] transition-colors flex items-center gap-1 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C7A35A]" />
                {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Emblem */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A35A]"
            id="brand-logo"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C7A35A]/40 bg-[#181714] flex items-center justify-center text-[#D6B66B] font-serif font-bold text-xl shadow-inner group-hover:border-[#D6B66B] transition-colors">
              Q
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-[#F4EFE5] group-hover:text-[#D6B66B] transition-colors">
                  QUETTA SANGAT
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#B7B0A4] -mt-1">
                Hotel & Restaurant • Dunyapur
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#B7B0A4] hover:text-[#D6B66B] transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C7A35A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Group */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              id="nav-whatsapp-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#F4EFE5] bg-[#181714] border border-[#C7A35A]/30 hover:border-[#C7A35A] hover:text-[#D6B66B] transition-all cursor-pointer shadow-sm hover:shadow-[#C7A35A]/10"
              title="Chat with Quetta Sangat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Order</span>
            </button>

            <button
              onClick={onOpenReservation}
              id="nav-reserve-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase text-[#080807] bg-gradient-to-r from-[#C7A35A] to-[#D6B66B] hover:from-[#D6B66B] hover:to-[#E6CA85] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#080807]" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleWhatsAppClick}
              className="sm:hidden p-2 rounded-lg bg-[#181714] border border-[#C7A35A]/30 text-emerald-400"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-[#F4EFE5] hover:text-[#D6B66B] hover:bg-[#181714] focus:outline-none focus:ring-2 focus:ring-[#C7A35A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#080807]/98 border-b border-[#C7A35A]/20 px-6 py-6 mt-3 backdrop-blur-xl shadow-2xl transition-all"
        >
          <div className="flex flex-col gap-4">
            <div className="border-b border-[#24211C] pb-3">
              <div className="flex items-center justify-between text-xs text-[#B7B0A4] mb-2">
                <span>Dunyapur, Kehror Pakka Road</span>
                <span className="text-[#D6B66B]">Open till 2:00 AM</span>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="text-sm font-semibold text-[#F4EFE5] flex items-center gap-2 hover:text-[#D6B66B]"
              >
                <Phone className="w-4 h-4 text-[#C7A35A]" />
                Call {RESTAURANT_INFO.phone}
              </a>
            </div>

            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation Links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#F4EFE5] hover:text-[#D6B66B] transition-colors py-1 flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#C7A35A]">→</span>
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                id="mobile-reserve-cta"
                className="w-full py-3 rounded-lg text-center font-semibold text-sm tracking-wider uppercase bg-gradient-to-r from-[#C7A35A] to-[#D6B66B] text-[#080807] shadow-lg cursor-pointer"
              >
                Reserve Your Table
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                id="mobile-whatsapp-cta"
                className="w-full py-3 rounded-lg text-center font-medium text-sm text-[#F4EFE5] bg-[#181714] border border-[#C7A35A]/40 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order on WhatsApp (0300-0607222)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
