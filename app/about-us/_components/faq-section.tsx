"use client";

import { useState } from "react";
import Image from "next/image";
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
      className="bg-white px-4 py-12 pb-16 dark:bg-navy sm:px-8 sm:py-16 sm:pb-24 lg:px-16 lg:py-20 lg:pb-36"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-center gap-2 text-sm font-bold text-[#123146] dark:text-sky-400 sm:mb-5 sm:text-lg md:text-xl">
          <Image
            src={assets.iconBlue}
            alt=""
            width={24}
            height={24}
            className="h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7"
          />
          {faq.label}
        </div>
        <h2
          id="faq-heading"
          className="mb-3 text-center text-2xl font-bold text-slate-900 dark:text-slate-100 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {faq.headingLine1}
          <br />
          {faq.headingLine2Regular}
          <span className="font-newsreader font-medium italic">{faq.headingLine2Italic}</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-12 sm:text-base md:text-lg lg:text-xl">
          {faq.subtitle}
        </p>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <div className="flex flex-col">
            <FAQAccordion
              questions={faq.questions}
              activeIndex={activeIndex}
              onActiveChange={setActiveIndex}
            />
          </div>
          <div className="relative flex min-h-[280px] flex-col overflow-hidden rounded-xl bg-[#F3F4F6] shadow-lg dark:bg-slate-800 sm:min-h-[320px] sm:rounded-2xl lg:min-h-0">
            <div className="absolute right-0 top-0 z-0">
              <Image
                src={assets.jellyLogo}
                alt=""
                width={360}
                height={360}
                className="h-40 w-40 object-contain object-right-top sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72"
              />
            </div>
            <div className="relative z-10 mt-auto flex w-full min-w-0 flex-col px-4 pb-6 pt-4 pr-[5rem] sm:px-6 sm:pb-8 sm:pt-6 sm:pr-[7rem] md:pr-[8rem] lg:pr-[9rem]">
              <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-slate-100 sm:mb-3 sm:text-xl md:text-2xl">
                Question Answer:
              </h3>
              <p className="mb-4 max-w-full text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-6 sm:text-sm md:text-base lg:text-lg">
                {faq.questions[activeIndex].answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
