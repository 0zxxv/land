import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import { content } from "../content";
import { ContactForm } from "./_components/contact-form";
import { SlideUpOnScroll } from "../_components/slide-up-on-scroll";

const { contactUs, assets } = content;

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
  title: "Contact Us | MyntLabs",
  description: "Get in touch with MyntLabs.",
};

export default function ContactUsPage() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-white dark:bg-black">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="flex flex-1 flex-col">
        {/* First section – Contact form */}
        <section
          className="relative flex flex-col items-center bg-white px-4 pt-8 pb-16 dark:bg-black sm:px-8 sm:pt-12 sm:pb-24 lg:px-16 lg:pt-16 lg:pb-36"
          aria-labelledby="contact-heading"
        >
          <div className="absolute left-0 right-0 top-0 h-[min(60vh,420px)] bg-white dark:hidden" style={DOTS_BG_STYLE} aria-hidden />
          <div className="absolute left-0 right-0 top-0 hidden h-[min(60vh,420px)] dark:block dark:opacity-100" style={DOTS_BG_STYLE_DARK} aria-hidden />
          <div className="relative z-10 mx-auto w-full max-w-4xl">
            <SlideUpOnScroll delay={0}>
              <p className="mb-4 flex items-center justify-center gap-2 text-sm font-bold text-[#123146] dark:text-[#F3F4F6] sm:mb-5 sm:text-lg">
                <Image src={assets.iconBlue} alt="" width={24} height={24} className="h-5 w-5 object-contain dark:hidden sm:h-6 sm:w-6" />
                <Image src={assets.iconWhite} alt="" width={24} height={24} className="hidden h-5 w-5 object-contain dark:block sm:h-6 sm:w-6" />
                {contactUs.label}
              </p>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={50}>
              <h1 id="contact-heading" className="mb-3 text-center text-2xl font-semibold text-slate-900 dark:text-slate-100 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
                {contactUs.headingLine1}{" "}
                <span className="font-newsreader font-medium italic">{contactUs.headingLine2Italic}</span>
              </h1>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={100}>
              <p className="mb-8 text-center text-sm text-slate-600 dark:text-slate-400 sm:mb-10 sm:text-base md:text-lg">
                {contactUs.subtitle}
              </p>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={150}>
              <div className="rounded-2xl bg-[#F5F5F5] p-5 shadow-lg dark:bg-slate-800 sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
                <ContactForm form={contactUs.form} />
              </div>
            </SlideUpOnScroll>
          </div>

          {/* Second section – contact info cards (full width) */}
          <div
            className="mt-12 w-full px-4 sm:mt-16 sm:px-8 lg:mt-20 lg:px-16"
            aria-label="Contact information"
          >
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {contactUs.contactInfo.map((card, i) => (
                <SlideUpOnScroll key={card.title} delay={i * 80}>
                  <div className="flex min-h-[160px] min-w-0 flex-col rounded-xl bg-[#F1F5F9] p-4 text-center text-slate-900 shadow-sm dark:bg-slate-800 sm:min-h-[200px] sm:rounded-2xl sm:p-6 sm:text-left">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">{card.title}</h3>
                    <p className="mt-auto whitespace-pre-line pt-2 text-xs leading-relaxed text-slate-900 dark:text-slate-300 sm:text-sm md:text-base">{card.content}</p>
                  </div>
                </SlideUpOnScroll>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
