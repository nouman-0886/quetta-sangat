/**
 * Quetta Sangat Hotel & Restaurant
 * Production-ready luxury culinary website
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { ExperienceFeatures } from './components/ExperienceFeatures';
import { CinematicBreak } from './components/CinematicBreak';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ReservationAndContact } from './components/ReservationAndContact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080807] text-[#F4EFE5] selection:bg-[#C7A35A] selection:text-[#080807] font-sans antialiased overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenReservation={() => setReservationModalOpen(true)} />

        {/* 2. Editorial Restaurant Story */}
        <StorySection onOpenReservation={() => setReservationModalOpen(true)} />

        {/* 3. Signature Dishes Highlights */}
        <SignatureDishes />

        {/* 4. Interactive Menu Explorer */}
        <MenuSection />

        {/* 5. Experience Features (Why Sangat) */}
        <ExperienceFeatures />

        {/* 6. Cinematic Visual Food Break */}
        <CinematicBreak onOpenReservation={() => setReservationModalOpen(true)} />

        {/* 7. Restaurant Gallery & Lightbox */}
        <GallerySection />

        {/* 8. Guest Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 9. Location, Directions & Table Reservation Form */}
        <ReservationAndContact />

        {/* 10. Powerful Final Conversion CTA */}
        <FinalCTA onOpenReservation={() => setReservationModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />
    </div>
  );
}
