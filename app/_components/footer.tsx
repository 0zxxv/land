import Image from "next/image";
import Link from "next/link";
import { content } from "../content";

const { footer, assets } = content;

export function Footer() {
  return (
    <footer className="bg-[#123146]">
      {/* CTA section with grid backgrounds */}
      <section
        className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden px-4 py-12 sm:min-h-[420px] sm:px-8 sm:py-20 lg:min-h-[480px] lg:py-28"
        aria-labelledby="footer-cta-heading"
      >
        {/* Grid top-left */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-0 h-[160px] w-[160px] sm:h-[280px] sm:w-[280px] md:h-[380px] md:w-[380px] lg:h-[480px] lg:w-[480px]"
          style={{
            backgroundImage: `url('${encodeURI(assets.footerGridTop)}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
            backgroundSize: "contain",
          }}
          aria-hidden
        />
        {/* Grid bottom-right */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 z-0 h-[160px] w-[160px] sm:h-[280px] sm:w-[280px] md:h-[380px] md:w-[380px] lg:h-[480px] lg:w-[480px]"
          style={{
            backgroundImage: `url('${encodeURI(assets.footerGridDown)}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize: "contain",
          }}
          aria-hidden
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-sm text-white sm:mb-4 sm:text-base">
          <Image
            src={assets.iconWhite}
            alt=""
            width={20}
            height={20}
            className="h-4 w-4 object-contain sm:h-5 sm:w-5"
          />
          {footer.cta.label}
        </p>
        <h2
          id="footer-cta-heading"
          className="mb-4 max-w-4xl text-2xl font-semibold leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {footer.cta.headingLine1}
          <br />
          {footer.cta.headingLine2Regular}
          <span className="font-newsreader font-medium italic">
            {footer.cta.headingLine2Italic}
          </span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-white/90 sm:mb-10 sm:text-base md:text-lg">
          {footer.cta.description}
        </p>
        <Link
          href={footer.cta.buttonHref}
          className="rounded-lg bg-white px-6 py-3 text-base font-medium text-black shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-slate-100 dark:bg-slate-100 dark:hover:bg-slate-200 sm:px-8 sm:py-4 sm:text-lg"
        >
          {footer.cta.buttonLabel}
        </Link>
        </div>
      </section>

      {/* Footer block */}
      <section
        className="relative bg-[#0A161F] px-4 pt-5 pb-10 sm:px-5 sm:pt-6 sm:pb-12 lg:px-10 lg:pt-8 lg:pb-16"
        aria-label="Site footer"
      >
        <div className="mx-auto w-full max-w-[90%]">
          <div className="grid gap-8 pb-8 text-center sm:gap-10 sm:pb-10 sm:text-left lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
            <div className="max-w-xl mx-auto sm:mx-0">
              <Link href="/" className="mb-6 block sm:mb-8">
                <Image
                  src={assets.logoWhite}
                  alt={footer.companyName}
                  width={180}
                  height={52}
                  className="mx-auto h-10 object-contain sm:mx-0 sm:h-12 md:h-14"
                />
              </Link>
              <p className="text-xs leading-relaxed text-white/90 sm:text-sm">
                {footer.descriptionLine1}
                <br />
                {footer.descriptionLine2}
              </p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6 lg:gap-10" aria-label="Footer">
              {footer.links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-medium text-white transition-colors hover:text-white/80 sm:text-base"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-white/20 pt-6 sm:pt-8">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
              <p className="text-xs text-white/70 sm:text-sm">{footer.copyright}</p>
              <a
                href={footer.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-90"
                aria-label="LinkedIn"
              >
                <Image
                  src={assets.linkedin}
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
