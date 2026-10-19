import React, { useState } from 'react';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { DOCTORS } from '../data/clinicData';
import { Doctor } from '../types';
import { IMAGES } from '../assets/images';

interface TeamSectionProps {
  onSelectDoctor: (doctorName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectDoctor }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="py-20 md:py-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8C733E] mb-2">
            02. Our Clinical Team
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111922] tracking-tight">
            Six dedicated specialists. Decades of combined clinical precision.
          </h2>
          <p className="mt-4 text-base text-[#52606D] leading-relaxed">
            Rather than referring you out across the city, Riverside Dental brings cosmetic artists, implant surgeons, comprehensive generalists, and a licensed Nurse Anesthetist together in one Jacksonville practice.
          </p>
        </div>

        {/* Featured Team Banner */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-[#DDD9CE] bg-[#17222B] text-white grid grid-cols-1 lg:grid-cols-12 shadow-sm">
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={IMAGES.team}
              alt="Riverside Dental clinical team and specialists"
              className="w-full h-full object-cover object-top"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17222B] via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
                <Award className="w-4 h-4" />
                <span>Interdisciplinary Team Model</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Collaborative care that eliminates guesswork.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                When you step into our riverside suites, your smile is evaluated from multiple perspectives: aesthetic harmony by Dr. Spencer, bone and implant biology by Dr. Cohlmia, restorative precision by Dr. Cross and Dr. Henry, surgical stability by Dr. Tolley, and absolute comfort under Irene Ratliff, CRNA.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#E2E8F0]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">No Outside Referrals</span>
                    Surgical, cosmetic, and sedation completed under one roof
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Hospital-Level Safety</span>
                    Dedicated CRNA vital sign monitoring during all sedation
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#334155] flex flex-wrap items-center gap-4">
              <span className="text-xs text-[#94A3B8]">
                Schedule with a specific clinician or request a general comprehensive exam:
              </span>
              <button
                onClick={() => onSelectDoctor('First Available Specialist')}
                className="px-4 py-2 text-xs font-semibold text-[#17222B] bg-[#C5A059] hover:bg-[#D4B36E] rounded-lg transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
              >
                Book with First Available
              </button>
            </div>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-[#DDD9CE] p-7 flex flex-col justify-between hover:border-[#C5A059] transition-all duration-200 group shadow-2xs hover:shadow-xs"
            >
              <div>
                {/* Doctor Name & Credentials */}
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-bold text-[#111922] group-hover:text-[#8C733E] transition-colors">
                    Dr. {doc.name}
                  </h3>
                  <span className="text-xs font-mono font-medium text-[#7B8590]">
                    {doc.credentials}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#8C733E] mt-1">
                  {doc.role}
                </div>

                <p className="mt-4 text-xs text-[#52606D] leading-relaxed line-clamp-4">
                  {doc.bio}
                </p>

                {/* Specialties */}
                <div className="mt-5 pt-4 border-t border-[#F0EDE6]">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7B8590] mb-2">
                    Primary Disciplines
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#42505E]">
                    {doc.specialty.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B38E46]" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-5 border-t border-[#F0EDE6] flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedDoctor(doc)}
                  className="text-xs font-medium text-[#52606D] hover:text-[#17222B] transition-colors cursor-pointer"
                >
                  Full Credentials
                </button>
                <button
                  onClick={() => onSelectDoctor(`Dr. ${doc.name}`)}
                  className="px-3 py-1.5 text-xs font-medium text-[#17222B] bg-[#F4F3EF] hover:bg-[#EAE7DF] rounded-md transition-colors cursor-pointer"
                >
                  Request with {doc.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Credential Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full border border-[#DDD9CE] shadow-2xl p-6 sm:p-8">
              <div className="flex items-start justify-between border-b border-[#F0EDE6] pb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111922]">
                    Dr. {selectedDoctor.name}, {selectedDoctor.credentials}
                  </h3>
                  <div className="text-xs font-semibold text-[#8C733E] mt-0.5">
                    {selectedDoctor.role}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="p-1.5 text-[#7B8590] hover:text-[#111922] rounded-lg hover:bg-[#F4F3EF] cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="mt-5 space-y-4 text-sm text-[#52606D]">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF9F5] border border-[#E8E4D8] text-xs">
                  <GraduationCap className="w-4 h-4 text-[#B38E46] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#17222B] block">Education & Accreditations</span>
                    {selectedDoctor.education}
                  </div>
                </div>

                <p className="leading-relaxed text-xs sm:text-sm">
                  {selectedDoctor.bio}
                </p>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17222B] mb-2">
                    Clinical Focus Areas
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#42505E]">
                    {selectedDoctor.specialty.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B38E46]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EDE6] flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="px-4 py-2 text-xs font-medium text-[#52606D] hover:text-[#17222B] cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = selectedDoctor.name;
                    setSelectedDoctor(null);
                    onSelectDoctor(`Dr. ${name}`);
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#17222B] hover:bg-[#253340] rounded-lg transition-colors cursor-pointer"
                >
                  Book with Dr. {selectedDoctor.name.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
