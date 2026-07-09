import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import CTABand from "@/components/CTABand";
import IndustryVisual from "@/components/IndustryVisual";
import { caseStudies, services } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) return {};
  return { title: study.headline, description: study.challenge };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) notFound();

  const service = services.find((s) => s.slug === study.serviceSlug);

  return (
    <>
      <section className="border-b border-line grid-fade py-24 lg:py-28">
        <div className="container-cube">
          <nav className="mb-8 flex items-center gap-2 text-xs text-gray-600">
            <Link href="/work" className="hover:text-gold">
              Work
            </Link>
            <span>/</span>
            <span className="text-gray-400">{study.client}</span>
          </nav>
          <Eyebrow>{study.industry}</Eyebrow>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tightest text-offwhite sm:text-5xl">
            {study.headline}
          </h1>
          <div className="mt-10 flex flex-wrap items-end gap-12">
            <div>
              <p className="font-mono text-5xl font-medium text-gold">
                {study.metric}
              </p>
              <p className="mt-2 text-sm text-gray-500">{study.metricLabel}</p>
            </div>
            <div className="h-12 w-px bg-line" />
            <div>
              <p className="text-sm text-gray-500">Client</p>
              <p className="mt-1 font-medium text-offwhite">{study.client}</p>
            </div>
            {service && (
              <div>
                <p className="text-sm text-gray-500">Service</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-1 block font-medium text-gold hover:text-gold-light"
                >
                  {service.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative h-56 overflow-hidden border-b border-line bg-charcoal sm:h-72">
        <IndustryVisual industry={study.industry} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </section>

      <section className="border-b border-line py-20 lg:py-24">
        <div className="container-cube grid grid-cols-1 gap-14 lg:grid-cols-3">
          <div>
            <Eyebrow>Challenge</Eyebrow>
            <p className="text-sm leading-relaxed text-gray-400">
              {study.challenge}
            </p>
          </div>
          <div>
            <Eyebrow>Solution</Eyebrow>
            <p className="text-sm leading-relaxed text-gray-400">
              {study.solution}
            </p>
          </div>
          <div>
            <Eyebrow>Result</Eyebrow>
            <p className="text-sm leading-relaxed text-gray-400">
              {study.result}
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Want an outcome like this for your platform?"
        subtitle="Tell us about your project. We'll respond within one business day."
      />
    </>
  );
}
