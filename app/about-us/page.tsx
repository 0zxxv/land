import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../_components/header";
import { content } from "../content";
import { formatCardTitleLines } from "../lib/utils";
import { Footer } from "../_components/footer";
import { FAQSection } from "./_components/faq-section";
import { AutoplayVideo } from "../_components/autoplay-video";
import { SlideUpOnScroll } from "../_components/slide-up-on-scroll";

const { aboutUs, purpose, values, regionalPresence, faq, assets } = content;

const DOTS_BG_STYLE = {
  backgroundImage: "url('/assets/bg-dots.svg')",
  backgroundRepeat: "repeat" as const,
  transform: "rotate(180deg)",
};

const DOTS_BG_STYLE_DARK = {
  backgroundImage: "url('/assets/bg-dots-white.svg')",
  backgroundRepeat: "repeat" as const,
  transform: "rotate(180deg)",
};

export const metadata: Metadata = {
  title: "About Us | MyntLabs",
  description: "Learn more about MyntLabs.",
};

export default function AboutUsPage() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-white dark:bg-black">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main>
        {/* Hero section */}
        <section
          className="relative flex flex-col items-center justify-center bg-white px-4 pt-8 pb-16 dark:bg-black sm:px-8 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-36"
          aria-labelledby="about-heading"
        >
          <div
            className="absolute inset-0 bg-white dark:hidden"
            style={DOTS_BG_STYLE}
            aria-hidden
          />
          <div
            className="absolute inset-0 hidden dark:block dark:opacity-100"
            style={DOTS_BG_STYLE_DARK}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-7xl text-center sm:max-w-[90rem]">
            <SlideUpOnScroll delay={0}>
              <p className="mb-5 flex items-center justify-center gap-2 text-sm font-bold text-[#123146] dark:text-[#F3F4F6] sm:mb-8 sm:text-lg">
                <Image src={assets.iconBlue} alt="" width={24} height={24} className="h-5 w-5 object-contain dark:hidden sm:h-6 sm:w-6" />
                <Image src={assets.iconWhite} alt="" width={24} height={24} className="hidden h-5 w-5 object-contain dark:block sm:h-6 sm:w-6" />
                {aboutUs.label}
              </p>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={50}>
              <h1 id="about-heading" className="mb-6 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:mb-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {aboutUs.headlineLines[0]}
                <br />
                {aboutUs.headlineLines[1]}{" "}
                <span className="font-newsreader font-medium italic text-slate-900 dark:text-slate-100">{aboutUs.headlineItalic}</span>
              </h1>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={100}>
              <p className="mx-auto mb-10 max-w-6xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-14 sm:text-base md:text-xl lg:text-2xl">
                {aboutUs.descriptionLines[0]}
                <br />
                {aboutUs.descriptionLines[1]}
              </p>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={150}>
              <Link href={aboutUs.cta.href} className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3.5 text-base font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:bg-gray-900 hover:shadow-xl active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-slate-200 sm:px-10 sm:py-5 sm:text-xl">
                {aboutUs.cta.label}
              </Link>
            </SlideUpOnScroll>
          </div>
        </section>

        {/* Purpose section */}
        <section
          className="bg-white px-4 pt-8 pb-16 dark:bg-black sm:px-8 sm:pt-10 sm:pb-24 lg:px-16 lg:pt-14 lg:pb-36"
          aria-labelledby="purpose-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch lg:gap-16">
            <div className="flex flex-col text-center sm:text-left">
              <SlideUpOnScroll delay={0}>
                <h2 id="purpose-heading" className="mb-6 text-2xl font-medium text-slate-900 dark:text-slate-100 sm:mb-10 sm:text-3xl md:text-4xl lg:text-5xl">
                  {purpose.heading.split(" ")[0]}
                  <br />
                  <span className="font-newsreader italic dark:text-slate-100">{purpose.headingItalic}.</span>
                </h2>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={50}>
                <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-8 sm:text-base md:text-lg">
                  {purpose.paragraph}
                </p>
              </SlideUpOnScroll>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <SlideUpOnScroll delay={100}>
                  <article className="group flex flex-col items-center rounded-xl bg-slate-100 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800 sm:items-start sm:p-5 sm:text-left hover:dark:bg-slate-700/90">
                    <Image src={assets.rocket} alt="" width={32} height={32} className="mb-2 h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 dark:hidden sm:mb-3 sm:h-8 sm:w-8" />
                    <Image src={assets.rocketWhite} alt="" width={32} height={32} className="mb-2 hidden h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 dark:block sm:mb-3 sm:h-8 sm:w-8" />
                    <h3 className="mb-1.5 text-sm font-bold text-slate-900 dark:text-slate-100 sm:mb-2 sm:text-base">{purpose.mission.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">{purpose.mission.description}</p>
                  </article>
                </SlideUpOnScroll>
                <SlideUpOnScroll delay={150}>
                  <article className="group flex flex-col items-center rounded-xl bg-slate-100 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800 sm:items-start sm:p-5 sm:text-left hover:dark:bg-slate-700/90">
                    <Image src={assets.eye} alt="" width={32} height={32} className="mb-2 h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 dark:hidden sm:mb-3 sm:h-8 sm:w-8" />
                    <Image src={assets.eyeWhite} alt="" width={32} height={32} className="mb-2 hidden h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 dark:block sm:mb-3 sm:h-8 sm:w-8" />
                    <h3 className="mb-1.5 text-sm font-bold text-slate-900 dark:text-slate-100 sm:mb-2 sm:text-base">{purpose.vision.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">{purpose.vision.description}</p>
                  </article>
                </SlideUpOnScroll>
              </div>
            </div>
            <SlideUpOnScroll delay={100}>
              <div className="group flex min-h-[220px] items-center justify-center rounded-2xl bg-white transition-transform duration-300 hover:scale-[1.02] dark:bg-black sm:min-h-[280px] md:min-h-[320px] lg:min-h-0">
                <AutoplayVideo
                  src="/assets/pixel-video-white.mp4"
                  className="h-[280px] w-[280px] object-contain dark:hidden sm:h-[450px] sm:w-[450px] lg:h-[550px] lg:w-[550px]"
                  ariaHidden
                />
                <AutoplayVideo
                  src="/assets/pixel-video-dark.mp4"
                  className="hidden h-[280px] w-[280px] object-contain dark:block sm:h-[450px] sm:w-[450px] lg:h-[550px] lg:w-[550px]"
                  ariaHidden
                />
              </div>
            </SlideUpOnScroll>
          </div>
        </section>

        {/* Values section */}
        <section
          className="bg-white px-4 py-12 pb-16 dark:bg-black sm:px-8 sm:py-16 sm:pb-24 lg:px-16 lg:py-20 lg:pb-36"
          aria-labelledby="values-heading"
        >
          <div className="mx-auto max-w-6xl">
            <SlideUpOnScroll delay={0}>
              <div className="mb-4 text-center sm:mb-5">
                <h2 id="values-heading" className="mb-1 text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl lg:text-5xl">
                  {values.headingLine1}
                </h2>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl lg:text-5xl">
                  {values.headingLine2.split(" ")[0]}{" "}
                  <span className="font-newsreader font-medium italic">{values.headingLine2.split(" ").slice(1).join(" ")}</span>
                </p>
              </div>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={50}>
              <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-12 sm:text-base md:text-lg lg:text-xl">
                {values.subtitleLines[0]}
                <br />
                {values.subtitleLines[1]}
              </p>
            </SlideUpOnScroll>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {values.cards.map((card, i) => {
                const iconKey = values.iconKeys[i];
                const iconKeyWhite = values.iconKeysWhite[i];
                const iconSrc = iconKey ? assets[iconKey] : undefined;
                const iconSrcWhite = iconKeyWhite ? assets[iconKeyWhite] : undefined;
                return (
                  <SlideUpOnScroll key={card.title} delay={100 + i * 45}>
                    <article className="group flex min-h-[220px] flex-col items-center rounded-xl bg-slate-100 p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:bg-slate-800 sm:min-h-[250px] sm:items-start sm:p-8 sm:text-left hover:dark:bg-slate-700/90">
                      {iconSrc && <Image src={iconSrc} alt="" width={48} height={48} className="mb-4 h-9 w-9 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110 dark:hidden sm:mb-8 sm:h-10 sm:w-10" />}
                      {iconSrcWhite && <Image src={iconSrcWhite} alt="" width={48} height={48} className="mb-4 hidden h-9 w-9 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110 dark:block sm:mb-8 sm:h-10 sm:w-10" />}
                      <h3 className="mb-1.5 shrink-0 text-base font-bold leading-tight text-slate-900 dark:text-slate-100 sm:mb-2 sm:text-xl">
                        {formatCardTitleLines(card.title).map((line, j) => (
                          <span key={j} className="block">{line}</span>
                        ))}
                      </h3>
                      <p className="mt-auto text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">{card.description}</p>
                    </article>
                  </SlideUpOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regional Presence section */}
        <section
          className="bg-white px-4 py-12 pb-16 dark:bg-black sm:px-8 sm:py-16 sm:pb-24 lg:px-16 lg:py-20 lg:pb-36"
          aria-labelledby="regional-heading"
        >
          <div className="mx-auto max-w-6xl">
            <SlideUpOnScroll delay={0}>
              <div className="mb-4 text-center sm:mb-5">
                <h2 id="regional-heading" className="mb-1 text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl lg:text-5xl">
                  {regionalPresence.headingLine1}{" "}
                  <span className="font-newsreader font-medium italic">{regionalPresence.headingLine2}</span>
                </h2>
              </div>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={50}>
              <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-12 sm:text-base md:text-lg lg:text-xl">
                {regionalPresence.subtitle}
              </p>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={100}>
              <div className="overflow-hidden rounded-xl bg-[#F3F4F6] shadow-lg dark:bg-slate-800 sm:rounded-2xl">
                <div className="relative px-4 pt-4 sm:px-6 sm:pt-6">
                  <Image src={assets.manama} alt={`${regionalPresence.location.city} cityscape`} width={1200} height={600} className="h-auto w-full rounded-lg object-cover" />
                </div>
                <div className="px-4 pb-6 pt-4 text-center sm:px-6 sm:pb-8 sm:pt-6 sm:text-left">
                  <h3 className="mb-1 text-base font-bold text-slate-900 dark:text-slate-100 sm:text-xl">{regionalPresence.location.city}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 sm:text-sm">{regionalPresence.location.description}</p>
                </div>
              </div>
            </SlideUpOnScroll>
          </div>
        </section>

        {/* FAQ section */}
        <SlideUpOnScroll>
          <FAQSection faq={faq} assets={assets} />
        </SlideUpOnScroll>
        <Footer />
      </main>
    </div>
  );
}
