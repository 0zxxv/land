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
    <form ref={formRef} className="flex flex-col gap-8" action={action}>
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

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="text-sm font-medium text-slate-700"
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
            className="rounded-3xl bg-white px-5 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146]/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-slate-700"
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
            className="rounded-3xl bg-white px-5 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146]/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-slate-700"
        >
          {form.messageLabel} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={8}
          required
          aria-required="true"
          placeholder={form.messagePlaceholder}
          maxLength={10000}
          className="w-full resize-y rounded-2xl bg-white px-5 py-4 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146]/20"
        />
      </div>

      <div className="flex justify-start pt-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-3xl bg-[#123146] px-12 py-2.5 text-base font-medium text-white shadow-md transition-all duration-200 hover:bg-[#0f2942] focus:outline-none focus:ring-2 focus:ring-[#123146] focus:ring-offset-2 disabled:opacity-70"
        >
          {pending ? "Sending\u2026" : form.submitLabel}
        </button>
      </div>
    </form>
  );
}
