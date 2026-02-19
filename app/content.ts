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
  valuesClientSuccess: "/assets/client success.svg",
  valuesCollaborative: "/assets/collaborative culture.svg",
  valuesIntegrityTrust: "/assets/integrity & trust.svg",
  valuesAgileExecution: "/assets/agile execution.svg",
  manama: "/assets/manama.svg",
  jellyLogo: "/assets/jelly logo.svg",
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
      messageLabel: "your message",
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
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
      },
      {
        title: "UI UX DESIGNER",
        company: "Google",
        applicants: 25,
        tags: ["Remote", "Full time", "Entry Level"],
        descriptionSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "$2500/hr",
        postedDays: 12,
        location: "Sanderson 812 NT",
        postedDate: "03-24-2023",
        jobType: "Shiftbased",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        recruitersInfo: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        shiftDetails: [
          { day: "Sunday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Monday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Tuesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Wednesday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Thursday", date: "29 Dec, 2024", time: "09:00am - 05:00pm" },
          { day: "Friday", date: "29 Dec, 2024", time: "Closed" },
          { day: "Saturday", date: "29 Dec, 2024", time: "Closed" },
        ],
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
