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
    "Home",
    "Services",
    "How It Works",
    "Industries",
    "Our Team",
    "About Us",
  ],

  /** Header CTA button */
  headerCta: {
    label: "Contact Us",
    href: "#contact",
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
      href: "#about",
    },
  },

  /** Our Services section */
  services: {
    tagline: "Our services",
    title: "Practical AI solutions built for",
    titleHighlight: "real business needs",
    subtitle:
      "We design and deploy AI systems that automate work, improve efficiency, and scale with your business.",
    cards: [
      {
        title: "AI Agent Development",
        description:
          "Automate customer support, internal processes, and data handling using agents trained on your workflows.",
      },
      {
        title: "AI Workflow Automation",
        description:
          "We connect AI with your existing tools to streamline processes and improve speed and accuracy.",
      },
      {
        title: "Enterprise AI Integration",
        description:
          "Seamless integration with CRMs, ERPs, databases, and internal platforms without disruption.",
      },
      {
        title: "AI Consulting & Strategy",
        description:
          "We identify the right AI use cases and create a practical roadmap aligned with your business goals.",
      },
      {
        title: "Custom AI Solutions",
        description:
          "From internal tools to customer facing AI products, everything is designed around your needs.",
      },
      {
        title: "AI Maintenance & Support",
        description:
          "Ongoing monitoring, optimization, and improvements to ensure long term performance.",
      },
    ],
  },

  /** Image alt text and asset paths */
  assets: ASSETS,
} as const;

export type Content = typeof content;
