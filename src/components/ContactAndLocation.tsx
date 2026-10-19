import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Navigation, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ContactProps {
  onOpenBooking: () => void;
}

export const ContactAndLocation: React.FC<ContactProps> = ({ onOpenBooking }) => {
  return (
    <section id="location" className="py-20 md:py-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8C733E] mb-2">
            06. Visit Riverside Dental
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111922] tracking-tight">
            An oasis of calm on Riverside Avenue.
          </h2>
          <p className="mt-4 text-base text-[#52606D] leading-relaxed">
            Conveniently situated in Jacksonville's historic Riverside district along the St. Johns River, our practice combines tranquility with premier clinical facilities.
          </p>
        </div>

        {/* Location & Details Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Clinic Contact & Hours Card (col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#DDD9CE] p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E8E4D8] text-[#B38E46] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7B8590] block">
                    Our Location
                  </span>
                  <div className="text-base font-semibold text-[#111922] mt-0.5">
                    {CLINIC_INFO.address.street}
                  </div>
                  <div className="text-xs text-[#52606D]">
                    {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                  </div>
                  <div className="text-xs text-[#8C733E] mt-1 font-medium">
                    {CLINIC_INFO.address.neighborhood}
                  </div>
                </div>
              </div>

              {/* Telephone & Emergency */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E8E4D8] text-[#B38E46] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7B8590] block">
                    Telephone & Direct Line
                  </span>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="text-base font-semibold text-[#111922] hover:text-[#B38E46] transition-colors block mt-0.5"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <div className="text-xs text-[#52606D] mt-0.5">
                    {CLINIC_INFO.emergencyNote}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E8E4D8] text-[#B38E46] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7B8590] block mb-2">
                    Office Hours
                  </span>
                  <div className="space-y-1.5 text-xs">
                    {CLINIC_INFO.hours.map((h, idx) => (
                      <div key={idx} className="flex justify-between border-b border-[#F5F2EB] pb-1">
                        <span className="text-[#52606D] font-medium">{h.days}</span>
                        <span className="font-semibold text-[#17222B]">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Parking Guidance */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E8E5DD] text-xs">
                <Car className="w-4 h-4 text-[#B38E46] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#17222B] block">Private On-Site Parking</span>
                  Dedicated client parking is provided right outside our entrance with wheelchair accessibility.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F0EDE6] flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 text-xs font-semibold text-white bg-[#17222B] hover:bg-[#253340] rounded-lg transition-colors cursor-pointer shadow-xs text-center"
              >
                Schedule Visit
              </button>
              <a
                href="https://maps.google.com/?q=1061+Riverside+Avenue+Jacksonville+FL+32204"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs font-semibold text-[#17222B] bg-[#F4F3EF] hover:bg-[#EAE7DF] rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B38E46]" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-3 h-3 text-[#7B8590]" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map / Riverfront Canvas (col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl border border-[#DDD9CE] overflow-hidden bg-[#EFECE6] flex flex-col justify-between p-6 sm:p-10 relative min-h-[380px] shadow-2xs">
            {/* Map Pin Mockup with Real St. Johns River Coordinates */}
            <div className="relative z-10 max-w-sm bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-[#DDD9CE] shadow-lg">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C733E]">
                <MapPin className="w-4 h-4" />
                <span>Northeast Florida Headquarters</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111922] mt-1">
                Riverside Dental Suite
              </h3>
              <p className="text-xs text-[#52606D] mt-2 leading-relaxed">
                1061 Riverside Avenue, Jacksonville, FL 32204.
                Located between the historic Five Points corridor and Memorial Park along the scenic St. Johns River.
              </p>
              <div className="mt-4 pt-3 border-t border-[#F0EDE6] flex items-center justify-between text-xs">
                <span className="text-[#7B8590]">Emergency Line:</span>
                <a href={CLINIC_INFO.phoneHref} className="font-semibold text-[#17222B] hover:text-[#B38E46]">
                  (904) 355-5531
                </a>
              </div>
            </div>

            {/* Stylized Riverfront Map Vector Graphic Background */}
            <div className="absolute inset-0 pointer-events-none opacity-25">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0,150 C300,120 400,240 700,180 C1000,120 1100,220 1400,160 L1400,500 L0,500 Z"
                  fill="#94A3B8"
                />
                <circle cx="280" cy="180" r="12" fill="#C5A059" />
                <circle cx="280" cy="180" r="28" fill="#C5A059" opacity="0.3" />
              </svg>
            </div>

            {/* Bottom Callout */}
            <div className="relative z-10 pt-8 flex items-center justify-between text-xs text-[#52606D]">
              <span>Direct St. Johns River Access · Minutes from Downtown Jacksonville</span>
              <a
                href="https://maps.google.com/?q=1061+Riverside+Avenue+Jacksonville+FL+32204"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#17222B] hover:underline flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
