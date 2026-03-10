import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-5 pb-16">
      <div className="mx-auto max-w-6xl rounded-xl border border-black bg-black px-6 py-10 text-[#f7f2e8] md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#f5a55a]">Open Call</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Share your Story</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/submission-criteria#film-submissions"
            className="rounded-full bg-[#b7410e] px-6 py-3 text-sm font-medium uppercase tracking-wide transition hover:bg-[#9e390d]"
          >
            Submit Film
          </Link>
          <Link
            href="/submission-criteria#written-submissions"
            className="rounded-full border border-[#f7f2e8]/65 px-6 py-3 text-sm font-medium uppercase tracking-wide transition hover:bg-[#f7f2e8] hover:text-black"
          >
            Submit Written Word
          </Link>
        </div>
      </div>
    </section>
  );
}
