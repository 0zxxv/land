import Image from "next/image";

const NAV_LINKS = [
  "Home",
  "Services",
  "How It Works",
  "Industries",
  "Our Team",
  "About Us",
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#f5f2e8]">
      {/* Video background - stays behind */}
      <div className="absolute inset-0 z-[0]" aria-hidden>
        <video
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/assets/bg-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-black/10"
          aria-hidden
        />
      </div>

      {/* All content on top of video */}
      <div className="relative z-[1] min-h-screen w-full">
      {/* Header - centered, 95% width */}
      <div className="flex justify-center px-6 pt-6 lg:px-8 lg:pt-8">
        <header className="relative flex h-20 w-[95%] shrink-0 items-center justify-between gap-3 overflow-visible rounded-2xl border border-white/30 bg-white/70 px-3 shadow-lg backdrop-blur-md md:gap-4 lg:px-4">
          {/* Logo: larger than header, absolutely positioned so header height stays fixed */}
          <div className="absolute left-3 top-1/2 flex h-24 w-24 -translate-y-1/2 shrink-0 items-center justify-center lg:left-4">
            <Image
              src="/assets/logo-blue.png"
              alt="Company logo"
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
          </div>
          {/* Spacer so nav/button don't overlap logo */}
          <div className="w-24 shrink-0 lg:w-24" aria-hidden />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {NAV_LINKS.map((label) => (
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
            href="#contact"
            className="flex items-center gap-2.5 rounded-lg bg-navy px-8 py-4 text-lg font-medium text-white transition hover:bg-navy-light"
          >
            Contact Us
            <Image
              src="/assets/arrow-white.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 rotate-45 object-contain"
            />
          </a>
        </header>
      </div>

      {/* Hero content */}
      <section className="flex min-h-[calc(100vh-80px)] flex-col justify-start px-8 pt-20 pb-24 lg:max-w-5xl lg:px-16 lg:pt-24">
        <p className="mb-5 flex items-center gap-3 text-xl font-medium text-white">
          <Image
            src="/assets/icon-white.svg"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
          Engineering the Future of Business.
        </p>
        <h1 className="mb-6 max-w-5xl text-6xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
          <span className="text-[#123146]">Transform your</span>
          <br />
          <span className="text-[#123146]">Ideas Into Digital</span>
          <br />
          <span className="font-newsreader font-semibold italic text-white">
            Reality.
          </span>
        </h1>
        <p className="mb-10 max-w-2xl text-xl leading-relaxed text-white sm:text-2xl">
          We build robust, scalable IT solutions tailored to your unique
          business needs. From custom software development to cloud
          infrastructure, we provide the tech that drives your growth.
        </p>
        <a
          href="#about"
          className="inline-flex w-fit items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-base font-medium text-slate-800 shadow-md transition hover:bg-off-white hover:shadow-lg"
        >
          About Us
          <Image
            src="/assets/arrow-black.png"
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
