import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, AlertCircle, Sparkles } from 'lucide-react';
import { CLINIC_INFO, DOCTORS, SERVICES } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  preselectedDoctor = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM – 12:00 PM)',
    serviceCategory: preselectedService || 'General Consultation & Examination',
    preferredDoctor: preselectedDoctor || 'First Available Specialist',
    isNewPatient: true,
    notes: '',
    hasDentalAnxiety: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Please provide your name, phone number, and email address.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-xl w-full border border-[#DDD9CE] shadow-2xl p-6 sm:p-8 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#7B8590] hover:text-[#111922] rounded-lg hover:bg-[#F4F3EF] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="border-b border-[#F0EDE6] pb-4 pr-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#8C733E]">
                Concierge Scheduling
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111922] mt-1">
                Request an Appointment
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#52606D]">
                1061 Riverside Avenue, Jacksonville, FL · (904) 355-5531
              </p>
            </div>

            {errorMessage && (
              <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#17222B] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD9CE] bg-[#FAF9F6] focus:bg-white focus:outline-hidden focus:border-[#C5A059] text-[#17222B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17222B] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(904) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD9CE] bg-[#FAF9F6] focus:bg-white focus:outline-hidden focus:border-[#C5A059] text-[#17222B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17222B] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD9CE] bg-[#FAF9F6] focus:bg-white focus:outline-hidden focus:border-[#C5A059] text-[#17222B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#17222B] mb-1">
                    Treatment of Interest
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#DDD9CE] bg-[#FAF9F6] focus:bg-white focus:outline-hidden text-[#17222B] text-xs"
                  >
                    <option value="General Consultation & Examination">General Examination & Cleaning</option>
                    <option value="Cosmetic Smile Makeover">Cosmetic Porcelain Veneers</option>
                    <option value="Dental Implants & All-on-X">Dental Implants / All-on-X</option>
                    <option value="Clear Aligners">Clear Aligners / Invisalign</option>
                    <option value="Sedation Dentistry">Hospital-Grade IV Sedation</option>
                    <option value="Ceramic Crown / Bridge">Ceramic Crown or Bridge</option>
                    <option value="Emergency Toothache Relief">Urgent Emergency Relief</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17222B] mb-1">
                    Doctor Preference
                  </label>
                  <select
                    value={formData.preferredDoctor}
                    onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#DDD9CE] bg-[#FAF9F6] focus:bg-white focus:outline-hidden text-[#17222B] text-xs"
                  >
                    <option value="First Available Specialist">First Available Specialist</option>
                    {DOCTORS.map((doc) => (
                      <option key={doc.id} value={`Dr. ${doc.name}`}>
                        Dr. {doc.name} ({doc.role.split(' ')[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#17222B] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD9CE] bg-[#FAF9F6] focus:bg-white focus:outline-hidden text-[#17222B] text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17222B] mb-1">
                    Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#DDD9CE] bg-[#FAF9F6] focus:bg-white focus:outline-hidden text-[#17222B] text-xs"
                  >
                    <option value="Morning (8:00 AM – 11:30 AM)">Morning (8:00 AM – 11:30 AM)</option>
                    <option value="Midday (11:30 AM – 2:00 PM)">Midday (11:30 AM – 2:00 PM)</option>
                    <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Dental Anxiety Toggle */}
              <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E8E4D8] flex items-start gap-3">
                <input
                  type="checkbox"
                  id="anxietyCheckbox"
                  checked={formData.hasDentalAnxiety}
                  onChange={(e) => setFormData({ ...formData, hasDentalAnxiety: e.target.checked })}
                  className="mt-0.5 w-4 h-4 text-[#B38E46] rounded-xs border-[#DDD9CE] cursor-pointer"
                />
                <label htmlFor="anxietyCheckbox" className="text-xs text-[#52606D] cursor-pointer">
                  <strong className="text-[#17222B] block">I experience dental anxiety or wish to discuss sedation</strong>
                  Our on-staff Nurse Anesthetist Irene Ratliff will review options with you prior to treatment.
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17222B] mb-1">
                  Additional Notes or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any symptoms, insurance carrier, or timeline preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#DDD9CE] bg-[#FAF9F6] focus:bg-white focus:outline-hidden text-[#17222B] text-xs resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="text-xs text-[#52606D] hover:text-[#17222B] flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B38E46]" />
                  <span>Prefer to call? (904) 355-5531</span>
                </a>

                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#17222B] hover:bg-[#253340] rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Confirm Request
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E5E0D4] text-[#B38E46] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#111922]">
              Appointment Request Received
            </h3>

            <p className="text-xs sm:text-sm text-[#52606D] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#17222B]">{formData.fullName}</strong>. Our concierge patient care team at 1061 Riverside Avenue will call you at <strong className="text-[#17222B]">{formData.phone}</strong> to confirm your exact appointment slot.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E8E5DD] text-xs text-left max-w-sm mx-auto space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#7B8590]">Service:</span>
                <span className="font-semibold text-[#17222B]">{formData.serviceCategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7B8590]">Provider:</span>
                <span className="font-semibold text-[#17222B]">{formData.preferredDoctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7B8590]">Window:</span>
                <span className="font-semibold text-[#17222B]">{formData.preferredTime}</span>
              </div>
              {formData.hasDentalAnxiety && (
                <div className="text-[#B38E46] font-medium pt-1">
                  ✓ Flagged for CRNA Sedation Comfort Consultation
                </div>
              )}
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#17222B] hover:bg-[#253340] rounded-lg transition-colors cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
