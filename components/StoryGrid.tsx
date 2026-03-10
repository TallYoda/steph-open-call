import Image from "next/image";
import Reveal from "@/components/Reveal";
import { storyItems } from "@/content/siteContent";

export default function StoryGrid() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:grid-cols-2">
      {storyItems.map((story, index) => (
        <Reveal key={story.title} delayMs={index * 90}>
          <article className="card-hover overflow-hidden rounded-xl border border-black/15 bg-white/60">
            <div className="overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                width={900}
                height={560}
                className="h-56 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-2xl">{story.title}</h3>
              <p className="text-sm leading-relaxed text-black/75">{story.excerpt}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8b1e1e]">
                {story.author}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}
