import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MessageCircle, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData } from '../types/restaurant';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ReservationData>({
    fullName: '',
    phone: '',
    guests: 4,
    date: new Date().toISOString().split('T')[0],
    time: '20:30',
    seatingArea: 'family_hall',
    specialRequests: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const seatingLabel =
      formData.seatingArea === 'family_hall'
        ? 'Family Hall (Private & AC)'
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

    setTimeout(() => {
      window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${message}`, '_blank', 'noopener,noreferrer');
      onClose();
      setSubmitted(false);
    }, 450);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#080807]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg rounded-2xl bg-[#11110F] border border-[#C7A35A]/40 shadow-2xl p-6 sm:p-8 z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#B7B0A4] hover:text-[#F4EFE5] hover:bg-[#181714] transition-colors cursor-pointer"
          aria-label="Close Reservation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D6B66B] font-semibold">
            TABLE RESERVATION
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EFE5] mt-1">
            Reserve at Quetta Sangat
          </h3>
          <p className="text-xs text-[#B7B0A4] mt-1">
            Enjoy dedicated family hall seating or our authentic floor baithak in Dunyapur.
          </p>
        </div>

        {submitted && (
          <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-200 text-xs flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Redirecting to WhatsApp to finalize your table reservation...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Chaudhry Bilal"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-xs text-[#F4EFE5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-1.5">
                Contact Number *
              </label>
              <input
                type="tel"
                required
                placeholder="0300-1234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-xs text-[#F4EFE5] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-1.5 flex items-center gap-1">
                <Users className="w-3 h-3 text-[#C7A35A]" /> Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-lg bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-xs text-[#F4EFE5] focus:outline-none"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20, 30].map((num) => (
                  <option key={num} value={num} className="bg-[#181714]">
                    {num} {num === 1 ? 'Person' : 'Persons'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-1.5 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#C7A35A]" /> Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-xs text-[#F4EFE5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-1.5 flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#C7A35A]" /> Time
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-xs text-[#F4EFE5] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-1.5">
              Seating Choice
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <label className={`p-2 rounded-lg border flex items-center gap-2 cursor-pointer ${
                formData.seatingArea === 'family_hall' ? 'bg-[#181714] border-[#C7A35A] text-[#F4EFE5]' : 'bg-[#181714]/60 border-[#24211C] text-[#B7B0A4]'
              }`}>
                <input
                  type="radio"
                  name="modal-seating"
                  checked={formData.seatingArea === 'family_hall'}
                  onChange={() => setFormData({ ...formData, seatingArea: 'family_hall' })}
                />
                <span>Family Hall (AC)</span>
              </label>

              <label className={`p-2 rounded-lg border flex items-center gap-2 cursor-pointer ${
                formData.seatingArea === 'baithak_dastarkhwan' ? 'bg-[#181714] border-[#C7A35A] text-[#F4EFE5]' : 'bg-[#181714]/60 border-[#24211C] text-[#B7B0A4]'
              }`}>
                <input
                  type="radio"
                  name="modal-seating"
                  checked={formData.seatingArea === 'baithak_dastarkhwan'}
                  onChange={() => setFormData({ ...formData, seatingArea: 'baithak_dastarkhwan' })}
                />
                <span>Floor Baithak</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#B7B0A4] font-medium mb-1.5">
              Special Requests (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g., Baby high chair, mild spice, birthday setup..."
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              className="w-full px-3.5 py-2 rounded-lg bg-[#181714] border border-[#24211C] focus:border-[#C7A35A] text-xs text-[#F4EFE5] focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#080807] bg-gradient-to-r from-[#C7A35A] to-[#D6B66B] hover:from-[#D6B66B] hover:to-[#E6CA85] transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2 mt-4"
          >
            <MessageCircle className="w-4 h-4 text-[#080807]" />
            <span>Confirm Reservation via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
