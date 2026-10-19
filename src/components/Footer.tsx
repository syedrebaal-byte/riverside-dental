import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111922] text-[#94A3B8] border-t border-[#1E293B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E293B]">
          {/* Brand & Address Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="font-serif text-2xl font-bold text-white tracking-tight block">
              Riverside Dental
            </a>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              World-class aesthetic smile design, 3D computer-guided dental implants, and hospital-grade sedation dentistry on Jacksonville's historic waterfront.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#CBD5E1]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>1061 Riverside Avenue, Jacksonville, FL 32204</span>
              </div>
              <div className="flex items-center gap-2 text-[#CBD5E1]">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href={CLINIC_INFO.phoneHref} className="hover:text-white transition-colors">
                  (904) 355-5531
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links: Disciplines */}
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-white">
              Disciplines
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Porcelain Veneers</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dental Implants & All-on-4</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Clear Aligner Orthodontics</a></li>
              <li><a href="#sedation" className="hover:text-white transition-colors">IV Sedation with CRNA</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Emergency Dentistry</a></li>
            </ul>
          </div>

          {/* Quick Links: Practice */}
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-white">
              The Practice
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#doctors" className="hover:text-white transition-colors">Meet the Doctors</a></li>
              <li><a href="#sedation" className="hover:text-white transition-colors">Anesthesia & Comfort Care</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">3D Dental Technology</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Patient Experiences</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Parking & Directions</a></li>
            </ul>
          </div>

          {/* Office Hours Column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-white">
              Office Hours
            </div>
            <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
              <li>Mon – Thu: 8:00 AM – 5:00 PM</li>
              <li>Friday: 9:00 AM – 3:00 PM</li>
              <li className="text-[#94A3B8]">Sat – Sun: Emergency On-Call</li>
            </ul>
            <div className="pt-2 text-[11px] text-[#C5A059]">
              Emergency patients accommodated same-day.
            </div>
          </div>
        </div>

        {/* Quiet Legal & Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="space-y-1 text-center md:text-left">
            <div>
              © {new Date().getFullYear()} Riverside Dental. All rights reserved. 1061 Riverside Ave, Jacksonville, FL.
            </div>
            <div className="text-[11px] text-[#475569]">
              Medical Disclaimer: Information on this site is educational and does not constitute formal medical diagnosis or individual treatment guarantees.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-[#1E293B] hover:bg-[#334155] text-white text-xs transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
