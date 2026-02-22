"use client";

import { useState, useRef } from "react";

export function CareerApplicationForm() {
  const [additionalQuestion, setAdditionalQuestion] = useState<string>("");
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <section
      className="px-4 pt-4 pb-16 sm:px-8 sm:pb-24 lg:px-16 lg:pb-36"
      aria-labelledby="form-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl bg-[#F5F5F5] p-5 shadow-sm sm:rounded-[2rem] sm:p-8 md:p-10">
          <h2
            id="form-heading"
            className="mb-6 text-center text-base font-bold uppercase tracking-wide text-slate-900 sm:mb-8 sm:text-xl"
          >
            Fill the form
          </h2>
          <form
            className="flex flex-col gap-4 sm:gap-6"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label htmlFor="career-email" className="text-xs font-medium text-slate-700 sm:text-sm">
                Email Address
              </label>
              <input
                id="career-email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="rounded-full border-0 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146] focus:ring-offset-0 sm:py-3 sm:text-base"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label htmlFor="career-country-code" className="text-xs font-medium text-slate-700 sm:text-sm">
                  Country Code
                </label>
                <input
                  id="career-country-code"
                  name="countryCode"
                  type="text"
                  placeholder="Enter country code"
                  className="rounded-full border-0 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146] focus:ring-offset-0 sm:py-3 sm:text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label htmlFor="career-phone" className="text-xs font-medium text-slate-700 sm:text-sm">
                  Mobile Phone Number
                </label>
                <input
                  id="career-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="rounded-full border-0 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146] focus:ring-offset-0 sm:py-3 sm:text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-xs font-medium text-slate-700 sm:text-sm">
                Cv
              </label>
              <p className="text-xs text-slate-600 sm:text-sm">Upload an updated CV *</p>
              <input
                ref={fileInputRef}
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                className="hidden"
                aria-required
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex min-h-[100px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white py-6 text-sm text-slate-500 transition-colors hover:border-[#123146] hover:bg-slate-50 hover:text-slate-700 sm:min-h-[120px] sm:py-8"
              >
                Upload Here
              </button>
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-xs font-medium text-slate-700 sm:text-sm">
                Additional questions
              </label>
              <div className="flex gap-4 sm:gap-6">
                <label className="flex min-h-[44px] cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="additionalQuestion"
                    value="yes"
                    checked={additionalQuestion === "yes"}
                    onChange={(e) => setAdditionalQuestion(e.target.value)}
                    className="h-4 w-4 border-slate-300 text-[#123146] focus:ring-[#123146]"
                  />
                  <span className="text-xs text-slate-700 sm:text-sm">Yes</span>
                </label>
                <label className="flex min-h-[44px] cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="additionalQuestion"
                    value="no"
                    checked={additionalQuestion === "no"}
                    onChange={(e) => setAdditionalQuestion(e.target.value)}
                    className="h-4 w-4 border-slate-300 text-[#123146] focus:ring-[#123146]"
                  />
                  <span className="text-xs text-slate-700 sm:text-sm">No</span>
                </label>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input
                id="career-captcha"
                type="checkbox"
                checked={captchaChecked}
                onChange={(e) => setCaptchaChecked(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-[#123146] focus:ring-[#123146]"
                aria-describedby="captcha-desc"
              />
              <label id="captcha-desc" htmlFor="career-captcha" className="cursor-pointer text-xs text-slate-600 sm:text-sm">
                I&apos;m not a robot
              </label>
            </div>
            <div className="flex justify-center pt-6 sm:pt-8">
              <button
                type="submit"
                className="min-h-[48px] w-full max-w-[98%] rounded-full bg-[#1F384C] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1a2f3d] focus:outline-none focus:ring-2 focus:ring-[#1F384C] focus:ring-offset-2 sm:text-base"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
