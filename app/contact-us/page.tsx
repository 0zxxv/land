import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import { content } from "../content";
import { ContactForm } from "./_components/contact-form";

const { contactUs, assets } = content;

export const metadata: Metadata = {
  title: "Contact Us | MyntLabs",
  description: "Get in touch with MyntLabs.",
};

export default function ContactUsPage() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-white">
      <Header />
      <main className="flex flex-1 flex-col">
        {/* First section – Contact form */}
        <section
          className="flex flex-col items-center px-8 pt-12 pb-24 lg:px-16 lg:pt-16 lg:pb-36"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto w-full max-w-4xl">
            <p className="mb-5 flex items-center justify-center gap-2 text-lg font-bold text-[#123146]">
              <Image
                src={assets.iconBlue}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              {contactUs.label}
            </p>
            <h1
              id="contact-heading"
              className="mb-4 text-center text-4xl font-semibold text-slate-900 sm:text-5xl"
            >
              {contactUs.headingLine1}{" "}
              <span className="font-newsreader font-medium italic">
                {contactUs.headingLine2Italic}
              </span>
            </h1>
            <p className="mb-10 text-center text-lg text-slate-600">
              {contactUs.subtitle}
            </p>

            <div className="rounded-3xl bg-[#F5F5F5] p-10 shadow-lg sm:p-12">
              <ContactForm form={contactUs.form} />
            </div>
          </div>

          {/* Second section – contact info cards (full width) */}
          <div
            className="mt-50 w-full px-8 lg:px-16"
            aria-label="Contact information"
          >
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactUs.contactInfo.map((card) => (
                <div
                  key={card.title}
                  className="flex min-h-[200px] min-w-0 flex-col rounded-2xl bg-[#F1F5F9] p-6 text-slate-900 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-auto whitespace-pre-line text-base leading-relaxed text-slate-900">
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
