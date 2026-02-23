/**
 * Site content – edit this file to change all copy and links.
 * Assets are in /public/assets/
 */

const ASSETS = {
  logo: "/assets/logo-blue.png",
  iconWhite: "/assets/icon-white.svg",
  iconBlue: "/assets/icon-blue.svg",
  arrowWhite: "/assets/arrow-white.png",
  arrowBlack: "/assets/arrow-black.png",
  video: "/assets/bg-video.mp4",
  videoMobile: "/assets/bg-video-mobile.mp4",
  rocket: "/assets/rocket.svg",
  rocketWhite: "/assets/rocket-white.svg",
  eye: "/assets/eye.svg",
  eyeWhite: "/assets/eye-white.svg",
  criticalError: "/assets/critical-error.svg",
  /** Values section icons (order: Innovation First, Sovereign Excellence, Client Success, Collaborative Culture, Integrity & Trust, Agile Execution) */
  valuesInnovationFirst: "/assets/innovation first.svg",
  valuesInnovationFirstWhite: "/assets/innovation first-white.svg",
  valuesSovereign: "/assets/sovereign excellence.svg",
  valuesSovereignWhite: "/assets/sovereign excellence-white.svg",
  valuesClientSuccess: "/assets/client success.svg",
  valuesClientSuccessWhite: "/assets/client success-white.svg",
  valuesCollaborative: "/assets/collaborative culture.svg",
  valuesCollaborativeWhite: "/assets/collablorative culture-white.svg",
  valuesIntegrityTrust: "/assets/integrity & trust.svg",
  valuesIntegrityTrustWhite: "/assets/integrity & trust-white.svg",
  valuesAgileExecution: "/assets/agile execution.svg",
  valuesAgileExecutionWhite: "/assets/agile execution-white.svg",
  manama: "/assets/manama.svg",
  jellyLogo: "/assets/jelly logo.svg",
  jellyLogoWhite: "/assets/jelly logo-white.svg",
  /** Footer background grids */
  footerGridTop: "/assets/24px Grid top.svg",
  footerGridDown: "/assets/24px Grid down.svg",
  logoWhite: "/assets/logo-white.svg",
  linkedin: "/assets/linkedin.svg",
} as const;

export const content = {
  /** Site metadata (used in layout) */
  site: {
    title: "Transform Your Ideas Into Digital Reality",
    description:
      "We build robust, scalable IT solutions tailored to your unique business needs.",
  },

  /** Header navigation links (order preserved) */
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/careers" },
  ],

  /** Header CTA button */
  headerCta: {
    label: "Contact Us",
    href: "/contact-us",
  },

  /** About Us page – first section */
  aboutUs: {
    label: "About Us",
    /** Headline: line 1, then "Infrastructure of" + italic "Innovation" on line 2 */
    headlineLines: ["Engineering the", "Infrastructure of"],
    headlineItalic: "Innovation",
    descriptionLines: [
      "We partner with organizations across the GCC to modernize legacy processes, unlock operational",
      "efficiency, and build the strategic foundations required for long-term market leadership.",
    ],
    cta: {
      label: "Work With Us",
      href: "/careers",
    },
  },

  /** About Us page – The Values We Live By section */
  values: {
    headingLine1: "The Values",
    headingLine2: "We Live By",
    subtitleLines: [
      "Foundational principles that guide every project we take on",
      "and every partnership we build.",
    ],
    /** Asset keys for each card icon, in same order as cards */
    iconKeys: [
      "valuesInnovationFirst",
      "valuesSovereign",
      "valuesClientSuccess",
      "valuesCollaborative",
      "valuesIntegrityTrust",
      "valuesAgileExecution",
    ] as const,
    iconKeysWhite: [
      "valuesInnovationFirstWhite",
      "valuesSovereignWhite",
      "valuesClientSuccessWhite",
      "valuesCollaborativeWhite",
      "valuesIntegrityTrustWhite",
      "valuesAgileExecutionWhite",
    ] as const,
    cards: [
      {
        title: "Innovation First",
        description:
          "We don't just follow trends; we set them by pushing the boundaries of what AI can achieve in a business context.",
      },
      {
        title: "Sovereign Excellence",
        description:
          "Ensuring data privacy and regional security standards are baked into every solution we design and deploy.",
      },
      {
        title: "Client Success",
        description:
          "We view our clients as long-term partners, measuring our success by the tangible impact we deliver to their operations.",
      },
      {
        title: "Collaborative Culture",
        description:
          "We foster a workplace where diverse groups feel empowered to solve our most technological challenges.",
      },
      {
        title: "Integrity & Trust",
        description:
          "Transparent operations and ethical AI development are the non-negotiable pillars of our brand.",
      },
      {
        title: "Agile Execution",
        description:
          "Rapid prototyping and continuous iteration allow us to stay ahead in a fast-moving tech environment.",
      },
    ],
  },

  /** About Us page – Regional Presence section */
  regionalPresence: {
    headingLine1: "Regional",
    headingLine2: "Presence",
    subtitle:
      "Strategically positioned in the heart of the world's most dynamic business hubs.",
    location: {
      city: "Manama, Bahrain",
      description: "Tech R&D Center - Manama Business",
    },
  },

  /** About Us page – FAQ section */
  faq: {
    label: "FAQ",
    /** Heading: line 1 "What businesses", line 2 "do you" regular + "work with?" italic */
    headingLine1: "What businesses",
    headingLine2Regular: "do you ",
    headingLine2Italic: "work with?",
    subtitle: "Startups, growing teams, and enterprises across industries.",
    questions: [
      {
        question: "What types of businesses do you work with?",
        answer:
          "We work with a wide range of businesses, from early stage startups to growing companies and large enterprises. Our experience spans multiple industries, including consulting, healthcare, finance, education, government, and real estate. Instead of offering one fixed solution, we tailor our AI and technology services to meet the unique needs of each client, regardless of their size or industry.",
      },
      {
        question: "Do I need technical knowledge?",
        answer:
          "No technical knowledge is required on your end. We handle all aspects of the technical implementation, from initial consultation to deployment and ongoing support. Our team works closely with you to understand your business needs and translate them into effective technology solutions.",
      },
      {
        question: "How long does a project take?",
        answer:
          "Project timelines vary depending on the scope and complexity of your requirements. Simple implementations can take a few weeks, while more comprehensive solutions may take several months. We provide detailed project timelines during our initial consultation and keep you updated throughout the process.",
      },
      {
        question: "Can you integrate with our tools?",
        answer:
          "Yes, we specialize in integrating our solutions with your existing tools and systems. Whether you're using CRM platforms, ERP systems, or custom software, we ensure seamless integration that enhances your current workflow without disrupting operations.",
      },
      {
        question: "What about data protection?",
        answer:
          "Data security and privacy are fundamental to everything we do. We follow industry best practices and comply with regional data protection regulations. We can also work with your existing security protocols to ensure complete compliance.",
      },
    ],
    cta: {
      label: "More About Us",
      href: "/about-us",
    },
  },

  /** About Us page – Our Purpose section */
  purpose: {
    heading: "Our Purpose",
    headingItalic: "Purpose",
    paragraph:
      "In an era defined by data and machine learning, Mynt Labs was born with a single-minded focus: to build regional tech sovereignty. We believe the GCC deserves AI solutions built by regional experts who understand the nuances of our culture, language, and business landscape.",
    mission: {
      title: "Mission",
      description:
        "Empowering GCC enterprises with sovereign AI and transformative technology to lead in the digital era.",
    },
    vision: {
      title: "Vision",
      description:
        "To be the global standard for regional tech innovation, starting with our home in the GCC.",
    },
  },

  /** Footer (all pages except home) – CTA + footer block */
  footer: {
    cta: {
      label: "Ready to Get Started?",
      /** Line 1: "We Transform Ideas", Line 2: "Into Digital " + italic "Reality" */
      headingLine1: "We Transform Ideas",
      headingLine2Regular: "Into Digital ",
      headingLine2Italic: "Reality",
      description:
        "Let's discuss your goals and see how AI can help automate processes, improve efficiency, and drive real results.",
      buttonLabel: "About Us",
      buttonHref: "/about-us",
    },
    companyName: "myntlabs",
    descriptionLine1:
      "We build practical AI solutions that help businesses work faster, reduce manual effort, and improve daily operations.",
    descriptionLine2:
      "Our focus is on simple, reliable tools that fit real workflows and deliver clear results.",
    /** Same order as header + Contact Us */
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact-us" },
    ],
    copyright: "© 2026 Mynt Labs. All rights reserved.",
    linkedInUrl: "https://www.linkedin.com/company/mynt-labs",
  },

  /** Contact Us page – first section (form) + second section (contact info cards) */
  contactUs: {
    label: "Contact us",
    headingLine1: "Get in",
    headingLine2Italic: "touch",
    subtitle: "Let's talk about how AI can support your business",
    form: {
      nameLabel: "Your name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email address",
      emailPlaceholder: "Enter your email",
      messageLabel: "Your message",
      messagePlaceholder: "Write something.....",
      submitLabel: "Submit",
    },
    /** Second section: static contact info cards */
    contactInfo: [
      { title: "Email", content: "Info@Myntlabs.Com" },
      { title: "Call Us", content: "+973 7732 9774 (Bahrain)" },
      {
        title: "Visit Us",
        content:
          "Euro Tower, Office 123, Building 485, Road 1010, Sanabis 410, Bahrain",
      },
      {
        title: "Working Hours",
        content: "Sunday - Thursday: 9AM - 5PM\nFriday - Saturday: Closed",
      },
    ],
  },

  /** Careers page – first section (hero) + second section (job listings) */
  careers: {
    label: "Careers",
    headlineLine1: "Build the future of",
    headlineLine2: "AI & ",
    headlineItalic: "Digital Design",
    description:
      "At Mynt Labs, we build practical AI to solve real business problems. Join our team of driven creators.",
    readMore: "Read More",
    postedDaysAgo: (days: number) => `Posted ${days} days ago`,
    pagination: { prev: "Previous", next: "Next" },
    jobs: [
      {
        title: "Senior Frontend Developer",
        company: "Mynt Labs",
        tags: ["Permanent", "Full-time", "Manama"],
        descriptionSnippet:
          "We are seeking a versatile Senior Frontend Developer to own the user experience across all platforms. Build high-performance client-side ecosystems with .NET 9 microservices.",
        salary: "Competitive",
        postedDays: 7,
        location: "Manama",
        postedDate: "2026-02-15",
        jobType: "Permanent, Full-time",
        applyUrl: "https://bh.indeed.com/job/senior-frontend-developer-flutter-nextjs-or-capacitor-8a363c7193522f94",
        description:
          "Mynt Labs is a full-stack technology and innovation studio focused on building intelligent, scalable, and secure digital ecosystems. With a strategic presence in Bahrain, the UAE, and Saudi Arabia, we design end-to-end software solutions that combine world-class front-end experiences with robust AI and data infrastructure.\n\nIn Bahrain's rapidly evolving tech landscape, Mynt Labs stands at the intersection of premium design and enterprise-grade engineering.\n\nWe are seeking a versatile Senior Frontend Developer to own the user experience across all platforms. You will be responsible for building a high-performance client-side ecosystem that communicates with our new .NET 9 microservices. The ideal candidate can architect a unified codebase that targets Web, iOS, and Android using one of the following paths:\n\nKey Responsibilities:\n\nMulti-Platform Architecture:\n\nFlutter Path: Architect a unified UI using Dart for Web, iOS, and Android.\nNext.js + Capacitor Path: Lead the React 19 development for web while using Capacitor to wrap the application for native mobile deployment.\nState & Data Management:\n\nImplement robust state management (e.g., Riverpod/Bloc for Flutter or React Query/Jotai for React) to handle complex car analytics.\nEnsure smooth data synchronization between the .NET YARP Gateway and the client.\nUI/UX Consistency:\n\nDesign and implement responsive components that handle mobile touch targets and desktop mouse interactions with equal precision.\nIntegrate native device features like cameras (for car photos) and biometrics across iOS and Android.\nWhat We're Looking For\n\nExpert-level proficiency in either Dart/Flutter OR TypeScript/React/Next.js.\nExperience publishing and maintaining apps in the Apple App Store and Google Play Store.\nDeep understanding of RESTful API consumption and JWT-based authentication.\nAn eye for detail—you understand the importance of spacing, typography, and smooth transitions.\nAn understanding of the Bahraini and regional tech ecosystem is a plus.\nAbility to work closely with our designers and back-end engineers to deliver cohesive products.\nWhy Mynt Labs Bahrain?\n\nRegional Impact: Work on projects that are shaping the digital future of the GCC.\nInnovation-First: Access to the latest tools in AI, automation, and data engineering.\nGrowth: A high-autonomy environment where your contributions directly influence the studio's growth and reputation.\nJob Types: Full-time, Permanent\n\nAbility to commute/relocate:\n\nManama: Reliably commute or willing to relocate with an employer-provided relocation package (Required)\nApplication Question(s):\n\nDo you have hands-on experience publishing and maintaining apps in the Apple App Store and Google Play Store?\nDo you have deep understanding of RESTful API consumption and JWT-based authentication?\nDo you have expert-level proficiency in either Dart/Flutter OR TypeScript/React/Next.js?\nLocation:\n\nManama (Preferred)",
      },
      {
        title: "Senior Commercial Manager",
        company: "SKA Enterprise (Salah Khalifa Al Gosaibi)",
        tags: ["Full-time", "Al Khobar"],
        descriptionSnippet:
          "Group Commercial Manager - 15+ years experience. Lead the end-to-end lifecycle of business agreements and strategic partnerships for SKA Enterprise.",
        salary: "Competitive",
        postedDays: 14,
        location: "Al Khobar",
        postedDate: "2026-02-08",
        jobType: "Full-time",
        applyUrl: "https://sa.indeed.com/job/senior-commercial-manager-6c6a533bf48cf789",
        description:
          "Group Commercial Manager\n\nExperience Level: 15+ Years (Senior Leadership)\n\nLanguages: Bilingual Mastery (Arabic & English)\n\nRole Overview\n\nThe Group Commercial Manager is a high-level executive responsible for the commercial integrity and strategic expansion of SKA Enterprise. With at least 15 years of experience, you will lead the end-to-end lifecycle of business agreements and strategic partnerships. In the absence of an internal legal department, you serve as the sole expert intermediary between the Holding Company and external law firms, ensuring that all commercial interests are protected and translated into legally binding, high-performance contracts.\n\nKey Responsibilities\n\n1. External Legal Coordination & Contractual Integrity\n\nExternal Counsel Liaison: Act as the lead point of contact for external lawyers. You are responsible for briefing counsel on business objectives, reviewing their drafts for commercial viability, and ensuring the final legal product aligns with the Group's risk profile.\nAgreement Architecture: Lead the development of complex business agreements, JVs, and MoUs. You must \"speak the language\" of law to ensure external legal advice is practical, cost-effective, and strategically sound.\nRisk Shielding: Identify and mitigate commercial liabilities independently before they reach the legal drafting stage, ensuring the Holding Company is never exposed to unfavorable terms.\n2. Strategic Partnership Development\n\nMarket Mapping: Identify and evaluate high-value strategic partners (local and international) that support the holding company's growth and diversification goals.\nNegotiation Leadership: Command the negotiation table for all major commercial deals, ensuring that \"Heads of Terms\" are favorable and that all partnership outcomes are clearly defined and enforceable.\nDue Diligence: Conduct thorough commercial assessments of potential partners to ensure financial stability, cultural fit, and long-term strategic value.\n3. Performance Architecture (KPIs)\n\nKPI Design: Develop and fine-tune specific Key Performance Indicators for every commercial agreement to ensure external partners and subsidiaries meet their contractual obligations.\nOutcome Tracking: Monitor the success of strategic partnerships against established benchmarks, initiating corrective actions or renegotiations when performance deviates from the commercial roadmap.\nRefined KPIs for Success\n\nCategory / Primary KPI / Target Outcome\nLegal Efficiency: External Counsel Utilization - Reduction in \"back-and-forth\" cycles with external lawyers through high-quality commercial briefing.\nStrategic Growth: Partnership ROI - Measured increase in revenue or market share attributed to newly identified strategic partners.\nRisk Management: Contractual Compliance - Zero major commercial disputes or \"deadlocked\" clauses in active group contracts.\nPerformance: Milestone Achievement Rate - 90%+ achievement of commercial milestones defined in JV and partnership agreements.\nRequired Qualifications & Skills\n\n15+ Years Experience: Proven track record in a senior commercial role, preferably within a diversified holding company.\nBilingual Command: Absolute fluency in Arabic and English; ability to review English international contracts and Arabic regulatory documents with equal precision.\nLegal Stewardship: Extensive experience managing external legal providers and translating business needs into legal requirements.\nStrategic Networking: A strong professional network within the Saudi and GCC business landscape to facilitate partnership identification.\nJob Type: Full-time",
      },
    ],
  },

  /** Hero section */
  hero: {
    tagline: "Engineering the Future of Business.",
    /** Headline lines (each item is one line; last line is styled as "Reality.") */
    headlineLines: [
      "Transform your",
      "Ideas Into Digital",
      "Reality.",
    ],
    description:
      "We build robust, scalable IT solutions tailored to your unique business needs. From custom software development to cloud infrastructure, we provide the tech that drives your growth.",
    cta: {
      label: "About Us",
      href: "/about-us",
    },
  },

  /** Image alt text and asset paths */
  assets: ASSETS,
} as const;

export type Content = typeof content;
