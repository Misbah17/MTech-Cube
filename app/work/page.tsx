import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Mtech Cube's engagements across fintech, logistics, and healthcare — outcomes, not just deliverables.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-line grid-fade py-24 lg:py-28">
        <div className="container-cube">
          <Eyebrow>Work</Eyebrow>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tightest text-offwhite sm:text-5xl">
            Outcomes, not just deliverables.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400">
            Every engagement is measured against a defined success metric —
            here&apos;s what that looked like for a few of our clients.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="container-cube grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
