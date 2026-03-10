import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/15 bg-[#111111] text-[#f7f2e8]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#f5a55a]">Share your Story</p>
          <p className="mt-3 max-w-sm text-sm text-[#f7f2e8]/80">
            A platform for film, written work, and dialogue rooted in African diaspora imagination.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[#f7f2e8]/70">Learn</p>
          <Link href="/submission-criteria" className="block hover:text-[#f5a55a]">
            Submission Criteria
          </Link>
          <Link href="/panelist-application" className="block hover:text-[#f5a55a]">
            Apply to be a Panelist
          </Link>
          <Link href="/about-ages" className="block hover:text-[#f5a55a]">
            About Ages
          </Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[#f7f2e8]/70">Contact & Partners</p>
          <a href="mailto:hello@diasporafestival.org" className="block hover:text-[#f5a55a]">
            hello@diasporafestival.org
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block hover:text-[#f5a55a]">
            Instagram
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="block hover:text-[#f5a55a]">
            X / Twitter
          </a>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-4 text-center text-xs uppercase tracking-[0.2em] text-[#f7f2e8]/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-5">
          <Link href="/submission-criteria" className="hover:text-[#f5a55a]">
            Share your Story
          </Link>
          <a href="mailto:hello@diasporafestival.org" className="hover:text-[#f5a55a]">
            Contact
          </a>
          <a href="#" className="hover:text-[#f5a55a]">
            Partners
          </a>
          <Link href="/about-ages" className="hover:text-[#f5a55a]">
            Learn
          </Link>
        </div>
      </div>
    </footer>
  );
}
