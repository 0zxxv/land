import Image from "next/image";
import { content } from "../content";
import { MobileNav } from "./mobile-nav";

const { navLinks, headerCta, assets } = content;

export function Header() {
  return (
    <div className="flex justify-center px-6 pt-6 lg:px-8 lg:pt-8">
      <header className="relative flex h-20 w-[95%] shrink-0 items-center justify-between gap-3 overflow-visible rounded-2xl border border-white/30 bg-white/70 px-3 shadow-lg backdrop-blur-md md:gap-4 lg:px-4">
        <div className="absolute left-3 top-1/2 flex h-40 w-40 -translate-y-1/2 shrink-0 items-center justify-center lg:left-4">
          <Image
            src={assets.logo}
            alt="Company logo"
            width={160}
            height={160}
            className="h-full w-full object-contain"
            priority
          />
        </div>
        <div className="w-40 shrink-0" aria-hidden />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-base font-medium text-slate-800 hover:text-navy"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={headerCta.href}
            className="hidden items-center gap-2.5 rounded-lg bg-[#123146] px-8 py-4 text-lg font-medium text-white transition hover:opacity-90 sm:flex"
          >
            {headerCta.label}
            <Image
              src={assets.arrowWhite}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 rotate-45 object-contain"
            />
          </a>
          <MobileNav />
        </div>
      </header>
    </div>
  );
}
