"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { SlideUpOnScroll } from "../../_components/slide-up-on-scroll";

const JOBS_PER_PAGE = 6;

type Job = {
  readonly title: string;
  readonly company: string;
  readonly tags: readonly string[];
  readonly descriptionSnippet: string;
};

export function JobListings({
  jobs,
  iconBlue,
  iconWhite,
}: {
  jobs: readonly Job[];
  iconBlue: string;
  iconWhite: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const start = (currentPage - 1) * JOBS_PER_PAGE;
  const jobsOnPage = useMemo(
    () => jobs.slice(start, start + JOBS_PER_PAGE),
    [jobs, start]
  );

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const goToPage = (page: number) => setCurrentPage(page);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-4 sm:mb-12 sm:gap-6">
        {jobsOnPage.map((job, index) => {
          const globalIndex = start + index;
          return (
            <SlideUpOnScroll key={globalIndex} delay={index * 80} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              <Link
                href={`/careers/${globalIndex}`}
                className="block w-full"
              >
                <article
                  className="group flex w-full min-h-[260px] cursor-pointer flex-col rounded-xl p-4 shadow-sm transition-colors hover:bg-[#123146] hover:text-white dark:hover:bg-[#F3F4F6] dark:hover:text-black sm:min-h-[300px] sm:rounded-2xl sm:p-6 bg-[#F8FAFC] text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                >
                  <div className="mb-3 flex items-center justify-center gap-2 sm:mb-4 sm:justify-start sm:gap-3">
                    <span className="relative inline-flex h-6 w-6 shrink-0 dark:hidden sm:h-8 sm:w-8">
                      <Image
                        src={iconBlue}
                        alt=""
                        width={32}
                        height={32}
                        className="block h-6 w-6 shrink-0 object-contain opacity-100 transition-opacity group-hover:opacity-0 sm:h-8 sm:w-8"
                      />
                      <Image
                        src={iconWhite}
                        alt=""
                        width={32}
                        height={32}
                        className="absolute inset-0 h-6 w-6 shrink-0 object-contain opacity-0 transition-opacity group-hover:opacity-100 sm:h-8 sm:w-8"
                      />
                    </span>
                    <span className="relative hidden h-6 w-6 shrink-0 dark:inline-flex sm:h-8 sm:w-8">
                      <Image
                        src={iconWhite}
                        alt=""
                        width={32}
                        height={32}
                        className="block h-6 w-6 shrink-0 object-contain opacity-100 transition-opacity group-hover:opacity-0 sm:h-8 sm:w-8"
                      />
                      <Image
                        src={iconBlue}
                        alt=""
                        width={32}
                        height={32}
                        className="absolute inset-0 h-6 w-6 shrink-0 object-contain opacity-0 transition-opacity group-hover:opacity-100 sm:h-8 sm:w-8"
                      />
                    </span>
                    <h2
                      id={index === 0 ? "jobs-heading" : undefined}
                      className="text-center text-base font-bold sm:text-left sm:text-xl"
                    >
                      {job.title}
                    </h2>
                  </div>
                  <p className="mb-2 text-center text-xs text-slate-600 dark:text-slate-400 sm:mb-3 sm:text-left sm:text-sm group-hover:text-white/90 dark:group-hover:text-black/70">
                    {job.company}
                  </p>
                  <div className="min-h-0 flex-1" aria-hidden />
                  <p className="mb-2 text-center text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-3 sm:text-left sm:text-sm group-hover:text-white/90 dark:group-hover:text-black/70">
                    {job.descriptionSnippet}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5 border-t border-slate-200 pt-3 dark:border-slate-600 sm:justify-start sm:gap-2 sm:pt-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-2.5 py-0.5 text-[10px] font-medium sm:px-3 sm:py-1 sm:text-xs bg-[#EBF5FF] text-black dark:bg-sky-900/30 dark:text-sky-300 group-hover:bg-white group-hover:text-[#123146] dark:group-hover:bg-black dark:group-hover:text-[#F3F4F6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            </SlideUpOnScroll>
          );
        })}
      </div>

      {/* Pagination */}
      <nav
        className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
        aria-label="Job listings pagination"
      >
        <button
          type="button"
          onClick={goPrev}
          disabled={currentPage <= 1}
          className="flex h-10 w-10 min-w-[44px] items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 disabled:opacity-50"
          aria-label="Previous page"
        >
          &lt;
        </button>
        {totalPages <= 7
          ? Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={`flex h-10 w-10 min-w-[44px] items-center justify-center rounded-lg text-sm transition-colors sm:text-base ${
                  currentPage === page
                    ? "bg-[#123146] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            ))
          : (() => {
              const pages: (number | "ellipsis")[] = [
                1,
                2,
                "ellipsis",
                totalPages,
              ];
              return pages.map((page, i) =>
                page === "ellipsis" ? (
                  <span
                    key={`ellipsis-${i}`}
                    className="flex h-10 w-10 min-w-[44px] items-center justify-center rounded-lg bg-slate-100 px-2 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`flex h-10 w-10 min-w-[44px] items-center justify-center rounded-lg text-sm transition-colors sm:text-base ${
                      currentPage === page
                        ? "bg-[#123146] text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    }`}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                )
              );
            })()}
        <button
          type="button"
          onClick={goNext}
          disabled={currentPage >= totalPages}
          className="flex h-10 w-10 min-w-[44px] items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 disabled:opacity-50"
          aria-label="Next page"
        >
          &gt;
        </button>
      </nav>
    </>
  );
}
