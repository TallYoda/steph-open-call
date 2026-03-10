import Image from "next/image";
import Reveal from "@/components/Reveal";
import { filmItems } from "@/content/siteContent";

export default function FilmGrid() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:grid-cols-2">
      {filmItems.map((film, index) => (
        <Reveal key={film.title} delayMs={index * 90}>
          <article className="card-hover overflow-hidden rounded-xl border border-black/15 bg-white/60">
            <div className="overflow-hidden">
              <Image
                src={film.image}
                alt={`${film.title} film still`}
                width={900}
                height={560}
                className="h-56 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-2xl">{film.title}</h3>
              <div className="flex items-center justify-between text-sm text-black/75">
                <p>{film.filmmaker}</p>
                <p className="font-medium">{film.duration}</p>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}
