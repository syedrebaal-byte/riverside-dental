import React, { useState } from 'react';
import { HeartPulse, ShieldAlert, Sparkles, Check, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface SedationSectionProps {
  onOpenBookingForSedation: () => void;
}

export const SedationComfortSection: React.FC<SedationSectionProps> = ({ onOpenBookingForSedation }) => {
  const [anxietyLevel, setAnxietyLevel] = useState<'mild' | 'moderate' | 'high'>('moderate');

  const protocols = {
    mild: {
      title: 'Nuanced Relaxation & Inhalation Anxiolysis',
      description: 'Ideal for routine visits or mild apprehension. Relax comfortably with sweet-air nitrous oxide and ambient noise-cancelling headphones overlooking the river.',
      amenities: [
        'Gentle Nitrous Oxide (Laughing Gas) adjusted instantly',
        'Warm cashmere blanket and contour headrest',
        'Streaming music or podcasts via Bose noise-cancelling headphones',
        'Drive home independently right after your visit',
      ],
    },
    moderate: {
      title: 'Oral Conscious Twilight Sedation',
      description: 'You take a prescribed gentle medication prior to your appointment. You remain conscious and responsive, yet in an intensely peaceful, tranquil state where time passes effortlessly.',
      amenities: [
        'Prescribed oral anxiolytic tailored to your medical history',
        'Dull, painless perception of sights and sounds',
        'Continuous pulse-oximetry and blood pressure checks',
        'Little to no memory of the dental treatment',
      ],
    },
    high: {
      title: 'Hospital-Grade IV Sedation with Irene Ratliff, CRNA',
      description: 'For severe dental phobia, complex multi-implant surgery, or comprehensive smile reconstruction. Administered and continuously managed by our board-certified Nurse Anesthetist.',
      amenities: [
        'Administered directly through a gentle IV line by Irene Ratliff, CRNA',
        'Continuous hospital-grade cardiac telemetry, ETCO2, and blood pressure monitoring',
        'Complete freedom from fear, pain, or procedure recall',
        'Multiple years of dental care completed in one single peaceful morning',
      ],
    },
  };

  const current = protocols[anxietyLevel];

  return (
    <section id="sedation" className="py-20 md:py-28 bg-[#17222B] text-white overflow-hidden relative">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Storytelling & CRNA Spotlight (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059] mb-3">
              <HeartPulse className="w-4 h-4" />
              <span>Anxiety-Free Dentistry on Riverside</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              A private practice with hospital-level sedation expertise.
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Dental anxiety is genuine, common, and never something you should feel embarrassed about. Riverside Dental is one of Northeast Florida’s only dental practices featuring a dedicated, on-staff Certified Registered Nurse Anesthetist—<strong className="text-white font-medium">Irene Ratliff, CRNA, APRN</strong>.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 w-full space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                Find Your Tailored Comfort Protocol
              </div>

              {/* Anxiety Selector Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setAnxietyLevel('mild')}
                  className={`py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    anxietyLevel === 'mild'
                      ? 'bg-[#C5A059] text-[#17222B] font-semibold'
                      : 'bg-white/10 text-white/80 hover:bg-white/15'
                  }`}
                >
                  Mild Tension
                </button>
                <button
                  onClick={() => setAnxietyLevel('moderate')}
                  className={`py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    anxietyLevel === 'moderate'
                      ? 'bg-[#C5A059] text-[#17222B] font-semibold'
                      : 'bg-white/10 text-white/80 hover:bg-white/15'
                  }`}
                >
                  Moderate Worry
                </button>
                <button
                  onClick={() => setAnxietyLevel('high')}
                  className={`py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    anxietyLevel === 'high'
                      ? 'bg-[#C5A059] text-[#17222B] font-semibold'
                      : 'bg-white/10 text-white/80 hover:bg-white/15'
                  }`}
                >
                  Severe Phobia
                </button>
              </div>

              {/* Protocol Details */}
              <div className="pt-2">
                <div className="text-sm font-semibold text-white">{current.title}</div>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  {current.description}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-[#E2E8F0]">
                  {current.amenities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <button
                onClick={onOpenBookingForSedation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#17222B] bg-[#C5A059] hover:bg-[#D4B36E] rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                <span>Schedule a Judgment-Free Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#94A3B8] text-center sm:text-left">
                Direct phone line: <a href="tel:9043555531" className="text-white underline hover:text-[#C5A059]">(904) 355-5531</a>
              </span>
            </div>
          </div>

          {/* Right Column: Serene Care Suite Visual (col-span-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0F172A] aspect-4/3 sm:aspect-16/10">
              <img
                src={IMAGES.comfort}
                alt="Serene spa-like sedation dentistry suite at Riverside Dental"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Riverside Comfort Suite</span>
                </div>
                <div className="text-xs text-[#E2E8F0] mt-1">
                  Gentle lighting, heated blankets, and unhurried care. You are always in control.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
