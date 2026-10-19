import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, UserCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../data/clinicData';
import { ServiceDetail } from '../types';
import { IMAGES } from '../assets/images';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'aesthetic', label: 'Cosmetic & Veneers' },
    { id: 'implants', label: 'Dental Implants' },
    { id: 'sedation', label: 'Sedation & Comfort' },
    { id: 'restorative', label: 'Crowns & Restorative' },
    { id: 'emergency', label: 'Emergency Relief' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const getServiceImage = (category: string) => {
    switch (category) {
      case 'aesthetic':
        return IMAGES.cosmetic;
      case 'implants':
        return IMAGES.implant;
      case 'sedation':
        return IMAGES.comfort;
      default:
        return IMAGES.hero;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F4F3EF] border-t border-[#E8E5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD9CE]">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#8C733E] mb-2">
              01. Clinical Disciplines & Treatments
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111922] tracking-tight">
              Comprehensive dental mastery, executed with restraint.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#52606D] max-w-md">
            Every procedure at Riverside Dental is backed by 3D digital diagnosis, hand-crafted biocompatible materials, and dedicated patient comfort protocols.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#17222B] text-white shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#52606D] hover:text-[#17222B] border border-[#DDD9CE]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Bento Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-[#DDD9CE] p-7 flex flex-col justify-between hover:border-[#C5A059] transition-all duration-200 group shadow-2xs hover:shadow-md"
            >
              <div>
                {/* Category & Index Metadata */}
                <div className="flex items-center justify-between text-xs text-[#7B8590] mb-4">
                  <span className="font-semibold text-[#8C733E] uppercase tracking-wider">
                    {service.category}
                  </span>
                  <span className="font-mono tabular-nums">0{idx + 1}</span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#111922] group-hover:text-[#8C733E] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-3 text-sm text-[#52606D] leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Benefits List */}
                <ul className="mt-5 space-y-2 text-xs text-[#42505E]">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B38E46] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-5 border-t border-[#F0EDE6] flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setSelectedService(service);
                    setOpenFaqIndex(null);
                  }}
                  className="text-xs font-semibold text-[#17222B] hover:text-[#8C733E] transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Clinical Details & FAQ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="px-3 py-1.5 text-xs font-medium text-[#17222B] bg-[#F4F3EF] hover:bg-[#EAE7DF] rounded-md transition-colors cursor-pointer"
                >
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight Banner: Cosmetic Artistry & Implant Surgery */}
        <div className="mt-14 bg-white rounded-2xl border border-[#DDD9CE] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs">
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-[#8C733E] mb-2">
                Aesthetic & Implant Excellence
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111922]">
                Porcelain veneers and 3D computer-guided implants engineered for natural harmony.
              </h3>
              <p className="mt-4 text-sm text-[#52606D] leading-relaxed">
                Whether you seek to revive worn tooth enamel or replace lost dentition with full-arch fixed teeth, our clinicians collaborate with premier master dental labs to ensure shade matching, light translucency, and perfect occlusal balance.
              </p>

              <div className="mt-6 space-y-3 text-xs text-[#42505E]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B38E46]" />
                  <span>3D Digital Intraoral Scanning — Zero uncomfortable gaggy impression trays</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B38E46]" />
                  <span>High-Resolution CBCT Bone Density Mapping for 98.6% surgical success</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B38E46]" />
                  <span>Dedicated Sedation by on-staff Nurse Anesthetist Irene Ratliff</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F0EDE6] flex items-center gap-4">
              <button
                onClick={() => onSelectService('Cosmetic Smile Makeover')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#17222B] hover:bg-[#253340] rounded-lg transition-colors cursor-pointer shadow-2xs"
              >
                Schedule Smile Consultation
              </button>
              <a
                href="tel:9043555531"
                className="text-xs font-semibold text-[#17222B] hover:text-[#8C733E]"
              >
                Call (904) 355-5531
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full bg-[#EAE8E0]">
            <img
              src={IMAGES.cosmetic}
              alt="Natural porcelain veneer aesthetic smile design result"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <span className="font-semibold block">Natural Layered Ceramics</span>
              Hand-finished with authentic luminescence, avoiding artificial matte brightness.
            </div>
          </div>
        </div>

        {/* Detailed Service Inspection Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#DDD9CE] shadow-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[#F0EDE6] pb-4">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#8C733E]">
                    {selectedService.category} Discipline
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#111922] mt-1">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 text-[#7B8590] hover:text-[#111922] rounded-lg hover:bg-[#F4F3EF] cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="mt-5 space-y-5 text-sm text-[#52606D]">
                <p className="leading-relaxed">{selectedService.fullDesc}</p>

                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E4D8] space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#17222B] font-medium">
                    <Clock className="w-4 h-4 text-[#B38E46]" />
                    <span>Estimated Timeline: {selectedService.expectedTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#17222B] font-medium">
                    <UserCheck className="w-4 h-4 text-[#B38E46]" />
                    <span>Ideal Candidate: {selectedService.idealFor}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17222B] mb-2">
                    Key Clinical Advantages
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#42505E]">
                        <Check className="w-3.5 h-3.5 text-[#B38E46] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedService.faq.length > 0 && (
                  <div className="pt-4 border-t border-[#F0EDE6]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17222B] mb-3 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-[#B38E46]" />
                      <span>Frequently Asked Questions</span>
                    </h4>
                    <div className="space-y-2">
                      {selectedService.faq.map((f, fIdx) => (
                        <div key={fIdx} className="border border-[#EAE7DF] rounded-lg overflow-hidden">
                          <button
                            onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                            className="w-full text-left p-3 text-xs font-semibold text-[#17222B] bg-[#FAF9F6] flex items-center justify-between gap-2"
                          >
                            <span>{f.q}</span>
                            {openFaqIndex === fIdx ? <ChevronUp className="w-4 h-4 text-[#7B8590]" /> : <ChevronDown className="w-4 h-4 text-[#7B8590]" />}
                          </button>
                          {openFaqIndex === fIdx && (
                            <div className="p-3 text-xs text-[#52606D] bg-white border-t border-[#EAE7DF] leading-relaxed">
                              {f.a}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EDE6] flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-medium text-[#52606D] hover:text-[#17222B] cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectService(title);
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#17222B] hover:bg-[#253340] rounded-lg transition-colors cursor-pointer"
                >
                  Book for This Treatment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
