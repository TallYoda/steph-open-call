import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festival | Diaspora Open Call",
  description: "Festival information for Becoming Diaspora Film Festival.",
};

export default function FestivalPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#8b1e1e]">Festival Program</p>
      <h1 className="mt-3 text-4xl md:text-6xl">Becoming Diaspora Film Festival</h1>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-black/80">
        Becoming Diaspora Film Festival is a multidisciplinary gathering of moving image, written work,
        and public dialogue. The festival centers African diaspora storytelling with a focus on community
        archives, cinematic experimentation, and intergenerational memory.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="rounded-xl border border-black/15 bg-white/70 p-5">
          <h2 className="text-2xl">Film Screenings</h2>
          <p className="mt-3 text-sm leading-relaxed text-black/75">
            Curated blocks of shorts, documentaries, and experimental films from emerging and established filmmakers.
          </p>
        </article>
        <article className="rounded-xl border border-black/15 bg-white/70 p-5">
          <h2 className="text-2xl">Panel Conversations</h2>
          <p className="mt-3 text-sm leading-relaxed text-black/75">
            Critical dialogue on identity, migration, and belonging with artists, writers, and cultural workers.
          </p>
        </article>
        <article className="rounded-xl border border-black/15 bg-white/70 p-5">
          <h2 className="text-2xl">Community Storytelling</h2>
          <p className="mt-3 text-sm leading-relaxed text-black/75">
            Participatory sessions that invite audiences to share oral histories and diasporic memory practices.
          </p>
        </article>
      </div>
    </section>
  );
}
