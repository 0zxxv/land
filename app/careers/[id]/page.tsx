import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../_components/footer";
import { Header } from "../../_components/header";
import { CareerApplicationForm } from "./_components/career-application-form";
import { content } from "../../content";

const { careers } = content;

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
    <div className="flex h-screen flex-col bg-white dark:bg-navy">
      <div className="sticky top-0 z-50 shrink-0">
        <Header />
      </div>
      <main className="min-h-0 flex-1 overflow-y-auto">
        <section
          className="px-8 py-12 pb-24 lg:px-16 lg:py-16 lg:pb-36"
          aria-labelledby="job-title"
        >
          <div className="mx-auto max-w-3xl">
            <Link
              href="/careers"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#123146] dark:text-sky-400 hover:underline"
            >
              ← Back to careers
            </Link>

            {/* Job title – large, bold, uppercase */}
            <h1
              id="job-title"
              className="mb-3 text-3xl font-bold uppercase tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
            >
              {job.title}
            </h1>

            {/* Contact details: location and date */}
            <div className="mb-10 flex flex-wrap items-center gap-4 text-base text-slate-600 dark:text-slate-400">
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
                  Posted {job.postedDays} days ago
                </span>
              )}
            </div>

            {/* JOB DETAILS */}
            {hasJobType && (
              <div className="mb-10">
                <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                  Job details
                </h2>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Job type</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F5F9] dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-900 dark:text-slate-100">
                    <ClockIcon className="h-4 w-4 shrink-0 text-slate-700 dark:text-slate-400" />
                    {jobWithExtras.jobType}
                  </span>
                </div>
              </div>
            )}

            {/* ABOUT THE JOB */}
            <div className="mb-10">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                About the job
              </h2>
              <div className="space-y-3 text-slate-600 dark:text-slate-400">
                {hasDescription && jobWithExtras.description ? (
                  jobWithExtras.description.split("\n\n").map((para, i) => (
                    <p key={i} className="leading-relaxed">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="leading-relaxed">{job.descriptionSnippet}</p>
                )}
              </div>
            </div>

            {/* RECRUITERS INFO */}
            {hasRecruitersInfo && jobWithExtras.recruitersInfo && (
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
            )}

            {/* Shift details */}
            {hasShiftDetails && jobWithExtras.shiftDetails && (
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
            )}
          </div>
        </section>

        <CareerApplicationForm />
        <Footer />
      </main>
    </div>
  );
}
