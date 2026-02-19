"use client";

import { useState } from "react";

type FormConfig = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
};

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
  : "";

export function ContactForm({ form }: { form: FormConfig }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_URL) {
      setErrorMessage("Form is not configured. Add NEXT_PUBLIC_FORMSPREE_FORM_ID to .env");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    const formEl = e.currentTarget;
    const body = new FormData(formEl);
    try {
      const res = await fetch(FORMSPREE_URL, { method: "POST", body });
      if (res.ok) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
      {status === "success" && (
        <div role="alert" className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Thank you. Your message has been sent and we&apos;ll get back to you soon.
        </div>
      )}
      {status === "error" && errorMessage && (
        <div role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage}
        </div>
      )}
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">
            {form.nameLabel}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder={form.namePlaceholder}
            autoComplete="name"
            maxLength={100}
            className="rounded-3xl bg-white px-5 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146]/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">
            {form.emailLabel}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder={form.emailPlaceholder}
            autoComplete="email"
            maxLength={254}
            className="rounded-3xl bg-white px-5 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146]/20"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">
          {form.messageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={8}
          placeholder={form.messagePlaceholder}
          maxLength={10000}
          className="w-full resize-y rounded-2xl bg-white px-5 py-4 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146]/20"
        />
      </div>
      <div className="flex justify-start pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-3xl bg-[#123146] px-12 py-2.5 text-base font-medium text-white shadow-md transition-all duration-200 hover:bg-[#0f2942] focus:outline-none focus:ring-2 focus:ring-[#123146] focus:ring-offset-2 disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : form.submitLabel}
        </button>
      </div>
    </form>
  );
}
