import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../_components/header";
import { content } from "../content";
import { renderCardTitle } from "../lib/utils";

const { aboutUs, purpose, values, assets } = content;

const DOTS_SECTION_STYLE = {
  backgroundImage: "url('/assets/bg-dots.png')",
  backgroundRepeat: "repeat" as const,
  backgroundColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "About Us | MyntLabs",
  description: "Learn more about MyntLabs.",
};

export default function AboutUsPage() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-white">
      <Header />
      <main>
        {/* Hero section */}
        <section
          className="flex flex-col items-center justify-center px-8 pt-12 pb-24 lg:pt-16 lg:pb-36"
          style={DOTS_SECTION_STYLE}
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-7xl text-center sm:max-w-[90rem]">
            <p className="mb-8 flex items-center justify-center gap-2 text-lg font-bold text-[#123146]">
              <Image
                src={assets.iconBlue}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              {aboutUs.label}
            </p>
            <h1
              id="about-heading"
              className="mb-10 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            >
              {aboutUs.headlineLines[0]}
              <br />
              {aboutUs.headlineLines[1]}{" "}
              <span className="font-newsreader font-medium italic text-slate-900">
                {aboutUs.headlineItalic}
              </span>
            </h1>
            <p className="mx-auto mb-14 max-w-6xl text-xl leading-relaxed text-slate-600 sm:text-2xl">
              {aboutUs.descriptionLines[0]}
              <br />
              {aboutUs.descriptionLines[1]}
            </p>
            <Link
              href={aboutUs.cta.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-10 py-5 text-xl font-medium text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-gray-900 hover:shadow-xl active:scale-[0.98]"
            >
              {aboutUs.cta.label}
            </Link>
          </div>
        </section>

        {/* Purpose section */}
        <section
          className="bg-white px-8 pt-10 pb-24 lg:px-16 lg:pt-14 lg:pb-36"
          aria-labelledby="purpose-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch lg:gap-16">
            <div className="flex flex-col">
              <h2
                id="purpose-heading"
                className="mb-10 text-4xl font-medium text-slate-900 sm:text-5xl"
              >
                {purpose.heading.split(" ")[0]}
                <br />
                <span className="font-newsreader italic">
                  {purpose.headingItalic}.
                </span>
              </h2>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
                {purpose.paragraph}
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <article className="rounded-xl bg-slate-100 p-5">
                  <Image
                    src={assets.rocket}
                    alt=""
                    width={32}
                    height={32}
                    className="mb-3 h-8 w-8 object-contain"
                  />
                  <h3 className="mb-2 text-base font-bold text-slate-900">
                    {purpose.mission.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {purpose.mission.description}
                  </p>
                </article>
                <article className="rounded-xl bg-slate-100 p-5">
                  <Image
                    src={assets.eye}
                    alt=""
                    width={32}
                    height={32}
                    className="mb-3 h-8 w-8 object-contain"
                  />
                  <h3 className="mb-2 text-base font-bold text-slate-900">
                    {purpose.vision.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {purpose.vision.description}
                  </p>
                </article>
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[320px] lg:min-h-0">
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
          className="bg-white px-8 py-16 pb-24 lg:px-16 lg:py-20 lg:pb-36"
          aria-labelledby="values-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-5 text-center">
              <h2
                id="values-heading"
                className="mb-1 text-4xl font-bold text-slate-900 sm:text-5xl"
              >
                {values.headingLine1}
              </h2>
              <p className="text-4xl font-bold text-slate-900 sm:text-5xl">
                {values.headingLine2.split(" ")[0]}{" "}
                <span className="font-newsreader font-medium italic">
                  {values.headingLine2.split(" ").slice(1).join(" ")}
                </span>
              </p>
            </div>
            <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-slate-600 sm:text-xl">
              {values.subtitleLines[0]}
              <br />
              {values.subtitleLines[1]}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.cards.map((card, i) => {
                const iconKey = values.iconKeys[i];
                const iconSrc = iconKey ? assets[iconKey] : undefined;
                return (
                  <article
                    key={card.title}
                    className="min-h-[250px] rounded-xl bg-slate-100 p-8"
                  >
                    {iconSrc && (
                      <Image
                        src={iconSrc}
                        alt=""
                        width={48}
                        height={48}
                        className="mb-8 h-10 w-10 object-contain"
                      />
                    )}
                    <h3 className="mb-2 text-xl font-bold leading-tight text-slate-900">
                      {renderCardTitle(card.title)}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
