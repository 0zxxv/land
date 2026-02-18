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
  rocket: "/assets/rocket.svg",
  eye: "/assets/eye.svg",
  criticalError: "/assets/critical-error.svg",
  /** Values section icons (order: Innovation First, Sovereign Excellence, Client Success, Collaborative Culture, Integrity & Trust, Agile Execution) */
  valuesInnovationFirst: "/assets/innovation first.svg",
  valuesSovereign: "/assets/sovereign excellence.svg",
  valuesClientSuccess: "/assets/client success.png",
  valuesCollaborative: "/assets/collaborative culture.svg",
  valuesIntegrityTrust: "/assets/integrity & trust.svg",
  valuesAgileExecution: "/assets/agile execution.svg",
  manama: "/assets/manama.svg",
  jellyLogo: "/assets/jelly logo.svg",
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
      href: "/contact-us",
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
        question: "Is our data secure?",
        answer:
          "Absolutely. Data security and privacy are fundamental to everything we do. We follow industry best practices and comply with regional data protection regulations. All data is encrypted, stored securely, and access is strictly controlled. We can also work with your existing security protocols to ensure complete compliance.",
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
