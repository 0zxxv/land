"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
const JOBS_PER_PAGE = 6;

type Job = {
  title: string;
  company: string;
  applicants: number;
  tags: string[];
  descriptionSnippet: string;
  salary: string;
  postedDays: number;
};

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

export function JobListings({
  jobs,
  readMore,
  iconBlue,
  iconWhite,
}: {
  jobs: Job[];
  readMore: string;
  iconBlue: string;
  iconWhite: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const start = (currentPage - 1) * JOBS_PER_PAGE;
  useEffect(() => setSelectedIndex(0), [currentPage]);
  const jobsOnPage = useMemo(
    () => jobs.slice(start, start + JOBS_PER_PAGE),
    [jobs, start]
  );

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const goToPage = (page: number) => setCurrentPage(page);

  const selectedGlobalIndex = selectedIndex === null ? null : start + selectedIndex;

  return (
    <>
      <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobsOnPage.map((job, index) => {
          const globalIndex = start + index;
          const isSelected = selectedGlobalIndex === globalIndex;
          return (
            <article
              key={globalIndex}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedIndex(index);
                }
              }}
              className={`flex min-h-[260px] cursor-pointer flex-col rounded-2xl p-6 shadow-sm transition-colors ${
                isSelected
                  ? "bg-[#123146] text-white"
                  : "bg-[#F8FAFC] text-slate-900"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={isSelected ? iconWhite : iconBlue}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 shrink-0 object-contain"
                />
                <h2
                  id={index === 0 ? "jobs-heading" : undefined}
                  className="text-xl font-bold"
                >
                  {job.title}
                </h2>
              </div>
              <p
                className={`mb-3 text-sm ${
                  isSelected ? "text-white/90" : "text-slate-600"
                }`}
              >
                {job.company} • {job.applicants} Applicants
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isSelected
                        ? "bg-white text-black"
                        : "bg-[#EBF5FF] text-black"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                className={`mb-3 flex-1 text-sm leading-relaxed ${
                  isSelected ? "text-white/90" : "text-slate-600"
                }`}
              >
                {job.descriptionSnippet}
              </p>
              <a
                href="#"
                onClick={(e) => e.stopPropagation()}
                className={`mb-4 inline-block text-sm font-medium underline underline-offset-2 ${
                  isSelected
                    ? "text-white hover:text-white/90"
                    : "text-[#123146] hover:text-[#0f2942]"
                }`}
              >
                {readMore}
              </a>
              <div className="mt-auto flex items-center justify-between border-t pt-4 text-sm">
                <span
                  className={
                    isSelected ? "text-white/90" : "text-slate-700"
                  }
                >
                  {job.salary}
                </span>
                <span
                  className={`flex items-center gap-1 ${
                    isSelected ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  <ClockIcon className="h-4 w-4" />
                  Posted {job.postedDays} days ago
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Pagination */}
      <nav
        className="flex items-center justify-center gap-2"
        aria-label="Job listings pagination"
      >
        <button
          type="button"
          onClick={goPrev}
          disabled={currentPage <= 1}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50"
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
                className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                  currentPage === page
                    ? "bg-[#123146] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 px-2 text-slate-500"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                      currentPage === page
                        ? "bg-[#123146] text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50"
          aria-label="Next page"
        >
          &gt;
        </button>
      </nav>
    </>
  );
}
