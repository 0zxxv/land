import Image from "next/image";
import Link from "next/link";
import { content } from "../content";

const { footer, assets } = content;

export function Footer() {
  return (
    <footer className="bg-[#123146]">
      {/* CTA section with grid backgrounds */}
      <section
        className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden px-8 py-20 lg:min-h-[480px] lg:py-28"
        aria-labelledby="footer-cta-heading"
      >
        {/* Grid top-left */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-0 h-[380px] w-[380px] lg:h-[480px] lg:w-[480px]"
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
          className="pointer-events-none absolute bottom-0 right-0 z-0 h-[380px] w-[380px] lg:h-[480px] lg:w-[480px]"
          style={{
            backgroundImage: `url('${encodeURI(assets.footerGridDown)}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize: "contain",
          }}
          aria-hidden
        />
        <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="mb-4 flex items-center gap-2 text-white">
          <Image
            src={assets.iconWhite}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          {footer.cta.label}
        </p>
        <h2
          id="footer-cta-heading"
          className="mb-6 max-w-4xl text-center text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          {footer.cta.headingLine1}
          <br />
          {footer.cta.headingLine2Regular}
          <span className="font-newsreader font-medium italic">
            {footer.cta.headingLine2Italic}
          </span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-white/90">
          {footer.cta.description}
        </p>
        <Link
          href={footer.cta.buttonHref}
          className="rounded-lg bg-white px-8 py-4 text-lg font-medium text-black shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-slate-100"
        >
          {footer.cta.buttonLabel}
        </Link>
        </div>
      </section>

      {/* Footer block */}
      <section
        className="relative bg-[#0A161F] px-5 pt-6 pb-12 lg:px-10 lg:pt-8 lg:pb-16"
        aria-label="Site footer"
      >
        <div className="mx-auto w-[90%]">
          <div className="grid gap-10 pb-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
            <div className="max-w-xl">
              <Link href="/" className="mb-8 block">
                <Image
                  src={assets.logoWhite}
                  alt={footer.companyName}
                  width={180}
                  height={52}
                  className="h-12 object-contain sm:h-14"
                />
              </Link>
              <p className="text-sm leading-relaxed text-white/90">
                {footer.descriptionLine1}
                <br />
                {footer.descriptionLine2}
              </p>
            </div>
            <nav className="flex flex-wrap items-center gap-6 lg:gap-10" aria-label="Footer">
              {footer.links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-base font-medium text-white transition-colors hover:text-white/80"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-white/70">{footer.copyright}</p>
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
