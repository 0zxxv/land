import Image from "next/image";
import Link from "next/link";
import { content } from "../content";

const { hero, assets } = content;
const HEADLINE_LAST_INDEX = hero.headlineLines.length - 1;

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-start px-4 pt-6 pb-16 text-center sm:items-start sm:px-8 sm:pt-8 sm:pb-24 sm:text-left lg:max-w-5xl lg:px-16 lg:pt-12">
      <p className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-white sm:justify-start sm:text-lg">
        <Image
          src={assets.iconWhite}
          alt=""
          width={24}
          height={24}
          className="h-5 w-5 object-contain sm:h-6 sm:w-6"
        />
        {hero.tagline}
      </p>

      <h1 className="mb-4 max-w-5xl text-2xl font-bold leading-tight tracking-tight text-headline sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
        {hero.headlineLines.map((line, i) => (
          <span key={i}>
            {i === HEADLINE_LAST_INDEX ? (
              <span className="font-newsreader font-normal italic text-white dark:text-[#517F9F]">
                {line}
              </span>
            ) : (
              <span className="font-extrabold text-headline dark:text-white">{line}</span>
            )}
            {i < HEADLINE_LAST_INDEX && <br />}
          </span>
        ))}
      </h1>

      <p className="mb-8 max-w-2xl text-xs leading-relaxed text-white sm:mb-10 sm:text-base md:text-lg lg:text-xl">
        {hero.description}
      </p>

      <Link
        href={hero.cta.href}
        className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-black shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-slate-50 hover:shadow-xl active:scale-[0.98] dark:bg-[#517F9F] dark:text-white dark:hover:bg-[#517F9F]/90 sm:gap-2.5 sm:px-8 sm:py-4 sm:text-lg"
      >
        {hero.cta.label}
        {/* Light mode: arrow as-is */}
        <Image
          src={assets.arrowBlack}
          alt=""
          width={24}
          height={24}
          className="h-5 w-5 object-contain dark:hidden sm:h-6 sm:w-6"
        />
        {/* Dark mode: arrow rotated 45° right */}
        <Image
          src={assets.arrowWhite}
          alt=""
          width={24}
          height={24}
          className="hidden h-5 w-5 rotate-90 object-contain dark:block sm:h-6 sm:w-6"
        />
      </Link>
    </section>
  );
}
