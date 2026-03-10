import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ages | Diaspora Open Call",
  description: "Mission and thematic focus of Ages and diaspora storytelling.",
};

const themes = ["Identity", "Migration", "Belonging", "Cultural Memory", "Diaspora Imagination"];

export default function AboutAgesPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-16 pt-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#8b1e1e]">About</p>
      <h1 className="mt-3 text-4xl md:text-5xl">About Ages</h1>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-black/80">
        Ages is an evolving cultural platform dedicated to African diaspora storytelling across film,
        written work, and community dialogue. We support artists and thinkers exploring personal and
        collective histories through contemporary form.
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/80">
        Our programs foreground memory as a living archive and treat storytelling as a space for
        reimagining home, language, and future belonging.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {themes.map((theme) => (
          <span
            key={theme}
            className="rounded-full border border-black/20 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.16em]"
          >
            {theme}
          </span>
        ))}
      </div>
    </section>
  );
}
