"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "./faq-accordion";
import type { Content } from "../../content";

interface FAQSectionProps {
  faq: Content["faq"];
  assets: Content["assets"];
}

export function FAQSection({ faq, assets }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="bg-white px-8 py-16 pb-24 lg:px-16 lg:py-20 lg:pb-36"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-center justify-center gap-2 text-base font-bold text-[#123146]">
          <Image
            src={assets.iconBlue}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          {faq.label}
        </div>
        <h2
          id="faq-heading"
          className="mb-4 text-center text-4xl font-bold text-slate-900 sm:text-5xl"
        >
          {faq.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-slate-600 sm:text-xl">
          {faq.subtitle}
        </p>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col">
            <FAQAccordion
              questions={faq.questions}
              activeIndex={activeIndex}
              onActiveChange={setActiveIndex}
            />
          </div>
          <div className="relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl bg-[#F3F4F6] shadow-lg lg:min-h-0">
            <div className="absolute right-0 top-0">
              <Image
                src={assets.jellyLogo}
                alt=""
                width={280}
                height={280}
                className="h-44 w-44 object-contain object-right-top sm:h-52 sm:w-52 lg:h-60 lg:w-60"
              />
            </div>
            <div className="mt-auto flex w-full min-w-0 flex-col px-6 pb-8 pt-6 pr-[7rem] sm:pr-[8rem] lg:pr-[9rem]">
              <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                Question Answer:
              </h3>
              <p className="mb-6 max-w-full text-sm leading-snug text-slate-600">
                {faq.questions[activeIndex].answer}
              </p>
              <Link
                href={faq.cta.href}
                className="inline-flex w-fit items-center gap-0 overflow-hidden rounded-lg bg-slate-800 transition-all duration-200 hover:bg-slate-700"
              >
                <span className="px-6 py-3 text-sm font-medium text-white">
                  {faq.cta.label}
                </span>
                <span className="flex h-full items-center justify-center bg-slate-600 px-3 py-3">
                  <Image
                    src={assets.arrowWhite}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 rotate-45 object-contain"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
