import Cube from "@/components/Cube";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTABand from "@/components/CTABand";
import { services, caseStudies, differentiators } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative z-0 isolate overflow-hidden border-b border-line grid-fade">
        <div className="container-cube relative z-0 grid grid-cols-1 items-center gap-16 py-24 lg:grid-cols-2 lg:py-32">
          <div className="relative z-10 animate-fade-up">
            <Eyebrow>Mtech Cube</Eyebrow>
            <h1 className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tightest text-offwhite sm:text-6xl lg:text-[3.75rem]">
              We build websites, apps, and systems that don&apos;t break
              when you need them most.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
              From websites to cloud infrastructure to AI-powered tools, we
              handle the technical side so you can focus on running your
              business — and we stick around after launch to keep it
              running.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Start a Project
              </Button>
              <Button href="/work" variant="outline">
                View Our Work
              </Button>
            </div>
          </div>

          <div className="relative isolate z-0 hidden justify-self-center lg:block">
            <Cube size={300} />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES OVERVIEW */}
      <section className="border-b border-line py-24 lg:py-32">
        <div className="container-cube">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="max-w-lg font-display text-3xl font-semibold leading-tight tracking-tight text-offwhite sm:text-4xl">
                Five disciplines. One accountable team.
              </h2>
            </div>
            <Button href="/services" variant="ghost" showArrow>
              View all services
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="border-b border-line py-24 lg:py-32">
        <div className="container-cube">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Featured work</Eyebrow>
              <h2 className="max-w-lg font-display text-3xl font-semibold leading-tight tracking-tight text-offwhite sm:text-4xl">
                Outcomes, not just deliverables.
              </h2>
            </div>
            <Button href="/work" variant="ghost" showArrow>
              View all case studies
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {caseStudies.map((c) => (
              <CaseStudyCard key={c.slug} study={c} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* WHY MTECH CUBE */}
      <section className="border-t border-line py-24 lg:py-32">
        <div className="container-cube grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Why Mtech Cube</Eyebrow>
            <h2 className="max-w-md font-display text-3xl font-semibold leading-tight tracking-tight text-offwhite sm:text-4xl">
              Reliability isn&apos;t an add-on. It&apos;s the whole job.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-500">
              A lot of agencies focus on getting your project out the door.
              We think about what happens a year later, when it&apos;s
              getting real traffic and actually needs to hold up.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.title}>
                <CheckCircle2 className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-base font-semibold text-offwhite">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
      <CTABand />
    </>
  );
}
