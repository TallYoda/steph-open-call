import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submission Criteria | Diaspora Open Call",
  description: "Eligibility and format guidelines for film and written work submissions.",
};

export default function SubmissionCriteriaPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#8b1e1e]">Open Call</p>
      <h1 className="mt-3 text-4xl md:text-5xl">Submission Criteria</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/75">
        We welcome submissions that engage identity, migration, belonging, cultural memory, and diaspora imagination.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article id="film-submissions" className="rounded-xl border border-black/15 bg-white/70 p-6">
          <h2 className="text-3xl">Film Submissions</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-black/80">
            <li>
              <strong>Eligibility:</strong> African citizens in diaspora and collaborators working with diaspora communities.
            </li>
            <li>
              <strong>Format:</strong> MP4 or MOV, 1080p preferred.
            </li>
            <li>
              <strong>Length:</strong> 3 to 35 minutes.
            </li>
            <li>
              <strong>Language:</strong> Any language with English subtitles.
            </li>
            <li>
              <strong>Deadlines:</strong> Early deadline May 15, final deadline July 15.
            </li>
          </ul>
        </article>

        <article id="written-submissions" className="rounded-xl border border-black/15 bg-white/70 p-6">
          <h2 className="text-3xl">Written Work Submissions</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-black/80">
            <li>
              <strong>Eligibility:</strong> Emerging and established writers identifying with African diaspora communities.
            </li>
            <li>
              <strong>Format:</strong> PDF or DOCX, include title and author bio.
            </li>
            <li>
              <strong>Length:</strong> Up to 3,000 words for prose, 5 pages for poetry.
            </li>
            <li>
              <strong>Language:</strong> English or bilingual work with translated excerpts.
            </li>
            <li>
              <strong>Deadlines:</strong> Early deadline May 15, final deadline July 15.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
