import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/lib/data";
import ServiceVisual from "@/components/ServiceVisual";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-charcoal transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
    >
      <div className="relative h-32 overflow-hidden border-b border-line bg-black">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <ServiceVisual slug={service.slug} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col justify-between p-7">
        <div>
          <h3 className="font-display text-lg font-semibold text-offwhite">
            {service.name}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
            {service.shortDescription}
          </p>
        </div>
        <div className="mt-8 flex items-center gap-1.5 text-sm font-medium text-gray-400 group-hover:text-gold">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
        </div>
      </div>
    </Link>
  );
}
