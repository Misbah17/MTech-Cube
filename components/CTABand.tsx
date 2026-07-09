import Button from "@/components/ui/Button";

export default function CTABand({
  title = "Have a project that can't afford to go wrong?",
  subtitle = "Tell us what you're building. We'll respond within one business day with next steps.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="container-cube flex flex-col items-center rounded-3xl border border-line bg-charcoal px-6 py-16 text-center sm:px-16">
        <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-offwhite sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Start a Project
          </Button>
          <Button href="/work" variant="outline">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
