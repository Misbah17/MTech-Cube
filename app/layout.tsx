import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mtech Cube — Digital Engineering for Companies That Can't Afford Downtime",
    template: "%s — Mtech Cube",
  },
  description:
    "Mtech Cube designs, builds, and scales the software, cloud infrastructure, and AI-driven products ambitious companies run on.",
  metadataBase: new URL("https://mtechcube.com"),
  openGraph: {
    title: "Mtech Cube — Digital Engineering",
    description:
      "Software, cloud infrastructure, and AI-driven products engineered for reliability at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
