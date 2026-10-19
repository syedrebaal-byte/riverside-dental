import { Doctor, ServiceDetail, PatientReview } from '../types';

export const CLINIC_INFO = {
  name: 'Riverside Dental',
  tagline: 'Modern Aesthetic & Reconstructive Dentistry',
  address: {
    street: '1061 Riverside Avenue',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32204',
    neighborhood: 'Historic Riverside / St. Johns Riverfront',
  },
  phone: '(904) 355-5531',
  phoneHref: 'tel:9043555531',
  email: 'concierge@riverside-dental.com',
  hours: [
    { days: 'Monday – Thursday', time: '8:00 AM – 5:00 PM' },
    { days: 'Friday', time: '9:00 AM – 3:00 PM' },
    { days: 'Saturday – Sunday', time: 'Closed (Emergency On-Call)' },
  ],
  emergencyNote: 'Same-day emergency dental appointments are available for severe toothache, broken crowns, or trauma.',
};

export const DOCTORS: Doctor[] = [
  {
    id: 'spencer',
    name: 'Michael Spencer',
    credentials: 'DDS, FAGD',
    role: 'Partner Dentist & Aesthetic Specialist',
    specialty: ['Cosmetic Smile Design', 'Complex Restorative Dentistry', 'Full Mouth Rehabilitation'],
    education: 'Doctor of Dental Surgery, Fellow of the Academy of General Dentistry',
    bio: 'Dr. Michael Spencer brings decades of clinical mastery to Riverside Dental. Renowned for meticulous porcelain veneer aesthetics and comprehensive bite rehabilitation, Dr. Spencer blends artistic vision with biological preservation to create harmonious, natural smiles.',
  },
  {
    id: 'cohlmia',
    name: 'Adam Cohlmia',
    credentials: 'DDS',
    role: 'Partner Dentist & Implantologist',
    specialty: ['Dental Implants', 'Guided Bone Regeneration', 'Fixed Arch Reconstruction'],
    education: 'Doctor of Dental Surgery, Advanced Surgical Implant Residency',
    bio: 'Dr. Adam Cohlmia specializes in restorative and surgical implantology. Utilizing state-of-the-art 3D cone beam computed tomography (CBCT) and digital precision guides, Dr. Cohlmia restores permanent chewing function and youthfulness to patients with missing or failing teeth.',
  },
  {
    id: 'cross',
    name: 'Kyle Cross',
    credentials: 'DDS',
    role: 'General & Cosmetic Dentist',
    specialty: ['Digital Dentistry', 'CAD/CAM Ceramic Restorations', 'Clear Aligner Orthodontics'],
    education: 'Doctor of Dental Surgery',
    bio: 'Dr. Kyle Cross leverages modern digital intraoral scanning and minimally invasive techniques. His gentle, patient-centric philosophy ensures each patient understands their treatment options in a transparent, zero-pressure atmosphere.',
  },
  {
    id: 'henry',
    name: 'Matt Henry',
    credentials: 'DDS',
    role: 'Comprehensive Family & Preventive Dentist',
    specialty: ['Preventive Care', 'Crowns & Bridges', 'Periodontal Maintenance'],
    education: 'Doctor of Dental Surgery',
    bio: 'Dr. Matt Henry focuses on lifelong dental longevity. From gentle routine hygiene examinations to conservative tooth repairs, Dr. Henry takes pride in helping Jacksonville families preserve their natural teeth for decades.',
  },
  {
    id: 'tolley',
    name: 'Barrett Tolley',
    credentials: 'DDS',
    role: 'Surgical & TMJ Specialist',
    specialty: ['Oral Surgery', 'Wisdom Tooth Removal', 'TMJ & Occlusal Therapy'],
    education: 'Doctor of Dental Surgery',
    bio: 'Dr. Barrett Tolley handles surgical extractions, bone preservation, and jaw disorder therapies with clinical precision. He works closely with our restorative team to ensure seamless foundation work for cosmetic restorations.',
  },
  {
    id: 'ratliff',
    name: 'Irene Ratliff',
    credentials: 'CRNA, APRN',
    role: 'Board-Certified Nurse Anesthetist',
    specialty: ['Hospital-Grade IV Sedation', 'Patient Comfort Care', 'Vital Signs Monitoring'],
    education: 'Master of Science in Nurse Anesthesia, Board Certified CRNA & APRN',
    bio: 'Riverside Dental is among the few private dental suites in Northeast Florida with a dedicated, hospital-trained Nurse Anesthetist on staff. Irene monitors your vital signs continuously, ensuring absolute calm, safety, and zero dental anxiety.',
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'cosmetic-veneers',
    category: 'aesthetic',
    title: 'Custom Porcelain Veneers & Smile Makeovers',
    shortDesc: 'Handcrafted ultra-thin ceramic shells designed to correct discoloration, chips, gaps, and tooth shape.',
    fullDesc: 'Our bespoke smile design process merges facial symmetry analysis with hand-layered feldspathic porcelain and lithium disilicate ceramics. We collaborate directly with master ceramists to replicate the subtle translucency, natural mammelons, and surface texture of pristine natural enamel.',
    benefits: [
      'Individually sculpted to complement your facial features and lip line',
      'Stain-resistant porcelain maintains brilliance for 15+ years',
      'Minimally invasive preparation preserving natural tooth structure',
      'Digital smile preview before permanent bonding',
    ],
    expectedTime: '2 to 3 appointments over 2–3 weeks',
    idealFor: 'Patients seeking correction for stubborn tetracycline stains, micro-cracks, gaps, uneven worn teeth, or full aesthetic redesign.',
    faq: [
      {
        q: 'Do porcelain veneers feel like real teeth?',
        a: 'Yes. Once bonded, custom porcelain veneers mimic the exact texture, thermal conductivity, and bite feel of healthy natural enamel.',
      },
      {
        q: 'How long do custom veneers typically last?',
        a: 'With proper oral hygiene and regular dental checkups, high-grade porcelain veneers routinely last 15 to 20 years or longer.',
      },
    ],
  },
  {
    id: 'dental-implants',
    category: 'implants',
    title: 'Precision Dental Implants & All-on-X',
    shortDesc: 'Permanent titanium posts topped with lifelike ceramic crowns or full-arch zirconia fixed prosthetics.',
    fullDesc: 'Riverside Dental provides computer-guided implant placement using high-resolution 3D CBCT scans. Whether replacing a single missing tooth or rehabilitating an entire arch with our Teeth-in-a-Day protocol, implants halt bone resorption and restore 100% natural chewing force.',
    benefits: [
      'Prevents facial sagging and jawbone deterioration',
      'Permanent foundation with over 98% clinical success rate',
      'No messy adhesives, slips, or speech impediments',
      'Look, feel, and function just like original healthy teeth',
    ],
    expectedTime: 'Same-day provisional restoration; final integration in 3–4 months',
    idealFor: 'Adults with single or multiple missing teeth, failing root canals, loose dentures, or advanced periodontal bone loss.',
    faq: [
      {
        q: 'Is dental implant surgery painful?',
        a: 'Most patients report minimal discomfort. With local anesthesia and our on-staff CRNA Irene Ratliff providing tailored IV sedation, you will feel completely relaxed and comfortable throughout.',
      },
      {
        q: 'Can I replace all my upper or lower teeth at once?',
        a: 'Yes. Our All-on-X full arch protocol uses 4 to 6 strategically placed implants to support an entire bridge of non-removable, natural-looking teeth.',
      },
    ],
  },
  {
    id: 'clear-aligners',
    category: 'aesthetic',
    title: 'Clear Aligners & Invisible Orthodontics',
    shortDesc: 'Discreet, custom-molded aligners to straighten crowded or misaligned teeth without metal brackets.',
    fullDesc: 'Straighten your smile discreetly with custom clear aligner therapy. Using digital 3D intraoral scans instead of messy impression putty, we map your tooth movement millimeter by millimeter, allowing you to view your finished smile simulation before starting.',
    benefits: [
      'Virtually invisible trays suitable for working professionals',
      'Removable for meals, brushing, and flossing',
      'Smooth edges prevent cheek and gum irritation',
      'Fewer office visits with convenient digital progress checks',
    ],
    expectedTime: '6 to 18 months depending on clinical complexity',
    idealFor: 'Teens and adults with mild to moderate crowding, spacing, overbites, or relapse from teenage braces.',
    faq: [
      {
        q: 'How many hours per day should I wear my aligners?',
        a: 'For optimal results, aligners should be worn 20 to 22 hours per day, removing them only to eat, drink non-water beverages, and brush.',
      },
    ],
  },
  {
    id: 'sedation-dentistry',
    category: 'sedation',
    title: 'Hospital-Grade IV & Conscious Sedation',
    shortDesc: 'Gentle, anxiety-free dental care under the continuous care of our board-certified Nurse Anesthetist.',
    fullDesc: 'If past dental trauma or anxiety has kept you from receiving dental care, Riverside Dental provides a compassionate haven. With Irene Ratliff, CRNA, APRN on site, you can drift into a peaceful twilight sleep while our clinical team completes multiple treatments in a single quiet session.',
    benefits: [
      'Complete physical and emotional relaxation with zero memory of the procedure',
      'Continuous hospital-grade cardiac and oxygen monitoring',
      'Enables extensive reconstructive work to be completed in one visit',
      'Ideal for patients with strong gag reflexes or dental phobia',
    ],
    expectedTime: 'Administered during your appointment with rapid, gentle recovery',
    idealFor: 'Anyone with dental anxiety, severe gag reflex, low pain threshold, or needing extensive multiple-procedure appointments.',
    faq: [
      {
        q: 'Will I be completely asleep during IV sedation?',
        a: 'In conscious IV sedation, you enter a state of deep, peaceful relaxation. You can respond to simple questions if needed, but you will feel no pain, tension, or anxiety, and typically remember nothing afterward.',
      },
      {
        q: 'Do I need someone to drive me home?',
        a: 'Yes. Because sedation medications cause temporary drowsiness, an adult companion must accompany you and drive you home safely.',
      },
    ],
  },
  {
    id: 'crowns-restorative',
    category: 'restorative',
    title: 'All-Ceramic Crowns & Reconstructive Care',
    shortDesc: 'Metal-free biocompatible ceramic crowns engineered to protect damaged, fractured, or deeply decayed teeth.',
    fullDesc: 'We exclusively utilize high-translucency monolithic zirconia and e.max lithium disilicate ceramic crowns. Unlike outdated porcelain-fused-to-metal crowns, our restorations eliminate dark metallic margins near the gum line, ensuring a seamless, photorealistic result.',
    benefits: [
      '100% metal-free and highly biocompatible with gum tissue',
      'High fracture resistance engineered for heavy chewing forces',
      'Color-matched to adjacent natural teeth with custom tinting',
      'Preserves the remaining natural tooth root and bone support',
    ],
    expectedTime: 'Typically completed across 2 visits',
    idealFor: 'Teeth with extensive decay, broken cusps, failing large silver fillings, or following root canal treatment.',
    faq: [
      {
        q: 'Will my crown have a dark grey line near the gum?',
        a: 'No. Our crowns are all-ceramic and metal-free, meaning they will never show the unsightly dark metal shadow at the gum line.',
      },
    ],
  },
  {
    id: 'emergency-care',
    category: 'emergency',
    title: 'Same-Day Emergency Dental Relief',
    shortDesc: 'Rapid intervention for severe toothaches, broken teeth, lost restorations, and oral infections.',
    fullDesc: 'Dental emergencies require prompt, compassionate care. Our Riverside Avenue practice reserves daily emergency slots to diagnose acute pain, perform immediate palliative treatment, and restore comfort without delay.',
    benefits: [
      'Dedicated daily appointment slots for acute dental emergencies',
      'Digital diagnostic X-rays and 3D CBCT for immediate diagnosis',
      'Fast pain relief and definitive infection management',
      'Direct line to clinical team: (904) 355-5531',
    ],
    expectedTime: 'Same-day emergency visit',
    idealFor: 'Sudden severe toothache, chipped/knocked-out tooth, lost crown, abscess, or facial swelling.',
    faq: [
      {
        q: 'What should I do if a tooth gets knocked out?',
        a: 'Pick up the tooth by the crown (never touch the root), gently rinse with milk or saline if dirty, and place it back in the socket or in a container of cold milk. Call us immediately at (904) 355-5531.',
      },
    ],
  },
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'rev-1',
    author: 'Eleanor Vance',
    verifiedSource: 'Google Review · Jacksonville, FL',
    treatment: 'Full Smile Makeover with Porcelain Veneers',
    doctorMentioned: 'Dr. Michael Spencer',
    quote: 'Dr. Spencer and the Riverside Dental team completely changed how I feel about smiling in photos and speaking in public. The riverside clinic has the calmest atmosphere, and the attention to detail with each porcelain shade was extraordinary. People constantly comment on how natural my smile looks.',
    date: 'Verified Patient',
  },
  {
    id: 'rev-2',
    author: 'Marcus Thornton',
    verifiedSource: 'Google Review · Jacksonville, FL',
    treatment: 'Full Arch Dental Implants',
    doctorMentioned: 'Dr. Adam Cohlmia',
    quote: 'After dealing with failing bridges for years, Dr. Cohlmia gave me back the ability to eat steak and apples without fear. Having Irene, the CRNA, right there during surgery made the entire procedure completely stress-free. I woke up with my new teeth and literally zero anxiety.',
    date: 'Verified Patient',
  },
  {
    id: 'rev-3',
    author: 'Sarah Jenkins',
    verifiedSource: 'Google Review · Jacksonville, FL',
    treatment: 'Emergency Care & Ceramic Crown',
    doctorMentioned: 'Dr. Kyle Cross',
    quote: 'I cracked a molar while having dinner downtown on Riverside Ave. The practice took me in first thing the next morning. Dr. Cross explained every step on the digital screen, numbed me with zero pain, and had me comfortable in under an hour. Outstanding professional care.',
    date: 'Verified Patient',
  },
  {
    id: 'rev-4',
    author: 'David Callahan',
    verifiedSource: 'Google Review · Jacksonville, FL',
    treatment: 'Sedation Dentistry & Restorative Care',
    doctorMentioned: 'Irene Ratliff, CRNA & Dr. Spencer',
    quote: 'I had avoided the dentist for nearly a decade due to childhood dental phobia. Riverside Dental treated me with zero judgment. With Irene administering IV sedation, several years of overdue dental work were taken care of in one peaceful morning. Truly life-changing.',
    date: 'Verified Patient',
  },
];

export const ACCEPTED_INSURANCES = [
  'Delta Dental Premier & PPO',
  'Cigna Dental Network',
  'MetLife PDP Plus',
  'Aetna Dental PPO',
  'Guardian DentalGuard',
  'Humana Dental PPO',
  'UnitedHealthcare Dental',
  'Principal Financial Group',
];

export const CLINIC_STATS = [
  { value: '35+', label: 'Years Serving Jacksonville' },
  { value: '6', label: 'Dedicated Specialists & CRNA' },
  { value: '98.6%', label: 'Implant Integration Success' },
  { value: '1,200+', label: '5-Star Patient Reviews' },
];
