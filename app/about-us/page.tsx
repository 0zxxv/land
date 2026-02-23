import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../_components/header";
import { content } from "../content";
import { formatCardTitleLines } from "../lib/utils";
import { Footer } from "../_components/footer";
import { FAQSection } from "./_components/faq-section";

const { aboutUs, purpose, values, regionalPresence, faq, assets } = content;

const DOTS_BG_STYLE = {
  backgroundImage: "url('/assets/bg-dots.svg')",
  backgroundRepeat: "repeat" as const,
  transform: "rotate(180deg)",
};

export const metadata: Metadata = {
  title: "About Us | MyntLabs",
  description: "Learn more about MyntLabs.",
};

export default function AboutUsPage() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-white dark:bg-navy">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main>
        {/* Hero section */}
        <section
          className="relative flex flex-col items-center justify-center px-4 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-36"
          aria-labelledby="about-heading"
        >
          <div
            className="absolute inset-0 -z-0 bg-white dark:bg-transparent dark:opacity-10"
            style={DOTS_BG_STYLE}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-7xl text-center sm:max-w-[90rem]">
            <p className="mb-5 flex items-center justify-center gap-2 text-sm font-bold text-[#123146] dark:text-sky-400 sm:mb-8 sm:text-lg">
              <Image
                src={assets.iconBlue}
                alt=""
                width={24}
                height={24}
                className="h-5 w-5 object-contain sm:h-6 sm:w-6"
              />
              {aboutUs.label}
            </p>
            <h1
              id="about-heading"
              className="mb-6 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:mb-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {aboutUs.headlineLines[0]}
              <br />
              {aboutUs.headlineLines[1]}{" "}
              <span className="font-newsreader font-medium italic text-slate-900 dark:text-slate-100">
                {aboutUs.headlineItalic}
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-6xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-14 sm:text-base md:text-xl lg:text-2xl">
              {aboutUs.descriptionLines[0]}
              <br />
              {aboutUs.descriptionLines[1]}
            </p>
            <Link
              href={aboutUs.cta.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3.5 text-base font-medium text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-gray-900 hover:shadow-xl active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-slate-200 sm:px-10 sm:py-5 sm:text-xl"
            >
              {aboutUs.cta.label}
            </Link>
          </div>
        </section>

        {/* Purpose section */}
        <section
          className="bg-white px-4 pt-8 pb-16 dark:bg-navy sm:px-8 sm:pt-10 sm:pb-24 lg:px-16 lg:pt-14 lg:pb-36"
          aria-labelledby="purpose-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch lg:gap-16">
            <div className="flex flex-col text-center sm:text-left">
              <h2
                id="purpose-heading"
                className="mb-6 text-2xl font-medium text-slate-900 dark:text-slate-100 sm:mb-10 sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {purpose.heading.split(" ")[0]}
                <br />
                <span className="font-newsreader italic dark:text-slate-100">
                  {purpose.headingItalic}.
                </span>
              </h2>
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-8 sm:text-base md:text-lg">
                {purpose.paragraph}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <article className="flex flex-col items-center rounded-xl bg-slate-100 p-4 text-center dark:bg-slate-800 sm:items-start sm:p-5 sm:text-left">
                  <Image
                    src={assets.rocket}
                    alt=""
                    width={32}
                    height={32}
                    className="mb-2 h-7 w-7 object-contain sm:mb-3 sm:h-8 sm:w-8"
                  />
                  <h3 className="mb-1.5 text-sm font-bold text-slate-900 dark:text-slate-100 sm:mb-2 sm:text-base">
                    {purpose.mission.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                    {purpose.mission.description}
                  </p>
                </article>
                <article className="flex flex-col items-center rounded-xl bg-slate-100 p-4 text-center dark:bg-slate-800 sm:items-start sm:p-5 sm:text-left">
                  <Image
                    src={assets.eye}
                    alt=""
                    width={32}
                    height={32}
                    className="mb-2 h-7 w-7 object-contain sm:mb-3 sm:h-8 sm:w-8"
                  />
                  <h3 className="mb-1.5 text-sm font-bold text-slate-900 dark:text-slate-100 sm:mb-2 sm:text-base">
                    {purpose.vision.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                    {purpose.vision.description}
                  </p>
                </article>
              </div>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[280px] md:min-h-[320px] lg:min-h-0">
              <Image
                src={assets.criticalError}
                alt="Team member at computer with critical error visualization"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Values section */}
        <section
          className="bg-white px-4 py-12 pb-16 dark:bg-navy sm:px-8 sm:py-16 sm:pb-24 lg:px-16 lg:py-20 lg:pb-36"
          aria-labelledby="values-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 text-center sm:mb-5">
              <h2
                id="values-heading"
                className="mb-1 text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {values.headingLine1}
              </h2>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl lg:text-5xl">
                {values.headingLine2.split(" ")[0]}{" "}
                <span className="font-newsreader font-medium italic">
                  {values.headingLine2.split(" ").slice(1).join(" ")}
                </span>
              </p>
            </div>
            <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-12 sm:text-base md:text-lg lg:text-xl">
              {values.subtitleLines[0]}
              <br />
              {values.subtitleLines[1]}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {values.cards.map((card, i) => {
                const iconKey = values.iconKeys[i];
                const iconSrc = iconKey ? assets[iconKey] : undefined;
                return (
                  <article
                    key={card.title}
                    className="flex min-h-[220px] flex-col items-center rounded-xl bg-slate-100 p-5 text-center dark:bg-slate-800 sm:min-h-[250px] sm:items-start sm:p-8 sm:text-left"
                  >
                    {iconSrc && (
                      <Image
                        src={iconSrc}
                        alt=""
                        width={48}
                        height={48}
                        className="mb-4 h-9 w-9 shrink-0 object-contain sm:mb-8 sm:h-10 sm:w-10"
                      />
                    )}
                    <h3 className="mb-1.5 shrink-0 text-base font-bold leading-tight text-slate-900 dark:text-slate-100 sm:mb-2 sm:text-xl">
                      {formatCardTitleLines(card.title).map((line, j) => (
                      <span key={j} className="block">
                        {line}
                      </span>
                    ))}
                    </h3>
                    <p className="mt-auto text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regional Presence section */}
        <section
          className="bg-white px-4 py-12 pb-16 dark:bg-navy sm:px-8 sm:py-16 sm:pb-24 lg:px-16 lg:py-20 lg:pb-36"
          aria-labelledby="regional-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 text-center sm:mb-5">
              <h2
                id="regional-heading"
                className="mb-1 text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {regionalPresence.headingLine1}{" "}
                <span className="font-newsreader font-medium italic">
                  {regionalPresence.headingLine2}
                </span>
              </h2>
            </div>
            <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-12 sm:text-base md:text-lg lg:text-xl">
              {regionalPresence.subtitle}
            </p>
            <div className="overflow-hidden rounded-xl bg-[#F3F4F6] shadow-lg dark:bg-slate-800 sm:rounded-2xl">
              <div className="relative px-4 pt-4 sm:px-6 sm:pt-6">
                <Image
                  src={assets.manama}
                  alt={`${regionalPresence.location.city} cityscape`}
                  width={1200}
                  height={600}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
              <div className="px-4 pb-6 pt-4 text-center sm:px-6 sm:pb-8 sm:pt-6 sm:text-left">
                <h3 className="mb-1 text-base font-bold text-slate-900 dark:text-slate-100 sm:text-xl">
                  {regionalPresence.location.city}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
                  {regionalPresence.location.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <FAQSection faq={faq} assets={assets} />
        <Footer />
      </main>
    </div>
  );
}
