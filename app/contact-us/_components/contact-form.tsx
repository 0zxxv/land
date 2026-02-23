"use client";

import { useActionState, useRef } from "react";
import { submitContactForm } from "../action";

type FormConfig = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
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
          className="min-h-[44px] rounded-2xl bg-[#123146] px-8 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-[#0f2942] focus:outline-none focus:ring-2 focus:ring-[#123146] focus:ring-offset-2 disabled:opacity-70 dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-500 sm:rounded-3xl sm:px-12 sm:text-base"
        >
          {pending ? "Sending\u2026" : form.submitLabel}
        </button>
      </div>
    </form>
  );
}
