import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="border-t border-line bg-charcoal py-24 lg:py-32">
      <div className="container-cube grid grid-cols-1 gap-8 md:grid-cols-2">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-line p-8">
            <Quote className="h-6 w-6 text-gold" strokeWidth={1.5} />
            <p className="mt-6 font-display text-lg leading-relaxed text-offwhite">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 h-px w-10 bg-line" />
            <p className="mt-6 text-sm font-medium text-offwhite">{t.name}</p>
            <p className="text-sm text-gray-500">{t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
