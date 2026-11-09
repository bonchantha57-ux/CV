/* ============================================================
   PROFILE CV CAMBO - SAMPLE & DEFAULT DATA (REAL FLAG CODES)
   ============================================================ */

const SAMPLE_DATA_KHMER = {
  personal: {
    fullName: "ប៊ន ចាន់ថា",
    jobTitle: "ប្រធានវិស្វករកម្មវិធីជាន់ខ្ពស់ (Senior Software Engineer)",
    email: "chantha.born@gmail.com",
    phone: "+855 12 889 990",
    address: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
    website: "https://chantha.dev",
    linkedin: "linkedin.com/in/bornchantha",
    github: "github.com/bornchantha",
    avatar: "assets/images/avatar_male.jpg",
    avatarShape: "diamond",
    avatarPosX: 50,
    avatarPosY: 50,
    avatarZoom: 1.0,
    avatarSize: 95,
    avatarBorderWidth: 3,
    avatarBorderColor: "#d4af37",
    summary: "វិស្វករផ្នែកទន់ជាន់ខ្ពស់ដែលមានបទពិសោធន៍ជាង ៧ ឆ្នាំក្នុងការរចនានិងអភិវឌ្ឍប្រព័ន្ធ Enterprise Web Application, Cloud Architecture (AWS, Docker) និង Microservices។ ជំនាញច្បាស់លាស់ក្នុងការដឹកនាំក្រុមបច្ចេកវិទ្យា និងបង្កើតដំណោះស្រាយឌីជីថលប្រកបដោយប្រសិទ្ធភាពខ្ពស់ និងសុវត្ថិភាពស្តង់ដារអន្តរជាតិ។"
  },
  experience: [
    {
      id: "exp_1",
      role: "Lead Full Stack Architect",
      company: "Cambodia Fintech Solutions Co., Ltd.",
      location: "រាជធានីភ្នំពេញ",
      startDate: "2022",
      endDate: "បច្ចុប្បន្ន (Present)",
      isCurrent: true,
      description: "• ដឹកនាំក្រុមវិស្វករកម្មវិធីចំនួន ១២ នាក់ក្នុងការបង្កើត Core Banking API និង Payment Gateway ធានាដំណើរការ 99.99% Uptime\n• កែលម្អល្បឿន Server Response Time កើនឡើង ៤៥% តាមរយៈ Redis Caching និង Database Optimization\n• រៀបចំស្ថាបត្យកម្ម Cloud ប្រកបដោយសុវត្ថិភាពតាមស្តង់ដារ PCI-DSS Compliance"
    },
    {
      id: "exp_2",
      role: "Senior Full-Stack Engineer",
      company: "Smart Digital Innovations",
      location: "រាជធានីភ្នំពេញ",
      startDate: "2019",
      endDate: "2022",
      isCurrent: false,
      description: "• អភិវឌ្ឍ Mobile & Web Platform គាំទ្រអ្នកប្រើប្រាស់ជាង ៥០០,០០០ នាក់ក្នុងមួយខែ\n• បង្កើត Microservices ដោយប្រើប្រាស់ Node.js, TypeScript, PostgreSQL និង RabbitMQ\n• ណែនាំនិងបណ្តុះបណ្តាលសមាជិកក្រុមថ្មីលើ Clean Architecture និង Automated CI/CD Pipelines"
    },
    {
      id: "exp_3",
      role: "Software Developer",
      company: "TechKhmer Lab",
      location: "រាជធានីភ្នំពេញ",
      startDate: "2017",
      endDate: "2019",
      isCurrent: false,
      description: "• បង្កើតគេហទំព័រ E-commerce និង Dashboard សម្រាប់អតិថិជនសាជីវកម្មធំៗ\n• សហការយ៉ាងជិតស្និទ្ធជាមួយ UI/UX Designers ដើម្បីធានា Responsive Design លើគ្រប់ឧបករណ៍"
    }
  ],
  education: [
    {
      id: "edu_1",
      degree: "បរិញ្ញាបត្រជាន់ខ្ពស់ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ (Master of Computer Science)",
      school: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP)",
      location: "ភ្នំពេញ, កម្ពុជា",
      year: "2019 - 2021",
      description: "និទ្ទេសល្អប្រសើរ (GPA 3.85) - និក្ខេបបទស្តីពី AI-Powered Natural Language Processing for Khmer Language"
    },
    {
      id: "edu_2",
      degree: "បរិញ្ញាបត្រវិស្វកម្មព័ត៌មានវិទ្យា (B.Eng in IT)",
      school: "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC)",
      location: "ភ្នំពេញ, កម្ពុជា",
      year: "2013 - 2017",
      description: "និទ្ទេសកិត្តិយស (Honors) - ជ័យលាភីលេខ ១ ក្នុងកម្មវិធីប្រកួតប្រជែង National Software Hackathon 2016"
    }
  ],
  skills: [
    { name: "JavaScript / TypeScript", level: 95, stars: 5 },
    { name: "React.js / Next.js / Vue", level: 92, stars: 5 },
    { name: "Node.js / Express / NestJS", level: 90, stars: 5 },
    { name: "Python / Fast-API / AI", level: 85, stars: 4 },
    { name: "PostgreSQL / MongoDB / Redis", level: 88, stars: 4 },
    { name: "AWS Cloud / Docker / K8s", level: 82, stars: 4 },
    { name: "CI/CD & DevOps Automation", level: 80, stars: 4 },
    { name: "System Architecture Design", level: 90, stars: 5 }
  ],
  projects: [
    {
      id: "proj_1",
      title: "KhmerPay Core Gateway",
      role: "Lead Architect",
      link: "khmerpay.io",
      description: "ប្រព័ន្ធទូទាត់ប្រាក់ឌីជីថលឆ្លងធនាគារ (Bakong Integration) ដោះស្រាយប្រតិបត្តិការជាង 200,000 requests/day ដោយគ្មានបញ្ហារអាក់រអួល"
    },
    {
      id: "proj_2",
      title: "Smart Logistics Tracking System",
      role: "Backend Lead",
      link: "logistics.innovate.kh",
      description: "ប្រព័ន្ធតាមដានកញ្ចប់ឥវ៉ាន់តាម Real-time GPS ដោយប្រើ WebSocket និង Apache Kafka សម្រាប់ក្រុមហ៊ុនដឹកជញ្ជូនទូទាំងប្រទេស"
    }
  ],
  languages: [
    { name: "ភាសាខ្មែរ (Khmer)", level: "ភាសាកំណើត (Native)", flag: "kh", percent: 100 },
    { name: "ភាសាអង់គ្លេស (English)", level: "ស្ទាត់ជំនាញ (Professional Fluent)", flag: "gb", percent: 90 },
    { name: "ភាសាបារាំង (French)", level: "កម្រិតមធ្យម (Intermediate)", flag: "fr", percent: 65 },
    { name: "ភាសាចិន (Chinese)", level: "កម្រិតដំបូង (Elementary)", flag: "cn", percent: 45 }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022"
    }
  ],
  references: [
    {
      name: "Estelle Darcy",
      company: "Cambodia Fintech Solutions Co., Ltd.",
      role: "Chief Technology Officer (CTO)",
      phone: "+855 12 334 455",
      email: "estelle@fintech.kh"
    },
    {
      name: "Harper Richard",
      company: "Smart Digital Innovations",
      role: "Engineering Director",
      phone: "+855 12 778 899",
      email: "harper@smartinnovate.io"
    }
  ],
  interests: ["Reading (អានសៀវភៅ)", "Technology (បច្ចេកវិទ្យា)", "Photography (ថតរូប)", "Football (បាល់ទាត់)", "Traveling (ដំណើរកម្សាន្ត)", "Drawing (គំនូរ)"]
};

const SAMPLE_DATA_ENGLISH = {
  personal: {
    fullName: "CHRISTINE SMITH",
    jobTitle: "Senior Product Designer & UI/UX Strategist",
    email: "christine.smith@creative.io",
    phone: "+855 77 234 567",
    address: "Phnom Penh, Cambodia",
    website: "https://christinesmith.com",
    linkedin: "linkedin.com/in/christinesmith",
    github: "dribbble.com/christinesmith",
    avatar: "assets/images/avatar_female.jpg",
    avatarShape: "circle",
    summary: "Passionate Senior Product Designer with 7+ years of experience leading cross-functional teams to create intuitive digital experiences for web and mobile products. Expert in user research, wireframing, design systems, and rapid interactive prototyping."
  },
  experience: [
    {
      id: "exp_1",
      role: "Lead Product Designer",
      company: "Nexus Financial Technologies",
      location: "Phnom Penh, Cambodia",
      startDate: "2022",
      endDate: "Present",
      isCurrent: true,
      description: "• Spearheaded the complete redesign of the mobile banking application, boosting 30-day user retention by 34%\n• Created unified enterprise Design System used across 4 digital platforms and 20+ engineering squads\n• Conducted 80+ qualitative user research sessions and synthesized usability insights into core product roadmap"
    },
    {
      id: "exp_2",
      role: "Senior UI/UX Designer",
      company: "Luna Media & Design",
      location: "Singapore (Remote)",
      startDate: "2019",
      endDate: "2022",
      isCurrent: false,
      description: "• Designed high-conversion checkout flows for top Southeast Asian ecommerce brands, lifting conversions by 22%\n• Collaborated closely with front-end engineers to implement pixel-perfect micro-interactions and accessibility (WCAG AA)"
    },
    {
      id: "exp_3",
      role: "Graphic Web Designer",
      company: "Studio Shodwe Creative",
      location: "Phnom Penh, Cambodia",
      startDate: "2017",
      endDate: "2019",
      isCurrent: false,
      description: "• Delivered brand identities, interactive prototypes, and landing pages for over 25 startup clients across Asia"
    }
  ],
  education: [
    {
      id: "edu_1",
      degree: "Bachelor of Arts in Graphic & Interactive Design",
      school: "California State University / Royal University",
      location: "Phnom Penh, Cambodia",
      year: "2014 - 2018",
      description: "Graduated with Highest Distinction (Summa Cum Laude) - GPA 3.9/4.0"
    }
  ],
  skills: [
    { name: "UI/UX & Product Design", level: 98, stars: 5 },
    { name: "Figma & Design Systems", level: 95, stars: 5 },
    { name: "User Research & Usability", level: 90, stars: 5 },
    { name: "Interactive Prototyping", level: 88, stars: 4 },
    { name: "HTML5 / CSS3 & Web Standards", level: 85, stars: 4 },
    { name: "Adobe Photoshop & Illustrator", level: 92, stars: 5 }
  ],
  projects: [
    {
      id: "proj_1",
      title: "OmniPay Mobile Banking Experience",
      role: "Design Lead",
      link: "behance.net/gallery/omnipay",
      description: "Modern, streamlined mobile financial dashboard serving 1.2M+ active consumers with biometrics, micro-savings, and instant QR settlements."
    },
    {
      id: "proj_2",
      title: "Helix Enterprise Design System",
      role: "Core Creator",
      link: "helix-ds.org",
      description: "Comprehensive tokenized multi-brand component library powering Web, iOS, and Android applications."
    }
  ],
  languages: [
    { name: "English", level: "Fluent (C2)", flag: "gb", percent: 95 },
    { name: "Khmer", level: "Native", flag: "kh", percent: 100 },
    { name: "French", level: "Conversational (B1)", flag: "fr", percent: 60 },
    { name: "Spanish", level: "Basic", flag: "es", percent: 40 }
  ],
  certifications: [
    {
      name: "Nielsen Norman Group UX Master Certified",
      issuer: "NN/g (Nielsen Norman Group)",
      date: "2023"
    },
    {
      name: "Google Professional UX Design Certificate",
      issuer: "Google / Coursera",
      date: "2021"
    }
  ],
  references: [
    {
      name: "Estelle Darcy",
      company: "Wardiere Inc.",
      role: "Chief Technology Officer (CTO)",
      phone: "+1 234-456-7890",
      email: "estelle@wardiere.com"
    },
    {
      name: "Harper Richard",
      company: "Wardiere Inc.",
      role: "Chief Executive Officer (CEO)",
      phone: "+1 234-456-7891",
      email: "harper@wardiere.com"
    }
  ],
  interests: ["Reading", "Drawing", "Writing", "Photography", "Swimming", "Sport", "Tech Research"]
};

// Popular Country Flags with real codes corresponding to assets/icons/flags/{code}.png
const POPULAR_FLAGS = [
  { code: "kh", name: "Cambodia (កម្ពុជា 🇰🇭)", lang: "ភាសាខ្មែរ (Khmer)" },
  { code: "gb", name: "United Kingdom (អង់គ្លេស 🇬🇧)", lang: "English (UK)" },
  { code: "us", name: "United States (អាមេរិក 🇺🇸)", lang: "English (US)" },
  { code: "fr", name: "France (បារាំង 🇫🇷)", lang: "Français (French)" },
  { code: "cn", name: "China (ចិន 🇨🇳)", lang: "中文 (Chinese)" },
  { code: "jp", name: "Japan (ជប៉ុន 🇯🇵)", lang: "日本語 (Japanese)" },
  { code: "kr", name: "South Korea (កូរ៉េ 🇰🇷)", lang: "한국어 (Korean)" },
  { code: "th", name: "Thailand (ថៃ 🇹🇭)", lang: "ภาษาไทย (Thai)" },
  { code: "vn", name: "Vietnam (វៀតណាម 🇻🇳)", lang: "Tiếng Việt (Vietnamese)" },
  { code: "de", name: "Germany (អាល្លឺម៉ង់ 🇩🇪)", lang: "Deutsch (German)" },
  { code: "es", name: "Spain (អេស្ប៉ាញ 🇪🇸)", lang: "Español (Spanish)" },
  { code: "au", name: "Australia (អូស្ត្រាលី 🇦🇺)", lang: "English (AU)" },
  { code: "sg", name: "Singapore (សិង្ហបុរី 🇸🇬)", lang: "English / Chinese" },
  { code: "ru", name: "Russia (រុស្ស៊ី 🇷🇺)", lang: "Русский (Russian)" },
  { code: "it", name: "Italy (អ៊ីតាលី 🇮🇹)", lang: "Italiano" },
  { code: "ca", name: "Canada (កាណាដា 🇨🇦)", lang: "English / French" }
];
