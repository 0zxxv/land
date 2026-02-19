"use client";

import { useState, useRef } from "react";

export function CareerApplicationForm() {
  const [additionalQuestion, setAdditionalQuestion] = useState<string>("");
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <section
      className="px-8 pt-4 pb-24 lg:px-16 lg:pb-36"
      aria-labelledby="form-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[2rem] bg-[#F5F5F5] p-8 shadow-sm sm:p-10 dark:bg-slate-800">
          <h2
            id="form-heading"
            className="mb-8 text-center text-xl font-bold uppercase tracking-wide text-slate-900 dark:text-slate-100"
          >
            Fill the form
          </h2>
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="career-email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <input
                id="career-email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="rounded-full border-0 bg-white px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146] focus:ring-offset-0 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="career-country-code" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Country Code
                </label>
                <input
                  id="career-country-code"
                  name="countryCode"
                  type="text"
                  placeholder="Enter country code"
                  className="rounded-full border-0 bg-white px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146] focus:ring-offset-0 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="career-phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Mobile Phone Number
                </label>
                <input
                  id="career-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="rounded-full border-0 bg-white px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#123146] focus:ring-offset-0 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Cv
              </label>
              <p className="text-sm text-slate-600 dark:text-slate-400">Upload an updated CV *</p>
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
                className="flex min-h-[120px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white py-8 text-slate-500 transition-colors hover:border-[#123146] hover:bg-slate-50 hover:text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-500 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              >
                Upload Here
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Additional questions
              </label>
              <div className="flex gap-6">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="additionalQuestion"
                    value="yes"
                    checked={additionalQuestion === "yes"}
                    onChange={(e) => setAdditionalQuestion(e.target.value)}
                    className="h-4 w-4 border-slate-300 text-[#123146] focus:ring-[#123146] dark:border-slate-600"
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Yes</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="additionalQuestion"
                    value="no"
                    checked={additionalQuestion === "no"}
                    onChange={(e) => setAdditionalQuestion(e.target.value)}
                    className="h-4 w-4 border-slate-300 text-[#123146] focus:ring-[#123146] dark:border-slate-600"
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-300">No</span>
                </label>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input
                id="career-captcha"
                type="checkbox"
                checked={captchaChecked}
                onChange={(e) => setCaptchaChecked(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#123146] focus:ring-[#123146] dark:border-slate-600"
                aria-describedby="captcha-desc"
              />
              <label id="captcha-desc" htmlFor="career-captcha" className="cursor-pointer text-sm text-slate-600 dark:text-slate-400">
                I&apos;m not a robot
              </label>
            </div>
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="w-[98%] rounded-full bg-[#1F384C] px-12 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#1a2f3d] focus:outline-none focus:ring-2 focus:ring-[#1F384C] focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-500"
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
