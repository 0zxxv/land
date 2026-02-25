import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../_components/footer";
import { Header } from "../../_components/header";
import { SlideUpOnScroll } from "../../_components/slide-up-on-scroll";
import { content } from "../../content";
import { JobDetailsContent } from "./_components/job-details-content";
import { SlideUpOnDelay } from "./_components/slide-up-on-delay";
import { daysAgo } from "../../lib/utils";

const { careers, assets } = content;

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

type Props = { params: Promise<{ id: string }> };

type Job = (typeof careers.jobs)[number];
type ShiftDetail = { day: string; date: string; time: string };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const index = parseInt(id, 10);
  const job =
    Number.isNaN(index) || index < 0 || index >= careers.jobs.length
      ? null
      : careers.jobs[index];
  if (!job) {
    return { title: "Job Not Found | MyntLabs" };
  }
  return {
    title: `${job.title} | Careers | MyntLabs`,
    description: `${job.title} at ${job.company}. ${job.descriptionSnippet}`,
  };
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default async function CareerDetailsPage({ params }: Props) {
  const { id } = await params;
  const index = parseInt(id, 10);
  if (
    Number.isNaN(index) ||
    index < 0 ||
    index >= careers.jobs.length
  ) {
    notFound();
  }
  const job = careers.jobs[index];
  const jobWithExtras = job as Job & {
    location?: string;
    postedDate?: string;
    jobType?: string;
    description?: string;
    recruitersInfo?: string[];
    shiftDetails?: ShiftDetail[];
  };
  const hasLocationAndDate = Boolean(jobWithExtras.location && jobWithExtras.postedDate);
  const hasJobType = Boolean(jobWithExtras.jobType);
  const hasDescription = Boolean(jobWithExtras.description);
  const hasRecruitersInfo = Array.isArray(jobWithExtras.recruitersInfo) && jobWithExtras.recruitersInfo.length > 0;
  const hasShiftDetails = Array.isArray(jobWithExtras.shiftDetails) && jobWithExtras.shiftDetails.length > 0;

  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-white dark:bg-black">
      <div className="sticky top-0 z-50 shrink-0">
        <Header />
      </div>
      <main className="flex flex-1 flex-col">
        {/* Hero section – dots background, same as careers page */}
        <section
          className="relative flex min-h-[min(32vh,280px)] flex-col items-center justify-center bg-white px-4 pt-8 pb-8 dark:bg-black sm:px-8 sm:pt-12 sm:pb-10 lg:min-h-[min(36vh,320px)] lg:pt-16 lg:pb-12"
          aria-labelledby="job-title"
        >
          <div className="absolute inset-0 bg-white dark:hidden" style={DOTS_BG_STYLE} aria-hidden />
          <div className="absolute inset-0 hidden dark:block dark:opacity-100" style={DOTS_BG_STYLE_DARK} aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center sm:text-left">
            <SlideUpOnScroll delay={0}>
              <p className="mb-4 flex items-center justify-center gap-2 text-sm font-bold text-[#123146] dark:text-[#F3F4F6] sm:mb-5 sm:text-lg">
                <Image src={assets.iconBlue} alt="" width={24} height={24} className="h-5 w-5 object-contain dark:hidden sm:h-6 sm:w-6" />
                <Image src={assets.iconWhite} alt="" width={24} height={24} className="hidden h-5 w-5 object-contain dark:block sm:h-6 sm:w-6" />
                Job details
              </p>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={50}>
              <Link
                href="/careers"
                className="mb-6 inline-flex items-center justify-center gap-2 text-xs font-medium text-[#123146] hover:underline dark:text-[#F3F4F6] sm:mb-8 sm:justify-start sm:text-sm"
              >
                ← Back to careers
              </Link>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={100}>
              <div className="mb-2 flex flex-wrap items-center justify-center gap-3 sm:mb-3 sm:justify-start sm:gap-4">
                <h1
                  id="job-title"
                  className="text-xl font-bold uppercase tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl"
                >
                  {job.title}
                </h1>
                <a
                  href={(job as { applyUrl?: string }).applyUrl ?? "https://indeed.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#123146] px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-[0.98] dark:bg-[#F3F4F6] dark:text-black dark:hover:bg-white sm:px-6 sm:py-2.5 sm:text-base"
                >
                  Apply Now
                </a>
              </div>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={150}>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600 dark:text-slate-400 sm:justify-start sm:gap-4 sm:text-base">
              {hasLocationAndDate ? (
                <>
                  <span className="flex items-center gap-1.5">
                    <LocationIcon className="h-4 w-4 shrink-0 text-slate-700 dark:text-slate-400" />
                    {jobWithExtras.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon className="h-4 w-4 shrink-0 text-slate-700 dark:text-slate-400" />
                    {jobWithExtras.postedDate}
                  </span>
                </>
              ) : (
                <span className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4 shrink-0" />
                  Posted {jobWithExtras.postedDate ? daysAgo(jobWithExtras.postedDate) : job.postedDays} days ago
                </span>
              )}
              </div>
            </SlideUpOnScroll>
          </div>
        </section>

        {/* Content section – no dots, same as careers job listings section */}
        <section
          className="bg-white px-4 pt-6 pb-16 dark:bg-black sm:px-8 sm:pt-8 sm:pb-24 lg:px-16 lg:pt-10 lg:pb-36"
          aria-label="Job details"
        >
          <JobDetailsContent>
          <div className="mx-auto max-w-3xl">
            {/* JOB DETAILS */}
            {hasJobType && (
              <SlideUpOnDelay delay={500}>
              <div className="mb-10">
                <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                  Job details
                </h2>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Job type</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F5F9] px-4 py-1.5 text-sm font-medium text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                    <ClockIcon className="h-4 w-4 shrink-0 text-slate-700 dark:text-slate-100" />
                    {jobWithExtras.jobType}
                  </span>
                </div>
              </div>
              </SlideUpOnDelay>
            )}

            {/* ABOUT THE JOB */}
            <SlideUpOnDelay delay={550}>
            <div className="mb-10">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                About the job
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                {hasDescription && jobWithExtras.description
                  ? jobWithExtras.description.split("\n\n").map((block, i) => {
                      const lines = block.split("\n");
                      const line0 = lines[0];

                      const isHeading = (line: string) => {
                        if (line.length > 80) return false;
                        if (line.endsWith(":") || line.endsWith("?")) return true;
                        const stripped = line.replace(/^\d+\.\s*/, "");
                        if (/^\d+\.\s/.test(line) && stripped.length < 70 && !stripped.includes(".")) return true;
                        if (line.length < 65 && !/\.\s/.test(line) && !line.endsWith(".")) return true;
                        return false;
                      };

                      const labelEnd = (line: string) => {
                        const idx = line.indexOf(": ");
                        return idx > 0 && idx < 50 ? idx : -1;
                      };

                      if (lines.length === 1 && isHeading(line0)) {
                        return (
                          <h3
                            key={i}
                            className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg"
                          >
                            {line0}
                          </h3>
                        );
                      }

                      if (lines.length > 1) {
                        return (
                          <ul key={i} className="space-y-2.5 pl-1">
                            {lines.map((line, j) => {
                              const lIdx = labelEnd(line);
                              return (
                                <li
                                  key={j}
                                  className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#123146]/40 dark:before:bg-slate-500"
                                >
                                  {lIdx > 0 ? (
                                    <>
                                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                                        {line.slice(0, lIdx)}
                                      </span>
                                      <span className="font-semibold text-slate-800 dark:text-slate-200">:</span>{" "}
                                      {line.slice(lIdx + 2)}
                                    </>
                                  ) : (
                                    line
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        );
                      }

                      if (lines.length === 1 && labelEnd(line0) > 0) {
                        const lIdx = labelEnd(line0);
                        return (
                          <p key={i}>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              {line0.slice(0, lIdx)}:
                            </span>{" "}
                            {line0.slice(lIdx + 2)}
                          </p>
                        );
                      }

                      return (
                        <p key={i}>{line0}</p>
                      );
                    })
                  : (
                    <p>{job.descriptionSnippet}</p>
                  )}
              </div>
            </div>
            </SlideUpOnDelay>

            {/* RECRUITERS INFO */}
            {hasRecruitersInfo && jobWithExtras.recruitersInfo && (
              <SlideUpOnDelay delay={600}>
              <div className="mb-10">
                <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                  Recruiters info
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
                  {jobWithExtras.recruitersInfo.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </SlideUpOnDelay>
            )}

            {/* Shift details */}
            {hasShiftDetails && jobWithExtras.shiftDetails && (
              <SlideUpOnDelay delay={650}>
              <div className="mb-10">
                <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                  About the job
                </h2>
                <p className="mb-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Shift details
                </p>
                <ul className="space-y-2">
                  {jobWithExtras.shiftDetails.map((shift, i) => (
                    <li
                      key={i}
                      className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400 sm:gap-4"
                    >
                      <ClockIcon className="h-4 w-4 shrink-0 text-slate-500 dark:text-slate-400" />
                      <span className="w-24 shrink-0">{shift.day}</span>
                      <span>{shift.date}</span>
                      <span
                        className={
                          shift.time === "Closed"
                            ? "font-medium text-red-600 dark:text-red-400"
                            : ""
                        }
                      >
                        {shift.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              </SlideUpOnDelay>
            )}
          </div>
          </JobDetailsContent>
        </section>

        <Footer />
      </main>
    </div>
  );
}
