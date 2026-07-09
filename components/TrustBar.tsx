import { clientWordmarks } from "@/lib/data";

export default function TrustBar() {
  return (
    <div className="hairline border-b border-line py-10">
      <div className="container-cube">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-gray-600">
          Trusted across fintech, healthcare, logistics &amp; enterprise SaaS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {clientWordmarks.map((name) => (
            <span
              key={name}
              className="font-mono text-sm tracking-widest text-gray-600 transition-colors hover:text-gray-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
