import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="fade-in px-5 pb-16 pt-10">
      <div className="grain-overlay relative mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-black/20 bg-black text-[#f7f2e8] md:grid-cols-[1.2fr_1fr]">
        <Image
          src="/hero.jpg"
          alt="Documentary style portrait representing African diaspora storytelling"
          width={1600}
          height={1000}
          className="h-[420px] w-full object-cover opacity-65 md:h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25 md:hidden" />
        <div className="relative z-10 flex flex-col justify-center gap-5 p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#f5a55a]">
            Open Call 2026
          </p>
          <h1 className="text-4xl leading-tight md:text-6xl">Share your Story</h1>
          <p className="max-w-md text-base text-[#f7f2e8]/90 md:text-lg">
            Are you an African citizen who identifies as diaspora?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/submission-criteria#film-submissions"
              className="rounded-full bg-[#b7410e] px-6 py-3 text-sm font-medium uppercase tracking-wide transition hover:bg-[#9e390d]"
            >
              Film
            </Link>
            <Link
              href="/submission-criteria#written-submissions"
              className="rounded-full border border-[#f7f2e8]/65 px-6 py-3 text-sm font-medium uppercase tracking-wide transition hover:bg-[#f7f2e8] hover:text-black"
            >
              Written Word
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
