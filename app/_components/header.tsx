"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "../content";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "./theme-provider";

const { navLinks, headerCta, assets } = content;

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex justify-center px-6 pt-6 lg:px-8 lg:pt-8">
      <header
        className={`relative flex h-[72px] w-[95%] shrink-0 items-center justify-between gap-3 overflow-visible rounded-2xl px-3 shadow-lg md:gap-4 lg:px-4 ${
          isHome
            ? "border border-white/30 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/70"
            : "border border-slate-200/60 bg-[#F2F2F2] dark:border-slate-700/60 dark:bg-slate-800"
        }`}
      >
        <div className="absolute left-3 top-1/2 flex h-32 w-32 -translate-y-1/2 shrink-0 items-center justify-center lg:left-4">
          <Link href="/">
            <Image
              src={isDark ? assets.logoWhite : assets.logo}
              alt="Company logo"
              width={128}
              height={128}
              className="h-full w-full object-contain"
              priority
            />
          </Link>
        </div>
        <div className="w-32 shrink-0" aria-hidden />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map(({ label, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`text-base font-medium transition-colors duration-200 hover:text-navy dark:hover:text-white ${
                  isActive
                    ? "font-semibold text-slate-900 dark:text-white"
                    : "text-slate-800 dark:text-slate-300"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={headerCta.href}
            className="hidden items-center gap-2 rounded-lg bg-[#123146] px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:brightness-110 dark:bg-sky-600 dark:hover:bg-sky-500 sm:flex"
          >
            {headerCta.label}
            <Image
              src={assets.arrowWhite}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 rotate-45 object-contain"
            />
          </Link>
          <MobileNav />
        </div>
      </header>
    </div>
  );
}
