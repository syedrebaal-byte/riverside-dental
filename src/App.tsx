import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { SedationComfortSection } from './components/SedationComfortSection';
import { InteractiveSmileSimulator } from './components/InteractiveSmileSimulator';
import { ReviewsAndProof } from './components/ReviewsAndProof';
import { PatientResourcesSection } from './components/PatientResourcesSection';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedDoctor, setPreselectedDoctor] = useState('');

  const handleOpenBooking = (service?: string, doctor?: string) => {
    setPreselectedService(service || '');
    setPreselectedDoctor(doctor || '');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1E252B] flex flex-col font-sans selection:bg-[#C5A059]/20 selection:text-[#17222B]">
      {/* Top Navigation Bar */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Clinical Services & Disciplines */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* Clinical Team (6 Doctors & CRNA) */}
        <TeamSection onSelectDoctor={(doctor) => handleOpenBooking(undefined, doctor)} />

        {/* Sedation & Anxiety-Free Dentistry (Irene Ratliff, CRNA) */}
        <SedationComfortSection onOpenBookingForSedation={() => handleOpenBooking('Hospital-Grade IV Sedation')} />

        {/* 3D Interactive Restoration & Smile Simulation Explorer */}
        <InteractiveSmileSimulator onSelectTreatment={(treatment) => handleOpenBooking(treatment)} />

        {/* Jacksonville Patient Reviews & Proof */}
        <ReviewsAndProof />

        {/* Patient Resources, Insurances & FAQ */}
        <PatientResourcesSection />

        {/* Location, Riverfront Parking & Contact */}
        <ContactAndLocation onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
        preselectedDoctor={preselectedDoctor}
      />
    </div>
  );
}
