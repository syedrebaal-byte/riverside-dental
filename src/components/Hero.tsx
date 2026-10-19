import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO, CLINIC_STATS } from '../data/clinicData';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FBFBFA]">
      {/* Subtle ambient architectural background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E8E5DD_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Value Proposition (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Unboxed Metadata Kicker (Anti-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C733E] mb-4">
              <span>1061 Riverside Avenue</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span>Jacksonville, Florida</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span>Est. 1989</span>
            </div>

            {/* Hero Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] font-semibold text-[#111922] tracking-tight max-w-2xl text-balance">
              World-class smile artistry and surgical precision, nestled by the river.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-[#52606D] leading-relaxed max-w-xl">
              Riverside Dental unites five accomplished doctors and an on-staff Nurse Anesthetist under one roof. From master-sculpted porcelain veneers and computer-guided implants to anxiety-free hospital sedation, experience healthcare elevated to an art form.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#17222B] hover:bg-[#253340] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap group"
              >
                <span>Request Your Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={CLINIC_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#17222B] bg-white hover:bg-[#F4F3EF] border border-[#DDD9CE] rounded-xl transition-colors whitespace-nowrap shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#B38E46]" />
                <span>Call (904) 355-5531</span>
              </a>
            </div>

            {/* Trust Markers - Clean Unboxed Layout */}
            <div className="mt-10 pt-8 border-t border-[#E8E5DD] grid grid-cols-2 sm:grid-cols-3 gap-6 w-full text-xs text-[#52606D]">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B38E46] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#17222B] block">On-Staff CRNA</span>
                  Hospital-grade IV sedation
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B38E46] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#17222B] block">Prompt Emergency</span>
                  Same-day relief available
                </div>
              </div>
              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#B38E46] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#17222B] block">Riverside District</span>
                  Private riverfront parking
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#DDD9CE] shadow-lg bg-[#EFECE6] aspect-4/3 sm:aspect-16/10 lg:aspect-4/5">
              <img
                src={IMAGES.hero}
                alt="Riverside Dental modern luxury treatment suite overlooking the water"
                className="w-full h-full object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if needed
                  const target = e.currentTarget;
                  target.src = IMAGES.publicHero;
                }}
              />
              {/* Subtle architectural gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111922]/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Card Overlay on Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 text-[#17222B] shadow-xs">
                <div className="text-xs font-semibold tracking-wide text-[#8C733E] uppercase">
                  Riverside Avenue Operatory
                </div>
                <div className="text-sm font-medium mt-0.5">
                  Panoramic waterfront views designed to replace clinical tension with serenity.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Trust Strip Below Hero Split */}
        <div className="mt-16 pt-10 border-t border-[#E8E5DD] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {CLINIC_STATS.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#111922] tabular-nums">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-[#64748B] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
