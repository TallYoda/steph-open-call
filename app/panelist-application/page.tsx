import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panelist Application | Diaspora Open Call",
  description: "Apply to join panel conversations for the diaspora festival.",
};

export default function PanelistApplicationPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-16 pt-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#8b1e1e]">Application</p>
      <h1 className="mt-3 text-4xl md:text-5xl">Apply to be a Panelist</h1>
      <p className="mt-4 text-sm leading-relaxed text-black/75">
        Share your expertise in film, writing, cultural practice, or community storytelling.
      </p>

      <form className="mt-8 space-y-5 rounded-xl border border-black/15 bg-white/70 p-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-md border border-black/20 bg-white px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-md border border-black/20 bg-white px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="expertise" className="mb-1 block text-sm font-medium">
            Area of expertise
          </label>
          <input
            id="expertise"
            name="expertise"
            type="text"
            className="w-full rounded-md border border-black/20 bg-white px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="bio" className="mb-1 block text-sm font-medium">
            Short bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={5}
            className="w-full rounded-md border border-black/20 bg-white px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="work-link" className="mb-1 block text-sm font-medium">
            Link to work
          </label>
          <input
            id="work-link"
            name="work-link"
            type="url"
            className="w-full rounded-md border border-black/20 bg-white px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-black px-6 py-3 text-sm uppercase tracking-wide text-[#f7f2e8] transition hover:bg-[#8b1e1e]"
        >
          Submit Application
        </button>
      </form>
    </section>
  );
}
