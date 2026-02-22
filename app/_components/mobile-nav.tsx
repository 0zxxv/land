"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { content } from "../content";

const { navLinks, headerCta } = content;

export function MobileNav() {
  const pathname = usePathname();
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
        className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-slate-800 transition-colors hover:bg-slate-100 active:bg-slate-200 md:hidden"
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
        <div className="fixed inset-0 z-[100] md:hidden" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            role="presentation"
            onClick={close}
            aria-hidden
          />
          <nav
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col gap-0 border-l border-slate-200 bg-[#ffffff] p-4 shadow-2xl sm:p-6"
            style={{ backgroundColor: "#ffffff" }}
            aria-label="Main menu"
          >
            <div className="mb-4 flex items-center justify-between sm:mb-6">
              <span className="text-sm font-semibold text-slate-500">Menu</span>
              <button
                type="button"
                onClick={close}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-800 transition-colors hover:bg-slate-100 active:bg-slate-200"
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
            </div>
            <div className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname === href;
                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={close}
                    className={`min-h-[44px] flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-slate-100 active:bg-slate-200 ${
                      isActive ? "text-slate-900 font-semibold bg-slate-50" : "text-slate-800"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
            <Link
              href={headerCta.href}
              onClick={close}
              className="mt-4 flex min-h-[48px] items-center justify-center rounded-xl bg-[#123146] px-4 py-3 text-center text-sm font-medium text-white shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-[0.98] sm:text-base"
            >
              {headerCta.label}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
