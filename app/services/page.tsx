import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web and app development, cloud infrastructure, AI automation, UI/UX design, and IT consulting — five disciplines, one accountable team.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line grid-fade py-24 lg:py-28">
        <div className="container-cube">
          <Eyebrow>Services</Eyebrow>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tightest text-offwhite sm:text-5xl">
            Five disciplines. One accountable team.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400">
            Every engagement is staffed by senior engineers and designers,
            scoped with fixed pricing, and backed by post-launch reliability
            commitments — not handed off and forgotten.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="container-cube grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
