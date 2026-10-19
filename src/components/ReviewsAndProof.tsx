import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { PATIENT_REVIEWS } from '../data/clinicData';
import { IMAGES } from '../assets/images';

export const ReviewsAndProof: React.FC = () => {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % PATIENT_REVIEWS.length);
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + PATIENT_REVIEWS.length) % PATIENT_REVIEWS.length);
  };

  const activeReview = PATIENT_REVIEWS[activeReviewIdx];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8C733E] mb-2">
            04. Jacksonville Patient Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111922] tracking-tight">
            Trusted by generations of Northeast Florida families.
          </h2>
          <p className="mt-4 text-base text-[#52606D] leading-relaxed">
            Real feedback from patients who entrusted their smile transformations, implant rehabilitations, and dental anxiety to our team at 1061 Riverside Avenue.
          </p>
        </div>

        {/* Featured Testimonial Carousel Card */}
        <div className="mt-12 bg-white rounded-2xl border border-[#DDD9CE] p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#F0EDE6]">
            <div>
              <div className="flex items-center gap-1 text-[#C5A059] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                ))}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8C733E]">
                {activeReview.treatment}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#7B8590] font-mono">
                {activeReviewIdx + 1} / {PATIENT_REVIEWS.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevReview}
                  className="p-2 rounded-lg border border-[#DDD9CE] hover:bg-[#F4F3EF] text-[#17222B] transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-2 rounded-lg border border-[#DDD9CE] hover:bg-[#F4F3EF] text-[#17222B] transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="py-8">
            <Quote className="w-10 h-10 text-[#C5A059]/30 mb-4" />
            <p className="font-serif text-xl sm:text-2xl text-[#111922] leading-relaxed italic">
              "{activeReview.quote}"
            </p>
          </div>

          <div className="pt-6 border-t border-[#F0EDE6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-semibold text-sm text-[#111922] block">
                {activeReview.author}
              </span>
              <span className="text-xs text-[#7B8590]">
                {activeReview.verifiedSource}
              </span>
            </div>

            {activeReview.doctorMentioned && (
              <div className="text-xs text-[#52606D] flex items-center gap-1.5 bg-[#FAF9F5] px-3 py-1.5 rounded-md border border-[#E8E4D8]">
                <CheckCircle className="w-3.5 h-3.5 text-[#B38E46]" />
                <span>Care provided by {activeReview.doctorMentioned}</span>
              </div>
            )}
          </div>
        </div>

        {/* 3 Grid Mini-Reviews */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PATIENT_REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF9F6] rounded-xl border border-[#E8E5DD] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C5A059] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                  ))}
                </div>
                <p className="text-xs text-[#42505E] leading-relaxed line-clamp-4">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#EAE7DF] text-xs">
                <span className="font-semibold text-[#17222B] block">{rev.author}</span>
                <span className="text-[11px] text-[#7B8590]">{rev.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
