"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { content } from "../content";

const { navLinks, headerCta } = content;

const DURATION = 300;

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else if (mounted) {
      setAnimating(false);
      timeoutRef.current = setTimeout(() => {
        setMounted(false);
        document.body.style.overflow = "";
      }, DURATION);
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(timeoutRef.current);
    };
  }, [open, close, mounted]);

  useEffect(() => {
    if (mounted && open) {
      const id = setTimeout(() => setAnimating(true), 20);
      return () => clearTimeout(id);
    }
  }, [mounted, open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-slate-800 transition-colors hover:bg-slate-100 active:bg-slate-200 dark:text-slate-200 dark:hover:bg-white/10 dark:active:bg-white/20 md:hidden"
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

      {mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] md:hidden"
            aria-modal="true"
          >
            <div
              className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity ${
                animating ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDuration: `${DURATION}ms` }}
              role="presentation"
              onClick={close}
              aria-hidden
            />
            <nav
              className={`absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col gap-0 border-l border-slate-200 bg-white p-4 shadow-2xl transition-transform dark:border-slate-700 dark:bg-slate-900 sm:p-6 ${
                animating ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ transitionDuration: `${DURATION}ms`, transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
              aria-label="Main menu"
            >
              <div className="mb-4 flex items-center justify-between sm:mb-6">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Menu</span>
                <button
                  type="button"
                  onClick={close}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-800 transition-colors hover:bg-slate-100 active:bg-slate-200 dark:text-slate-200 dark:hover:bg-white/10"
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
                      className={`min-h-[44px] flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-slate-100 active:bg-slate-200 dark:hover:bg-slate-800 dark:active:bg-slate-700 ${
                        isActive ? "text-slate-900 font-semibold bg-slate-50 dark:text-white dark:bg-slate-800" : "text-slate-800 dark:text-slate-300"
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
                className="mt-4 flex min-h-[48px] items-center justify-center rounded-xl bg-[#123146] px-4 py-3 text-center text-sm font-medium text-white shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-[0.98] dark:bg-[#F3F4F6] dark:text-black dark:hover:bg-white sm:text-base"
              >
                {headerCta.label}
              </Link>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
