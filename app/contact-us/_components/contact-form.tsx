"use client";

import { useActionState, useRef } from "react";
import { submitContactForm } from "../action";

type PhoneCountryOption = { value: string; label: string };

type FormConfig = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  phoneCountryOptions: readonly PhoneCountryOption[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
};

export function ContactForm({ form }: { form: FormConfig }) {
  const [state, action, pending] = useActionState(submitContactForm, null);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  if (state?.success && formRef.current) {
    formRef.current.reset();
  }

  return (
    <form ref={formRef} className="flex flex-col gap-5 sm:gap-8" action={action}>
      {/* Honeypot – hidden from users, catches bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

      {/* Status messages */}
      <div aria-live="polite" aria-atomic="true">
        {state?.success && (
          <div
            role="alert"
            className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
          >
            Thank you! Your message has been sent and we&apos;ll get back to
            you soon.
          </div>
        )}
        {state && !state.success && (
          <div
            role="alert"
            className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            {state.error}
          </div>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-8">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label
            htmlFor="contact-name"
            className="text-xs font-medium text-slate-700 dark:text-slate-300 sm:text-sm"
          >
            {form.nameLabel} <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            aria-required="true"
            placeholder={form.namePlaceholder}
            autoComplete="name"
            maxLength={100}
            className="rounded-2xl bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146]/20 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-sky-500/30 sm:rounded-3xl sm:px-5 sm:py-3 sm:text-base"
          />
        </div>
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label
            htmlFor="contact-email"
            className="text-xs font-medium text-slate-700 dark:text-slate-300 sm:text-sm"
          >
            {form.emailLabel} <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            aria-required="true"
            placeholder={form.emailPlaceholder}
            autoComplete="email"
            maxLength={254}
            className="rounded-2xl bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146]/20 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-sky-500/30 sm:rounded-3xl sm:px-5 sm:py-3 sm:text-base"
          />
        </div>
        <div className="flex flex-col gap-1.5 sm:gap-2 sm:col-span-2">
          <label
            htmlFor="contact-phone"
            className="text-xs font-medium text-slate-700 dark:text-slate-300 sm:text-sm"
          >
            {form.phoneLabel}
          </label>
          <div className="flex gap-2">
            <div className="relative w-[10rem] shrink-0 sm:w-[11rem]">
              <select
                id="contact-phone-country"
                name="phoneCountry"
                aria-label="Country code"
                defaultValue="+973"
                className="w-full appearance-none rounded-2xl bg-white py-2.5 pl-4 pr-9 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#123146]/20 dark:bg-slate-700 dark:text-slate-100 dark:focus:ring-sky-500/30 sm:rounded-3xl sm:py-3 sm:pl-5 sm:pr-10 sm:text-base"
              >
                {form.phoneCountryOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
            <input
              id="contact-phone"
              name="phoneNumber"
              type="tel"
              placeholder={form.phonePlaceholder}
              autoComplete="tel-national"
              maxLength={20}
              className="min-w-0 flex-1 rounded-2xl bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146]/20 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-sky-500/30 sm:rounded-3xl sm:px-5 sm:py-3 sm:text-base"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 sm:gap-2">
        <label
          htmlFor="contact-message"
          className="text-xs font-medium text-slate-700 dark:text-slate-300 sm:text-sm"
        >
          {form.messageLabel} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          aria-required="true"
          placeholder={form.messagePlaceholder}
          maxLength={10000}
          className="w-full resize-y rounded-xl bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146]/20 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-sky-500/30 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
        />
      </div>

      <div className="flex justify-center pt-2 sm:justify-start">
        <button
          type="submit"
          disabled={pending}
          className="min-h-[44px] rounded-2xl bg-[#123146] px-8 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-[#0f2942] focus:outline-none focus:ring-2 focus:ring-[#123146] focus:ring-offset-2 disabled:opacity-70 dark:bg-[#F3F4F6] dark:text-black dark:hover:bg-white dark:focus:ring-[#F3F4F6] sm:rounded-3xl sm:px-12 sm:text-base"
        >
          {pending ? "Sending\u2026" : form.submitLabel}
        </button>
      </div>
    </form>
  );
}
