import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import { Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Mtech Cube. Tell us what you're building — we respond within one business day.",
};

export default function ContactPage() {
  return (
    <section className="grid-fade py-24 lg:py-28">
      <div className="container-cube grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tightest text-offwhite sm:text-5xl">
            Let&apos;s talk about what you&apos;re building.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-400">
            Tell us about your project below, or reach out directly. We
            respond to every inquiry within one business day.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:misbah@mtechcube.com"
                  className="font-medium text-offwhite hover:text-gold"
                >
                  misbah@mtechcube.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-offwhite">+1 (415) 555-0182</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-gray-500">Response time</p>
                <p className="font-medium text-offwhite">Within 1 business day</p>
              </div>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-line bg-charcoal p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wide text-gray-500">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-line bg-black px-4 py-3 text-sm text-offwhite placeholder:text-gray-600 focus:border-gold/50 focus:outline-none"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wide text-gray-500">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-line bg-black px-4 py-3 text-sm text-offwhite placeholder:text-gray-600 focus:border-gold/50 focus:outline-none"
                placeholder="jane@company.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="projectType" className="mb-2 block text-xs uppercase tracking-wide text-gray-500">
              Project type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full rounded-lg border border-line bg-black px-4 py-3 text-sm text-offwhite focus:border-gold/50 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Web &amp; App Development</option>
              <option>Cloud &amp; Infrastructure</option>
              <option>AI &amp; Automation Solutions</option>
              <option>UI/UX Design</option>
              <option>IT Consulting &amp; Strategy</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="mt-6">
            <label htmlFor="budget" className="mb-2 block text-xs uppercase tracking-wide text-gray-500">
              Estimated budget
            </label>
            <select
              id="budget"
              name="budget"
              className="w-full rounded-lg border border-line bg-black px-4 py-3 text-sm text-offwhite focus:border-gold/50 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select a range
              </option>
              <option>Under $25,000</option>
              <option>$25,000 – $75,000</option>
              <option>$75,000 – $150,000</option>
              <option>$150,000+</option>
            </select>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wide text-gray-500">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-none rounded-lg border border-line bg-black px-4 py-3 text-sm text-offwhite placeholder:text-gray-600 focus:border-gold/50 focus:outline-none"
              placeholder="Tell us what you're building and what problem you're solving for..."
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-black transition-all hover:bg-gold-light"
          >
            Send Inquiry
          </button>
          <p className="mt-4 text-center text-xs text-gray-600">
            We respond within one business day. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}
