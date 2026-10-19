import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E8E6DF] py-3'
          : 'bg-[#FBFBFA]/90 backdrop-blur-sm border-b border-[#EAE7E0]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl md:text-2xl font-serif font-bold tracking-tight text-[#17222B] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            <span>Riverside Dental</span>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4B5768]">
            <a href="#services" className="hover:text-[#17222B] transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#doctors" className="hover:text-[#17222B] transition-colors whitespace-nowrap shrink-0">
              Doctors
            </a>
            <a href="#sedation" className="hover:text-[#17222B] transition-colors whitespace-nowrap shrink-0">
              Sedation Care
            </a>
            <a href="#technology" className="hover:text-[#17222B] transition-colors whitespace-nowrap shrink-0">
              3D Technology
            </a>
            <a href="#reviews" className="hover:text-[#17222B] transition-colors whitespace-nowrap shrink-0">
              Patient Stories
            </a>
            <a href="#location" className="hover:text-[#17222B] transition-colors whitespace-nowrap shrink-0">
              Location
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={CLINIC_INFO.phoneHref}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#17222B] hover:text-[#B38E46] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#B38E46]" />
              <span>(904) 355-5531</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4.5 py-2 text-xs font-semibold text-white bg-[#17222B] hover:bg-[#253340] rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
            >
              Request Appointment
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={CLINIC_INFO.phoneHref}
              className="p-2 text-[#17222B] hover:text-[#B38E46] transition-colors"
              aria-label="Call Riverside Dental"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#17222B] hover:text-[#B38E46] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E8E6DF] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#17222B] hover:text-[#B38E46]"
            >
              Services & Treatments
            </a>
            <a
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#17222B] hover:text-[#B38E46]"
            >
              Our Doctors & Specialists
            </a>
            <a
              href="#sedation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#17222B] hover:text-[#B38E46]"
            >
              Sedation & Comfort Care (CRNA)
            </a>
            <a
              href="#technology"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#17222B] hover:text-[#B38E46]"
            >
              3D Interactive Technology
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#17222B] hover:text-[#B38E46]"
            >
              Patient Reviews
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#17222B] hover:text-[#B38E46]"
            >
              Location & Hours
            </a>
            <div className="pt-4 border-t border-[#E8E6DF] flex flex-col gap-3">
              <a
                href={CLINIC_INFO.phoneHref}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#17222B] bg-[#F4F3EF] rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#B38E46]" />
                <span>Call (904) 355-5531</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-[#17222B] rounded-lg shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Request Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
