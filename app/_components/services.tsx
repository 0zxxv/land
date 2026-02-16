import Image from "next/image";
import { content } from "../content";

const { services, assets } = content;

export function Services() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-16 lg:px-16 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 flex items-center justify-center gap-2 text-sm font-medium text-slate-600">
          <Image
            src={assets.iconBlue}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          {services.tagline}
        </p>

        <h2
          id="services-heading"
          className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl"
        >
          {services.title}{" "}
          <span className="text-slate-900">{services.titleHighlight}</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
          {services.subtitle}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.cards.map((card, i) => (
            <article
              key={i}
              className="flex flex-col rounded-xl bg-slate-100/80 p-6"
            >
              <div className="mb-4 h-32 shrink-0 rounded-lg bg-slate-200/60" />
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
