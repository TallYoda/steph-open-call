import type { Metadata } from "next";
import FilmGrid from "@/components/FilmGrid";

export const metadata: Metadata = {
  title: "Films | Diaspora Open Call",
  description: "Featured films and submissions from African diaspora filmmakers.",
};

export default function FilmsPage() {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-6xl px-5 pb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8b1e1e]">Moving Image</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Films</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/75">
          Documentary, fiction, and experimental films reflecting the visual language of diaspora
          storytelling.
        </p>
      </div>
      <FilmGrid />
    </section>
  );
}
