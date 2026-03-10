import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { conversationItems } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Conversations | Diaspora Open Call",
  description: "Interviews, panels, and dialogues around diaspora storytelling.",
};

export default function ConversationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#8b1e1e]">Editorial Dialogues</p>
      <h1 className="mt-3 text-4xl md:text-5xl">Conversations</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/75">
        Interviews, panels, and reflective essays engaging diaspora identity, migration, and cultural memory.
      </p>

      <div className="mt-10 space-y-5">
        {conversationItems.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 90}>
            <article className="card-hover rounded-xl border border-black/15 bg-white/70 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[#b7410e]">{item.type}</p>
              <h2 className="mt-2 text-3xl">{item.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/75">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
