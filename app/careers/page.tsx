import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import { JobListings } from "./_components/job-listings";
import { content } from "../content";
import { SlideUpOnScroll } from "../_components/slide-up-on-scroll";

const { careers, assets } = content;

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
  title: "Careers | MyntLabs",
  description: "Careers at MyntLabs.",
};

export default function CareersPage() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-white dark:bg-black">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="flex flex-1 flex-col">
        {/* First section – hero with dots background */}
        <section
          className="relative flex flex-col items-center justify-center bg-white px-4 pt-8 pb-16 dark:bg-black sm:px-8 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-36"
          aria-labelledby="careers-heading"
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
                {careers.label}
              </p>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={50}>
              <h1 id="careers-heading" className="mb-6 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:mb-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {careers.headlineLine1}
                <br />
                {careers.headlineLine2}
                <span className="font-newsreader font-medium italic text-slate-900 dark:text-slate-100">{careers.headlineItalic}</span>
              </h1>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={100}>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base md:text-xl lg:text-2xl">
                {careers.description}
              </p>
            </SlideUpOnScroll>
          </div>
        </section>

        {/* Second section – job listings */}
        <section
          className="bg-white px-4 py-12 pb-16 dark:bg-black sm:px-8 sm:py-16 sm:pb-24 lg:px-16 lg:py-20 lg:pb-36"
          aria-labelledby="jobs-heading"
        >
          <div className="mx-auto max-w-6xl">
            <JobListings
              jobs={careers.jobs}
              readMore={careers.readMore}
              iconBlue={assets.iconBlue}
              iconWhite={assets.iconWhite}
            />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
