import React, { useState } from 'react';
import { Sparkles, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { ThreeToothViewer } from './ThreeToothViewer';
import { IMAGES } from '../assets/images';

interface SmileSimulatorProps {
  onSelectTreatment: (treatment: string) => void;
}

export const InteractiveSmileSimulator: React.FC<SmileSimulatorProps> = ({ onSelectTreatment }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [selectedGoal, setSelectedGoal] = useState<string>('veneers');

  const goals = [
    {
      id: 'veneers',
      label: 'Porcelain Veneers',
      headline: 'Correct chips, gaps, and deep enamel discoloration',
      recommendation: 'Ultra-thin custom porcelain veneers crafted from layered feldspathic ceramic. Preserves over 90% of natural tooth structure.',
      timeline: '2 visits over 2–3 weeks',
      tag: 'Cosmetic Artistry',
    },
    {
      id: 'implants',
      label: 'Permanent Implants',
      headline: 'Replace missing teeth or failing root canals permanently',
      recommendation: 'Computer-guided titanium implants with monolithic zirconia crowns or full-arch All-on-4 fixed prosthetics.',
      timeline: 'Immediate provisional teeth; final integration in 3–4 months',
      tag: 'Surgical Reconstruction',
    },
    {
      id: 'aligners',
      label: 'Clear Aligners',
      headline: 'Discreet orthodontic alignment without metal brackets',
      recommendation: 'Clear custom aligners planned using 3D digital simulation. Removable for dining and oral hygiene.',
      timeline: '6 to 14 months typical duration',
      tag: 'Digital Orthodontics',
    },
    {
      id: 'whitening',
      label: 'In-Office Whitening',
      headline: 'Brighten natural teeth by up to 8 shades in 60 minutes',
      recommendation: 'Professional in-office ZOOM! treatment combined with custom take-home maintenance trays to maintain brilliance.',
      timeline: 'Single 60-minute visit',
      tag: 'Immediate Aesthetic',
    },
  ];

  const currentGoal = goals.find((g) => g.id === selectedGoal) || goals[0];

  return (
    <section id="technology" className="py-20 md:py-28 bg-[#F4F3EF] border-t border-[#E8E5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD9CE]">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#8C733E] mb-2">
              03. Digital Precision & Aesthetic Engineering
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111922] tracking-tight">
              Interactive 3D dental modeling & smile simulation.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#52606D] max-w-md">
            Preview the craftsmanship that goes into every restoration. Rotate our 3D model below to inspect the crown glaze, layered dentin, and surgical implant fixture.
          </p>
        </div>

        {/* 3D Model Explorer + Technology Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Three.js Interactive Viewer (col-span-7) */}
          <div className="lg:col-span-7">
            <ThreeToothViewer />
            <div className="mt-3 flex items-center justify-between text-xs text-[#7B8590] px-1">
              <span>* Real-time WebGL rendering of custom ceramic anatomy</span>
              <span>Tap 'Internal Layers' or 'Implant Foundation' to inspect internal geometry</span>
            </div>
          </div>

          {/* Right Column: In-House Diagnostic Technology (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl border border-[#DDD9CE] p-6 shadow-2xs">
              <div className="text-xs font-semibold text-[#8C733E] uppercase tracking-wider mb-1">
                Technology Standard 01
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#111922]">
                3D Cone Beam Computed Tomography (CBCT)
              </h3>
              <p className="mt-2 text-xs text-[#52606D] leading-relaxed">
                Captures sub-millimeter 3D views of bone density, nerve pathways, and sinus anatomy to ensure computer-guided implant placement with surgical accuracy.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#DDD9CE] p-6 shadow-2xs">
              <div className="text-xs font-semibold text-[#8C733E] uppercase tracking-wider mb-1">
                Technology Standard 02
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#111922]">
                Impression-Free 3D Intraoral Scanning
              </h3>
              <p className="mt-2 text-xs text-[#52606D] leading-relaxed">
                Eliminates the gag reflex and discomfort of gooey impression trays. A compact optical wand maps your dentition with photorealistic accuracy in under 3 minutes.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#DDD9CE] p-6 shadow-2xs">
              <div className="text-xs font-semibold text-[#8C733E] uppercase tracking-wider mb-1">
                Technology Standard 03
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#111922]">
                Hospital Cardiac & Vitals Telemetry
              </h3>
              <p className="mt-2 text-xs text-[#52606D] leading-relaxed">
                Managed directly by Irene Ratliff, CRNA, monitoring ECG, capnography, and blood pressure so you can rest with total peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Smile Goal Assessment */}
        <div className="mt-16 bg-white rounded-2xl border border-[#DDD9CE] p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F0EDE6]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8C733E]">
                Personalized Treatment Advisor
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#111922] mt-1">
                What is your primary smile or dental health goal?
              </h3>
            </div>
            <span className="text-xs text-[#7B8590]">Select an objective to see clinical recommendations</span>
          </div>

          {/* Goal Selector Buttons */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                  selectedGoal === goal.id
                    ? 'border-[#C5A059] bg-[#FAF9F5] shadow-xs'
                    : 'border-[#EAE7DF] bg-white hover:border-[#DDD9CE]'
                }`}
              >
                <div className="text-xs font-semibold text-[#8C733E]">{goal.tag}</div>
                <div className="text-sm font-semibold text-[#111922] mt-1">{goal.label}</div>
              </button>
            ))}
          </div>

          {/* Goal Recommendation Card */}
          <div className="mt-6 p-6 rounded-xl bg-[#FAF9F6] border border-[#E8E5DD] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="text-xs font-semibold text-[#17222B]">{currentGoal.headline}</div>
              <p className="text-xs text-[#52606D] leading-relaxed">{currentGoal.recommendation}</p>
              <div className="text-xs text-[#8C733E] font-medium pt-1">
                Expected Timeline: <span className="text-[#17222B]">{currentGoal.timeline}</span>
              </div>
            </div>

            <button
              onClick={() => onSelectTreatment(currentGoal.label)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#17222B] hover:bg-[#253340] rounded-lg transition-colors cursor-pointer shrink-0"
            >
              <span>Consult on {currentGoal.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
