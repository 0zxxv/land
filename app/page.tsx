import Image from "next/image";
import { content } from "./content";

const { navLinks, headerCta, hero, assets } = content;

/** Last headline line is styled differently (e.g. "Reality.") */
const HEADLINE_LAST_INDEX = hero.headlineLines.length - 1;

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#f5f2e8]">
      {/* ─── Video background ─── */}
      <div className="absolute inset-0 z-[0]" aria-hidden>
        <video
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={assets.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" aria-hidden />
      </div>

      <div className="relative z-[1] min-h-screen w-full">
        {/* ─── Header ─── */}
        <div className="flex justify-center px-6 pt-6 lg:px-8 lg:pt-8">
          <header className="relative flex h-20 w-[95%] shrink-0 items-center justify-between gap-3 overflow-visible rounded-2xl border border-white/30 bg-white/70 px-3 shadow-lg backdrop-blur-md md:gap-4 lg:px-4">
            <div className="absolute left-3 top-1/2 flex h-24 w-24 -translate-y-1/2 shrink-0 items-center justify-center lg:left-4">
              <Image
                src={assets.logo}
                alt="Company logo"
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-24 shrink-0" aria-hidden />
            <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
              {navLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-base font-medium text-slate-800 hover:text-navy"
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href={headerCta.href}
              className="flex items-center gap-2.5 rounded-lg bg-navy px-8 py-4 text-lg font-medium text-white transition hover:bg-navy-light"
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
          </header>
        </div>

        {/* ─── Hero ─── */}
        <section className="flex min-h-[calc(100vh-80px)] flex-col justify-start px-8 pt-20 pb-24 lg:max-w-5xl lg:px-16 lg:pt-24">
          <p className="mb-5 flex items-center gap-3 text-xl font-medium text-white">
            <Image
              src={assets.iconWhite}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            {hero.tagline}
          </p>
          <h1 className="mb-6 max-w-5xl text-6xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
            {hero.headlineLines.map((line, i) => (
              <span key={i}>
                {i === HEADLINE_LAST_INDEX ? (
                  <span className="font-newsreader font-semibold italic text-white">
                    {line}
                  </span>
                ) : (
                  <span className="text-[#123146]">{line}</span>
                )}
                {i < HEADLINE_LAST_INDEX && <br />}
              </span>
            ))}
          </h1>
          <p className="mb-10 max-w-2xl text-xl leading-relaxed text-white sm:text-2xl">
            {hero.description}
          </p>
          <a
            href={hero.cta.href}
            className="inline-flex w-fit items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-lg font-medium text-slate-800 shadow-md transition hover:bg-off-white hover:shadow-lg"
          >
            {hero.cta.label}
            <Image
              src={assets.arrowBlack}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
          </a>
        </section>
      </div>
    </main>
  );
}
