import Link from "next/link";
import { CaseStudy } from "@/lib/data";
import IndustryVisual from "@/components/IndustryVisual";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-charcoal transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
    >
      <div className="relative h-40 overflow-hidden border-b border-line bg-black">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <IndustryVisual industry={study.industry} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-gold backdrop-blur-sm">
          {study.industry}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-8">
        <h3 className="font-display text-xl font-semibold leading-snug text-offwhite">
          {study.headline}
        </h3>
        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-4xl font-medium text-gold">{study.metric}</p>
            <p className="mt-1 text-xs text-gray-500">{study.metricLabel}</p>
          </div>
          <p className="text-xs uppercase tracking-wide text-gray-600">{study.client}</p>
        </div>
      </div>
    </Link>
  );
}
