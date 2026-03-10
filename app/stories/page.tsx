import type { Metadata } from "next";
import StoryGrid from "@/components/StoryGrid";

export const metadata: Metadata = {
  title: "Stories | Diaspora Open Call",
  description: "Written works and story previews from African diaspora voices.",
};

export default function StoriesPage() {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-6xl px-5 pb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8b1e1e]">Written Work</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Stories</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/75">
          A curated selection of essays, fiction, and poetic writing that traces identity, migration,
          belonging, and intergenerational memory.
        </p>
      </div>
      <StoryGrid />
    </section>
  );
}
