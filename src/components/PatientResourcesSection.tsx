import React, { useState } from 'react';
import { CreditCard, ChevronDown, ChevronUp, ShieldCheck, HeartHandshake, FileText } from 'lucide-react';
import { ACCEPTED_INSURANCES } from '../data/clinicData';

export const PatientResourcesSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you accept my dental insurance?',
      a: 'Riverside Dental works with the vast majority of PPO dental insurance providers, including Delta Dental, Cigna, MetLife, Aetna, Guardian, and Humana. Our patient care coordinators will perform a complimentary benefits check to maximize your annual coverage and calculate any out-of-pocket balance before beginning treatment.',
    },
    {
      q: 'What if I need treatment but have no dental insurance?',
      a: 'We believe exceptional dental care should be accessible. We offer third-party monthly financing through CareCredit® and Proceed Finance, featuring 0% interest promotional plans for qualified applicants. We also provide clear, itemized treatment quotes with zero surprise fees.',
    },
    {
      q: 'I haven’t seen a dentist in many years and feel embarrassed. How will I be received?',
      a: 'You will be met with warmth, empathy, and absolute zero judgment. Our practice treats numerous patients who delayed care due to life circumstances, previous painful experiences, or fear. With Irene Ratliff, CRNA providing tailored sedation, we can restore your dental health in a peaceful, supportive environment.',
    },
    {
      q: 'How does same-day emergency dental care work?',
      a: 'If you have sudden severe tooth pain, a fractured tooth, or a dental infection, call us immediately at (904) 355-5531. We reserve priority emergency appointment slots every weekday to diagnose the issue and provide prompt palliative relief.',
    },
    {
      q: 'Where do I park when visiting the 1061 Riverside Avenue office?',
      a: 'We offer dedicated, complimentary private patient parking directly adjacent to our building on Riverside Avenue in Jacksonville, with level wheelchair accessibility and elevator access to our suite.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F4F3EF] border-t border-[#E8E5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Insurance & Patient Financial Peace of Mind (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-[#8C733E] mb-2">
                05. Patient Resources & Insurance
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111922] tracking-tight">
                Transparent guidance with zero surprise bills.
              </h2>
              <p className="mt-4 text-sm text-[#52606D] leading-relaxed">
                Navigating dental insurance and medical financing should never stand in the way of your health. Our concierge coordinators verify your benefits prior to treatment so you know exactly what is covered.
              </p>

              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-xl bg-white border border-[#DDD9CE] shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#17222B] mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#B38E46]" />
                    <span>Accepted PPO Networks</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#52606D]">
                    {ACCEPTED_INSURANCES.map((ins, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B38E46]" />
                        <span className="truncate">{ins}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DDD9CE] shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#17222B] mb-1">
                    <CreditCard className="w-4 h-4 text-[#B38E46]" />
                    <span>Flexible Monthly Financing</span>
                  </div>
                  <p className="text-xs text-[#52606D] leading-relaxed">
                    Partnered with CareCredit® and Proceed Finance to provide 0% APR and extended term payment plans for cosmetic and full-arch implant treatments.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DDD9CE] flex items-center gap-2 text-xs text-[#7B8590]">
              <HeartHandshake className="w-4 h-4 text-[#B38E46] shrink-0" />
              <span>Questions regarding your specific policy? Call our coordinator at (904) 355-5531.</span>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#8C733E] mb-2">
              Common Questions
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111922] mb-6">
              What to expect when joining Riverside Dental.
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#DDD9CE] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-5 text-sm sm:text-base font-medium text-[#111922] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF9F6]"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-md bg-[#F4F3EF] text-[#7B8590] shrink-0">
                      {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#52606D] leading-relaxed border-t border-[#F0EDE6] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
