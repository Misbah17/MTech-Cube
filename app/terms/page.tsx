import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <section className="py-24 lg:py-28">
      <div className="container-cube max-w-2xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display text-4xl font-semibold tracking-tightest text-offwhite">
          Terms of Service
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-400">
          <p>
            This is placeholder legal content. Replace this page with terms
            of service reviewed by qualified legal counsel before publishing
            this site live, covering engagement terms, liability, and
            intellectual property ownership for client work.
          </p>
          <p>Last updated: [Add date before publishing]</p>
        </div>
      </div>
    </section>
  );
}
