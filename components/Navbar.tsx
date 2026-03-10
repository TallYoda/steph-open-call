"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content/siteContent";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-black/15 bg-[#f7f2e8]/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4"
      >
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Diaspora Open Call
        </Link>

        <ul className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-wide">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`border-b pb-0.5 transition ${
                  isActive(link.href)
                    ? "border-black font-semibold text-black"
                    : "border-transparent text-black/80 hover:border-black hover:text-black"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
