import Image from "next/image";
import Link from "next/link";
import { content } from "../content";

const { hero, assets } = content;
const HEADLINE_LAST_INDEX = hero.headlineLines.length - 1;

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col justify-start px-8 pt-8 pb-24 lg:max-w-5xl lg:px-16 lg:pt-12">
      <p className="mb-5 flex items-center gap-3 text-lg font-medium text-white">
        <Image
          src={assets.iconWhite}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
        {hero.tagline}
      </p>

      <h1 className="mb-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        {hero.headlineLines.map((line, i) => (
          <span key={i}>
            {i === HEADLINE_LAST_INDEX ? (
              <span className="font-newsreader font-normal italic text-white">
                {line}
              </span>
            ) : (
              <span className="font-extrabold text-headline">{line}</span>
            )}
            {i < HEADLINE_LAST_INDEX && <br />}
          </span>
        ))}
      </h1>

      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
        {hero.description}
      </p>

      <Link
        href={hero.cta.href}
        className="inline-flex w-fit items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-lg font-medium text-black shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-slate-50 hover:shadow-xl active:scale-[0.98]"
      >
        {hero.cta.label}
        <Image
          src={assets.arrowBlack}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
      </Link>
    </section>
  );
}
