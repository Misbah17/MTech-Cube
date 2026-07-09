import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import CTABand from "@/components/CTABand";
import CaseStudyCard from "@/components/CaseStudyCard";
import ServiceVisual from "@/components/ServiceVisual";
import { services, caseStudies } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = caseStudies.filter((c) => c.serviceSlug === service.slug);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-line grid-fade py-24 lg:py-28">
        <div className="container-cube">
          <nav className="mb-8 flex items-center gap-2 text-xs text-gray-600">
            <Link href="/services" className="hover:text-gold">
              Services
            </Link>
            <span>/</span>
            <span className="text-gray-400">{service.name}</span>
          </nav>
          <Eyebrow>Service</Eyebrow>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tightest text-offwhite sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400">
            {service.shortDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {service.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-gray-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-56 overflow-hidden border-b border-line bg-charcoal sm:h-72">
        <ServiceVisual slug={service.slug} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </section>

      {/* PROBLEM */}
      <section className="border-b border-line py-20 lg:py-24">
        <div className="container-cube grid grid-cols-1 gap-10 lg:grid-cols-3">
          <Eyebrow>The problem</Eyebrow>
          <p className="lg:col-span-2 font-display text-2xl font-medium leading-snug text-offwhite sm:text-3xl">
            {service.problem}
          </p>
        </div>
      </section>


      {/* APPROACH */}
      <section className="border-b border-line py-20 lg:py-24">
        <div className="container-cube">
          <Eyebrow>Our approach</Eyebrow>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {service.approach.map((step, i) => (
              <div key={i} className="bg-black p-7">
                <p className="font-mono text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-b border-line py-20 lg:py-24">
        <div className="container-cube grid grid-cols-1 gap-10 lg:grid-cols-3">
          <Eyebrow>What you get</Eyebrow>
          <ul className="lg:col-span-2 space-y-4">
            {service.deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 border-b border-line pb-4 text-sm leading-relaxed text-gray-300 last:border-b-0"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-gold" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RELATED CASE STUDY */}
      {related.length > 0 && (
        <section className="border-b border-line py-20 lg:py-24">
          <div className="container-cube">
            <Eyebrow>Related work</Eyebrow>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {related.map((c) => (
                <CaseStudyCard key={c.slug} study={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-b border-line py-20 lg:py-24">
        <div className="container-cube grid grid-cols-1 gap-10 lg:grid-cols-3">
          <Eyebrow>Frequently asked</Eyebrow>
          <div className="lg:col-span-2 space-y-8">
            {service.faqs.map((f) => (
              <div key={f.q} className="border-b border-line pb-8 last:border-b-0">
                <p className="font-display text-lg font-medium text-offwhite">
                  {f.q}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-20 lg:py-24">
        <div className="container-cube">
          <Eyebrow>Explore other services</Eyebrow>
          <div className="mt-8 flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm text-gray-300 transition-colors hover:border-gold/40 hover:text-gold"
              >
                {s.name}
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={`Ready to talk about ${service.name.toLowerCase()}?`}
        subtitle="Tell us about your project. We'll respond within one business day."
      />
    </>
  );
}
