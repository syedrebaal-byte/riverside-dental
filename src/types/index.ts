export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  role: string;
  specialty: string[];
  bio: string;
  education: string;
}

export interface ServiceDetail {
  id: string;
  category: 'aesthetic' | 'implants' | 'restorative' | 'sedation' | 'emergency';
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  expectedTime: string;
  idealFor: string;
  faq: { q: string; a: string }[];
}

export interface PatientReview {
  id: string;
  author: string;
  verifiedSource: string;
  treatment: string;
  quote: string;
  doctorMentioned?: string;
  date: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceCategory: string;
  preferredDoctor: string;
  isNewPatient: boolean;
  notes: string;
  hasDentalAnxiety: boolean;
}
