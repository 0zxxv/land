"use client";

import { useCallback, useEffect, useState } from "react";
import { content } from "../content";

const { navLinks, headerCta } = content;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 md:hidden"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            role="presentation"
            onClick={close}
          />
          <nav className="absolute right-0 top-0 flex h-full w-72 flex-col gap-1 bg-white p-6 shadow-xl">
            <button
              type="button"
              onClick={close}
              className="mb-6 self-end rounded-lg p-2 text-slate-800"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={close}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100"
              >
                {label}
              </a>
            ))}
            <a
              href={headerCta.href}
              onClick={close}
              className="mt-4 rounded-lg bg-navy px-4 py-3 text-center text-base font-medium text-white transition hover:bg-navy-light"
            >
              {headerCta.label}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
