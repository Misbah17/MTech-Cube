import { process } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ProcessSection() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="container-cube">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-offwhite sm:text-4xl">
          A structured process, from first conversation to production.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <div
              key={p.step}
              className={`border-line py-8 pr-6 sm:py-0 sm:pl-8 sm:pr-6 ${
                i !== 0 ? "border-t sm:border-l sm:border-t-0" : ""
              }`}
            >
              <p className="font-mono text-sm text-gold">{p.step}</p>
              <h3 className="mt-4 font-display text-lg font-semibold text-offwhite">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
