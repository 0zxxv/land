import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import { JobListings } from "./_components/job-listings";
import { content } from "../content";

const { careers, assets } = content;

const DOTS_BG_STYLE = {
  backgroundImage: "url('/assets/bg-dots.svg')",
  backgroundRepeat: "repeat" as const,
  backgroundColor: "#ffffff",
  transform: "rotate(180deg)",
};

export const metadata: Metadata = {
  title: "Careers | MyntLabs",
  description: "Careers at MyntLabs.",
};

export default function CareersPage() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-white">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <main className="flex flex-1 flex-col">
        {/* First section – hero with dots background */}
        <section
          className="relative flex flex-col items-center justify-center px-8 pt-12 pb-24 lg:pt-16 lg:pb-36"
          aria-labelledby="careers-heading"
        >
          <div
            className="absolute inset-0 -z-0"
            style={DOTS_BG_STYLE}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-7xl text-center sm:max-w-[90rem]">
            <p className="mb-8 flex items-center justify-center gap-2 text-lg font-bold text-[#123146]">
              <Image
                src={assets.iconBlue}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              {careers.label}
            </p>
            <h1
              id="careers-heading"
              className="mb-10 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            >
              {careers.headlineLine1}
              <br />
              {careers.headlineLine2}
              <span className="font-newsreader font-medium italic text-slate-900">
                {careers.headlineItalic}
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600 sm:text-2xl">
              {careers.description}
            </p>
          </div>
        </section>

        {/* Second section – job listings */}
        <section
          className="bg-white px-8 py-16 pb-24 lg:px-16 lg:py-20 lg:pb-36"
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
