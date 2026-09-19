import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, CheckCircle2, Copy, Check, Calendar, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData } from '../types/restaurant';

export const ReservationAndContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ReservationData>({
    fullName: '',
    phone: '',
    guests: 4,
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    seatingArea: 'family_hall',
    specialRequests: '',
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const seatingLabel =
      formData.seatingArea === 'family_hall'
        ? 'Family Hall (Air Conditioned)'
        : formData.seatingArea === 'baithak_dastarkhwan'
        ? 'Traditional Floor Baithak / Dastarkhwan'
        : formData.seatingArea === 'open_air_courtyard'
        ? 'Open Air Courtyard'
        : 'VIP Executive Area';

    const message = encodeURIComponent(
      `*Table Reservation Inquiry - Quetta Sangat Dunyapur*\n\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `👥 *Guests:* ${formData.guests} Persons\n` +
      `📅 *Date:* ${formData.date}\n` +
      `⏰ *Time:* ${formData.time}\n` +
      `🏛️ *Seating Area:* ${seatingLabel}\n` +
      (formData.specialRequests ? `📝 *Special Requests:* ${formData.specialRequests}\n` : '') +
      `\nPlease confirm our table availability.`
    );

    // Trigger WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${message}`, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0C0B0A] relative border-t border-[#C7A35A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181714] border border-[#C7A35A]/30 text-[#D6B66B] text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            <span>VISIT & RESERVE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4EFE5] tracking-tight mb-4">
            Hospitality Awaits
          </h2>

          <p className="text-base text-[#B7B0A4] leading-relaxed">
            Reserve a table in our dedicated family hall or floor baithak, or inquire about live catering.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business & Location Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-[#11110F] border border-[#24211C] shadow-xl">
              <h3 className="font-serif text-2xl font-normal text-[#F4EFE5] mb-6 flex items-center justify-between">
                <span>Restaurant Information</span>
                <span className="text-xs font-sans uppercase tracking-wider text-[#D6B66B] px-2.5 py-1 rounded bg-[#181714] border border-[#C7A35A]/30">
                  Dunyapur
                </span>
              </h3>

              <div className="space-y-6 text-sm">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#181714] border border-[#C7A35A]/30 text-[#D6B66B] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#B7B0A4] font-semibold">Location</h4>
                    <p className="text-[#F4EFE5] font-medium mt-1 leading-snug">
                      {RESTAURANT_INFO.address}
                    </p>
                    <div className="flex items-center gap-3 mt-2.5">
                      <button
                        onClick={handleCopyAddress}
                        className="text-xs text-[#D6B66B] hover:text-[#E6CA85] flex items-center gap-1 cursor-pointer"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                      </button>
                      <span className="text-[#24211C]">•</span>
                      <a
                        href={RESTAURANT_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#D6B66B] hover:underline"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#181714]">
                  <div className="p-2.5 rounded-xl bg-[#181714] border border-[#C7A35A]/30 text-[#D6B66B] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#B7B0A4] font-semibold">Phone & WhatsApp</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <a
                        href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                        className="text-[#F4EFE5] font-semibold hover:text-[#D6B66B] transition-colors"
                      >
                        {RESTAURANT_INFO.phone}
                      </a>
                      <span className="text-[#24211C]">•</span>
                      <a
                        href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Direct Chat</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#181714]">
                  <div className="p-2.5 rounded-xl bg-[#181714] border border-[#C7A35A]/30 text-[#D6B66B] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#B7B0A4] font-semibold">Operating Hours</h4>
                    <p className="text-[#F4EFE5] font-medium mt-1">
                      {RESTAURANT_INFO.openingHours}
                    </p>
                    <p className="text-xs text-[#B7B0A4] mt-0.5">
                      Breakfast chai & parathas at dawn; sizzling Karahi & BBQ till late night.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map Visual Box */}
            <div className="p-6 rounded-2xl bg-[#11110F] border border-[#24211C] text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#181714] border border-[#C7A35A]/30 flex items-center justify-center text-[#D6B66B] mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-[#F4EFE5]">Conveniently Situated on Kehror Pakka Road</h4>
              <p className="text-xs text-[#B7B0A4] max-w-sm mt-1 mb-4">
                Ample secure parking for families, buses, and traveling vehicles at Adda Lunda Minor.
              </p>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#181714] text-[#D6B66B] border border-[#C7A35A]/40 hover:bg-[#C7A35A] hover:text-[#080807] transition-all cursor-pointer"
              >
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Reservation & Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#11110F] border border-[#C7A35A]/30 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D6B66B] font-semibold">
                  RESERVE YOUR TABLE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F4EFE5] mt-1">
                  Book an Unmatched Dining Experience
                </h3>
                <p className="text-xs sm:text-sm text-[#B7B0A4] mt-1">
                  Send your booking details to receive instant WhatsApp confirmation from our host.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-200 text-xs sm:text-sm flex items-start gap-3 mb-6">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-semibold">Reservation Request Prepared!</p>
                    <p className="text-xs opacity-90 mt-0.5">
                      Redirecting to WhatsApp to complete your table confirmation with the host.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleReservationSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Chaudhry Usman"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-sm text-[#F4EFE5] placeholder-[#B7B0A4]/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 0300-1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-sm text-[#F4EFE5] placeholder-[#B7B0A4]/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#C7A35A]" />
                      <span>Guests</span>
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-sm text-[#F4EFE5] focus:outline-none transition-colors cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 30].map((num) => (
                        <option key={num} value={num} className="bg-[#181714]">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C7A35A]" />
                      <span>Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-sm text-[#F4EFE5] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C7A35A]" />
                      <span>Time</span>
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-sm text-[#F4EFE5] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-2">
                    Seating Area Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                      formData.seatingArea === 'family_hall' ? 'bg-[#181714] border-[#C7A35A] text-[#F4EFE5]' : 'bg-[#181714]/60 border-[#24211C] text-[#B7B0A4]'
                    }`}>
                      <input
                        type="radio"
                        name="seating"
                        checked={formData.seatingArea === 'family_hall'}
                        onChange={() => setFormData({ ...formData, seatingArea: 'family_hall' })}
                        className="text-[#C7A35A] focus:ring-[#C7A35A]"
                      />
                      <span className="text-xs font-medium">Family Hall (Private & AC)</span>
                    </label>

                    <label className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                      formData.seatingArea === 'baithak_dastarkhwan' ? 'bg-[#181714] border-[#C7A35A] text-[#F4EFE5]' : 'bg-[#181714]/60 border-[#24211C] text-[#B7B0A4]'
                    }`}>
                      <input
                        type="radio"
                        name="seating"
                        checked={formData.seatingArea === 'baithak_dastarkhwan'}
                        onChange={() => setFormData({ ...formData, seatingArea: 'baithak_dastarkhwan' })}
                        className="text-[#C7A35A] focus:ring-[#C7A35A]"
                      />
                      <span className="text-xs font-medium">Traditional Floor Baithak</span>
                    </label>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-2">
                    Special Requests or Pre-orders (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g., Pre-cook 1 Full Mutton Namkeen Rosh, extra mild spice for children..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-sm text-[#F4EFE5] placeholder-[#B7B0A4]/40 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="submit-reservation-btn"
                  className="w-full py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-[#080807] bg-gradient-to-r from-[#C7A35A] via-[#D6B66B] to-[#C7A35A] hover:from-[#D6B66B] hover:to-[#E6CA85] transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#080807]" />
                  <span>Send Reservation Request via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
