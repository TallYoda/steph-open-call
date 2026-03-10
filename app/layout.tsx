import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@/styles/theme.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "African Diaspora Film & Written Work Festival",
  description:
    "A contemporary open-call platform for African diaspora stories, films, and conversations.",
  metadataBase: new URL("https://example.vercel.app"),
  openGraph: {
    title: "African Diaspora Film & Written Work Festival",
    description:
      "Submit film and written work exploring identity, migration, belonging, and cultural memory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        <main className="page-enter min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
