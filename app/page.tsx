import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { festivalAnnouncement, homeFeatures } from "@/content/siteContent";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="px-5 pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl md:text-4xl">Editorial Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {homeFeatures.map((feature, index) => (
              <Reveal key={feature.title} delayMs={index * 90}>
                <Link
                  href={feature.href}
                  className="card-hover group block overflow-hidden rounded-xl border border-black/15 bg-white/70"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={1200}
                      height={800}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 p-5">
                    <h3 className="text-2xl">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-black/75">{feature.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <Reveal>
          <div className="grain-overlay mx-auto max-w-6xl overflow-hidden rounded-xl border border-black bg-[#8b1e1e] text-[#f7f2e8]">
            <div className="grid items-center gap-8 px-6 py-10 md:grid-cols-[1.5fr_1fr] md:px-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5a55a]">Festival Announcement</p>
                <h2 className="mt-3 text-4xl leading-tight md:text-6xl">{festivalAnnouncement.title}</h2>
                <p className="mt-4 text-lg">{festivalAnnouncement.date}</p>
              </div>
              <p className="text-sm leading-relaxed text-[#f7f2e8]/90">{festivalAnnouncement.description}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
