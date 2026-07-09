import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTABand from "@/components/CTABand";
import { differentiators } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mtech Cube is a technology partner built for companies that treat reliability as a requirement, not a nice-to-have.",
};

const team = [
  { initials: "MI", name: "Misbah Aslam", role: "Senior Business Consultant", focus: "Client strategy & growth" },
  { initials: "MA", name: "Maryam A.", role: "Business Consultant", focus: "Client strategy & solutions" },
  { initials: "RI", name: "Rizwan A.", role: "Project Manager", focus: "Delivery & project oversight" },
  { initials: "JA", name: "Jade", role: "Business Consultant", focus: "Client strategy & solutions" },
  { initials: "ZA", name: "Zayn", role: "Automation Engineer", focus: "Workflow & AI automation" },
  { initials: "TA", name: "Tasbeer", role: "Website Developer", focus: "Web development & builds" },
];

const values = [
  {
    title: "Say the hard thing early",
    description:
      "If a timeline is unrealistic or an idea won't scale, we say so in discovery — not three weeks before launch.",
  },
  {
    title: "Own the outcome, not just the ticket",
    description:
      "Every engineer on an engagement understands the business goal behind the work, not just the task in front of them.",
  },
  {
    title: "Document like someone else will maintain it",
    description:
      "Because eventually, someone else will. We build handoff documentation into the process, not as an afterthought.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line grid-fade py-24 lg:py-28">
        <div className="container-cube">
          <Eyebrow>About</Eyebrow>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tightest text-offwhite sm:text-5xl">
            We build technology that just keeps working.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400">
            Mtech Cube is a small team that designs, builds, and supports
            websites, apps, and digital systems for growing businesses. No
            jargon, no disappearing after launch — just software that holds
            up.
          </p>
        </div>
      </section>

      <section className="border-b border-line py-20 lg:py-24">
        <div className="container-cube grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <div className="space-y-5 text-sm leading-relaxed text-gray-400">
              <p>
                We started Mtech Cube after seeing the same thing happen
                again and again: a client gets a website or app built fast,
                it looks great at launch, and a year later nobody can touch
                it without breaking something. Speed had been winning over
                quality, and clients were the ones paying for it later.
              </p>
              <p>
                So we do it the other way around. Every project starts with
                real planning, is built by people who&apos;ve actually done
                this before, and comes with documentation clear enough that
                any other team could pick it up if they had to — not just
                us.
              </p>
              <p>
                That&apos;s still how we work today. It&apos;s not a line we
                use in pitches — it&apos;s just how every project actually
                gets run.
              </p>
            </div>
          </div>
          <div>
            <Eyebrow>How we operate</Eyebrow>
            <div className="space-y-8">
              {values.map((v) => (
                <div key={v.title} className="border-b border-line pb-8 last:border-b-0">
                  <h3 className="font-display text-lg font-semibold text-offwhite">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-b border-line py-20 lg:py-24">
        <div className="container-cube">
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="max-w-lg font-display text-3xl font-semibold leading-tight tracking-tight text-offwhite sm:text-4xl">
            The people behind the work.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
            A small, hands-on team — you&apos;ll work directly with the people
            listed here, not an account manager relaying messages back and
            forth.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.initials} className="rounded-2xl border border-line p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 font-mono text-sm text-gold">
                  {m.initials}
                </div>
                <p className="mt-5 font-display text-base font-semibold text-offwhite">
                  {m.name}
                </p>
                <p className="mt-1 text-sm text-gray-400">{m.role}</p>
                <p className="mt-2 text-sm text-gray-500">{m.focus}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY MTECH CUBE (reuse differentiators) */}
      <section className="border-b border-line py-20 lg:py-24">
        <div className="container-cube grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d) => (
            <div key={d.title}>
              <p className="font-mono text-xs uppercase tracking-wide text-gold">
                Commitment
              </p>
              <h3 className="mt-3 font-display text-base font-semibold text-offwhite">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Interested in working with us?"
        subtitle="We're currently taking on a limited number of new engagements each quarter."
      />
    </>
  );
}
