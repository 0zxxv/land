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
        <div className="mb-5 flex items-center justify-center gap-2 text-lg font-bold text-[#123146] sm:text-xl">
          <Image
            src={assets.iconBlue}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 object-contain sm:h-7 sm:w-7"
          />
          {faq.label}
        </div>
        <h2
          id="faq-heading"
          className="mb-4 text-center text-4xl font-bold text-slate-900 sm:text-5xl"
        >
          {faq.headingLine1}
          <br />
          {faq.headingLine2Regular}
          <span className="font-newsreader font-medium italic">{faq.headingLine2Italic}</span>
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
            <div className="absolute right-0 top-0 z-0">
              <Image
                src={assets.jellyLogo}
                alt=""
                width={360}
                height={360}
                className="h-56 w-56 object-contain object-right-top sm:h-64 sm:w-64 lg:h-72 lg:w-72"
              />
            </div>
            <div className="relative z-10 mt-auto flex w-full min-w-0 flex-col px-6 pb-8 pt-6 pr-[7rem] sm:pr-[8rem] lg:pr-[9rem]">
              <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                Question Answer:
              </h3>
              <p className="mb-6 max-w-full text-base leading-relaxed text-slate-600 sm:text-lg">
                {faq.questions[activeIndex].answer}
              </p>
              <Link
                href={faq.cta.href}
                className="inline-flex w-fit items-center gap-0 overflow-hidden rounded-lg bg-black outline-none transition-all duration-200 hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              >
                <span className="px-6 py-3 text-sm font-medium text-white">
                  {faq.cta.label}
                </span>
                <span className="flex h-full items-center justify-center bg-gray-600 px-3 py-3">
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
